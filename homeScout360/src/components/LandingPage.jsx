// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";

export default function LandingPage() {
  return (
    <div className="mx-auto mt-[50px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFour />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
