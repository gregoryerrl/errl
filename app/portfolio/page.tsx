"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/shadcn/ui/card";
import { Button } from "@/app/components/shadcn/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => (
  <Card className="bg-card/50 hover:bg-card/70 transition-colors duration-200">
    <CardContent className="pt-6 flex flex-col items-center justify-center h-full">
      <Link
        href={link}
        className="text-2xl font-bold text-primary hover:text-primary/80 flex items-center mb-4"
        target="_blank"
      >
        {title} <ExternalLink className="w-4 h-4 ml-2" />
      </Link>
      <p className="text-center text-sm text-muted-foreground border-b border-primary/20 pb-2 mb-2">
        {description}
      </p>
      <span className="text-xs text-accent-foreground">{technologies}</span>
    </CardContent>
  </Card>
);

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

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-background text-foreground p-8 ${theme}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <RPGSection title="Quest Log">
          <div className="text-center space-y-4">
            <p className="text-xl">
              &quot;Everything I&apos;ve done, I did with{" "}
              <span className="font-bold text-primary border-b border-primary">
                Absolute Professionalism
              </span>
              &quot;
            </p>
            <p className="text-muted-foreground">
              Here are some of my works which I can share with you
            </p>
          </div>
        </RPGSection>

        <RPGSection title="Professional Quests (Work Experience)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Deventa"
              description="A subscription-based courseware site where team leaders create and manage training courses for their team."
              technologies="NextJS / MongoDB"
              link="https://www.deventa.com.au/"
            />
            <ProjectCard
              title="EuCannaJobs"
              description="A specialized platform for finding cannabis-related jobs around Europe."
              technologies="AngularJS"
              link="https://www.eucannajobs.com/"
            />
            <ProjectCard
              title="Gwana"
              description="A platform for booking technicians online to repair and service your gadgets."
              technologies="AngularJS / Flutter"
              link="https://www.gwana.app/"
            />
            <ProjectCard
              title="Kreel"
              description="A platform for various AI Tools"
              technologies="NextJS / REST API"
              link="https://kreel.vercel.app/"
            />
          </div>
        </RPGSection>

        <RPGSection title="Side Quests">
          <p className="text-center text-muted-foreground">
            If you want demonstrations on projects other than web development,
            you can visit my facebook page:{" "}
            <Link
              href="https://www.facebook.com/profile.php?id=61561140459216"
              target="_blank"
              className="font-bold text-primary hover:text-primary/80"
            >
              TekniWorks
            </Link>
          </p>
        </RPGSection>
      </motion.div>
    </div>
  );
}
