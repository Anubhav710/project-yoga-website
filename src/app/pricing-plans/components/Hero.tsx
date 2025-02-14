import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[95vh] relative  ">
      <div className=" h-full flex items-center">
        <div className="relative h-[30vw] w-full bg-red-500 ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/05/prices-img-1.jpg"
            }
            alt="about-image"
            width={5000}
            height={1200}
            className="w-full h-full bg-cover"
          />
        </div>

        <div className="absolute top-5 left-32 ">
          <h1
            className={`header-txt z-40  text-[#AEA17E] uppercase ${ashtanga.className}  `}
          >
            Prices
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
