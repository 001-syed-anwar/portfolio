"use client";


import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import slackClone1 from "@/assets/images/slack-clone-1.png";
import slackClone2 from "@/assets/images/slack-clone-2.png";
import slackClone3 from "@/assets/images/slack-clone-3.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

interface Result {
  title: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  results: Result[];
  link: string;
  images: StaticImageData[];
  label: string;
}

// 📁 Data
const portfolioProjects: Project[] = [
  {
    company: "Full Stack Slack",
    year: "2025",
    title: "Slack Clone",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/BcVB9N3fbJY",
    images: [slackClone1, slackClone2, slackClone3],
    label: "Watch Youtube Preview",
  },
  {
    company: "React Project",
    year: "2024",
    title: "Tic Tac Toe",
    results: [{ title: "Implemented MinMax Algorithm" }],
    link: "https://google.com",
    images: [aiStartupLandingPage],
    label: "View Live Site",
  },
];

// 🧩 Main Component
export function ProjectsSection() {
  return (
    <div id="project" className="py-20 px-4 md:px-6 lg:px-20">
        <SectionHeader description="See how I transformed concepts into real, polished products." eyebrow="Featured Projects" title="Real-World Results" />
        <div className="flex flex-col gap-12 mt-12 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card key={project.title} className="pb-1 px-8 pt-8 md:px-12 md:pt-12 lg:flex-row lg:pt-16 lg:px-20 sticky top-16" style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}>
              <div className="lg:w-[40%]">
                <div className="flex justify-between items-center">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl text-white">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="mt-6 space-y-2 text-white/80 text-sm md:text-lg">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6" >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className="inline-flex items-center justify-center gap-2 bg-white
                  text-gray-900 h-12 w-full md:w-auto px-4 rounded-xl font-semibold mt-8
                    hover:opacity-90 transition"
                    >
                      <span>{project.label}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="lg:w-[60%]">
                  <ProjectCard key={project.title} project={project} />
              </div>
            </Card>
          ))}
        </div>
      </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = project.images.length;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <>
      <div
        className="relative mt-6 w-full rounded-2xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ overflowX: "hidden" }}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {project.images.map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-full rounded-2xl">
              <Image
                src={img}
                alt={`${project.title} ${idx}`}
                style={{ width: "100%", height: "auto" }}
                className="rounded-2xl object-contain"
                priority={idx === index}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10
    flex items-center justify-center
    bg-gradient-to-r from-emerald-400 to-sky-500
    text-white
    rounded-full shadow-xl backdrop-blur-md
    border-2 border-white/30 hover:border-white
    transition-all duration-300
    opacity-0 group-hover:opacity-100
    pointer-events-none group-hover:pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 drop-shadow-sm" />
        </button>

        <button
          onClick={next}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10
    flex items-center justify-center
    bg-gradient-to-r from-emerald-400 to-sky-500
    text-white
    rounded-full shadow-xl backdrop-blur-md
    border-2 border-white/30 hover:border-white
    transition-all duration-300
    opacity-0 group-hover:opacity-100
    pointer-events-none group-hover:pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 drop-shadow-sm" />
        </button>

        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-10 rounded-full p-2
    bg-gradient-to-r from-emerald-400 to-sky-500
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
    pointer-events-none group-hover:pointer-events-auto"
        >
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2 h-1 md:h-2 lg:w-5 lg:h-2.5 rounded-full transition ${index === idx ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>

      </div>
    </>
  );
}
