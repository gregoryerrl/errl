"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/app/root-components/shadcn/ui/card";
import Link from "next/link";
import { Download } from "lucide-react";
import ContactForm from "@/app/simple-rpg/rpg-components/ContactForm";

export default function Info() {
  const technologies = ["NextJS", "TailwindCSS", "ShadCN", "Lucide", "Figma"];

  return (
    <section className="info w-full min-h-screen bg-none text-primary flex flex-col z-30">
      <div className="flex w-full mb-10">
        <div className="w-full mx-auto px-4 py-8">
          <div className="w-full mb-10">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Send me a message
            </h3>

            <ContactForm />
          </div>
          <div className="flex flex-col justify-between gap-y-10 w-1/2 mx-auto">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/gregoryerrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/gregoryerrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:gregoryerrl@gmail.com"
                  className="flex items-center space-x-2 hover:text-primary"
                >
                  <FaEnvelope className="text-xl" />
                  <span className="text-sm">gregoryerrl@gmail.com</span>
                </a>
                <Link
                  href="/files/gregoryerrl.pdf"
                  className="flex gap-2 items-center text-sm"
                  download="GregoryErrl_Resume.pdf"
                  target="_blank"
                >
                  <Download className="w-4 h-4" /> Download my Latest CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-10 bg-none">
        <CardContent className="p-4">
          <h3 className="text-lg md:text-xl font-light mb-2">
            Technologies Used
          </h3>
          <p className="mb-2 text-sm">This portfolio was built using:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
      <footer className="bg-muted py-3 text-center absolute bottom-0 left-0 w-full">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Gregory Errl Babela. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
}
