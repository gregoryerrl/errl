"use client";
import Nav from "@/app/components/Nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 space-y-8 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-slate-200"
    >
      <motion.div
        variants={itemVariants}
        className="rpg-frame p-6 w-full max-w-2xl text-center space-y-6"
      >
        <h1 className="text-4xl font-bold rpg-text-shadow">Hello There!</h1>
        <p className="text-xl">
          I&apos;m Gregory! I am a Developer, and I&apos;m going to showcase my
          skills through this portfolio!
        </p>
        <p className="text-2xl font-semibold rpg-text-shadow">
          Let&apos;s Start!
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rpg-frame p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center rpg-text-shadow">
          What do you want to see first?
        </h2>
        <div className="space-y-3">
          {[
            { href: "/resume", label: "Resume" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About Me" },
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
    </motion.div>
  );
}
