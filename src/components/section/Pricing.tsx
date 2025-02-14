import React from "react";

import { ashtanga } from "@/app/fonts";
// import CustomButton from "../ui/Button";

const Pricing = () => {
  return (
    <section className="common-padding px-5 overflow-clip min-h-screen">
      <div className="max-w-screen-lg mx-auto flex gap-5 flex-col ">
        <div className="flex-1">
          <div className="space-y-2">
            <div>
              <h1 className="cta2-heading text-dark-green uppercase font-semibold">
                Bliss on a Budget:
              </h1>
              <h1 className="cta2-heading text-dark-green -mt-2 uppercase font-semibold">
                monthly prices
              </h1>
            </div>
            <p className="text-dark-green tracking-wide">
              Zen doesn&apos;t have to break the bank. Our monthly plans are
              like a yoga pose for your wallet - flexible, affordable, and
              won&apos;t leave you feeling bent out of shape.
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-8">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-4">
            <PricingCard title="Trial Class" desc="Book a Trial" price="₹750" />
            <PricingCard
              title="Intermediate"
              desc="Group Classes"
              price="₹4000"
            />
            <PricingCard title="Advanced" desc="Group Classes" price="₹4500" />
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1   md:gap-x-4 gap-y-4">
            <div className="md:col-span-2">
              <PricingCard title="Online" desc="Zoom Classes" price="₹2500" />
            </div>
            <div className="md:col-span-2">
              <PricingCard title="Personal" desc="On Request" price="Call" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: string;
}) => {
  return (
    <div className="py-12 px-7 bg-[#222900] text-white relative border border-dark-green  space-y-4 rounded-tr-[2.2rem] rounded-bl-[2.2rem] rounded-tl-[2.2rem]">
      <hgroup className="space-y-2">
        <h1 className="text-4xl font-semibold text-white text-nowrap">
          {title}
        </h1>
        <p>{desc}</p>
      </hgroup>
      <h5 className="text-2xl font-semibold">{price}</h5>
      <div className="bg-white px-10 py-4  w-max text-dark-green font-semibold absolute -bottom-1 -right-1 rounded-tl-2xl ">
        <a href="/contact-us" className="text-xl underline">
          Purchase
        </a>
      </div>
    </div>
  );
};
