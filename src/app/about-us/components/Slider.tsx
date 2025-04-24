"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const images = [
  "/assets/images/about/author-1.jpg",
  "/assets/images/about/author-3.jpg",
  "/assets/images/about/author-4.jpg",
  "/assets/images/about/author-5.jpg",
  "/assets/images/about/author-6.jpg",
  "/assets/images/about/author-7.jpg",
];

const Slider = () => {
  return (
    <div className="padding-x">
      <Swiper
        breakpoints={{
          310: {
            spaceBetween: 2,
            slidesPerView: 1,
          },
          1200: {
            spaceBetween: 22,
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-[60vh] "
      >
        <SwiperSlide className=" h-full w-full relative">
          <Image src={images[0]} alt="image" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full relative">
          <Image src={images[1]} alt="image" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full relative">
          <Image src={images[2]} alt="image" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide className=" h-full w-full relative">
          <Image src={images[1]} alt="image" fill className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
