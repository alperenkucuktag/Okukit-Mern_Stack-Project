import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllbooks(data));
  }, []);

  //delete all book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        alert("Kitap Başarıyla  Silindi");
        // setAllbooks(data);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold '>Kitaplarımı Yönet</h2>
      {/* kitap veri tablosu */}

      <table class='lg:w-[840px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' class='px-6 py-3'>
              No
            </th>
            <th scope='col' class='px-6 py-3'>
              Kitap İsmi
            </th>
            <th scope='col' class='px-6 py-3'>
              Yazar Ad
            </th>
            <th scope='col' class='px-6 py-3'>
              Kategorİ
            </th>
            <th scope='col' class='px-6 py-3'>
              Fİyat
            </th>
            <th scope='col' className='px-4 py-3 text-sm  text-center '>
              DÜZENLE
            </th>
          </tr>
        </thead>
        {allBooks.map((book, index) => (
          <tbody className='divide-y' key={book._id}>
            <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {index + 1}
              </th>
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {book.bookTitle}
              </th>
              <td class='px-6 py-4'>{book.authorName}</td>
              <td class='px-6 py-4'>{book.Category}</td>
              <td class='px-6 py-4'>$20.00</td>
              <td class='px-6 py-4 flex items-center'>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  class='bg-indigo-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-indigo-300 mr-3'
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-400'
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageBooks;
