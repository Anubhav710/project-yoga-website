import React from "react";
import Gallery from "../pricing-plans/components/Gallery";
import ContactUs from "@/components/section/ContactUs";

import Image from "next/image";
import Banner from "@/components/common/banner";

const contactUs = () => {
  return (
    <section className="space-y-24">
      <Banner src="/assets/images/contact/Banner.jpg" title="Contact Us" />
      <ContactUs />
      <Gallery />
    </section>
  );
};

export default contactUs;
