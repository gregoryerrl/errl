"use client";
import React, { useState, useEffect, useRef } from "react";
import { AuroraBackground } from "@/app/root-components/aurora-background";
import { ModeToggle } from "../root-components/ModeToggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ChevronDown } from "lucide-react";
import "./default.css";
import Image from "next/image";
import { link } from "fs";
import Link from "next/link";
import Info from "./default-components/info";
import Portfolio from "./default-components/portfolio";
import Intro from "./default-components/intro";

export default function DefaultPage() {
  const [isHovered, setIsHovered] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const textThreeRef = useRef(null);
  const worksImagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.scrollY + window.innerHeight ===
        document.documentElement.scrollHeight;
      setIsEnded(bottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      setIsStopped(!!e);
      let timer: number | null = null;
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => setIsStopped(false), 3000);
    });

    gsap.ticker.lagSmoothing(1);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Hovered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Not Hovered");
  };

  return (
    <AuroraBackground showRadialGradient={false}>
      <section
        ref={sectionRef}
        className="relative w-[100vw] min-h-screen font-consolas text-slate-800 dark:text-slate-200"
      >
        <div
          className="absolute top-2 left-2 min-w-10 min-h-10 hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ModeToggle
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            } fixed top-2 left-2 transition-all duration-300 z-50`}
          />
        </div>
        <div className="fixed bottom-1 left-1 min-w-10 min-h-10 block md:hidden dark:text-white z-50">
          <ModeToggle className="dark:bg-slate-900 border-none" />
        </div>
        <Intro />
        <Portfolio />
        <Info />
        <div
          className={`fixed flex flex-col bottom-1 min-w-10 min-h-10 dark:text-white animate-bounce w-[100vw] items-center justify-center z-50`}
        >
          <ChevronDown
            className={`${
              isEnded || isStopped ? "opacity-0" : "opacity-100"
            } transition-opacity duration-200 w-12 h-12`}
          />
        </div>
      </section>
    </AuroraBackground>
  );
}
