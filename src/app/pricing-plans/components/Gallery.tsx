import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className=" px-3 py-32 ">
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-5">
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full sm:col-span-2 sm:col-start-2 relative sm:row-start-1 sm:row-end-3 ">
          <Image
            src={"/fimage_cleanup.png"}
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
            alt="image-1"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[350px] sm:col-span-1  relative ">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/retreat-image-gallery-1-650x650.jpg"
            }
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
