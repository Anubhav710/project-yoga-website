import { ashtanga } from "@/app/fonts";
import React from "react";
import CustomButton from "../ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Mail as MailIcon,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/images/bg/green-noise.jpg')] padding-x bg-cover common-padding pb-12 pt-24 mt-16 overflow-x-clip overflow-y-visible">
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
              <CustomButton className={"ring-[1px] mb-1 ring-white"}>
                Submit
              </CustomButton>
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
                      { name: "Regular Class", path: "/classes" },
                      { name: "Advanced Class", path: "/classes" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a href={item.path}>{item.name}</a>
                      </li>
                    ))}
                  {index === 2 &&
                    [
                      {
                        name: "+91-9312641005, +91-8447148364",
                        path: "tel:+91-9312641005, +91-8447148364",
                        icon: <Phone size={16} className="shrink-0" />,
                      },

                      {
                        name: "payoga.info@gmail.com",
                        path: "mailto:payoga.info@gmail.com",
                        icon: <Mail size={16} className="shrink-0" />,
                      },
                      {
                        name: "Ground floor, Yoga/ Preeti & Anushka, Asiad Community Centre, P.A, near Minerals Cafe, Asian Games Village Complex, Siri Fort, New Delhi, Delhi 110049",
                        icon: <MapPin size={16} className="shrink-0 mt-1" />,
                      },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className={
                          idx === 0 || idx === 1 ? "max-w-[250px] text-sm" : ""
                        }
                      >
                        <a
                          href={item.path}
                          className="flex  gap-2 items-center"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </a>
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
              <div className="h-8 w-8 rounded-full cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all duration-300 transform hover:scale-110">
                <a
                  href="https://www.instagram.com/preeti.anushka.yoga/"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
              <div className="h-8 w-8 rounded-full cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all duration-300 transform hover:scale-110">
                <a
                  href="https://www.facebook.com/yogawithpreetiandanushka/"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                >
                  <Facebook size={16} />
                </a>
              </div>
              <div className="h-8 w-8 rounded-full cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all duration-300 transform hover:scale-110">
                <a
                  href="https://www.youtube.com/channel/UC9vtC10i4GBiCh8uZYoihvg"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                >
                  <Youtube size={16} />
                </a>
              </div>
              <div className="h-8 w-8 rounded-full cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all duration-300 transform hover:scale-110">
                <a
                  href="mailto:payoga.info@gmail.com"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                >
                  <MailIcon size={16} />
                </a>
              </div>
              <div className="h-8 w-8 rounded-full cursor-pointer bg-white/30 flex items-center justify-center hover:bg-white/50 transition-all duration-300 transform hover:scale-110">
                <a
                  href="https://wa.me/+918447148364"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                >
                  <FaWhatsapp size={16} />
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
