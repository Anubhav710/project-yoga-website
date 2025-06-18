"use client";
import { ashtanga } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Banner = ({ title, src }: { title: string; src: string }) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 319px) and (max-width: 768px)", () => {
      gsap.to("#hero-heading", {
        left: 20,
        opacity: 1,
        delay: 1,
        duration: 0.8,
      });
    });
    mm.add("(min-width: 768px)", () => {
      gsap.to("#hero-heading", {
        left: 50,
        opacity: 1,

        duration: 0.8,
      });
    });
  }, []);
  return (
    <div className="relative w-full  md:pt-[4rem] lg:pt-[6.2rem] 2xl:pt-[9rem] pt-9">
      <div
        id="hero-heading"
        className="absolute top-0 z-20 w-max left-full opacity-0"
      >
        <h1
          id="common-heading-txt"
          className={`uppercase header-txt   ${ashtanga.className} text-dark-green`}
        >
          {title}
        </h1>
      </div>
      <div className="relative">
        <Image
          src={src}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full object-cover"
          style={{
            height: "clamp(150px, 50vw, 600px)",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
