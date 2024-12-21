import { useState, useMemo } from "react";

export type LayoutStyle = {
  name: string;
  containerStyle: string;
  headerStyle: string;
  titleStyle: string;
  navStyle: string;
  contentStyle: string;
};

const layoutStyles: LayoutStyle[] = [
  {
    name: "Standard",
    containerStyle: "flex-col h-full",
    headerStyle: "flex justify-between items-center mb-4",
    titleStyle: "",
    navStyle: "flex space-x-2",
    contentStyle: "flex-1",
  },
  {
    name: "Stacked",
    containerStyle: "flex-col h-full",
    headerStyle: "flex-col items-center mb-4",
    titleStyle: "mb-2",
    navStyle: "flex space-x-2",
    contentStyle: "flex-1",
  },
  {
    name: "Sidebar",
    containerStyle: "flex-row h-full",
    headerStyle: "flex-col w-30 mr-4",
    titleStyle: "mb-4",
    navStyle: "flex flex-col space-y-2",
    contentStyle: "flex-1",
  },
];

export function useLayoutStyles() {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentStyle = useMemo(
    () => layoutStyles[currentStyleIndex],
    [currentStyleIndex]
  );

  const changeStyle = (index: number) => {
    setCurrentStyleIndex(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return {
    layoutStyles,
    currentStyle,
    changeStyle,
    isMobileMenuOpen,
    toggleMobileMenu,
  };
}
