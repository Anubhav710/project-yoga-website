import Image from "next/image";
import React from "react";
import BookClassForm from "./components/BookClassForm";
import Banner from "@/components/common/banner";

const BookClass = () => {
  return (
    <main className="space-y-24">
      <Banner src="/assets/images/book-class/banner.jpg" title="Book Class" />
      <BookClassForm />
    </main>
  );
};

export default BookClass;
