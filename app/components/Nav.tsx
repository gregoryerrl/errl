"use client";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/app/components/ModeToggle";
import {
  Github,
  Facebook,
  Mail,
  Send,
  FileQuestion,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import profile from "@/app/assets/images/profile.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/shadcn/ui/dropdown-menu";
import { Button } from "./shadcn/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isResume = pathname === "/resume";
  const isPortfolio = pathname === "/portfolio";
  const isAbout = pathname === "/about";
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full"
    >
      <nav
        className={`flex w-full gap-x-3 font-consolas dark:text-slate-400 transition-all duration-300 ${
          isHomePage ? "hidden" : "h-[20vh]"
        }`}
      >
        <div
          className={`flex items-center justify-center border shadow-md rounded w-1/2 h-full p-2 ${
            isHomePage
              ? "bg-transparent border-none shadow-none"
              : "bg-slate-50 dark:bg-gray-950"
          }`}
        >
          <div className="w-1/5 h-full">
            <Image
              src={profile}
              alt="Picture of the author"
              className="h-full w-auto rounded border"
            />
          </div>

          <div className="flex flex-col justify-center w-4/5 h-full space-y-4 py-2">
            <h1 className="w-full text-center md:text-3xl">
              Gregory{" "}
              <Link href="/" className="dark:text-slate-200 text-cyan-500">
                Errl
              </Link>{" "}
              Serrano Babela
            </h1>
            <div className="flex justify-around px-20">
              <a href="https://github.com/gregoryerrl" target="_blank">
                <Github className="w-5 h-5 hover:scale-150 transition ease-in-out duration-300" />
              </a>
              <a href="https://www.facebook.com/gregoryerrl/" target="_blank">
                <Facebook className="w-5 h-5 hover:scale-150 transition ease-in-out duration-300" />
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Mail className="w-5 h-5 hover:scale-150 transition ease-in-out duration-300" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="p-5">gregoryerrl@gmail.com</div>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Send className="w-5 h-5 hover:scale-150 transition ease-in-out duration-300" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="p-5 flex flex-col items-center justify-center">
                    <span>Philippines</span>
                    <span>+639297894257</span>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div
          className={`flex border shadow-md rounded w-1/2 h-full p-2 ${
            isHomePage
              ? "bg-transparent border-none shadow-none"
              : "bg-slate-50 dark:bg-gray-950"
          }`}
        >
          <div className="w-4/5 flex justify-around items-center h-full">
            <div className="flex flex-col justify-center items-center hover:text-blue-500 transition duration-200">
              <ChevronDown
                className={`w-3 h-3 ${isResume ? "block" : "hidden"}`}
              />
              <Link href="/resume" prefetch={true}>
                Resume
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center hover:text-blue-500 transition duration-200">
              <ChevronDown
                className={`w-3 h-3 ${isPortfolio ? "block" : "hidden"}`}
              />
              <Link href="/portfolio" prefetch={true}>
                Portfolio
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center hover:text-blue-500 transition duration-200">
              <ChevronDown
                className={`w-3 h-3 ${isAbout ? "block" : "hidden"}`}
              />
              <Link href="/about" prefetch={true}>
                About
              </Link>
            </div>
          </div>
          <div className="w-1/5 p-1 px-4">
            <div className="items-center justify-center flex flex-col space-y-1 h-full py-1">
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-3/4">
                    <FileQuestion />
                    <span className="sr-only">About</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    Technologies Used in this Portfolio
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="https://nextjs.org/" target="_blank">
                      NextJS
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://lucide.dev/" target="_blank">
                      Lucide-React
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://ui.shadcn.com/" target="_blank">
                      ShadCN UI
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://www.framer.com/motion/" target="_blank">
                      Framer Motion
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://www.emailjs.com/" target="_blank">
                      EmailJS
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://vercel.com/" target="_blank">
                      Vercel
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a
                      href="https://github.com/gregoryerrl/errl"
                      target="_blank"
                      className="flex gap-x-2"
                    >
                      <Github className="h-5 w-5" />
                      Portfolio Repository
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
