import Info from "@/components/Info";
import CTA from "@/components/section/CTA";
import CTA2 from "@/components/section/CTA-2";
import Hero from "@/components/section/Hero";
import ImageSection from "@/components/section/ImageSection";
import YogaStyles from "@/components/section/Styles";
import Team from "@/components/section/Team";
import Testimonials from "@/components/section/Testimonials";
import TravelVideo from "@/components/section/Video";
import WhatWeOffer from "@/components/section/WhatWeOffer";
import YogaClass from "@/components/section/YogaClasses";
import { YogaStylesData } from "@/constants";

export default function Home() {
  return (
    <main className="relative overflow-x-clip overflow-y-hidden">
      <Hero />
      <YogaStyles data={YogaStylesData} />
      <Team />
      <Info />
      <ImageSection />
      <WhatWeOffer />
      <CTA />
      <YogaClass />
      <Testimonials />
      <TravelVideo />
      <CTA2 />
    </main>
  );
}
