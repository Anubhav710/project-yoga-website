import React from "react";
import About from "./components/About";
import TravelVideo from "@/components/section/Video";

import Image from "next/image";
import Slider2 from "@/components/section/Slider2";
import Banner from "@/components/common/banner";

const page = () => {
  return (
    <section className="space-y-24">
      <Banner src="/assets/images/retreat/h-banner.jpg" title="Retreats" />
      <About />

      <Slider2 />
    </section>
  );
};

export default page;
