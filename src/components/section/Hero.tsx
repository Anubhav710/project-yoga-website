"use client";
import React from "react";
import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  useGSAP(() => {
  const mm = gsap.matchMedia();
    mm.add("(min-width: 319px) and (max-width: 768px)", () => {
      gsap.to("#hero-title", {
        left: 0,
        opacity: 1,
        delay: 1,
        duration: 0.8,
      });
      gsap.to("#hero-title-2", {
        left: 0,
        delay: 1.2,
        opacity: 1,
        duration: 0.8,
      });
    });
    mm.add("(min-width: 768px)", () => {
      gsap.to("#hero-title", {
        left: 0,
        opacity: 1,
        delay: 1,
        duration: 0.8,
      });
      gsap.to("#hero-title-2", {
        left: 0,
        delay: 1.2,
        opacity: 1,
        duration: 0.8,
      });
    });
  }, []);
  return (
    <section className="w-full  ">
      <div className="w-full  relative sm:pt-16  pb-[28rem]">
        <div
          className={`${ashtanga.className}  text-dark-green relative z-20 sm:text-left text-center`}
        >
          <h1
            id="hero-title"
            className="header-txt relative -left-56 opacity-0 leading-[0.9] uppercase sm:pl-3 md:pl-48     "
          >
            Yoga Studio by
          </h1>

          <h1
            id="hero-title-2"
            className="header-txt relative left-64 leading-[1.2] uppercase md:pl-24 sm:pl-6 opacity-0 "
          >
            Preeti & Anushka
          </h1>
        </div>
        <div className="absolute bottom-0 md:bottom-40 right-0 z-10 hero-image-size">
          <Image
            src={"/assets/images/home-1.png"}
            alt="hero"
            fill
            sizes="100%"
            className="object-cover h-full w-full object-center"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10  hidden md:block">
          <Image
            src={"/images/main-home-offset-img.png"}
            alt="hero"
            width={300}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
