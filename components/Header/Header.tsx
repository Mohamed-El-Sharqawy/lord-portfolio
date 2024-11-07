"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenuToggle from "./MobileMenuToggle";
import XMark from "./XMark";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { links } from "@/constants/header";
import { useGSAP } from "@gsap/react";

import "./header.css";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuContent = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      mobileMenuContent.current?.classList.add("active");
    } else {
      mobileMenuContent.current?.classList.remove("active");
    }
  }, [isMobileMenuOpen]);

  useGSAP(() => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      top: 48,
      duration: 0.75,
      delay: 0.35,
      ease: "power1.out",
    });
  });

  return (
    <>
      <header className="-top-[80px]" ref={headerRef}>
        <Link href="/">
          <Image
            className="w-[52px] h-[20px]"
            src="/imgs/logo.svg"
            alt="logo"
            width={52}
            height={20}
          />
        </Link>

        <div className="desktop-menu flex items-center gap-x-4">
          <nav className="space-x-5">
            {links.map((link) => (
              <Link
                className="hover:underline underline-offset-4 tracking-widest"
                href={link.toLowerCase()}
                key={link}
              >
                {link}
              </Link>
            ))}
          </nav>

          <button className="text-black bg-wheat py-2.5 px-4 rounded-sm hover:bg-wheat/80 active:bg-wheat uppercase">
            Let&apos;s Talk
          </button>
        </div>

        <div className="hidden mobile-menu">
          <MobileMenuToggle setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
      </header>

      <div
        ref={mobileMenuContent}
        className="mobile-menu-content bg-black/80 fixed top-0 left-0 w-full h-full z-50 space-y-8 flex flex-col items-center justify-center backdrop-blur-md"
      >
        <XMark setIsMobileMenuOpen={setIsMobileMenuOpen} />

        <nav className="flex flex-col items-center gap-y-8 text-wheat">
          {links.map((link) => (
            <Link
              className="hover:underline underline-offset-4 tracking-widest hover:filter hover:drop-shadow-[0_0_8px_#DAC5A7] transition"
              href={link.toLowerCase()}
              key={link}
            >
              {link}
            </Link>
          ))}
        </nav>

        <button className="absolute top-7 left-8 text-black bg-wheat py-2.5 px-4 rounded-sm hover:bg-wheat/80 active:bg-wheat uppercase block mx-auto">
          Let&apos;s Talk
        </button>
      </div>
    </>
  );
}
