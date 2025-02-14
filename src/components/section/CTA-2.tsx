"use client";
import { ashtanga } from "@/app/fonts";
import React from "react";

import Image from "next/image";
import { useAnimateTextFromRightToLeft } from "@/lib/utils";
import Slider2 from "./Slider2";

const CTA2 = () => {
  useAnimateTextFromRightToLeft("#cta2-main", "#cta2-heading");
  return (
    <section className=" relative common-padding z-50 common-padding-bottom">
      <div id="cta2-main" className="max-w-screen-lg mx-auto space-y-5">
        <h1
          id="cta2-heading"
          className={`heading relative whitespace-nowrap left-[30rem] text-dark-green ${ashtanga.className} uppercase`}
        >
          yoga <br className="sm:hidden" /> at home
        </h1>
        <div className="flex flex-col items-center justify-between gap-5">
          <h5 className="cta-2-heading font-semibold text-dark-green">
            Collection of all classes for self-practice at home.
          </h5>
          <button className="bg-dark-green whitespace-nowrap text-white hover:bg-white hover:border hover:border-dark-green hover:text-dark-green duration-500 transition-all md:px-10 px-5 rounded-tl-[15px] rounded-br-[15px] py-3">
            Contact Us
          </button>
        </div>
      </div>
      <div className="absolute -top-36 -left-4 hidden z-50 md:block">
        <Image
          src={"/images/main-home-img-3.png"}
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
