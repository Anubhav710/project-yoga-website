import { ashtanga } from "@/app/fonts";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/green-noise-1920x1200-1.jpg')] bg-cover common-padding pb-12 overflow-x-clip overflow-y-visible">
      <div>
        <div className="w-full flex flex-col md:flex-row justify-between pb-8">
          <div className="w-full md:w-1/2 space-y-3 mb-5 md:mb-0">
            <h1 className="text-2xl text-white">NEWSLETTER</h1>
            <div className="flex items-center border-b border-b-white w-full">
              <input
                type="text"
                placeholder="Your e-mail"
                className="bg-transparent text-white outline-none placeholder:text-white w-full py-2 flex-1"
              />
              <button className="text-white px-4 py-2 hover:bg-white/10 transition-colors">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-10 md:gap-16 ml-5">
            {["Quick Links", "Classes", "Contact Info"].map((title, index) => (
              <div
                key={index}
                className={`${index === 2 ? "flex-1 md:flex-[1.5]" : "flex-1"}`}
              >
                <h2 className="uppercase text-white">{title}</h2>
                <ul className="text-white space-y-3 mt-3">
                  {index === 0 &&
                    [
                      { name: "Home", path: "/" },
                      { name: "About Us", path: "/about-us" },
                      { name: "Contact Us", path: "/contact-us" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href={item.path}>{item.name}</a>
                      </li>
                    ))}
                  {index === 1 &&
                    [
                      { name: "Regular Classes", path: "/classes" },
                      { name: "Advanced Class", path: "/classes" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href={item.path}>{item.name}</a>
                      </li>
                    ))}
                  {index === 2 &&
                    [
                      {
                        name: "Ground floor, Yoga/ Preeti & Anushka, Asiad Community Centre, P.A, near Minerals Cafe, Asian Games Village Complex, Siri Fort, New Delhi, Delhi 110049",
                      },
                      { name: "+91-9312641005", path: "tel:+91-9312641005" },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className={idx === 0 ? "max-w-[250px] text-sm" : ""}
                      >
                        <a href={item.path}>{item.name}</a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-baseline gap-7">
          <h1
            className={`uppercase text-[10vw] ${ashtanga.className} text-[#AEA17E]`}
          >
            P.A.Yoga
          </h1>
          <div className="flex items-center gap-3 flex-wrap ">
            <div className="flex gap-4 text-white">
              <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                <a
                  href="https://www.instagram.com/preeti.anushka.yoga/"
                  target="_blank"
                >
                  IG
                </a>
              </div>
              <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                <a
                  href="https://www.facebook.com/yogawithpreetiandanushka/"
                  target="_blank"
                >
                  FB
                </a>
              </div>
              <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/channel/UC9vtC10i4GBiCh8uZYoihvg"
                  target="_blank"
                >
                  YT
                </a>
              </div>
              <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                <a href="mailto:payoga.info@gmail.com" target="_blank">
                  EM
                </a>
              </div>
              <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                <a href="https://wa.me/+918447148364" target="_blank">
                  WA
                </a>
              </div>
            </div>
            <div className="w-[10rem] h-[1px] bg-white hidden sm:block"></div>
            <p className="text-white  text-sm">
              &copy;{new Date().getFullYear()} Preeti Anushka Yoga Studio | All
              Rights Reserved | Designed and Developed by{" "}
              <a
                href="https://utxotech.com"
                target="_blank"
                className="underline hover:text-gray-300 transition-colors"
              >
                UTXOTech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
