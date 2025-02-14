import Image from "next/image";
import React from "react";

const BenefitsYogas = () => {
  return (
    <section className="bg-dark-green common-margin py-20">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="relative flex justify-center bg-[url('/image.png')] bg-contain bg-no-repeat bg-center">
          <div className=" w-[80%]">
            <Image
              src={"/about-img.png"}
              alt=""
              width={389}
              height={329}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center p-5">
          <div>
            <h2 className="text-3xl md:text-4xl text-white font-semibold">
              From Mat to Magic:
            </h2>
            <h2 className="text-3xl md:text-4xl text-white font-semibold">
              8 Ways Yoga Can Enrich Your Life
            </h2>
          </div>
          <div className="mt-10">
            <ul className="space-y-5">
              {[
                "Reduces stress and anxiety",
                "Improves flexibility and balance",
                "Develops body awareness and confidence",
                "Enhances focus and concentration",
                "Nurtures inner peace and calm",
                "Supports physical health and resilience",
                "Unlocks creative potential and boosts productivity",
                "Cultivates self-awareness and self-regulation",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <div className="border border-white text-white px-5 py-1 w-max rounded-full">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-white text-lg md:text-xl">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsYogas;
