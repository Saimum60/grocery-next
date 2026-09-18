import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductItem from './ProductItem'

const ProductSlider = () => {
  return (
    <div className='productslidern py-5'>
        <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Pagination]}
        className='mySwiper'
      >
            <SwiperSlide>
                <ProductItem/>
                </SwiperSlide>
          
          </Swiper>
        
    </div>
  )
}

export default ProductSlider