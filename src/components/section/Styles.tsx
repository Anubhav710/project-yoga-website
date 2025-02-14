import React from "react";
import { ashtanga2 } from "@/app/fonts";
import Image from "next/image";

interface YogaStyle {
  title: string;
  desc: string;
  image: React.ReactNode;
}

const YogaStyles = ({ data, hide }: { data: YogaStyle[]; hide?: boolean }) => {
  return (
    <section className=" relative  common-padding">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 w-max mx-auto">
          {data.map((item) => (
            <YogaStylesCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div
        className={`absolute bottom-0 right-0 z-10   ${
          hide ? "hidden" : "md:block hidden"
        } `}
      >
        <Image
          src={"/images/main-home-offset-img-2.png"}
          alt="hero"
          width={300}
          height={1000}
        />
      </div>
    </section>
  );
};

export default YogaStyles;

const YogaStylesCard = ({
  image,
  title,
  desc,
}: {
  image: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className={`w-max pt-10 flex flex-col items-center gap-4 ${ashtanga2.className}`}
    >
      <div>{image}</div>
      <h1
        className={`text-center text-dark-green text-md mt-2 text-xl uppercase tracking-wide `}
      >
        {title}
      </h1>
      <p className="w-[28ch] text-dark-green text-center ">{desc}</p>
    </div>
  );
};
