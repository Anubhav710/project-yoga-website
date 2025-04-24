"use client";
import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const img = [
  "/assets/images/retreat/slider/1.jpg",
  "/assets/images/retreat/slider/2.jpg",
  "/assets/images/retreat/slider/3.jpg",
  "/assets/images/retreat/slider/4.jpg",
  "/assets/images/retreat/slider/5.jpg",
];

const About = () => {
  return (
    <section className="common-padding">
      <div className=" w-max mx-auto pb-10">
        <Image
          src={
            "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/testimonails-icon.svg"
          }
          alt="image"
          width={64}
          height={120}
        />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="md:text-2xl text-lg font-semibold leading-10 text-dark-green text-center mx-auto">
          Embark on a transformative journey with us, as we weave together yoga,
          nature, and community in the world&apos;s most breathtaking
          destinations. Through our carefully crafted retreats, discover the
          profound connection between body, mind, and spirit, and unlock a
          deeper sense of purpose, calm, and inner peace. And when you&apos;re
          not on your mat, indulge in local flavors, soak up the stunning
          scenery, and forge unforgettable bonds with like-minded yogis.
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto  mt-24">
        <Swiper
          breakpoints={{
            310: {
              spaceBetween: 2,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4,
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
          className="bg-red-300"
        >
          {img.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`pl-36 relative ${index % 2 === 0 ? "mt-32" : ""}`}
              >
                <ImageCard img={img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="relative aspect-[9/16] w-full">
          {/* <div className="absolute -left-[120px] sm:-left-[180px] top-1/2 -translate-y-1/2 -rotate-90">
            <h1
              className={`text-dark-green  font-bold retreatSliderHeading ${ashtanga.className}`}
            >
              Ambala Cant
            </h1>
          </div> */}
          <Image src={img} alt="images" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};
