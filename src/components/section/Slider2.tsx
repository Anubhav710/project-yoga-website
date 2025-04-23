"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const images = [
  "/assets/images/bottom-slider-gallery/1.png",
  "/assets/images/bottom-slider-gallery/2.png",
  "/assets/images/bottom-slider-gallery/3.png",
  "/assets/images/bottom-slider-gallery/4.png",
  "/assets/images/bottom-slider-gallery/5.png",
  "/assets/images/bottom-slider-gallery/6.png",
  "/assets/images/bottom-slider-gallery/7.png",
  "/assets/images/bottom-slider-gallery/8.png",
  "/assets/images/bottom-slider-gallery/9.png",
  "/assets/images/bottom-slider-gallery/10.png",
];

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
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="h-[40vh] common-margin "
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className=" h-full w-full relative">
          <Image
            src={image}
            alt="image-website"
            fill
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
