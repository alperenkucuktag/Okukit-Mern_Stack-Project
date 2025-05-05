import React, { useEffect, useState } from "react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Kitaplar alınırken hata:", err));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-8'>
        Tüm Kitaplar Burda
      </h2>

      <div className='mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {books.map((book) => (
          <div
            key={book._id}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm'
          >
            <img
              className='rounded-t-lg w-full h-96 object-cover'
              src={book.ImageUrl}
              alt={book.bookTitle}
            />
            <div className='p-5 flex flex-col h-full'>
              <h5 className='mb-4 text-xl font-bold tracking-tight text-gray-900'>
                {book.bookTitle}
              </h5>
              <p className='mb-6 font-normal text-gray-700 dark:text-gray-400'>
                {book.bookDescription?.substring(0, 100)}...
              </p>
              <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300'>
                Satın Al
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
