"use client";
import { ModeToggle } from "@/app/components/ModeToggle";
import { Github, Facebook, Mail, Send, FileQuestion } from "lucide-react";
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

export default function Nav() {
  return (
    <nav className="flex h-[20vh] w-full container gap-x-3 pt-3 font-consolas dark:text-slate-400">
      <div className="flex items-center justify-center border shadow-md rounded w-1/2 h-full p-2 bg-slate-50 dark:bg-gray-950">
        <div className="w-1/5 h-full">
          <Image
            src={profile}
            alt="Picture of the author"
            className="h-full w-auto rounded border hover:scale-300 transition ease-in-out hover:translate-y-20 hover:translate-x-20 duration-500"
          />
        </div>

        <div className="flex flex-col justify-center w-4/5 h-full space-y-4 py-2">
          <h1 className="w-full text-center md:text-3xl">
            Gregory{" "}
            <span className="dark:text-slate-200 text-cyan-500">Errl</span>{" "}
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
      <div className="flex border shadow-md rounded w-1/2 h-full p-2 bg-slate-50 dark:bg-gray-950">
        <div className="w-4/5 grid grid-cols-2 gap-4 h-full">
          <Link href="/resume" prefetch={true}>
            <Button variant="secondary" className="border-2 w-full">
              Resume
            </Button>
          </Link>
          <Link href="/portfolio" prefetch={true}>
            <Button variant="secondary" className="border-2 w-full">
              Portfolio
            </Button>
          </Link>
          <Link href="/about" prefetch={true}>
            <Button variant="secondary" className="border-2 w-full">
              About
            </Button>
          </Link>
          <Link href="/contacts" prefetch={true}>
            <Button variant="secondary" className="border-2 w-full">
              Contacts
            </Button>
          </Link>
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
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a
                    href="https://ui.shadcn.com/"
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
  );
}
