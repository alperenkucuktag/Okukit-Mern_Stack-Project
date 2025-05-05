import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-4'>
      <h2 className='text-5xl text-center font-bold text-indigo-500 my-5'>
        {headline}
      </h2>

      <div className='w-full overflow-hidden'>
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className='w-full h-full'
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className='flex flex-col'>
              <Link to={`/book/${book._id}`} className='block w-full'>
                <div className='relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300'>
                  <img
                    src={book.ImageUrl}
                    alt={book.bookTitle}
                    className='w-full h-full object-cover'
                  />

                  <div className='absolute top-2 right-2 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='text-white w-5 h-5' />
                  </div>
                </div>
                <div className='p-4 text-center'>
                  <h3 className='font-semibold text-lg text-gray-800 line-clamp-1'>
                    {book.bookTitle}
                  </h3>
                  <p className='text-sm text-gray-500 line-clamp-1'>
                    {book.authorName}
                  </p>
                  <p className='text-indigo-500 font-bold mt-1'>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
