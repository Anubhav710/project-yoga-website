"use client";
import { ashtanga } from "@/app/fonts";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const CommonHero = ({
  text,
  children,
  className,
}: {
  text: string;
  children: React.ReactNode;
  className?: string;
}) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 319px) and (max-width: 768px)", () => {
      gsap.to("#common-heading-txt", {
        left: 120,
        opacity: 1,
        delay: 1,
        duration: 0.8,
      });
    });
    mm.add("(min-width: 768px)", () => {
      gsap.to("#common-heading-txt", {
        left: 50,
        opacity: 1,

        duration: 0.8,
      });
    });

    // gsap.to("#common-heading-txt", {
    //   left: 0,
    //   opacity: 1,
    //   delay: 1,
    //   duration: 0.8,
    // });
  }, []);
  return (
    <section id="common-heading">
      <div className="w-full ">
        <div className={`relative  w-full flex items-center  ${className}`}>
          <div className="w-full h-[70%]  relative">{children}</div>
          <div className="absolute -top-8">
            <h1
              id="common-heading-txt"
              className={`uppercase header-txt opacity-0 relative left-full top-[5.1rem] leading-[62px] ${ashtanga.className} text-dark-green`}
            >
              {text}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
