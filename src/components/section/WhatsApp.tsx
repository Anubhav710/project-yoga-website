"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowWhatsapp(true);
      } else {
        setShowWhatsapp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="https://wa.me/1234567890" // Replace with client's WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 overflow-clip  sm:right-14 desktop:right-5 right-4  p-3 bg-green-500 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 ${
        showWhatsapp
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
    </Link>
  );
}
