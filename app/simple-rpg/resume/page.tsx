"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Award,
  Briefcase,
  Code,
  Smartphone,
  Cpu,
  LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/root-components/shadcn/ui/card";
import { Button } from "@/app/root-components/shadcn/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/root-components/shadcn/ui/accordion";

// Assume these imports are correct
import graduate from "@/app/simple-rpg/assets/images/graduate.png";
import statistics from "@/app/simple-rpg/assets/images/statistics.png";
import iotcon from "@/app/simple-rpg/assets/images/iotcon.png";

interface RPGSectionProps {
  title: string;
  children: React.ReactNode;
}

const RPGSection: React.FC<RPGSectionProps> = ({ title, children }) => (
  <Card className="mb-8 bg-card border-primary/20 shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

interface SkillTabProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillTab: React.FC<SkillTabProps> = ({ title, icon: Icon, skills }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground">
      <span className="flex items-center">
        <Icon className="mr-2" size={18} />
        {title}
      </span>
    </AccordionTrigger>
    <AccordionContent>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </AccordionContent>
  </AccordionItem>
);

const Resume: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-none text-foreground p-8 ${theme}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <RPGSection title="Character Stats">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Image
              src={graduate}
              alt="Graduate"
              width={200}
              height={200}
              className="rounded border border-primary mb-4 md:mr-6"
            />
            <div>
              <p className="text-xl mb-2">
                <span className="font-bold text-green-700 dark:text-green-400">
                  CUM LAUDE
                </span>{" "}
                Graduate
              </p>
              <p className="mb-2">
                GWA:{" "}
                <span className="font-bold text-green-700 dark:text-green-400">
                  1.4
                </span>
              </p>
              <p className="text-muted-foreground">
                STI College Ortigas-Cainta - Cainta, Rizal Philippines
              </p>
            </div>
          </div>
        </RPGSection>

        <RPGSection title="Achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold mb-2">HUAWEI Certified IT Associate</p>
                <p className="text-sm text-muted-foreground">
                  Issued by HUAWEI, 2023
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold mb-2">
                  PSA Quizbee Regionals Semi-Finalist
                </p>
                <p className="text-sm text-muted-foreground">2019</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold mb-2">Packetworx IoTCon Finalist</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </CardContent>
            </Card>
          </div>
        </RPGSection>

        <RPGSection title="Quest Log (Work Experience)">
          <div className="space-y-4">
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold">Tech Specialist Agent</p>
                <p className="text-sm text-muted-foreground">TMobile - 2022</p>
                <p className="text-xs text-muted-foreground">
                  Skill: Troubleshooting
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold">Intern/Student Web Developer</p>
                <p className="text-sm text-muted-foreground">MoveUp - 2022</p>
                <p className="text-xs text-muted-foreground">
                  Skills: AngularJS / NodeJS
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <p className="font-bold">Freelancer</p>
                <p className="text-sm text-muted-foreground">2023-2024</p>
              </CardContent>
            </Card>
          </div>
        </RPGSection>

        <RPGSection title="Skill Tree">
          <Accordion type="single" collapsible className="w-full">
            <SkillTab
              title="Web Development"
              icon={Code}
              skills={[
                "AngularJS / ReactJS / NextJS / VueJS",
                "HTML / CSS / TypeScript",
                "WordPress / NodeJS / SQL",
                "PHP / Laravel / C#",
              ]}
            />
            <SkillTab
              title="Software Development"
              icon={Briefcase}
              skills={[
                "Java / Python / C++",
                ".NET / Ruby / Go",
                "Spring / Django / Flask",
              ]}
            />
            <SkillTab
              title="Mobile Development"
              icon={Smartphone}
              skills={[
                "Flutter / React Native",
                "Swift / Kotlin",
                "iOS / Android",
              ]}
            />
            <SkillTab
              title="Prototype Development"
              icon={Cpu}
              skills={[
                "Arduino / Raspberry Pi",
                "3D Printing",
                "IoT Prototyping",
              ]}
            />
          </Accordion>
        </RPGSection>
      </motion.div>
    </div>
  );
};

export default Resume;
