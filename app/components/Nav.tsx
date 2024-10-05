"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Facebook,
  Mail,
  Send,
  FileQuestion,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { ModeToggle } from "@/app/components/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/shadcn/ui/dropdown-menu";
import { Button } from "./shadcn/ui/button";
import profile from "@/app/assets/images/profile.png";

const socialLinks = [
  { href: "https://github.com/gregoryerrl", icon: Github, label: "GitHub" },
  {
    href: "https://www.facebook.com/gregoryerrl/",
    icon: Facebook,
    label: "Facebook",
  },
  { href: "#", icon: Mail, label: "Email", content: "gregoryerrl@gmail.com" },
  {
    href: "#",
    icon: Send,
    label: "Contact",
    content: (
      <>
        <span>Philippines</span>
        <span>+639297894257</span>
      </>
    ),
  },
];

const navLinks = [
  { href: "/resume", label: "Resume" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

const technologies = [
  { name: "NextJS", url: "https://nextjs.org/" },
  { name: "Lucide-React", url: "https://lucide.dev/" },
  { name: "ShadCN UI", url: "https://ui.shadcn.com/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "EmailJS", url: "https://www.emailjs.com/" },
  { name: "Vercel", url: "https://vercel.com/" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      <nav
        className={`flex flex-col lg:flex-row w-full gap-4 font-consolas dark:text-slate-400 transition-all duration-300 ${
          isHomePage ? "hidden" : "py-4"
        }`}
      >
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-4">
          <ProfileSection isHomePage={isHomePage} />
          <div className="lg:hidden flex justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                console.log(isMenuOpen);
              }}
              className="rpg-button"
            >
              {isMenuOpen ? <X /> : <Menu />}
              <span className="ml-2">{isMenuOpen ? "Close" : "Menu"}</span>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <NavigationSection
                isHomePage={isHomePage}
                pathname={pathname}
                setIsMenuOpen={setIsMenuOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden lg:block lg:w-1/3">
          <NavigationSection
            isHomePage={isHomePage}
            pathname={pathname}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>
    </motion.div>
  );
}

function ProfileSection({ isHomePage }: { isHomePage: boolean }) {
  return (
    <div
      className={`flex items-center rpg-border rounded w-full p-4 ${
        isHomePage
          ? "bg-transparent border-none shadow-none"
          : "bg-background shadow-lg"
      }`}
    >
      <div className="w-1/4 lg:w-1/5 mr-4 border border-primary/20 rounded">
        <Image
          src={profile}
          alt="Picture of the author"
          className="w-full h-auto rounded rpg-border"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow space-y-4">
        <h1 className="text-center text-lg lg:text-2xl 2xl:text-4xl rpg-text-shadow">
          <span className="">Player Name:</span> Gregory{" "}
          <Link href="/" className="dark:text-slate-200 text-cyan-500">
            Errl
          </Link>{" "}
          Serrano Babela
        </h1>
        <h1 className="text-center text-sm lg:text-xl 2xl:text-2xl rpg-text-shadow">
          <span className="">Job:</span> Web Developer
        </h1>
        <div className="flex justify-around">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
  content,
}: {
  href: string;
  icon: any;
  label: string;
  content?: React.ReactNode;
}) {
  if (content) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rpg-icon-button">
            <Icon className="w-5 h-5 2xl:w-8 2xl:h-8" />
            <span className="sr-only">{label}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="p-3 flex flex-col items-center justify-center rpg-text">
            {content}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="rpg-icon-button">
        <Icon className="w-5 h-5 2xl:w-8 2xl:h-8" />
        <span className="sr-only">{label}</span>
      </Button>
    </a>
  );
}

function NavigationSection({
  isHomePage,
  pathname,
  setIsMenuOpen,
}: {
  isHomePage: boolean;
  pathname: string;
  setIsMenuOpen: (isOpen: boolean) => void;
}) {
  return (
    <div
      className={`flex flex-col rpg-border rounded w-full p-4 ${
        isHomePage
          ? "bg-transparent border-none shadow-none"
          : "bg-background shadow-lg"
      }`}
    >
      <h1 className="hidden lg:block p-2 text-2xl font-black">Menu</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-0 lg:mb-5 lg:py-2 lg:border-b lg:border-t">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            {...link}
            isActive={pathname === link.href}
            onClick={() => setIsMenuOpen(false)}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <TechnologiesDropdown />
        </div>
      </div>
    </div>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center mb-2 lg:mb-0">
      <ChevronDown className={`w-3 h-3 ${isActive ? "block" : "hidden"}`} />
      <Link href={href} prefetch={true} onClick={onClick}>
        <Button
          variant="ghost"
          className={`rpg-nav-button 2xl:text-xl ${
            isActive ? "rpg-nav-button-active" : ""
          }`}
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}

function TechnologiesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rpg-button">
          Technologies
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Technologies Used:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {technologies.map((tech, index) => (
          <DropdownMenuItem key={index}>
            <Link href={tech.url} target="_blank" className="rpg-link">
              {tech.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
