import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="padding-x">
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-5">
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/1.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full sm:col-span-2 sm:col-start-2 relative sm:row-start-1 sm:row-end-3 ">
          <Image
            src={"/assets/images/pricing/bottom-images/7.jpg"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/3.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/4.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/5.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/6.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={"/assets/images/pricing/bottom-images/1.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
