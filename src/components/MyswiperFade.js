import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';

export default function MyswiperFade({ children, datakey, viewslides, pagination, autoplay, nav, slidesCenter=false, spacebtw = 0, speed='' }) {

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      spaceBetween={spacebtw}
      slidesPerView={viewslides}
      navigation={nav}
      loop={true}
      draggable={true}
      autoplay={autoplay}
      pagination={pagination}
      centeredSlides={slidesCenter}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={speed}
    >
      {datakey.map((item, index) => (
        <SwiperSlide key={index}>
          {children(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
