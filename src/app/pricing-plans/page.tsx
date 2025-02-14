import React from "react";

import Gallery from "./components/Gallery";
import Pricing from "@/components/section/Pricing";
import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <CommonHero text="Prices" className="aspect-[16/6]">
        <Image
          src={"/assets/images/banner.JPG"}
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
