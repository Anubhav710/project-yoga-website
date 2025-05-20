import React from "react";
import About from "./components/About";
import Slider from "./components/Slider";
import BenefitsYoga from "./components/BenefitsYoga";
import InfiniteTextScroll from "./components/InfiniteTextScroll";

import Image from "next/image";
import YogaStyles from "@/components/section/Styles";
import { BenifitsYoga } from "@/constants";
import BenefitsYogas from "./components/BenefitsYogas";
import Banner from "@/components/common/banner";

const aboutUs = () => {
  return (
    <div className="space-y-24">
      <Banner title="Our Studio" src="/assets/images/about/about-banner.jpg" />

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
