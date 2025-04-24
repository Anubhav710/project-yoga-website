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
      <div id="cta-main" className={`relative z-40  `}>
        <h1
          id="cta-heading"
          className={`${ashtanga.className} heading relative left-full uppercase text-dark-green`}
        >
          Book A Class
        </h1>
      </div>
    </section>
  );
};

export default CTA;
