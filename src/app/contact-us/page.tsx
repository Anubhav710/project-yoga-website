import React from "react";
import Gallery from "../pricing-plans/components/Gallery";
import ContactUs from "@/components/section/ContactUs";
import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";

const contactUs = () => {
  return (
    <section>
      <CommonHero text="Contact Us">
        <Image
          src={"/assets/images/banner.JPG"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero>
      <ContactUs />
      <Gallery />
    </section>
  );
};

export default contactUs;
