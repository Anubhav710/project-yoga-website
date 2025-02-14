"use client";
import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
      <div className="max-w-screen-2xl mx-auto  h-auto common-margin ">
        <Swiper
          breakpoints={{
            310: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            1200: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className={`pl-36 relative ${index % 2 === 0 ? "mt-32" : ""}`}
              >
                <ImageCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;

const ImageCard = () => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="relative aspect-[9/16] w-full">
          <div className="absolute -left-[120px] sm:-left-[180px] top-1/2 -translate-y-1/2 -rotate-90">
            <h1
              className={`text-dark-green  font-bold retreatSliderHeading ${ashtanga.className}`}
            >
              Ambala Cant
            </h1>
          </div>
          <Image
            src={"/fimage_cleanup.png"}
            alt="images"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
