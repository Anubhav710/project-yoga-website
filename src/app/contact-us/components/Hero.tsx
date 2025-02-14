import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[95vh] relative  ">
      <div className=" h-full flex items-center">
        <div className="relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/06/about-us-img1.jpg"
            }
            alt="about-image"
            width={5600}
            height={1600}
            sizes="100%"
          />
        </div>

        <div className="absolute top-5 left-32 ">
          <h1
            className={`header-txt z-40  text-dark-green ${ashtanga.className}  `}
          >
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
