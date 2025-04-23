import CommonHero from "@/components/section/CommonHero";
import Image from "next/image";
import React from "react";
import BookClassForm from "./components/BookClassForm";

const BookClass = () => {
  return (
    <main>
      <CommonHero text="Book Class">
        <Image
          src={"/assets/images/book-class/banner.jpg"}
          alt="hero-image"
          width={2100}
          height={2100}
          className="w-full h-full object-cover "
        />
      </CommonHero>
      <BookClassForm />
    </main>
  );
};

export default BookClass;
