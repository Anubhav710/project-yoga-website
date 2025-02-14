import Image from "next/image";
import React from "react";

const benefitsList = [
  "Reduces stress and anxiety",
  "Improves flexibility and balance",
  "Develops body awareness and confidence",
  "Enhances focus and concentration",
  "Nurtures inner peace and calm",
  "Supports physical health and resilience",
  "Unlocks creative potential and boosts productivity",
  "Cultivates self-awareness and self-regulation",
  "Promotes spiritual growth and connection",
  "Fosters emotional intelligence and empathy",
  "Encourages mindfulness and presence",
  "Empowers personal growth and transformation",
];

const BenefitsYoga = () => {
  return (
    <section className="common-padding">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-11">
        <div className="flex-1 md:flex-[1.5]">
          <div>
            <Image
              src={"/abouts-2.png"}
              alt=""
              width={520}
              height={120}
              className="w-full h-full object-cover rounded-bl-[27rem]"
            />
          </div>
        </div>
        <div className="flex-1 md:flex-[2] bg-yellow">
          <div className="pl-7">
            <hgroup>
              <h1 className="text-3xl md:text-4xl text-dark-green font-bold">
                From Mat to Magic:
              </h1>
              <h2 className="text-3xl md:text-4xl text-dark-green font-bold">
                8 Ways Yoga Can Enrich Your Life
              </h2>
            </hgroup>
            <div className="flex flex-col md:flex-row gap-7 mt-7">
              <ul className="flex-1">
                {benefitsList.slice(0, 4).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-dark-green rounded-full inline-block"></span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
              <ul className="flex-1">
                {benefitsList.slice(4, 8).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-dark-green rounded-full inline-block"></span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mt-12">
              <div className="ml-auto relative">
                <Image
                  src={"/about-image-benifits.png"}
                  alt=""
                  width={700}
                  height={400}
                  className="relative z-30"
                />
                <div className="border border-dark-green absolute md:top-7 top-4 md:right-14 right-6  h-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsYoga;
