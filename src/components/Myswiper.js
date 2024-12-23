import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

export default function Myswiper({ children, datakey, viewslides, pagination, autoplay, nav, spacebtw = 0 }) {

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={spacebtw}
      slidesPerView={viewslides}
      navigation={nav}
      loop={true}
      draggable={true}
      autoplay={autoplay}
      pagination={pagination}
    >
      {datakey.map((item, index) => (
        <SwiperSlide key={index}>
          {children(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
