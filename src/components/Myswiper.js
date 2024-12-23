import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Myswiper({ children, datakey, viewslides, pagination, autoplay, spacebtw = 0, nav = false }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <Swiper
      spaceBetween={spacebtw}
      slidesPerView={viewslides}
      navigation={nav ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
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
