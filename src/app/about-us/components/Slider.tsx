"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const images = ["/abouts-2.png", "/home-5.png", "/abouts-2.png"];

const Slider = () => {
  return (
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
      modules={[Autoplay]}
      className="h-[60vh] common-margin"
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
  );
};

export default Slider;
