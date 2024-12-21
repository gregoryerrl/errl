"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LayoutStyle } from "../hooks/useLayoutStyle";

type LayoutPreviewProps = {
  style: LayoutStyle;
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export function LayoutPreview({
  style,
  isMobile,
  isMobileMenuOpen,
  toggleMobileMenu,
}: LayoutPreviewProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`bg-gray-200 dark:bg-background p-2 rounded-lg ${
        isMobile ? "w-64 h-96" : "w-96 h-64"
      }`}
    >
      <div className={`flex ${style.containerStyle} h-full`}>
        {isMobile ? (
          <>
            <div
              className={` ${
                style.name === "Sidebar" ? "hidden" : ""
              } flex justify-between items-center w-full mb-4`}
            >
              <motion.div
                layout
                className={` bg-blue-500 dark:bg-blue-900 text-white p-2 rounded text-sm`}
              >
                Title
              </motion.div>
              <button onClick={toggleMobileMenu} className="p-2 rounded-full">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full mb-4"
                >
                  <div
                    className={`${style.navStyle} ${
                      style.name === "Sidebar" ? "mx-2" : ""
                    } flex-col space-y-2`}
                  >
                    <div
                      className={` ${
                        style.name === "Sidebar" ? "mb-2" : "hidden"
                      } bg-blue-500 dark:bg-blue-900 text-white p-2 rounded text-sm`}
                    >
                      Title
                    </div>
                    <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                      Nav 1
                    </div>
                    <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                      Nav 2
                    </div>
                    <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                      Nav 3
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <motion.div layout className={`${style.headerStyle}`}>
            <motion.div
              layout
              className={`${style.titleStyle}  bg-blue-500 dark:bg-blue-900 text-white p-2 rounded text-sm`}
            >
              Title
            </motion.div>
            <motion.div layout className={`${style.navStyle}`}>
              <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                Nav 1
              </div>
              <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                Nav 2
              </div>
              <div className="bg-green-500 dark:bg-purple-900 text-white p-1 rounded text-xs">
                Nav 3
              </div>
            </motion.div>
          </motion.div>
        )}
        <motion.div
          layout
          className={`${style.contentStyle} bg-secondary p-2 rounded-lg text-xs`}
        >
          <div className="flex flex-col">
            <button
              onClick={toggleMobileMenu}
              className={` ${
                isMobile && style.name === "Sidebar" ? "" : "hidden"
              } p-2 rounded-full`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            Main Content
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
