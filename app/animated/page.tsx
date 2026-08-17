"use client";

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { ModeToggle } from "../root-components/ModeToggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ChevronDown } from "lucide-react";
import "./animated.css";

import { usePreloader } from "./usePreloader";

import dynamic from "next/dynamic";
const LoadingScreen = dynamic(() => import("./LoadingPage"), { ssr: false });

// Lazy load components
const Info = lazy(() => import("./animated-components/info"));
const Portfolio = lazy(() => import("./animated-components/portfolio"));
const Intro = lazy(() => import("./animated-components/intro"));
const Resume = lazy(() => import("./animated-components/resume"));

// Component modules for preloading
const componentModules = [
  () => import("./animated-components/info"),
  () => import("./animated-components/portfolio"),
  () => import("./animated-components/intro"),
  () => import("./animated-components/resume"),
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
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      setIsEnded(bottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Diagnostics hook: only with ?audit in the URL, so it never reaches normal
    // visitors. Lets scripts/scroll-audit.js introspect triggers from the console.
    const auditing = new URLSearchParams(window.location.search).has("audit");
    if (auditing) {
      (window as unknown as Record<string, unknown>).gsap = gsap;
      (window as unknown as Record<string, unknown>).ScrollTrigger = ScrollTrigger;
    }

    // Lenis must feed ScrollTrigger and be driven BY gsap's ticker. With autoRaf
    // the two run independent RAF loops, so scrubbed animations update out of
    // phase with the smoothed scroll position and the page feels heavy.
    const lenis = new Lenis({ autoRaf: false });
    let timer: number | null = null;

    // Exposed only under ?audit so scroll feel can be A/B'd live without a rebuild:
    //   __lenis.destroy()          -> native scroll, no smoothing
    //   __lenis.options.lerp = 0.2 -> snappier response
    if (auditing) {
      (window as unknown as Record<string, unknown>).__lenis = lenis;
    }

    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", () => {
      setIsStopped(true);
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => setIsStopped(false), 3000);
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    // 1ms threshold treated almost every frame as a lag spike; 0 disables it,
    // which is what the gsap+Lenis integration expects.
    gsap.ticker.lagSmoothing(0);

    return () => {
      if (timer) clearTimeout(timer);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
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
    <div
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
    </div>
  );
}
