import React from "react";
import About from "./components/About";
import Slider from "./components/Slider";
import BenefitsYoga from "./components/BenefitsYoga";
import InfiniteTextScroll from "./components/InfiniteTextScroll";

import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";
import YogaStyles from "@/components/section/Styles";
import { BenifitsYoga } from "@/constants";
import BenefitsYogas from "./components/BenefitsYogas";

const aboutUs = () => {
  return (
    <div className="space-y-24">
      {/* <CommonHero text="Our Studio">
        <Image
          src={"/assets/images/about/about-banner.jpg"}
          alt="hero-image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </CommonHero> */}
      <CommonHero text="Our Studio" className="aspect-[16/7]">
        <Image
          src={"/assets/images/about/about-banner.jpg"}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero>

      <About />

      <YogaStyles data={BenifitsYoga} hide />
      <Slider />

      {/* <CompanyLogo /> */}
      <BenefitsYoga />
      <BenefitsYogas />

      <InfiniteTextScroll />
    </div>
  );
};

export default aboutUs;
