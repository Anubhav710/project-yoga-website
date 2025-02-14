"use client";
import React from "react";
import { ashtanga } from "@/app/fonts";

import { useAnimateTextFromRightToLeft } from "@/lib/utils";

const CTA = () => {
  useAnimateTextFromRightToLeft("#cta-main", "#cta-heading");
  return (
    <section
      id="cta-main-elemt"
      className="h-auto flex items-center relative common-padding"
    >
      <div
        id="cta-main"
        className={`max-w-screen-lg mx-auto space-y-5 relative z-40 `}
      >
        <h1
          id="cta-heading"
          className={`${ashtanga.className} heading relative whitespace-nowrap  left-full  uppercase text-dark-green`}
        >
          Book <br className="sm:hidden " /> A Class
        </h1>
        <div className="space-y-3 text-lg text-dark-green font-medium w-max">
          {/* <h6 className="md:text-center">00 123 456 7</h6>
          <h6 className="uppercase"> ashtanga@example.com</h6> */}
        </div>
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
