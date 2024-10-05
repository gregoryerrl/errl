"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/shadcn/ui/card";
import { Button } from "@/app/components/shadcn/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/shadcn/ui/accordion";
import ContactForm from "../components/ContactForm";

const RPGSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Card className="mb-8 bg-card border-primary/20">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

export default function About() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-background text-foreground p-8 ${theme}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <RPGSection title="Game Interface">
          <div className="text-center space-y-4">
            <p className="text-xl font-bold text-primary">Did you notice?</p>
            <p className="text-muted-foreground">
              This portfolio has a bit of a Video-Game Interface vibe to it.
              That's because gaming is my hobby! And I want to develop
              videogames someday!
            </p>
          </div>
        </RPGSection>

        <RPGSection title="Character Details">
          <p className="text-center text-muted-foreground">
            Details you might want to know about me. I made this section a
            little bit different from the usual!
          </p>
        </RPGSection>

        <RPGSection title="Character Stats">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="strengths">
              <AccordionTrigger>Strengths</AccordionTrigger>
              <AccordionContent>
                I am a sponge for knowledge, yet organized. I can learn things
                very quickly, but in a systemized way. For example when learning
                a new language or framework, I prioritize reading the official
                documentations, then search online for examples I can use. Then
                the rest is practice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="weaknesses">
              <AccordionTrigger>Weaknesses</AccordionTrigger>
              <AccordionContent>
                Hyperfixation - I tend to get overfocused when I am immersed on
                something. This can take a toll on my health. But for my
                clients, it's a plus!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </RPGSection>

        <RPGSection title="Developer FAQs">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="interest">
              <AccordionTrigger>
                "How did you become interested in web development?"
              </AccordionTrigger>
              <AccordionContent>
                I love coding itself. Whether it's software or web development.
                I love that feeling when your code just works smoothly. It's
                like I've achieved or acquired something.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="issue">
              <AccordionTrigger>
                "What do you do if you can't work out a coding issue by
                yourself?"
              </AccordionTrigger>
              <AccordionContent>
                Not to brag but this rarely happens. Sometimes it does take a
                little longer for me to solve a difficult coding issue. That's
                where my hyperfixation strives. But when it does happen. I use
                chatGPT. But I don't use it to write the code for me, I make it
                explain what my mistake is to not let it happen again in the
                future.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ai">
              <AccordionTrigger>
                "What are your thoughts on ChatGPT and other generative AIs?"
              </AccordionTrigger>
              <AccordionContent>
                I think they're great as a tool! I don't think they can replace
                developers yet. After all, they can't see what us humans can
                when it comes to arts and design.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </RPGSection>

        <RPGSection title="Character Details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Pass-time Hobbies
              </h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Gaming</li>
                <li>Literature</li>
                <li>Films and TV Shows</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-4">
                Creative Hobbies
              </h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Photography</li>
                <li>Pixel Arts</li>
                <li>Cooking</li>
                <li>3D Design and Printing</li>
              </ul>

              <h3 className="text-xl font-bold text-primary mt-6 mb-4">
                Sports
              </h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Combat Sports / Mixed-Martial Arts</li>
              </ul>
            </div>

            <div className="space-y-6">
              <Link
                href="/files/gregoryerrl.pdf"
                download="GregoryErrl_Resume.pdf"
                target="_blank"
                className="inline-flex items-center text-primary hover:text-primary/80 transition duration-300"
              >
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download my latest CV
                </Button>
              </Link>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Send me a message!
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </RPGSection>
      </motion.div>
    </div>
  );
}
