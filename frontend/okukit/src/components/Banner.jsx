import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between  items-center gap-12 py-40 '>
        {/* left side */}
        <div className=' md:w-1/2 h-full space-y-8'>
          <h2 className='text-6xl font-bold leading-snug text-teal-300 '>
            Kitabını
            <span className='text-blue-400'> En iyi fiyatlarla</span>{" "}
            <span className='text-5xl text-sky-300'>Satışını yap</span>
          </h2>
          <p className='md:w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto
            error, quae voluptate corporis necessitatibus eveniet dolorum non
            iure nostrum consequuntur praesentium sed officiis cupiditate quis
            fugit doloremque! Voluptatum, enim.
          </p>
          <div>
            <input
              className=' bg-sky-200  text-sky-900  px-6 py-2 rounded-s-sm outline-none'
              type='search'
              name='search'
              id='search'
              placeholder='Ara'
            />
            <button className=' bg-sky-400 px-6 py-2 text-white font-medium hover:bg-sky-600 transition-all ease-in duration-200'>
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
