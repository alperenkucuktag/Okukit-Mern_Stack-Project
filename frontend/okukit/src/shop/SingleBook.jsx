import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { bookTitle, ImageUrl, bookDescription } = useLoaderData();
  return (
    <div>
      <div className='mt-28 px-4 lg:px-24 flex items-center gap-3'>
        <img src={ImageUrl} alt='' className='h-96' />

        <div>
          <h2 className='mb-10 text-3xl'>{bookTitle}</h2>
          <p>{bookDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
