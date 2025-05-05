🔧 Project Setup and Required Packages
I started the Node.js project using the npm init command.

I installed the following essential packages:

Express 🖥️: To create the HTTP server.

CORS 🌐: To establish a secure connection between the frontend and the backend.

MongoDB 🗄️: To connect with the MongoDB database.

Nodemon 🔄: To monitor code changes and automatically restart the server (development environment).

🌐 CORS Setup
Using the CORS package, I configured the server to prevent requests from different origins.

I included it as middleware with app.use(cors()).

🔌 Database Connection
I configured the connection URI for MongoDB in the .env file.

The database connection is established using mongoose.connect() or MongoClient.

🛠️ Express Server
I set up the server using express().

The server is configured to handle JSON data with app.use(express.json()).

I created the necessary route files.

📁 Project Structure
I organized the project into a clean and sustainable file structure with the following directories

🚀 Ease of Development with Nodemon
With Nodemon, I ensured the server automatically restarts after code changes.

📦 Important Packages for the Frontend
@tailwindcss/vite 🌈: To integrate Tailwind CSS with Vite for efficient styling.

Firebase 🔥: To handle authentication, database, and other Firebase services.

LocalForage 💾: To manage client-side storage asynchronously, such as saving data in the browser’s local storage.

Match-sorter 🔢: To sort arrays based on text matching, helping with filtering and sorting data.

React ⚛️: The core React library for building user interfaces.

React-Dom 🌍: A library for rendering React components in the DOM.

React-Icons 🖼️: A set of customizable icons for React applications.

React-Router-Dom 🚪: To handle routing in the React application.

Sort-by 🔀: A utility for sorting arrays of objects by multiple criteria.

Swiper 🔄: A powerful and customizable library for creating carousels and sliders.

TailwindCSS 🎨: A utility-first CSS framework to style applications efficiently.

🚀 How to Start the Project

1. Clone the Repository
   git clone <repository_url>

2. Install Dependencies
   npm install

3. Run the Development Server
   npm run dev

<img src="/Mygif.gif"/>
