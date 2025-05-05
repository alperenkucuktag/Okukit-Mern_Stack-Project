const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`SERVER ${port} ÇALIŞIYOR`);
});

//mongo db ile bağlantı kurulumu

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://adminAlp:tZlaDucozxKwEb2C@cluster0.jeuwt7m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection

    //Bookstore koleksiyonu oluşturma

    const bookCollection = client.db("BookInventory").collection("books");

    //Veritabanına bir kitap ekle: POST metodu

    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    //Veritabanından tüm kitapları al
    // app.get("/all-books", async (req, res) => {
    //   const books = bookCollection.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // });

    //Veritabanındaki kitapları güncelle:patch veya update method kullanılır
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id, "id alındı");
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      //güncelle

      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });
    //Veritabanındaki kitapları sil
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    //Veritabanındaki kitapları kategorilere göre  filtreleme
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.Category) {
        query = { Category: req.query.Category };
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    //Veritabanında sadece bir kitap alma

    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    }),
      await client.db("admin").command({ ping: 1 });
    console.log("MongoDb ile bağlantı kuruldu");
  } catch {
    // client.close bağlantısı kaldırıldı
    console.error("Hata: ", err);
  }
}
run().catch(console.dir);
