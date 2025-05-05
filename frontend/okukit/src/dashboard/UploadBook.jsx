import React, { useState } from "react";
import { data } from "react-router-dom";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Bilim Kurgu",
    "Horror",
    "Bibliographys",
    "AutoBiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangedselectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handlebooksubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const ImageUrl = form.ImageUrl.value;
    const Category = form.CategoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    console.log(bookTitle);

    const bookObj = {
      bookTitle,
      authorName,
      ImageUrl,
      Category,
      bookDescription,
      bookPdfUrl,
    };
    console.log(bookObj);
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Kitap başarıyla yüklendi");
        form.reset();
      });
  };
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold '>Kitap Yükle</h2>

      <form
        onSubmit={handlebooksubmit}
        className='flex lg:w-[800px] flex-col flex-wrap gap-4'
      >
        {/* ilk sütun */}
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className='mb-5'>
              <label
                htmlFor='bookTitle'
                value='Book Title'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Kitap Başlığı
              </label>
              <input
                type='text'
                id='bookTitle'
                name='bookTitle'
                className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
                placeholder='Kitap Adı'
                required
              />
            </div>
          </div>
          {/* yazar ismi */}
          <div className='lg:w-1/2'>
            <div className='mb-5'>
              <label
                htmlFor='authorName'
                value='Author Name'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Yazar ismi
              </label>
              <input
                type='text'
                id='authorName'
                name='authorName'
                className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
                placeholder='Yazar İsmi'
                required
              />
            </div>
          </div>
        </div>

        {/* ikinci sütun */}

        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className='mb-5'>
              <label
                htmlFor='ImageUrl'
                value='Book Image Url'
                className='block mb-2 text-sm font-medium text-gray-900 '
              >
                Kitap Kapağı Fotoğrafı Url
              </label>
              <input
                type='text'
                id='ImageUrl'
                name='ImageUrl'
                className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
                placeholder='Kitap Fotoğrafı'
                required
              />
            </div>
          </div>
          {/* kategori */}
          <div className='lg:w-1/2'>
            <div className='mb-5'>
              <label
                className='block mb-2 text-sm font-medium text-gray-900'
                htmlFor='inputState'
                value='Book Category'
              >
                Kategoriler
              </label>
              <select
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleChangedselectedValue}
                value={selectedBookCategory}
                id='inputState'
                name='CategoryName'
              >
                {bookCategories.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* kitap açıklaması */}
        <div className='mb-5'>
          <label
            htmlFor='bookDescription'
            value='Book Description'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Kitap Açıklaması
          </label>

          <textarea
            id='bookDescription'
            name='bookDescription'
            rows='4'
            class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Açıklama yaz...'
          ></textarea>
        </div>

        {/* Kitap pdf linki */}
        <div>
          <div className='mb-5'>
            <label
              htmlFor='bookPdfUrl'
              value='Book PDF URL'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Kitap PDP Url
            </label>
            <input
              type='text'
              id='bookPdfUrl'
              name='bookPdfUrl'
              className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'
              placeholder='Kitap PDF Url'
              required
            />
          </div>
        </div>
        <button
          type='submit'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Kitap Yükle
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
