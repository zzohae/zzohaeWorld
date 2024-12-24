import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

export default function Myswiper({ children, datakey, viewslides, pagination, autoplay, nav, slidesCenter=false, spacebtw = 0 }) {

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={spacebtw}
      slidesPerView={viewslides}
      navigation={nav}
      loop={true}
      draggable={true}
      autoplay={autoplay}
      pagination={pagination}
      centeredSlides={slidesCenter}
    >
      {datakey.map((item, index) => (
        <SwiperSlide key={index}>
          {children(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
