"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { navItems } from "../section/Header";
import { ashtanga2 } from "@/app/fonts";
import gsap from "gsap";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hamburgerTopRef = useRef<HTMLDivElement | null>(null);
  const hamburgerBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          height: 330,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(".menu-item", {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
        });

      gsap.set(".menu-item", { x: -50, opacity: 0 });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      timelineRef.current?.play();
      gsap.to(hamburgerTopRef.current, {
        rotate: -45,
        top: "50%",
        duration: 0.3,
      });
      gsap.to(hamburgerBottomRef.current, {
        rotate: 45,
        top: "50%",
        duration: 0.3,
      });
    } else {
      timelineRef.current?.reverse();
      gsap.to(hamburgerTopRef.current, {
        rotate: 0,
        bottom: 10,
        top: "auto",
        duration: 0.3,
      });
      gsap.to(hamburgerBottomRef.current, {
        rotate: 0,
        bottom: 0,
        top: "auto",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <div
      className=""
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="cursor-pointer relative w-9 h-6">
        <div
          ref={hamburgerTopRef}
          className="w-9 h-[2px] bg-black absolute top-1/2 -translate-y-1/2"
        ></div>
        <div
          ref={hamburgerBottomRef}
          className="w-9 h-[2px] bg-black absolute bottom-0"
        ></div>
      </div>
      <div
        ref={menuRef}
        className={`w-full bg-white absolute ${
          isOpen ? " border-b" : "border-none"
        } border-dark-green top-full left-0 z-40 h-0 overflow-hidden`}
      >
        <ul
          className={`${ashtanga2.className} text-xl text-dark-green space-y-4 pl-5 pt-5`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="menu-item font-bold">
              <Link href={item.href} className="text-dark-green text-[1rem]">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
