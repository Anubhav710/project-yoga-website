import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Arrow from "../ui/Arrow";

const TravelVideo = () => {
  return (
    <section
      className={` relative w-full md:h-screen h-[70vh] desktop:h-[190vh]  bg-[url('/images/retreat-bcgr-img-1.jpg')] bg-cover bg-no-repeat  `}
    >
      <div className="max-w-screen-lg h-full flex flex-col items-center  mx-auto relative ">
        <div className=" relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
          <Image
            src={"/assets/images/home-3.png"}
            alt="retreat-video-img-1.jpg"
            width={1000}
            height={800}
          />
          <h1
            className={`header-txt uppercase -top-[1%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-dark-green  absolute z-20 ${ashtanga.className}`}
          >
            Retreat{" "}
          </h1>
        </div>
        <div className="mt-12 text-dark-green">
          <h4 className="para-txt  text-center uppercase font-semibold ">
            Our next yoga travel destination
          </h4>
          <div className="flex justify-center  gap-3 mt-6 items-center">
            <p className="uppercase text-sm ">Read More</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className="absolute right-0 sm:-bottom-32 top-[83%] "></div>
      </div>
    </section>
  );
};

export default TravelVideo;
