"use client";
import { ashtanga } from "@/app/fonts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FC } from "react";

const InfiniteTextScroll: FC = () => {
  useGSAP(() => {
    // Create seamless infinite scroll animation
    const texts = gsap.utils.toArray<HTMLElement>(".scroll-text");
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
      },
    });

    // Set initial positions
    gsap.set(texts[1], {
      xPercent: 100,
    });

    // Animate both texts simultaneously
    tl.to(texts, {
      xPercent: "-=100",
      duration: 10,
    });

    // Reset positions when timeline repeats
    tl.eventCallback("onRepeat", () => {
      gsap.set(texts, {
        xPercent: (i: number) => i * 100,
      });
    });
  }, []); // Empty dependency array for single initialization

  const text = (
    <>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        Healthy Habits{" "}
      </span>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        *{" "}
      </span>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        Clear Mind{" "}
      </span>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        *{" "}
      </span>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        Inner Wellness{" "}
      </span>
      <span className={`text-dark-green scroll-txt  ${ashtanga.className}`}>
        *{" "}
      </span>
    </>
  );

  return (
    <div className="relative overflow-hidden mb-32 common-margin">
      <div className="flex whitespace-nowrap">
        <div className="scroll-text">{text}</div>
        <div className="scroll-text absolute top-0">{text}</div>
      </div>
    </div>
  );
};

export default InfiniteTextScroll;
