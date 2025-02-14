import React from "react";
import About from "./components/About";
import TravelVideo from "@/components/section/Video";
import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";
import Slider2 from "@/components/section/Slider2";

const page = () => {
  return (
    <section>
      <CommonHero text="Retreats" className="aspect-[16/7]">
        <Image
          src={"/retreat.jpg"}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero>
      <About />
      <div className="h-32 w-full "></div>
      <TravelVideo />
      <div className="h-8 w-full "></div>
      <Slider2 />
      <div className="h-32 w-full bg-transparent"></div>
    </section>
  );
};

export default page;
