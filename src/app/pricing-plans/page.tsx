import React from "react";

import Gallery from "./components/Gallery";
import Pricing from "@/components/section/Pricing";
import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";

const page = () => {
  return (
    <div className="space-y-24">
      <CommonHero text="Prices" className="aspect-[16/6]">
        <Image
          src={"/assets/images/pricing/Banner.jpg"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero>
      <Pricing />
      <Gallery />
    </div>
  );
};

export default page;
