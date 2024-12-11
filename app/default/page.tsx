"use client";

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { ModeToggle } from "../root-components/ModeToggle";
import { gsap } from "gsap";
import Lenis from "lenis";
import { ChevronDown } from "lucide-react";
import "./default.css";
import { usePreloader } from "./usePreloader";
import LoadingScreen from "./LoadingPage";

// Lazy load components
const Info = lazy(() => import("./default-components/info"));
const Portfolio = lazy(() => import("./default-components/portfolio"));
const Intro = lazy(() => import("./default-components/intro"));
const Resume = lazy(() => import("./default-components/resume"));

// Component modules for preloading
const componentModules = [
  () => import("./default-components/info"),
  () => import("./default-components/portfolio"),
  () => import("./default-components/intro"),
  () => import("./default-components/resume"),
];

export default function DefaultPage() {
  const [isHovered, setIsHovered] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const sectionRef = useRef(null);

  // Preload components
  const isLoading = usePreloader(componentModules);

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
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-[100vw] min-h-screen font-consolas text-slate-800 dark:text-slate-200 bg-background"
    >
      <div
        className="absolute top-0 right-10 md:top-2 md:left-6 min-h-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ModeToggle
          className={`${
            isHovered ? "opacity-100" : "opacity-100 md:opacity-0"
          } fixed w-12 transition-all duration-300 z-50 bg-transparent outline-none border-none`}
        />
      </div>
      <Suspense fallback={<LoadingScreen />}>
        <Intro />
        <Resume />
        <Portfolio />
        <Info />
      </Suspense>
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
  );
}
