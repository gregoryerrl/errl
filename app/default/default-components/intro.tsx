"use client";

import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../default.css";
export default function Intro() {
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const textThreeRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const intro = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,
        pinnedContainer: ".intro",
      },
    });

    intro.fromTo(
      textOneRef.current,
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, duration: 4 }
    );

    // Animate second text in
    intro.fromTo(
      textTwoRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 4 }
    );

    intro.fromTo(
      textTwoRef.current,
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, duration: 4 }
    );

    intro.fromTo(
      textThreeRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 4 }
    );

    intro.fromTo(
      textThreeRef.current,
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, duration: 4 }
    );
  });

  return (
    <>
      <main>
        <section className="relative intro w-screen h-screen flex justify-center items-center">
          <div
            ref={textOneRef}
            className="absolute w-full font-bold text-6xl md:text-8xl flex items-center justify-center textOne text-center"
          >
            <div className="flex flex-col">
              <span className="text-lg text-left">Gregory</span>
              <span>
                E<span className="text-purple-900 dark:text-green-500">r</span>
                rl
              </span>
              <span className="text-lg text-right">Babela</span>
            </div>
          </div>
          <span
            ref={textTwoRef}
            className="absolute w-[100vw] font-bold text-6xl md:text-8xl textTwo text-center"
          >
            <span className="text-purple-900 dark:text-green-500">Compute</span>
            r Scientist
          </span>
          <span
            ref={textThreeRef}
            className="absolute w-[100vw] font-bold text-6xl md:text-8xl textTwo text-center"
          >
            <span className="text-purple-900 dark:text-green-500">Design</span>
            er
          </span>
        </section>
        <section>
          <div className="w-full flex flex-col items-center justify-center gap-y-96">
            <span className="text-3xl">A Full-Stack Developer</span>
            <span className="text-3xl">An AI Programmer</span>
            <span className="text-3xl">A Product Engineer</span>
            <span className="text-3xl">A Digital Artist</span>
            <span className="text-3xl text-purple-800 dark:text-green-500">
              gregoryerrl@gmail.com
            </span>
          </div>
          <div className="spacer w-full h-[100vh]"></div>
        </section>
      </main>
    </>
  );
}
