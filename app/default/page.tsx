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

export default function DefaultPage() {
  const [isHovered, setIsHovered] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const textThreeRef = useRef(null);
  const worksScreenRef = useRef(null);
  const worksTextOne = useRef(null);
  const worksImagesRef = useRef(null);
  const worksImage1 = useRef(null);
  const worksImage2 = useRef(null);
  const worksImage3 = useRef(null);
  const worksImage4 = useRef(null);
  const worksImage5 = useRef(null);

  const images = [
    {
      index: 1,
      src: "/files/1.png",
      ref: worksImage1,
      link: "https://www.gwana.app/",
    },
    {
      index: 2,
      src: "/files/2.png",
      ref: worksImage2,
      link: "https://kreel.vercel.app/",
    },
    {
      index: 3,
      src: "/files/3.png",
      ref: worksImage3,
      link: "https://www.mypetgo.com/",
    },
    {
      index: 4,
      src: "/files/4.png",
      ref: worksImage4,
      link: "https://devanta-fe.vercel.app/",
    },
    {
      index: 5,
      src: "/files/5.png",
      ref: worksImage5,
      link: "https://www.eucannajobs.com/",
    },
  ];

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
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDist",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
    });

    // Animate first text out
    tl.fromTo(
      textOneRef.current,
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, duration: 3 }
    );

    // Animate second text in
    tl.fromTo(
      textTwoRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 },
      "-=1"
    );

    tl.to(textTwoRef.current, { x: -700, opacity: 0, duration: 3 });

    tl.fromTo(
      textThreeRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 },

      "-=1"
    );

    tl.fromTo(
      worksScreenRef.current,
      {
        scale: 1,
        x: -1500,
        borderRadius: 1000,
        rotate: 90,
      },
      {
        scale: 1.7,
        x: 0,
        borderRadius: 1000,
        rotate: 0,
        duration: 3,
      },
      "+=1"
    );

    tl.fromTo(
      textThreeRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 2 },

      "-=2"
    );

    tl.fromTo(
      worksScreenRef.current,
      { borderRadius: 1000 },
      { borderRadius: 0, duration: 3 },
      "-=1"
    );

    tl.fromTo(
      worksTextOne.current,
      { y: -300, opacity: 1 },
      { y: 0, opacity: 1, duration: 3 },
      "-=2"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDistTwo",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },
    });

    tl2.fromTo(worksTextOne.current, { y: 0 }, { y: -300, duration: 3 }, "+=2");

    tl2.fromTo(
      worksScreenRef.current,
      { y: 0, opacity: 1 },
      { y: -2000, duration: 4 },
      "-=2"
    );
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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

        <div
          className={`fixed flex flex-col bottom-1 min-w-10 min-h-10 dark:text-white animate-bounce w-[100vw] items-center justify-center z-50`}
        >
          <ChevronDown
            className={`${
              isEnded || isStopped ? "opacity-0" : "opacity-100"
            } transition-opacity duration-200 w-12 h-12`}
          />
        </div>

        <span
          ref={textOneRef}
          className="fixed top-1/2 -translate-y-1/2 w-[100vw] font-bold text-6xl md:text-8xl textOne text-center"
        >
          E<span className="text-purple-900 dark:text-green-500">r</span>rl
        </span>

        <span
          ref={textTwoRef}
          className="fixed top-1/2 -translate-y-1/2 w-[100vw] font-bold text-6xl md:text-8xl textTwo opacity-0 text-center"
        >
          <span className="text-purple-900 dark:text-green-500">Compute</span>r
          Scientist
        </span>

        <span
          ref={textThreeRef}
          className="fixed top-1/2 -translate-y-1/2 w-[100vw] font-bold text-6xl md:text-8xl textTwo opacity-0 text-center"
        >
          <span className="text-purple-900 dark:text-green-500">Design</span>er
        </span>
        <div
          ref={worksScreenRef}
          className="fixed top-0 w-[100vw] h-screen worksScreen bg-gray-400 dark:bg-slate-900 z-10 flex flex-col items-center justify-center"
        >
          <div
            className="inline-grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 static md:absolute w-92"
            ref={worksImagesRef}
          ></div>
        </div>
        <div ref={worksTextOne} className="fixed top-0 w-[100vw] h-[15vh] z-40">
          <div className="w-full h-2/3 bg-gray-400 dark:bg-slate-900 flex items-center justify-center">
            <span className="font-light italic text-3xl text-center">
              Crafted with passion and dedication
            </span>
          </div>
          <div className="w-full h-1/3 bg-gradient-to-b from-gray-400 dark:from-slate-900 to-transparent"></div>
        </div>

        <div style={{ height: "3000px" }} className="scrollDist w-full"></div>
        <div className="w-[80vw] md:w-[60vw] mx-auto gap-5 inline-grid grid-cols-1 justify-center z-10 mb-34">
          {images.map((image, index) => (
            <Link key={index} href={image.link} target="_blank">
              <Image
                key={image.index}
                src={image.src}
                alt={`Image ${index}`}
                width={1000}
                height={0}
                className="w-full h-auto shadow-2xl rounded border border-slate-800 dark:border-slate-200 transistion-all duration-300"
                ref={image.ref}
              />
            </Link>
          ))}
        </div>

        <div
          style={{ height: "3000px" }}
          className="scrollDistTwo w-full flex flex-col items-center justify-center gap-y-52"
        >
          <div className="w-full h-[100vh]"></div>
          <div className="w-full h-[50vh]"></div>
          <span className="text-3xl">A Full-Stack Developer</span>
          <span className="text-3xl">An AI Programmer</span>
          <span className="text-3xl">A Product Engineer</span>
          <span className="text-3xl">A Digital Artist</span>
        </div>
      </section>
    </AuroraBackground>
  );
}
