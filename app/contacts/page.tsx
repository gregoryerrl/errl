"use client";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full"
    >
      More
    </motion.div>
  );
}
