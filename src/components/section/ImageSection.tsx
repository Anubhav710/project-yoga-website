import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="flex flex-col md:flex-row  md:space-y-0    gap-20  sm:gap-32 pt-2 common-padding">
      <div className="w-[87%] md:w-[60%] md:pt-32 self-start">
        <Image
          src={"/pice-image.png"}
          width={700}
          height={500}
          alt="image"
          className="w-full relative -left-5"
        />
      </div>
      <div className="w-[60%] md:w-[50%] self-end">
        <Image
          src={"/assets/images/home-2.png"}
          width={800}
          height={700}
          alt="image"
        />
      </div>
    </div>
  );
};

export default ImageSection;
