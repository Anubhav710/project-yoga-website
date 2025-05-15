"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ashtanga } from "@/app/fonts";
import { useAnimateTextFromRightToLeft } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "../ui/Arrow";

interface Testimonial {
  id: number;
  review: string;
  name: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    review:
      "I owe it to Preeti & Anushka for making me fall back in love with yoga and keeping me grounded and healthy during my two month stay in Delhi 💙 The community they have created is so wonderful and welcoming, and the atmosphere in their studio is just perfect.",
    name: "Anneke de Vries",
    role: "Local Guide",
  },
  {
    id: 2,
    review:
      "Practising yoga with them the first thing in the morning genuinely puts me in a good mood for the rest of the day. The ambiance is serene, the people exude warmth and our instructors are just the sweetest, most encouraging of them all!",
    name: "Anamaya Jamwal",
  },
  {
    id: 3,
    review:
      "Finding P.A.Yoga is like stumbling upon a hidden gem in a treasure chest - it's a precious discovery that's worth cherishing. Not only do I feel lucky to learn from two amazing teachers, but I also appreciate their unique approach to teaching.",
    name: "K N",
  },
  {
    id: 4,
    review:
      "I love the fact that the classes can be conducted at home. Always inspired by what Preeti and Anushka can do as yoga instructors! What really kept me going the extra effort taken by Anushka to help me attempt the headstand (Sirsasana).",
    name: "Sai Sharan",
    role: "Local Guide",
  },
  {
    id: 5,
    review:
      "This is easily one of the best yoga classes I have ever been to. I have been doing yoga for many years but could never do crow pose and headstand. Within a few weeks I was able to do those unassisted. Preeti and Anushka have a way of making everything possible.",
    name: "CK Vijayakumar",
  },
];

const Testimonials: React.FC = () => {
  useAnimateTextFromRightToLeft(
    "#testimonials-heading-cnt",
    "#textimonials-heading",
    "50%",
    "-50%"
  );

  return (
    <section id="testimonials-section" className="padding-x">
      <div className="max-w-screen-xl mx-auto">
        <div id="testimonials-heading-cnt">
          <h1
            id="textimonials-heading"
            className={`heading ${ashtanga.className} pb-10 uppercase text-dark-green relative w-max left-[100%]`}
          >
            Testimonials
          </h1>
        </div>

        <div className="relative">
          <div id="custom-btn-prev">
            <Arrow className="z-20  rotate-180 absolute top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: "#custom-btn-prev",
              nextEl: "#custom-btn-next",
            }}
            className="testimonials-swiper "
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className=" max-w-screen-md mx-auto  pt-8">
                  <h2 className="testimonials-heading  mx-auto text-center font-bold text-dark-green">
                    {testimonial.review}
                  </h2>
                  <div className="text-center mt-2">
                    <p className="font-semibold text-dark-green">
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="custom-btn-next">
            <Arrow className="z-20  cursor-pointer absolute top-1/2 -translate-y-1/2 right-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
