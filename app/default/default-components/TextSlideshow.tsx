"use client";

import React, { useState, useEffect } from "react";

interface TextSlideshowProps {
  texts: string[];
  interval?: number;
}

export function TextSlideshow({ texts, interval = 3000 }: TextSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Half of the transition duration
    }, interval);

    return () => clearInterval(transitionInterval);
  }, [texts, interval]);

  return (
    <div className="relative h-20 flex items-center justify-center">
      <p
        className={`absolute text-3xl text-center transition-opacity duration-1000 font-inter font-thin tracking-wide ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        {texts[currentIndex]}
      </p>
    </div>
  );
}
