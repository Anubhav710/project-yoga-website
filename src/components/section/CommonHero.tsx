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
        left: 10,
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
  }, []);

  return (
    <section id="common-heading">
      <div className="w-full relative">
        <div className="absolute z-30">
          <h1
            id="common-heading-txt"
            className={`uppercase header-txt opacity-0 relative left-full ${ashtanga.className} text-dark-green`}
          >
            {text}
          </h1>
        </div>
        <div className={`w-full flex items-center ${className}`}>
          <div className="w-full h-[100%] sm:h-[70%] relative">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
