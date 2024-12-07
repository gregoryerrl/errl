"use client";

import React, { useState, useEffect, useRef } from "react";
import { AuroraBackground } from "@/app/root-components/aurora-background";
import { ModeToggle } from "@/app//root-components/ModeToggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ChevronDown } from "lucide-react";
import "../default.css";
import Image from "next/image";
import { link } from "fs";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
export default function Intro() {
  const worksScreenRef = useRef(null);
  const worksTextOne = useRef(null);
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
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const entrance = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".portfolioEntrance",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinnedContainer: ".portfolioEntrance",
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
      },
    });

    const portfolio = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".portfolioTrigger",
        start: "top 75%",
        end: "top 25%",
        scrub: 1,
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
      },
    });

    const exit = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".portfolioExit",
        start: "80% top",
        end: "bottom top",
        scrub: 1,
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
      },
    });

    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    entrance
      .fromTo(
        worksScreenRef.current,
        {
          x: viewWidth + 100,
          y: viewHeight + 100,
          width: "5px",
          borderRadius: "100%",
          scale: 3,
          rotate: -70,
        },
        {
          borderRadius: 0,
          x: 0,
          y: 0,
          duration: 4,
          stagger: 0.1,
        }
      )
      .to(worksScreenRef.current, {
        width: "100%",
        duration: 50,
      })
      .to(
        worksScreenRef.current,
        {
          rotate: 0,
          duration: 25,
        },
        ">-50"
      )
      .to(
        worksScreenRef.current,
        {
          scale: 1,
          duration: 30,
        },
        ">-5"
      );

    portfolio.fromTo(
      worksTextOne.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    exit.to(worksTextOne.current, {
      y: "-100%",
      duration: 1,
      delay: 3,
    });

    exit.to(worksScreenRef.current, {
      borderRadius: "30%",
      y: "-100%",
      duration: 4,
      delay: 5,
    });
  });
  return (
    <>
      <section className="portfolioEntrance w-screen relative flex justify-center items-center overflow-hidden">
        <div
          ref={worksScreenRef}
          className="fixed top-0 w-[100vw] h-screen worksScreen bg-gray-400 dark:bg-slate-900 z-10 flex flex-col items-center justify-center"
        ></div>
      </section>
      <section className="portfolioTrigger w-screen relative flex justify-center items-center bg-gray-400 dark:bg-slate-900 mt-52">
        <div
          ref={worksTextOne}
          className="fixed top-0 w-[100vw] h-[15vh] z-40 opacity-0"
        >
          <div className="w-full h-2/3 bg-gray-400 dark:bg-slate-900 flex items-center justify-center">
            <span className="font-light italic text-3xl lg:text-4xl xl:text-5xl text-center">
              Crafted with passion and dedication
            </span>
          </div>
          <div className="w-full h-1/3 bg-gradient-to-b from-gray-400 dark:from-slate-900 to-transparent"></div>
        </div>
        <div className="w-[100vw] px-20 md:px-72 mx-auto gap-7 inline-grid grid-cols-1 justify-center z-10">
          {images.map((image, index) => (
            <Link key={index} href={image.link} target="_blank">
              <Image
                key={image.index}
                src={image.src}
                alt={`Image ${index}`}
                width={1000}
                height={0}
                className="hover:scale-110 w-full h-auto shadow-2xl rounded border border-slate-800 dark:border-slate-200 transistion-all duration-300"
                ref={image.ref}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
