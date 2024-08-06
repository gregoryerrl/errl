"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import graduate from "@/app/assets/images/graduate.png";
import statistics from "@/app/assets/images/statistics.png";
import iotcon from "@/app/assets/images/iotcon.png";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Resume() {
  const [selectTab, setSelectTab] = useState("");

  const toggleTab = (tab: string) => {
    setSelectTab(selectTab === tab ? "" : tab);
  };

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
            <span
              className="text-xl mt-5 flex gap-x-2 items-center cursor-pointer hover:text-blue-500"
              onClick={() => toggleTab("Web")}
            >
              Web Development{" "}
              {selectTab === "Web" ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </span>
            <div
              style={{
                height: selectTab === "Web" ? "60px" : "0px",
                transition: "height 0.5s ease",
                overflow: "hidden",
              }}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-xs">AngularJS / ReactJS / NextJS</span>
              <span className="text-xs">HTML / CSS / TypeScript</span>
              <span className="text-xs">WordPress / NodeJS / SQL</span>
              <span className="text-xs">PHP / Laravel / C#</span>
            </div>

            <span
              className="text-xl mt-5 flex gap-x-2 items-center cursor-pointer hover:text-blue-500"
              onClick={() => toggleTab("Software")}
            >
              Software Development
              {selectTab === "Software" ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </span>
            <div
              style={{
                height: selectTab === "Software" ? "60px" : "0px",
                transition: "height 0.5s ease",
                overflow: "hidden",
              }}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-xs">Java / Python / C++</span>
              <span className="text-xs">.NET / Ruby / Go</span>
              <span className="text-xs">Spring / Django / Flask</span>
            </div>

            <span
              className="text-xl mt-5 flex gap-x-2 items-center cursor-pointer hover:text-blue-500"
              onClick={() => toggleTab("Mobile")}
            >
              Mobile Development{" "}
              {selectTab === "Mobile" ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </span>
            <div
              style={{
                height: selectTab === "Mobile" ? "60px" : "0px",
                transition: "height 0.5s ease",
                overflow: "hidden",
              }}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-xs">Flutter / React Native</span>
              <span className="text-xs">Swift / Kotlin</span>
              <span className="text-xs">iOS / Android</span>
            </div>

            <span
              className="text-xl mt-5 flex gap-x-2 items-center cursor-pointer hover:text-blue-500"
              onClick={() => toggleTab("Prototype")}
            >
              Prototype Development{" "}
              {selectTab === "Prototype" ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </span>
            <div
              style={{
                height: selectTab === "Prototype" ? "60px" : "0px",
                transition: "height 0.5s ease",
                overflow: "hidden",
              }}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-xs">Arduino / Raspberry Pi</span>
              <span className="text-xs">3D Printing</span>
              <span className="text-xs">IoT Prototyping</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
