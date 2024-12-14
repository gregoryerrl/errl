"use client";
import React, { useEffect, useState } from "react";
import { AuroraBackground } from "../root-components/aurora-background";
import { ModeToggle } from "../root-components/ModeToggle";
import { Dot, MoveLeft, MoveRight, MoveUpRight, Youtube } from "lucide-react";
import { TextSlideshow } from "./default-components/TextSlideshow";
import Lenis from "lenis";
import { SkillShowcase } from "./default-components/SkillShowcase";
import { YouTubeEmbed } from "@next/third-parties/google";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/app/root-components/shadcn/ui/accordion";
import Projects from "./default-components/Projects";
import Info from "./default-components/info";

export default function DefaultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 2000ms for loading + 1000ms for fade out

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  const slideshowTexts = [
    "Web Developer",
    "Designer",
    "Machine Learning",
    "Engineer",
  ];

  return (
    <div className="relative min-h-screen">
      {showLoader && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-spin rounded-full border-b-2 border-blue-500 h-8 w-8"></div>
        </div>
      )}
      <div
        className={`transition-opacity duration-1000 ease-in-out bg-background dark:bg-slate-900 font-consolas transition-colors  text-gray-600 dark:text-gray-100 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {" "}
        <div className="fixed max-h-[10vh] w-full bg-transparent top-0 p-3 grid grid-cols-2 md:grid-cols-3 z-50 bg-background/5 backdrop-blur-sm">
          <div className="items-center gap-2 hidden md:flex h-full">
            <ModeToggle switch />
            <div className="border rounded-full px-3 py-1 text-xs bg-background/50 font-thin flex items-center justify-center w-72">
              <span>gregoryerrl</span>
              <span className="mx-3">|</span>
              <span className="flex items-center text-green-600">
                <Dot /> available for work
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 relative h-full">
            <a
              className="cursor-pointer hover:tracking-widest tracking-tight transition-all duration-300 flex items-center justify-self-end mr-2"
              href="#projects"
            >
              Work
            </a>
            <span className="mx-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              |
            </span>
            <a
              typeof="button"
              className="cursor-pointer hover:tracking-widest tracking-tight transition-all duration-300 flex items-center ml-4"
              href="#expertise"
            >
              Expertise
            </a>
          </div>

          <a
            className="flex items-center justify-end px-5 cursor-pointer"
            href="#contact"
          >
            <span className="flex gap-2 items-center justify-between text-xs bg-foreground/50 text-background px-5 py-2 rounded-full w-56">
              Get in touch <MoveLeft className="w-3 h-3" />
            </span>
          </a>
        </div>
        <AuroraBackground>
          <section className="w-screen h-screen z-10 relative text-gray-600 dark:text-gray-100">
            {/* <p
              className="absolute bottom-5 left-5 opacity-40 dark:opacity-10 font-inter tracking-tight font-thin"
              style={{ fontSize: "8rem" }}
            >
              gregory<span className="text-green-600">ERRL</span>
            </p> */}
            <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 items-center justify-center">
              <div className="flex flex-col justify-center items-center md:items-end md:w-2/3 justify-self-center md:justify-self-end">
                <p className="text-center font-inter font-light text-3xl text-center md:text-end">
                  Logic and detailed-focused{" "}
                  <span className="text-purple-600 dark:text-green-400">
                    Computer Scientist
                  </span>
                </p>
                <p className="text-center font-inter opacity-60 text-lg">
                  Straight-forward, yet organized.
                </p>
                <p className="text-center font-inter opacity-60 text-lg">
                  Technique-driven.
                </p>
              </div>
              <div className="flex justify-start items-center">
                <div className="card rounded-2xl w-80 h-52 bg-background border-2 relative mt-10 ml-10 shadow-xl">
                  <div className="card rounded-2xl w-80 h-52 bg-background border-2 absolute -top-4 -left-4 flex items-center justify-center">
                    <TextSlideshow texts={slideshowTexts} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AuroraBackground>
        <div className="min-h-screen">
          <div
            className="w-full px-5 md:px-0 md:w-1/2 mx-auto p-4 font-inter expertise flex items-center h-screen"
            id="expertise"
          >
            <SkillShowcase />
          </div>
          <div
            className="min-h-screen w-full px-5 md:px-0 md:w-7/12 mx-auto p-4"
            id="projects"
          >
            <Projects />
          </div>

          <div
            className="min-h-screen font-inter w-full px-5 md:px-0 md:w-8/12 flex mx-auto"
            id="contact"
          >
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
