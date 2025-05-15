import React from "react";
import Gallery from "../pricing-plans/components/Gallery";
import ContactUs from "@/components/section/ContactUs";

import Image from "next/image";
import Banner from "@/components/common/banner";

const contactUs = () => {
  return (
    <section className="space-y-24">
      {/* <CommonHero text="Contact Us">
        <Image
          src={"/assets/images/contact/Banner.jpg"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero> */}
      {/* <CommonHero text="Contact Us" className="aspect-[16/7]">
        <Image
          src={"/assets/images/contact/Banner.jpg"}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero> */}
      <Banner src="/assets/images/contact/Banner.jpg" title="Contact Us" />
      <ContactUs />
      <Gallery />
    </section>
  );
};

export default contactUs;
