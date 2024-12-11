"use client";
import Image from "next/image";
import light from "@/app/e-light.png";
import dark from "@/app/e-dark.png";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 200); // Adjust this value to control when the fade-out starts

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-background z-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <Image
          src={light}
          alt="Picture of the author"
          className="w-auto h-[30vh] rounded dark:hidden animate-spin"
        />
        <Image
          src={dark}
          alt="Picture of the author"
          className="w-auto h-[30vh] rounded hidden dark:block animate-spin"
        />
      </div>
    </div>
  );
}
