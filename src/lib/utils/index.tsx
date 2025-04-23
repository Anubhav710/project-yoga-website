"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// GSAP Function

//Text Animation
gsap.registerPlugin(ScrollTrigger);
export const useAnimateTextFromRightToLeft = (
  trigger: string,
  target: string,
  left?: string,
  tLeft?: string
) => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 80%",
      end: "bottom center",
      animation: gsap.to(target, {
        left: left || 0,
        translateX: tLeft,
      }),
      scrub: 3,
    });
  }, []);
};
