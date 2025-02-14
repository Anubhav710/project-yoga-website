import { ashtanga } from "@/app/fonts";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/green-noise-1920x1200-1.jpg')] bg-cover common-padding pb-12 overflow-x-clip overflow-y-visible">
      <div>
        <div className="w-full flex flex-col md:flex-row justify-between pb-8">
          <div className="w-full md:w-1/2 space-y-3 mb-5 md:mb-0">
            <h1 className="text-2xl text-white">NEWSLETTER</h1>
            <input
              type="text"
              placeholder="Your e-mail"
              className="bg-transparent outline-none border-b border-b-white placeholder:text-white w-full py-2"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-10 md:gap-32 ml-5">
            {["studio", "studio", "studio"].map((title, index) => (
              <div key={index} className="flex-1">
                <h2 className="uppercase text-white">{title}</h2>
                <ul className="text-white space-y-3 mt-3">
                  {[
                    "Private Classes",
                    "Group Classes",
                    "Yoga travel",
                    "instructor",
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
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
              &copy;2024 Preeti Anushka Yoga Studio | All Rights Reserved |
              Designed by UTXOTech.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
