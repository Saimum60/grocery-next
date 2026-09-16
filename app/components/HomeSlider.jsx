"use client"

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation ,Autoplay } from 'swiper/modules'; 

const HomeSlider = () => {
  return (
    <div className='homeslider'>
       <div className='container'>
         <Swiper 
        navigation={true} 
        modules={[Navigation,Autoplay]}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
        }} 
        className="mySwiper">
        <SwiperSlide>
          <div className='item'>
            <Image src={'/homeslider.png'} alt='slider' width={1344} height={514} className='w-full'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='item'>
            <Image src={'/homeslider.png'} alt='slider' width={1344} height={514} className='w-full'/>
          </div>
        </SwiperSlide>
        
      </Swiper>
       </div>
    </div>
  )
}

export default HomeSlider