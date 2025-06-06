import React from "react";
import { Link } from "react-router-dom";
import bookpic from "../assets/awardbooks.png";
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
        <div className='md:w-1/2'>
          <h2 className='text-emerald-300 text-4xl font-bold mb-6 leading-snug'>
            2024 National Book Awards for Fiction Shortlist
          </h2>
          <Link to='/shop' className=' block'>
            <button className='bg-violet-300 text-white font-semibold px-5 py-2 rounded hover:bg-violet-400 transition-all duration-300'>
              {" "}
              İndirim Kodu
            </button>
          </Link>
        </div>
        <div>
          <img src={bookpic} alt='' className='w-96' />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
