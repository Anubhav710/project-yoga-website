"use client";
import { ashtanga } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Info = () => {
  const firstText = useRef<HTMLDivElement | null>(null);
  const secoundText = useRef<HTMLDivElement | null>(null);
  const thirdText = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#infoSection",
      start: "top bottom",
      end: "bottom top",

      animation: gsap.to(firstText.current, {
        left: "0%",
        duration: 1,
      }),
      scrub: 2,
    });
    ScrollTrigger.create({
      trigger: "#infoSection",
      start: "top 80%",
      end: "bottom 30%",

      animation: gsap.to(secoundText.current, {
        right: "-10%",
        duration: 0.2,
      }),
      scrub: 2,
    });
    ScrollTrigger.create({
      trigger: "#infoSection",
      start: "top bottom",
      end: "bottom top",

      animation: gsap.to(thirdText.current, {
        left: "0%",
        duration: 1,
      }),
      scrub: 2,
    });
    ScrollTrigger.create({
      trigger: "#infoSection",
      start: "top bottom",
      end: "bottom top",
    });
  }, []);

  return (
    <section
      id="infoSection"
      className={`${ashtanga.className} text-dark-green info-height desktop:h-[100vh] 99  overflow-hidden common-margin   w-full   `}
    >
      <div className="h-full w-full relative ">
        <h1
          ref={firstText}
          className="heading absolute uppercase right-0 left-full whitespace-nowrap "
        >
          ROOTS OF YOGA
        </h1>
        <h1
          ref={secoundText}
          className="heading uppercase absolute  md:top-[9rem] top-[4rem] right-[100%]  whitespace-nowrap"
        >
          BRANCHES OF WELLNESS
        </h1>
        <h1
          ref={thirdText}
          className="heading absolute uppercase md:top-[18rem] top-[8.5rem] left-full  whitespace-nowrap"
        >
          LEAVES OF SERENITY
        </h1>
      </div>
    </section>
  );
};

export default Info;
