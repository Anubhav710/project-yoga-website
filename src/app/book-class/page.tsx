import Image from "next/image";
import React from "react";
import BookClassForm from "./components/BookClassForm";

const BookClass = () => {
  return (
    <main className="space-y-24">
      {/* <CommonHero text="Book Class">
        <Image
          src={"/assets/images/book-class/banner.jpg"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero> */}
      {/* <CommonHero text="Book Class" className="aspect-[16/7]">
        <Image
          src={"/assets/images/book-class/banner.jpg"}
          alt="retreathero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero> */}
      <BookClassForm />
    </main>
  );
};

export default BookClass;
