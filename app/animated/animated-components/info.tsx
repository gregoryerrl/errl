"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/app/root-components/shadcn/ui/button";
import { Textarea } from "@/app/root-components/shadcn/ui/textarea";
import { Input } from "@/app/root-components/shadcn/ui/input";
import { Card, CardContent } from "@/app/root-components/shadcn/ui/card";
import Link from "next/link";
import { Download } from "lucide-react";
import ContactForm from "@/app/simple-rpg/rpg-components/ContactForm";

export default function Info() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email, for example using an API route
    console.log("Sending email:", email, message);
    // Reset form
    setEmail("");
    setMessage("");
  };

  const technologies = [
    "NextJS",
    "GSAP",
    "TailwindCSS",
    "ShadCN",
    "Lucide",
    "Figma",
  ];

  return (
    <section className="info w-full min-h-screen bg-background text-foreground flex flex-col z-50">
      <div className="flex-grow overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="mb-10">
            <CardContent className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
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
          <h2 className="text-2xl md:text-3xl font-bold my-10 text-center">
            Get in Touch
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
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
              </div>

              <Link
                href="/files/gregoryerrl.pdf"
                className="flex gap-2 mt-4"
                download="GregoryErrl_Resume.pdf"
                target="_blank"
              >
                <Download /> Download my Latest CV
              </Link>
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Send me a message
              </h3>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-muted py-3 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Gregory Errl Babela. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
}
