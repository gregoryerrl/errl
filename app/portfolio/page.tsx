"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
        className="border flex flex-col rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full py-32 px-20 mt-5"
      >
        <span className="text-3xl w-full text-center mb-20">
          Professional Projects
        </span>
        <div className="w-full grid grid-cols-2 gap-y-32 gap-x-40">
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.deventa.com.au/"}
              className="text-3xl hover:text-blue-500 flex items-center"
              target="_blank"
            >
              Deventa <ExternalLink className="w-3 h-3 ms-3" />
            </Link>
            <span className="text-center text-sm border-b pb-2 mb-2">
              A subscription-based courseware site where team leaders create and
              manage training courses for their team.
            </span>
            <span className="text-xs">NextJS / MongoDB</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.eucannajobs.com/"}
              className="text-3xl hover:text-blue-500 flex items-center"
              target="_blank"
            >
              EuCannaJobs <ExternalLink className="w-3 h-3 ms-3" />
            </Link>
            <span className="text-center text-sm border-b pb-2 mb-2">
              A subscription-based courseware site where team leaders create and
              manage training courses for their team.
            </span>
            <span className="text-xs">AngularJS</span>
          </div>{" "}
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://www.gwana.app/"}
              className="text-3xl hover:text-blue-500 flex items-center"
              target="_blank"
            >
              Gwana <ExternalLink className="w-3 h-3 ms-3" />
            </Link>
            <span className="text-center text-sm border-b pb-2 mb-2">
              A platform for booking technicians online to repair and service
              your gadgets.
            </span>
            <span className="text-xs">AngularJS / Flutter</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"https://fisherees.onrender.com/"}
              className="text-3xl hover:text-blue-500 flex items-center"
              target="_blank"
            >
              fEEsheries <ExternalLink className="w-3 h-3 ms-3" />
            </Link>

            <span className="text-center text-sm border-b pb-2 mb-2">
              An IoT dashboard for monitoring and managing fishpond conditions
              in real-time.
            </span>
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
