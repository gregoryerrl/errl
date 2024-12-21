"use client";

import { AnimatePresence } from "framer-motion";
import { useLayoutStyles } from "../hooks/useLayoutStyle";
import { LayoutPreview } from "./LayoutPreview";

export default function LayoutDemo() {
  const {
    layoutStyles,
    currentStyle,
    changeStyle,
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useLayoutStyles();

  return (
    <div className="min-h-screen bg-none p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-none border rounded-lg shadow-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Select Layout Style:
          </h2>
          <div className="flex flex-wrap gap-2">
            {layoutStyles.map((style, index) => (
              <button
                key={style.name}
                onClick={() => changeStyle(index)}
                className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded ${
                  currentStyle.name === style.name
                    ? "bg-blue-500 dark:bg-purple-900 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-around">
            <div>
              <AnimatePresence mode="wait">
                <LayoutPreview
                  key={`desktop-${currentStyle.name}`}
                  style={currentStyle}
                  isMobile={false}
                  isMobileMenuOpen={isMobileMenuOpen}
                  toggleMobileMenu={toggleMobileMenu}
                />
              </AnimatePresence>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <LayoutPreview
                  key={`mobile-${currentStyle.name}`}
                  style={currentStyle}
                  isMobile={true}
                  isMobileMenuOpen={isMobileMenuOpen}
                  toggleMobileMenu={toggleMobileMenu}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
