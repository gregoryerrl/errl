import React from "react";
import { SkillAccordion } from "./SkillAccordion";

const webDevSkills = [
  {
    name: "Front-end",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Angular",
      "Svelte",
      "Next.js",
      "Tailwind CSS",
      "SASS",
    ],
  },
  {
    name: "Back-end",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "Flask",
      "Ruby on Rails",
      "PHP",
      "Laravel",
      "Java",
      "Spring Boot",
      "C#",
      ".NET Core",
    ],
  },
  {
    name: "Cloud Services",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Heroku",
      "DigitalOcean",
      "Netlify",
      "Vercel",
    ],
  },
  {
    name: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "Terraform",
      "Ansible",
    ],
  },
  {
    name: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Firebase",
      "DynamoDB",
    ],
  },
];

const computerEngineeringSkills = [
  {
    name: "Machine Learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "NLTK",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "IoT",
    items: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "Zigbee",
      "LoRaWAN",
      "ESP32",
      "Bluetooth LE",
    ],
  },
  {
    name: "PCB Design",
    items: [
      "Altium Designer",
      "KiCad",
      "Eagle",
      "Fusion 360",
      "OrCAD",
      "LTspice",
    ],
  },
  {
    name: "Circuit Programming",
    items: [
      "C",
      "C++",
      "Assembly",
      "VHDL",
      "Verilog",
      "FPGAs",
      "Microcontrollers",
    ],
  },
];

export function SkillShowcase() {
  return (
    <div className="container mx-auto p-4 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-light tracking-widest mb-10 text-center">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-light mb-2">Web Development</h3>
          <SkillAccordion skills={webDevSkills} />
        </div>
        <div>
          <h3 className="text-xl font-light mb-2">Computer Engineering</h3>
          <SkillAccordion skills={computerEngineeringSkills} />
        </div>
      </div>
    </div>
  );
}
