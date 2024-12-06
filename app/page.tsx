"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowBigDown,
  ChevronRight,
  MousePointer2,
  Pointer,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./root-components/shadcn/ui/select";
import { ModeToggle } from "./root-components/ModeToggle";
import light from "./e-light.png";
import dark from "./e-dark.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "@/app/root-components/aurora-background";

export default function Home() {
  const [mode, setMode] = useState("Default");
  const [isHovered, setIsHovered] = useState(true);
  const router = useRouter();

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
    console.log(newMode);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Hovered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Not Hovered");
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AuroraBackground hidden={mode !== "Default"} mobile>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen w-full flex flex-col items-center justify-center py-12 space-y-8 text-slate-800 dark:text-slate-200"
      >
        {/*
      
      
        █████████   █████                         █████   
       ███░░░░░███ ░░███                         ░░███    
      ░███    ░░░  ███████    ██████   ████████  ███████  
      ░░█████████ ░░░███░    ░░░░░███ ░░███░░███░░░███░   
       ░░░░░░░░███  ░███      ███████  ░███ ░░░   ░███    
       ███    ░███  ░███ ███ ███░░███  ░███       ░███ ███
      ░░█████████   ░░█████ ░░████████ █████      ░░█████ 
       ░░░░░░░░░     ░░░░░   ░░░░░░░░ ░░░░░        ░░░░░
        */}
        <div
          className="absolute top-4 right-50 flex items-center flex min-h-[10vh] hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`${
              isHovered ? "opacity-100" : "opacity-0"
            } w-full flex gap-5 items-center justify-center transition-all duration-300`}
          >
            <Select onValueChange={handleModeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Simple RPG">Simple RPG</SelectItem>
                </div>
              </SelectContent>
            </Select>
            <ModeToggle className="" />
          </div>
        </div>{" "}
        <div className="absolute top-4 right-50 flex items-center flex min-h-[10vh] block md:hidden">
          <div
            className={`w-full flex gap-5 items-center justify-center transition-all duration-300`}
          >
            <Select onValueChange={handleModeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <div>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Simple RPG">Simple RPG</SelectItem>
                </div>
              </SelectContent>
            </Select>
            <ModeToggle className="" />
          </div>
        </div>
        {/*
      
      
       ███████████                    
      ░░███░░░░░███                   
       ░███    ░███ ████████   ██████ 
       ░██████████ ░░███░░███ ███░░███
       ░███░░░░░░   ░███ ░░░ ░███ ░███
       ░███         ░███     ░███ ░███
       █████        █████    ░░██████ 
      ░░░░░        ░░░░░      ░░░░░░
        */}
        {mode === "Default" && (
          <>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center w-full"
            >
              <div className="relative flex flex-col items-center justify-center">
                <Pointer className="animate-bounce absolute -bottom-20  w-10 h-10 opacity-40 dark:opacity-10" />
                <Image
                  src={light}
                  alt="Picture of the author"
                  className="w-auto h-[30vh] rounded dark:hidden hover:scale-125 cursor-pointer transition-all duration-300 z-10"
                  onClick={() => router.push("/default")}
                />
                <Image
                  src={dark}
                  alt="Picture of the author"
                  className="w-auto h-[30vh] rounded hidden dark:block hover:scale-125 cursor-pointer transition-all duration-300 z-10"
                  onClick={() => router.push("/default")}
                />
                <div className="absolute w-2/3 h-2/3 bg-black dark:bg-foreground rounded-full animate-ping hover:animate-none absolute opacity-75"></div>
              </div>
            </motion.div>
          </>
        )}
        {/*
      
      
       ███████████   ███████████    █████████ 
      ░░███░░░░░███ ░░███░░░░░███  ███░░░░░███
       ░███    ░███  ░███    ░███ ███     ░░░ 
       ░██████████   ░██████████ ░███         
       ░███░░░░░███  ░███░░░░░░  ░███    █████
       ░███    ░███  ░███        ░░███  ░░███ 
       █████   █████ █████        ░░█████████ 
      ░░░░░   ░░░░░ ░░░░░          ░░░░░░░░░
        */}
        {mode === "Simple RPG" && (
          <>
            <motion.div
              variants={itemVariants}
              className="rpg-frame p-1 w-full max-w-2xl text-center space-y-6 font-tiny5"
            >
              <h1 className="text-4xl font-bold rpg-text-shadow">
                Hello There!
              </h1>
              <p className="text-xl">
                I&apos;m Gregory! I am a Developer, and I&apos;m going to
                showcase my skills through this portfolio!
              </p>
              <p className="text-2xl font-semibold rpg-text-shadow">
                Let&apos;s Start!
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="rpg-frame p-1 w-full max-w-md font-tiny5"
            >
              <h2 className="text-xl font-semibold mb-4 text-center rpg-text-shadow">
                What do you want to see first?
              </h2>
              <div className="space-y-3">
                {[
                  { href: "/simple-rpg/resume", label: "Resume" },
                  { href: "/simple-rpg/portfolio", label: "Portfolio" },
                  { href: "/simple-rpg/about", label: "About Me" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rpg-button flex items-center justify-between w-full p-3 transition-all duration-300 hover:translate-x-2"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </AuroraBackground>
  );
}
