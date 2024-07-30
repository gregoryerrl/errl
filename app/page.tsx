"use client";
import Nav from "@/app/components/Nav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2, // 1 second delay between each child
        delayChildren: 0.3, // Initial delay before the first child appears
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 w-full flex flex-col items-center justify-center" // Add some vertical spacing between elements
    >
      <motion.div
        variants={itemVariants}
        className="w-full flex justify-center text-3xl"
      >
        Hello There!
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full flex justify-center text-3xl text-center"
      >
        I&apos;m Gregory! I am a Developer, and I&apos;m going to showcase my
        skills through this portfolio!
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full flex justify-center text-3xl"
      >
        Let&apos;s Start!
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-1/3 flex flex-col items-center justify-center border rounded bg bg-slate-50 dark:bg-gray-950 space-y-3 py-4"
      >
        <span className="text-xl">What do you want to see first?</span>
        <Link href="/resume" className="hover:text-blue-500">
          Resume {">"}
        </Link>
        <Link href="/portfolio" className="hover:text-blue-500">
          Portfolio {">"}
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          About Me {">"}
        </Link>
      </motion.div>
    </motion.div>
  );
}
