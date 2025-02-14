"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Menu from "../ui/Menu";
import Links from "./navLink";

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Classes",
    href: "/classes",
  },
  {
    title: "Retreats",
    href: "/retreat",
  },
  {
    title: "Pricing",
    href: "/pricing-plans",
  },

  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Book Class",
    href: "/book-class",
  },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="sm:py-7 py-4  desktopmd:px-14 px-5  relative">
      <div className="flex items-center gap-1 justify-between">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.jpg"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <nav className="space-x-16 desktop:space-x-7  text-dark-green md:flex hidden">
          {navItems.slice(0, 6).map((item) => (
            <Links
              href={item.href}
              key={item.title}
              className={`${item.href === pathname ? "scale-x-100" : ""}`}
            >
              {item.title}
            </Links>
          ))}
        </nav>
        <div className="md:flex items-center space-x-10 text-dark-green hidden">
          <Link href={"/book-class"} className="group">
            <h1 className="uppercase text-[1.2rem] desktop:text-[1rem] font-bold">
              Book Class
            </h1>
            <div
              className={`w-full scale-x-100 group-hover:scale-x-0 origin-left  duration-500 transition-all h-[1.4px] bg-dark-green `}
            ></div>
          </Link>
        </div>
        <div className="md:hidden block">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
