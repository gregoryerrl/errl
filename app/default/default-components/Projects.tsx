import React from "react";
import { Link } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      image: "/files/1.png",
      title: "Gwana",
      description:
        "A platform for booking technicians online to repair and service your gadgets.",
      demoLink: "https://www.gwana.app/",
    },
    {
      id: 2,
      image: "/files/2.png",
      title: "Kreel",
      description: "A platform for various AI Tools",
      demoLink: "https://kreel.vercel.app/",
      githubLink: "https://github.com/gregoryerrl/kreel",
    },
    {
      id: 3,
      image: "/files/3.png",
      title: "MyPetGo",
      description:
        "A platform for gamifying pet health, tracking longevity, and rewarding pet owners for proactive care and wellness management.",
      demoLink: "https://www.mypetgo.com/",
    },
    {
      id: 4,
      image: "/files/4.png",
      title: "Deventa",
      description:
        "A subscription-based courseware site where team leaders create and manage training courses for their team.",
      demoLink: "https://devanta-fe.vercel.app/",
    },
    {
      id: 5,
      image: "/files/5.png",
      title: "EUCannaJobs",
      description:
        "A specialized platform for finding cannabis-related jobs around Europe.",
      demoLink: "https://www.eucannajobs.com/",
    },
  ];

  const ProjectCard = ({
    project,
    isEven,
  }: {
    project: any;
    isEven: boolean;
  }) => {
    return (
      <div
        className={`relative w-full flex flex-col md:flex-row items-center my-16 
        ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Image Section */}
        <div
          className={`w-full md:w-1/2 z-10 
          md:${isEven ? "ml-[-2rem]" : "mr-[-2rem]"} 
          relative mb-4 md:mb-0`}
        >
          <div
            className={`shadow-lg md:transform ${
              isEven ? "md:rotate-6" : "md:-rotate-6"
            } 
            hover:scale-105 transition-transform duration-300 border-background/75`}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Description Section */}
        <div
          className={`w-full md:w-1/2 p-6 md:p-8 bg-background border backdrop-blur-sm 
          rounded-lg shadow-xl
          md:${isEven ? "mr-8" : "ml-8"}
          relative z-20
          transform hover:scale-[1.02] transition-transform duration-300`}
        >
          {/* Connecting Line - Hidden on mobile */}

          {/* Project Badge */}
          <div
            className={`absolute top-[-1rem] 
            ${isEven ? "left-[-1rem]" : "right-[-1rem]"}
            bg-purple-300 dark:bg-green-900 py-2 px-4 rounded-full text-sm
            hidden md:block`}
          >
            {project.id}
          </div>

          <h3 className="text-2xl font-bold mb-4 text-purple-900 dark:text-green-500">
            {project.title}
          </h3>
          <p className="mb-6">{project.description}</p>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
            >
              <Link className="mr-2" size={20} />
              Live Demo
            </a>

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:font-bold transition"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isEven={index % 2 === 1}
        />
      ))}
    </div>
  );
}
