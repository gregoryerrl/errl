"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="border rounded bg bg-slate-50 dark:bg-gray-950 w-full"
    >
      Resume
    </motion.div>
  );
}
