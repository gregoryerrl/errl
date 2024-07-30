"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-28"
      >
        <div className="w-full flex flex-col space-y-2">
          <span className="text-2xl">
            &quot;Everything I&apos;ve done, I did with{" "}
            <span className="font-bold border-b">Absolute Professionalism</span>
            &quot;
          </span>
          <span>Here are some of my works which I can share with you</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full py-32 mt-5"
      >
        <div className="w-full flex flex-col items-center justify-center space-y-16">
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.deventa.com.au/"}
              className="text-3xl hover:text-blue-500"
              target="_blank"
            >
              Deventa
            </Link>
            <span className="text-xl">Full Development</span>
            <span className="text-xs">NextJS / MongoDB</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.eucannajobs.com/"}
              className="text-3xl hover:text-blue-500"
              target="_blank"
            >
              EuCannaJobs
            </Link>
            <span className="text-xl">Featured Project</span>
            <span className="text-xs">AngularJS</span>
          </div>{" "}
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.gwana.app/"}
              className="text-3xl hover:text-blue-500"
              target="_blank"
            >
              Gwana
            </Link>
            <span className="text-xl">Featured Project</span>
            <span className="text-xs">AngularJS / Flutter</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://fisherees.onrender.com/"}
              className="text-3xl hover:text-blue-500"
              target="_blank"
            >
              fEEsheries
            </Link>
            <span className="text-xl">IoT Integration</span>
            <span className="text-xs">Arduino / Google Firebase</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full p-10 mt-5"
      >
        If you want demonstrations on projects other than web development, you
        can visit my facebook page: {""}
        <Link
          href={"https://www.facebook.com/profile.php?id=61561140459216"}
          target="_blank"
          className="font-bold hover:text-blue-500"
        >
          TekniWorks
        </Link>
      </motion.div>
    </div>
  );
}
