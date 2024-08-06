"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import graduate from "@/app/assets/images/graduate.png";
import statistics from "@/app/assets/images/statistics.png";
import iotcon from "@/app/assets/images/iotcon.png";

export default function Resume() {
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
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full py-32 px-20"
      >
        <div className="w-full flex">
          <Image
            src={graduate}
            alt="Picture of the author"
            className="w-1/3 h-auto rounded border"
          />
          <div className="w-2/3 flex flex-col px-8 space-y-5">
            <div className="flex flex-col">
              <span className="text-xl font-thin">
                Graduated <span className="font-bold border-b">CUM LAUDE</span>{" "}
                with a GWA of <span className="font-bold border-b">1.4</span>
              </span>
              <span>
                STI College Ortigas-Cainta - Cainta, Rizal Philippines
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-thin">
                HUAWEI Certified IT Associate
              </span>
              <span>Issued by HUAWEI, 2023</span>
            </div>
            <div className="w-full flex gap-x-5 items-center justify-center">
              <span className="text-xl font-thin">
                PSA Quizbee Regionals Semi-Finalist, 2019
              </span>
              <Image
                src={statistics}
                alt="Picture of the author"
                className="h-60 w-auto rounded border"
              />
            </div>
            <div className="w-full flex gap-x-5 items-center justify-center">
              <Image
                src={iotcon}
                alt="Picture of the author"
                className="h-48 w-auto rounded border"
              />
              <span className="text-xl font-thin">
                Packetworx IoTCon Finalist, 2023
              </span>
            </div>
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
        className="border rounded bg bg-slate-50 shadow-md dark:bg-gray-950 w-full py-32 mt-5"
      >
        <div className="w-full flex flex-col items-center justify-center space-y-16">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl">Tech Specialist Agent </span>
            <span className="text-xl">TMobile - 2022</span>
            <span className="text-xs">Troubleshooting</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl">Intern/Student Web Developer</span>
            <span className="text-xl">MoveUp - 2022</span>
            <span className="text-xs">AngularJS / NodeJS</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl">Freelancer - 2023-2024</span>
            <span className="text-xl mt-5">Web Development</span>
            <span className="text-xs">AngularJS / ReactJS / NextJS</span>
            <span className="text-xs">HTML / CSS / TypeScript</span>
            <span className="text-xs">Wordpress / NodeJS / SQL</span>
            <span className="text-xs">PHP / Laravel / C#</span>

            <span className="text-xl mt-5">Software Development</span>
            <span className="text-xs">C++ / Java / C</span>
            <span className="text-xs">WinForms / WPF / .net </span>

            <span className="text-xl mt-5">Mobile App Development</span>
            <span className="text-xs">Kotlin / Java </span>
            <span className="text-xs">
              ReactNative / AndroidStudio / Flutter
            </span>

            <span className="text-xl mt-5">Prototype Engineer</span>
            <span className="text-xs">Arduino / Python </span>
            <span className="text-xs">Circuit Design / Electronics </span>
            <span className="text-xs">Product Design / CAD </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
