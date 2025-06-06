"use client";
import { ashtanga } from "@/app/fonts";
import React from "react";

import Image from "next/image";
import { useAnimateTextFromRightToLeft } from "@/lib/utils";
import Slider2 from "./Slider2";

const CTA2 = () => {
  useAnimateTextFromRightToLeft("#cta2-main", "#cta2-heading", "50%", "-50%");
  return (
    <section className=" relative  padding-x">
      <div id="cta2-main" className="max-w-screen-lg mx-auto space-y-5">
        <h1
          id="cta2-heading"
          className={`heading relative z-[90]  w-max left-full text-dark-green ${ashtanga.className} uppercase`}
        >
          yoga at home
        </h1>
        <div className="flex flex-col items-center justify-between gap-5">
          <h5 className="cta-2-heading font-semibold text-dark-green">
            Collection of all classes for self-practice at home.
          </h5>
          <a
            href="/contact-us"
            className="bg-dark-green whitespace-nowrap text-white hover:bg-white hover:border hover:border-dark-green hover:text-dark-green duration-500 transition-all md:px-10 px-5 rounded-tl-[15px] rounded-br-[15px] py-3"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute -top-36 -left-4 hidden z-50 md:block">
        <Image
          src={"/assets/images/shapes/main-home-img-3.png"}
          alt="main-home-img-3.png"
          width={400}
          height={1000}
          className="relative"
        />
      </div>
      <div className="pt-12">
        <Slider2 />
      </div>
    </section>
  );
};

export default CTA2;
