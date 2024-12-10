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
export default function Info() {
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);
  const textThreeRef = useRef(null);

  // const info = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".info",
  //     start: "50% top",
  //     end: "=+100%",
  //     scrub: 1,
  //   },
  // });

  return (
    <>
      <section className="info absolute w-screen h-screen relative flex justify-center items-center">
        Info
      </section>
    </>
  );
}
