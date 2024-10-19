"use client";

import { logos } from "@/constants/logos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import "./logos.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Logos() {
  useGSAP(() => {
    gsap.to(".partner-logo", {
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".logos-section",
        start: "180% bottom", // start of the section
      },
      stagger: 0.1,
    });
  });

  return (
    <section className="logos-section">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="partner-logo cursor-pointer drop-shadow-[0_0_4px_#DAC5A7] hover:drop-shadow-[0_0_8px_#DAC5A7] relative transition opacity-0"
        >
          <Image
            className="w-full"
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </div>
      ))}
    </section>
  );
}
