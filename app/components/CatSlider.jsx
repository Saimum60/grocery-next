
"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    image: "/cat1.png",
    title: "Fruits & Vegetables",
  },
  {
    image: "/cat2.png",
    title: "Meats & Seafood",
  },
  {
    image: "/cat3.png",
    title: "Breakfast & Dairy",
  },
  {
    image: "/cat4.png",
    title: "Breads & Bakery",
  },
  {
    image: "/cat5.png",
    title: "Beverages",
  },
  {
    image: "/cat6.png",
    title: "Frozen Foods",
  },
  {
    image: "/cat7.png",
    title: "Biscuits & Snacks",
  },
  {
    image: "/cat8.png",
    title: "Grocery & Staples",
  },
  {
    image: "/cat9.png",
    title: "Baby & Pregnancy",
  },
  {
    image: "/cat10.png",
    title: "Healthcare",
  },
];

const CatSlider = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link href="/" className="group block">
                <div className="bg-white p-3 h-[102px] w-full  rounded-md shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-[55px] h-[58px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h4 className="text-[15px] font-semibold text-center mt-3 text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h4>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
