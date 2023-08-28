import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// import './styles.css';

// import required modules
// import { Pagination } from "swiper/modules";
import Review from "./Review";

function ClientsReviews() {
  return (
    <div className="pt-4 mx-10 pb-2">
      <>
        <h1 className="text-red-600 text-4xl text-center font-bold pb-10 ">
          Clients Review
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          //   pagination={{
          //     clickable: true,
          //   }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Review />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          {/* <SwiperSlide>
            <Review />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Review />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Review />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <Review />
          </SwiperSlide> */}
        </Swiper>
      </>
      <div className="text-center">
        <a href="/submitreview">
          <button className="text-red-600 rounded-md p-3 font-bold mt-[100px] border-red-600 border-2 border-dotted">
            Submit a review
          </button>
        </a>
      </div>
    </div>
  );
}

export default ClientsReviews;
