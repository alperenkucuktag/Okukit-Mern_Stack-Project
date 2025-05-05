import React from "react";
import "swiper/css";
import "./BannerCard.css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
