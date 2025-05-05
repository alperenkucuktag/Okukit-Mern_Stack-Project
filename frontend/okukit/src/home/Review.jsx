import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import profilePhoto from "../assets/profile.jpg";

// import "./styles.css";
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className=''>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
        Müşterilerimiz
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className='mySwiper mt-16'
        >
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg '>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-5'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur voluptates quia autem placeat eum odit vitae vel
                  adipisci labore numquam id atque fuga obcaecati error omnis,
                  repellendus deserunt debitis eligendi.
                </p>
                <div className='mt-12'>
                  <img
                    className='w-10 h-10 mb-4 rounded-full'
                    src={profilePhoto}
                    alt='Rounded avatar'
                  ></img>
                  <h5 className='text-lg font-medium'>Clara doe</h5>
                  <p className='text-base'>CEO,AMD Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg '>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-5'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur voluptates quia autem placeat eum odit vitae vel
                  adipisci labore numquam id atque fuga obcaecati error omnis,
                  repellendus deserunt debitis eligendi.
                </p>
                <div className='mt-12'>
                  <img
                    className='w-10 h-10 mb-4 rounded-full'
                    src={profilePhoto}
                    alt='Rounded avatar'
                  ></img>
                  <h5 className='text-lg font-medium'>Clara doe</h5>
                  <p className='text-base'>CEO,AMD Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg '>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-5'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur voluptates quia autem placeat eum odit vitae vel
                  adipisci labore numquam id atque fuga obcaecati error omnis,
                  repellendus deserunt debitis eligendi.
                </p>
                <div className='mt-12'>
                  <img
                    className='w-10 h-10 mb-4 rounded-full'
                    src={profilePhoto}
                    alt='Rounded avatar'
                  ></img>
                  <h5 className='text-lg font-medium'>Clara doe</h5>
                  <p className='text-base'>CEO,AMD Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg '>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-5'>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur voluptates quia autem placeat eum odit vitae vel
                  adipisci labore numquam id atque fuga obcaecati error omnis,
                  repellendus deserunt debitis eligendi.
                </p>
                <div className='mt-12'>
                  <img
                    className='w-10 h-10 mb-4 rounded-full'
                    src={profilePhoto}
                    alt='Rounded avatar'
                  ></img>
                  <h5 className='text-lg font-medium'>Clara doe</h5>
                  <p className='text-base'>CEO,AMD Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
