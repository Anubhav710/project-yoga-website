import Link from "next/link";
import React from "react";

const Links = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) => {
  return (
    <Link href={href} className={`group relative`}>
      <div className="">
        <h1 className="uppercase desktop:text-[0.9rem] text-[1.2rem]">
          {children}
        </h1>
        <div
          className={`absolute left-0  bottom-0 w-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 transition-transform h-[1.4px] bg-dark-green ${className}`}
        ></div>
      </div>
    </Link>
  );
};

export default Links;
