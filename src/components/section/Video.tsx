import { ashtanga } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Arrow from "../ui/Arrow";

const TravelVideo = () => {
  return (
    <section
      className={` relative w-full  md:h-[100vh] h-[60vh]  bg-[url('/images/retreat-bcgr-img-1.jpg')] bg-cover bg-no-repeat`}
    >
      <div className="max-w-screen-lg 2xl:max-w-screen-2xl h-full  flex flex-col items-center  mx-auto relative  padding-x ">
        {/* Image container */}
        <div className="h-[60%] w-full  my-auto relative">
          <Image
            src={"/assets/images/retreat/b-banner.png"}
            alt="retreat-video-img-1.jpg"
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <h1
              className={`header-txt leading-[0px] uppercase text-dark-green shadow-lg drop-shadow-md  ${ashtanga.className}`}
            >
              Retreat{" "}
            </h1>
          </div>
          <div className="text-dark-green mt-5">
            <h4 className="para-txt  text-center uppercase font-semibold ">
              Our next yoga travel destination
            </h4>
            <a
              href="/retreats"
              className="group flex justify-center gap-3 mt-1 items-center"
            >
              <p className="uppercase text-sm relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-dark-green after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full">
                Read More
              </p>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVideo;

// <div className="max-w-screen-lg h-full flex flex-col items-center  mx-auto relative ">
// <div className=" relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
//   <Image
//     src={"/assets/images/retreat/b-banner.png"}
//     alt="retreat-video-img-1.jpg"
//     width={1000}
//     height={800}
//   />

// </div>

// <div className="absolute right-0 sm:-bottom-32 top-[83%] "></div>
// </div>
