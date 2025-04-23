"use client";
import React from "react";
import { ashtanga } from "@/app/fonts";

import { useAnimateTextFromRightToLeft } from "@/lib/utils";

const CTA = () => {
  useAnimateTextFromRightToLeft("#cta-main", "#cta-heading");
  return (
    <section
      id="cta-main-elemt"
      className=" max-w-screen-xl mx-auto relative  common-padding"
    >
      <div id="cta-main" className={`relative z-40 md:mt-32 max-md:mt-16`}>
        <h1
          id="cta-heading"
          className={`${ashtanga.className} heading relative whitespace-nowrap  left-full  uppercase text-dark-green`}
        >
          Book A Class
        </h1>
      </div>
      <div id="cta-img" className="absolute z-10 bottom-0 right-56">
        {/* <Image
          src={"/images/main-home-gallery-img-6.jpg"}
          alt="cta-image"
          width={500}
          height={700}
        /> */}
      </div>
    </section>
  );
};

export default CTA;
