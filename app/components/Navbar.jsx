"use client"

import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useEffect, useRef } from "react";
// import reactElementToJSXString from "react-element-to-jsx-string";
// import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import gsap from "gsap";

export default function Navbar() {
  const navItems = useRef([]);

  const handleMouseEnter = (index) => {
    const navItem = navItems.current[index];
    if (!navItem) return;

    const oldText = navItem.querySelector('.old-text');
    const newText = navItem.querySelector('.new-text');

    gsap.timeline()
      .to(oldText, { y: -30, opacity: 0, duration: 0.3 })
      .fromTo(newText, { y: 30, opacity: 0 }, { y: -23, opacity: 1, duration: 0.3 }, 0);
  };

  const handleMouseLeave = (index) => {
    const navItem = navItems.current[index];
    if (!navItem) return;

    const oldText = navItem.querySelector('.old-text');
    const newText = navItem.querySelector('.new-text');

    gsap.timeline()
      .to(newText, { y: 30, opacity: 0, duration: 0.3 })
      .fromTo(oldText, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0);
  };

  const addToRefs = (el) => {
    if (el && !navItems.current.includes(el)) {
      navItems.current.push(el);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="fixed w-full">
          <nav className="flex justify-between items-center py-6 px-12">
              <Image 
                src="/images/FRNZ-logo.jpg"
                width={50}
                height={50}
                alt="FRNZ Logo"
              />
              <div className="flex gap-10 items-center">
                  {['Home', 'About', 'Services', 'Portfolio'].map((text, index) => (
                    <li
                      key={text}
                      ref={addToRefs}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      className="relative overflow-hidden inline-block list-none mt-6"
                    >
                      <Link href={`/${text.toLowerCase()}`} passHref>
                          <span className="old-text block text-center">{text}</span>
                          <span className="new-text block text-center opacity-0">{text}</span>
                      </Link>
                    </li>
                  ))}
                  <div className="border border-1 py-3"></div>
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Contact Me
                  </button>
      
                  {/* <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <span>Contact Me</span>  
                  </HoverBorderGradient> */}
                  {/* <Link ref={addToRefs} href="/">Home</Link>
                  <Link ref={addToRefs} href="/about">About</Link>
                  <Link ref={addToRefs} href="/about">Services</Link>
                  <Link ref={addToRefs} href="/about">Portfolio</Link>
                  <div className="border border-1 py-3"></div>
                  <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <span>Contact Me</span>   
                  </HoverBorderGradient> */}
              </div>
          </nav>
        </div>
      </div>
    </>
  )
}
