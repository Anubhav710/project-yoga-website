"use client";

import React, { useEffect, useState } from "react";
import Arrow2 from "../ui/Arrow-2";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-5  z-[1999] overflow-clip  sm:right-10 desktop:right-5 right-1 bg-orange text-white p-3 rounded-full cursor-pointer"
      >
        <Arrow2 />
      </div>
    )
  );
};

export default ScrollToTop;
