"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Box = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#box-container",
      start: "top center",
      end: "bottom top",
      markers: true,
      animation: gsap.to("#box", {
        x: 300,
        duration: 1,
      }),
    });
  }, []);
  return (
    <section id="box-container" className="h-[100svh] bg-red-600 w-full">
      <div id="box" className="h-48 w-48 bg-red-500 "></div>
    </section>
  );
};

export default Box;
