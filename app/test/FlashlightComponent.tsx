"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import flashlight from "./flashlight.png";
import Image from "next/image";

export default function Flashlight({ className }: { className?: string }) {
  const flashlightRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (flashlightRef.current) {
      setHeight(flashlightRef.current.height);
    }
  }, [flashlightRef]);

  return (
    <div className={`${className} relative`}>
      <Image
        src={flashlight}
        alt="flashlight"
        className="absolute bottom-0 w-auto h-1/4"
        ref={flashlightRef}
      />
      <div className="absolute left-0 right-0" style={{ top: -height }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon
            points="0,0 100,0 85,100 15,100"
            fill="black"
            opacity={0.5}
          />
        </svg>
      </div>
    </div>
  );
}
