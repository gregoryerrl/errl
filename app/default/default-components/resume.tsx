import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "../default.css";
import TextPlugin from "gsap/TextPlugin";
import iron from "./soldering-iron.png";
import pcb from "./pcb-board.png";
import cloud from "./server.png";
import Image from "next/image";

export default function Resume() {
  const [spark, setSpark] = useState(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const resume = gsap.timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        trigger: ".resume",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
      },
    });

    gsap.to(".resumeOne", {
      duration: 0.1,
      text: { value: "&lt;Frontend&gt;" },
      scrollTrigger: {
        trigger: ".fullstack",
        start: "center 75%",
      },
    });

    gsap.to(".resumeTwo", {
      duration: 0.55,
      text: { value: "&lt;Backend&gt;", speed: 6 },
      scrollTrigger: {
        trigger: ".fullstack",
        start: "center 75%",
      },
    });

    gsap.from(".percent", {
      duration: 0.1,
      ease: "none",
      innerText: 0,
      scrollTrigger: {
        trigger: ".spanTwo",
        start: "center 75%",
        markers: !(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"),
      },
      snap: {
        innerText: 1,
      },
      onComplete: () => {
        gsap.to(".percent", {
          text: {
            value: "100% - Detected",
            delimiter: " ",
            speed: 100,
            newClass: "text-purple-800 dark:text-green-500",
          },
          duration: 0.1,
          ease: "none",
        });
      },
    });

    gsap.from(".iron", {
      y: -150,
      x: -200,
      scrollTrigger: {
        trigger: ".electronics",
        start: "center 75%",
        end: "center center",
        scrub: true,
      },
      onComplete: () => {
        setSpark(true);
      },
      onUpdate: () => {
        setSpark(false);
      },
    });

    gsap.from(".load", {
      width: 0,
      padding: 0,
      scrollTrigger: {
        trigger: ".devops",
        start: "center 75%",
        end: "center center",
        scrub: true,
      },
      onComplete: () => {
        gsap.to(".cloud", {
          scale: 1,
          duration: 0.04,
          ease: "back",
          stagger: 0.1,
        });
      },
      onReverseComplete: () => {
        gsap.to(".cloud", {
          scale: 0,
          duration: 0.04,
          ease: "power4.out",
          stagger: 0.1,
        });
      },
    });

    gsap.to(".span", {
      y: "-200%",
      opacity: 0,
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".span",
        start: "center 25%",
        scrub: true,
      },
    });

    gsap.to(".spanTwo", {
      y: "-200%",
      opacity: 0,
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".spanTwo",
        start: "center 25%",
        scrub: true,
      },
    });

    gsap.to(".electronics", {
      y: "-200%",
      opacity: 0,
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".electronics",
        start: "center 25%",
        scrub: true,
      },
    });
  });
  return (
    <>
      <section className="">
        <div className="resume w-full flex flex-col items-center justify-center gap-y-96 py-5 md:py-0">
          <div className="grid fullstack span">
            <span className="resumeOne"></span>
            <span className="text-3xl md:text-6xl">Full-Stack</span>
            <span className="resumeTwo"></span>
          </div>
          <div className="grid ai spanTwo">
            <div className="percent">100</div>
            <span className="text-xl md:text-3xl border rounded border-slate-600 dark:border-gray-400 p-3">
              AI & Machine Learning
            </span>
          </div>
          <div className="relative electronics flex flex-col items-center justify-center">
            <Image
              src={iron}
              alt="Picture of the author"
              width={100}
              height={100}
              className="absolute iron -translate-y-32 -translate-x-20 z-10"
            />
            <Image
              src={pcb}
              alt="Picture of the author"
              width={100}
              height={100}
              className="absolute pcb -translate-y-1/2"
            />
            <div
              className={`${
                spark ? "opacity-100 animate-pulse" : "opacity-0 animate-none"
              } absolute spark z-10 w-3 h-3 bg-yellow-300 -top-14 left-36 rounded-full duration-75`}
            ></div>
            <span className="text-xl md:text-3xl z-20 bg-gray-400 dark:bg-slate-900 p-3 rounded border">
              Electronics Engineer
            </span>
          </div>
          <div className="relative devops flex justify-center px-3">
            <div className="absolute cloud -translate-y-28 bg-gray-900 dark:bg-gray-200 bg-opacity-50 p-3 rounded-full scale-0">
              <Image
                src={cloud}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <span className="text-xl md:text-3xl z-10 text-foreground">
              DevOps and Cloud Services
            </span>
            <div className="absolute load bg-green-800 p-3 rounded w-full h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
