import React from "react";
import Favbook from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-1'>
      <div className='md:w-1/2'>
        <img src={Favbook} className='rounded md:w-11/12' />
      </div>

      <div className=' md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug text-red-300'>
          En sevilen <span className='text-orange-300'>Kitaplar Burda !</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          cupiditate expedita quas suscipit enim inventore autem, vitae, ducimus
          explicabo temporibus qui doloribus corporis cum voluptates ut hic.
          Accusamus, recusandae vero.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-xl text-sky-300 font-bold'>800+</h3>
            <p className='text-base'>Kitap listesi</p>
          </div>
          <div>
            <h3 className='text-xl text-purple-300 font-bold'>500+</h3>
            <p className='text-base'>Kayıtlı Kullanıcı</p>
          </div>
          <div>
            <h3 className='text-xl text-indigo-300 font-bold'>1000+</h3>
            <p className='text-base'>PDF İndirmeler</p>
          </div>
        </div>
        <Link to='/shop' className='mt-12 block'>
          <button className='bg-violet-300 text-white font-semibold px-5 py-2 rounded hover:bg-violet-400 transition-all duration-300'>
            {" "}
            Daha Fazla Keşfet
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
