import React from "react";
import TimeTable from "./components/TimeTable";
import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";

const classes = () => {
  return (
    <main>
      <CommonHero text="classes" className="aspect-[16/6]">
        <Image
          src={"/assets/images/banner.JPG"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover object-center "
        />
      </CommonHero>
      <TimeTable />
    </main>
  );
};

export default classes;
