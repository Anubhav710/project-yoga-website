import React from "react";
import About from "./components/About";
import TravelVideo from "@/components/section/Video";

import Image from "next/image";
import Slider2 from "@/components/section/Slider2";

const page = () => {
  return (
    <section className="space-y-24">
      {/* <CommonHero text="Retreats" className="aspect-[16/7]">
        <Image
          src={"/assets/images/retreat/h-banner.jpg"}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero> */}
      <About />

      <Slider2 />
    </section>
  );
};

export default page;
