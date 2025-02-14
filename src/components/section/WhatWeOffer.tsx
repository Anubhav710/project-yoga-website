"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ashtanga } from "@/app/fonts";
import Image from "next/image";

import { ScrollTrigger } from "gsap/all";
import { useAnimateTextFromRightToLeft } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

interface Tab {
  id: string;
  name: string;
}

interface Content {
  title: string;
  image: string;
  desc: string;
  benefit: string[];
}

gsap.registerPlugin(ScrollTrigger);

const WhatWeOffer: React.FC = () => {
  const tabs: Tab[] = [
    { id: "surya", name: "Surya Namaskar" },
    { id: "hatha", name: "Hatha Yoga" },
    { id: "vinyasa", name: "Vinyasa Yoga" },
    { id: "ashtanga", name: "Ashtanga Yoga" },
  ];

  const content: Record<string, Content> = {
    ashtanga: {
      title: " Ashtanga Yoga",
      image: "/astanga-yoga.png",
      desc: "Get ready to ignite your inner fire with Ashtanga yoga! This traditional practice is all about movement, breath, and energy. You'll flow through a set sequence of postures, building strength, flexibility, and focus. Ashtanga yoga is like a powerful workout for your body and mind. It's challenging, but it's also incredibly rewarding. You'll feel strong, energized, and ready to take on the day.",
      benefit: [
        "Builds internal heat and energy",
        "Increases strength and endurance",
        "Improves focus and mental clarity",
        "Enhances cardiovascular health",
        "Develops discipline and self-awareness",
      ],
    },
    vinyasa: {
      title: " Vinyasa Yoga",
      image: "/vinyasa-yoga.png",
      desc: "Unleash your creativity with Vinyasa yoga! This dynamic practice is all about movement and flow. You'll link breath with movement, flowing from one pose to another in a continuous sequence. Vinyasa yoga is like a dance, but instead of music, you'll be moving to the rhythm of your breath. It's a fun and challenging way to build strength, flexibility, and cardiovascular endurance. You'll feel alive, energized, and connected to your body.",
      benefit: [
        "Improves coordination and balance",
        "Enhances creativity and self-expression",
        "Increases flexibility and range of motion",
        "Boosts mood and energy levels",
        "Supports weight management and overall health",
      ],
    },
    surya: {
      title: "Surya Namaskar",
      image: "/surya-namaskar.png",
      desc: "Surya Namaskar, also known as Sun Salutation, is a timeless sequence of postures that embodies the essence of yoga, igniting the inner fire, building strength, flexibility, and endurance, and nurturing the body, mind, and spirit to promote mental clarity, focus, and discipline. As a harmonious flow of movements, it synchronizes the body and mind, enhancing coordination, balance, and flexibility, while also calming the mind and soothing the body, promoting relaxation, balance, and inner peace, and connecting us to our inner selves, fostering a deeper sense of calm, clarity, and well-being.",
      benefit: [
        "Harmonizes the nervous system, promoting emotional balance and resilience",
        "Develops a strong sense of body awareness, enhancing posture and overall physical alignment",
        "Cultivates a deeper connection to nature, promoting a sense of grounding and well-being",
        "Enhances the body's natural detoxification processes, promoting overall health and vitality",
        "Ignites the inner spark, boosting creativity and inspiration",
      ],
    },
    hatha: {
      title: " Hatha Yoga",
      image: "/Hatha-Yoga.png",
      desc: "Find your calm with Hatha yoga! This traditional practice is all about balance and harmony. You'll hold postures for longer periods of time, allowing you to fully experience the physical, mental, and emotional benefits of each pose. Hatha yoga is like a soothing balm for your body and mind. It's calming, grounding, and restorative. You'll feel relaxed, centered, and at peace.",
      benefit: [
        "Reduces stress and anxiety",
        "Promotes relaxation and calmness",
        "Improves sleep quality and duration",
        "Supports immune function and overall health",
        "Enhances spiritual growth and self-awareness",
      ],
    },
    practice: {
      title: " Vinyasa Practise",
      image: "/surya-namaskar.png",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum eveniet aut atque, eaque labore quisquam qui quaerat velit hic! Quasi atque dolorem placeat rerum mollitia fugit libero cupiditate et?",
      benefit: [
        "Offers Strength Training",
        "Improves Flexibility",
        "Relieves Stress",
        "Cardiovascular Benefits",
        "Inculcates Proper Breathing",
        "Detoxification",
      ],
    },
    iyengar: {
      title: " Iyengar Yoga",
      image: "/surya-namaskar.png",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum eveniet aut atque, eaque labore quisquam qui quaerat velit hic! Quasi atque dolorem placeat rerum mollitia fugit libero cupiditate et?",
      benefit: [
        "Offers Strength Training",
        "Improves Flexibility",
        "Relieves Stress",
        "Cardiovascular Benefits",
        "Inculcates Proper Breathing",
        "Detoxification",
      ],
    },
    kundalini: {
      title: " Kundalini Yoga",
      image: "/vinyasa-yoga.png",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus eum eveniet aut atque, eaque labore quisquam qui quaerat velit hic! Quasi atque dolorem placeat rerum mollitia fugit libero cupiditate et?",
      benefit: [
        "Offers Strength Training",
        "Improves Flexibility",
        "Relieves Stress",
        "Cardiovascular Benefits",
        "Inculcates Proper Breathing",
        "Detoxification",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState<string>("surya");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useAnimateTextFromRightToLeft(
    "#whai-we-offer-main-2",
    "#what-we-offer-heading"
  );

  return (
    <section className="common-padding">
      <div className="max-w-screen-xl mx-auto relative ">
        <div id="whai-we-offer-main-2" className={`pb-10`}>
          <h1
            id="what-we-offer-heading"
            className={`${ashtanga.className} heading uppercase text-dark-green relative left-full w-max`}
          >
            What <br className="sm:hidden" /> We Offer
          </h1>
        </div>
        <div className="flex flex-col bg-white">
          {/* Tabs */}
          <div className="overflow-x-auto ">
            <ul className="flex flex-nowrap md:flex-wrap  w-full justify-start md:justify-between space-x-4 md:space-x-0 p-4  md:p-0">
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={`cursor-pointer group whitespace-nowrap text-sm md:text-base lg:text-lg `}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h3>{tab.name}</h3>
                  <div
                    className={`h-[4px] mt-[7px]  group-hover:w-full duration-500 transition-all bg-dark-green ${
                      activeTab === tab.id ? "w-full" : "w-0"
                    } `}
                    onClick={() => setActiveTab(tab.id)}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-[80vh] mt-14"
          >
            <div className="px-5 md:px-10 py-10 md:py-20 relative">
              <div className="w-full h-full relative">
                <div className="w-full h-full z-30 relative">
                  <Image
                    src={content[activeTab].image}
                    alt="yoga"
                    width={520}
                    height={320}
                    className="w-full h-full object-cover rounded-t-full"
                  />
                </div>
                <div className="w-full h-full overflow-hidden rounded-t-full border border-dark-green absolute -top-7 left-6"></div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="px-5">
                <div>
                  <hgroup className="space-y-4">
                    <h6 className="text-dark-green font-bold text-3xl md:text-5xl">
                      {content[activeTab].title}
                    </h6>
                    <p className="text-dark-green">{content[activeTab].desc}</p>
                  </hgroup>
                  <p className="text-dark-green mt-3">
                    The Benefits of practicing{" "}
                    <span className="font-bold">
                      {content[activeTab].title}
                    </span>
                  </p>
                </div>
                <div>
                  <ul className="text-dark-green flex flex-col gap-3 mt-5">
                    {content[activeTab].benefit.map((item, index) => (
                      <li key={index} className="pb-2 flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className="inline-block h-1.5 w-1.5 bg-dark-green rounded-full"></span>
                          <p>{item}</p>
                        </div>
                        <div className="h-[1px] w-full bg-dark-green mt-2"></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end  */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
