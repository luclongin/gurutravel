import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const HomeCarousel = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{props.review1}</SwiperSlide>
        <SwiperSlide>{props.review2}</SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeCarousel;