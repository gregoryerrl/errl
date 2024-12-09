"use client";

import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../default.css";
import TextPlugin from "gsap/TextPlugin";
export default function Intro() {
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const textThreeRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const intro = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".intro",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
        pinnedContainer: ".introScreen",
      },
    });

    const textTwo = "Computer Scientist";

    intro
      .fromTo(
        textOneRef.current,
        { x: 0, opacity: 1 },
        { x: 300, opacity: 0, duration: 20 },
        "+=5"
      )
      .fromTo(
        ".introLine",
        {
          height: 0,
        },
        { height: "100%", duration: 20, ease: "power4.out" }
      )
      .to(textTwoRef.current, {
        duration: 20,
        text: { value: textTwo },
      })
      .to(
        textTwoRef.current,
        {
          duration: 20,
          delay: 1,
          text: { value: "", rtl: true },
        },
        "+=20"
      )
      .fromTo(
        textThreeRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 20 }
      )
      .fromTo(
        textThreeRef.current,
        { y: 0, opacity: 1 },
        { y: 300, opacity: 0, duration: 20 },
        "+=20"
      )
      .fromTo(
        ".introLine",
        {
          y: 0,
        },
        { y: "-100%", duration: 20, ease: "power4.out" }
      );
  });

  return (
    <>
      <div className="intro w-screen h-[400vh]">
        <div className="relative introScreen w-screen h-screen flex">
          <div
            ref={textOneRef}
            className="absolute w-full font-bold text-6xl md:text-8xl flex items-center justify-center self-center justify-self-center"
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

          <div className="introLine absolute w-1 h-full bg-purple-900 dark:bg-green-500 opacity-30 left-10 md:left-40"></div>
          <span
            ref={textTwoRef}
            className="absolute left-16 md:left-52 w-[50vw] md:w-[100vw] font-bold text-5xl md:text-7xl text-purple-900 dark:text-green-500  self-center justify-self-center"
          ></span>
          <span
            ref={textThreeRef}
            className="absolute left-16 md:left-52 w-[100vw] font-bold text-5xl md:text-7xl  self-center justify-self-center"
          >
            <span className="text-purple-900 dark:text-green-500 ">Design</span>
            er
          </span>
        </div>
      </div>
      <div className="w-screen h-[100vh]"></div>
    </>
  );
}
