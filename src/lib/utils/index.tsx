"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// GSAP Function

//Text Animation
gsap.registerPlugin(ScrollTrigger);
export const useAnimateTextFromRightToLeft = (
  trigger: string,
  target: string
) => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 90%",
      end: "bottom center",
      animation: gsap.to(target, {
        left: "50%",
        translateX: "-50%",
      }),
      scrub: 3,
    });
  }, []);
};
