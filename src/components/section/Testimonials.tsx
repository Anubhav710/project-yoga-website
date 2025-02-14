"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import { ashtanga } from "@/app/fonts";

import Arrow from "../ui/Arrow";
import { useAnimateTextFromRightToLeft } from "@/lib/utils";

interface SliderImage {
  id: number;
  review: string;
  image: string;
  name: string;
}

const sliderImage: SliderImage[] = [
  {
    id: 1,
    review:
      "Really enjoying my yoga journey with Preeti Ma'am and Anushka. They are really supportive and ensure that everyone feels comfortable in all yoga postures by giving alternate asana options and relax times between asanas.",
    image: "/images/h1-event-img-3.jpg",
    name: "John Doe",
  },
  {
    id: 2,
    review:
      "Yoga has transformed my life, providing me with the tools to manage stress and find inner peace.",
    image: "/images/h1-event-img-3.jpg",
    name: "Jane Smith",
  },
  {
    id: 3,
    review:
      "Practicing yoga has been a game changer for my mental and physical health. I feel stronger and more balanced.",
    image: "/images/h1-event-img-3.jpg",
    name: "Alice Johnson",
  },
  {
    id: 4,
    review:
      "The yoga classes have helped me connect with my body and mind in ways I never thought possible.",
    image: "/images/h1-event-img-4.jpg",
    name: "Bob Brown",
  },
  {
    id: 5,
    review:
      "Through yoga, I've learned to embrace challenges and find calm in the chaos of life.",
    image: "/images/retreat-video-img-1.jpg",
    name: "Emily Davis",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sliderRef.current && sliderRef.current.children) {
        gsap.fromTo(
          sliderRef.current.children,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
        );
      }
    }, sliderRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImage.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImage.length - 1 : prevIndex - 1
    );
  };

  // Ensure currentIndex is within bounds
  const currentSlide = sliderImage[currentIndex] || {
    id: 0,
    review: "No review available",
    image: "/images/default-image.png", // Placeholder image
    name: "Unknown",
  };

  useAnimateTextFromRightToLeft(
    "#testimonials-heading-cnt",
    "#textimonials-heading"
  );

  return (
    <section
      id="testimonials-section"
      className="common-padding common-padding-bottom "
    >
      <div className="max-w-screen-xl   mx-auto    ">
        <div id="testimonials-heading-cnt">
          <h1
            id="textimonials-heading"
            className={`heading ${ashtanga.className} pb-10 uppercase text-dark-green relative w-max left-[100%]`}
          >
            Testimonials
          </h1>
        </div>
        <div className="flex h-full">
          <div className="flex-1 h-full flex items-center justify-center  my-auto">
            <div
              className="w-max rotate-180 cursor-pointer  "
              onClick={handlePrev}
            >
              <Arrow />
            </div>
          </div>
          {/* main element section  */}
          <div className="flex-[15] flex  items-center h-full ">
            <div className="space-y-5 flex  w-full" ref={sliderRef}>
              <div
                key={currentSlide.id}
                className="w-full flex flex-col items-center    "
              >
                <h1 className="testimonials-heding w-[70%] mx-auto text-center font-bold text-dark-green">
                  {currentSlide.review}
                </h1>
                <div className="mt-5 ">
                  <div className="relative  md:h-16 mb-2 md:w-16 w-8 h-8 mx-auto overflow-hidden rounded-full">
                    <Image src={currentSlide.image} alt="image" fill />
                  </div>
                  <small className="text-center">{currentSlide.name}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-center  p-1 my-auto">
            <div className="cursor-pointer " onClick={handleNext}>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
