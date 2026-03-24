"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiNotion,
  SiHubspot,
  SiExpo,
  SiBun,
  SiFigma,
  SiWordpress,
} from "react-icons/si";
import { FaJs, FaHtml5 } from "react-icons/fa";

import { TracingBeam } from "./UI/TracingBeam";

const experiences = [
  {
    company: "Decode Technologies",
    role: "Internal Compliance Associate",
    period: "August 2025 — October 2025",
    type: "Part-time",

    highlights: [
      "Handled QA scripts and supported both software and documentation processes to ensure smooth operations.",
  "Created detailed documentation to guide future developers in following proper procedures and maintaining consistency.",
  "Developed prototypes to visualize solutions and assist in product planning and decision-making.",
  "Provided operational support to the CEO by assisting with task coordination and execution.",
    ],
    tags: [
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
      { label: "Typescript", icon: SiTypescript, color: "#25f11e" },
    ],
  },
  {
    company: "Commission on Audit",
    role: "Software Engineer Intern",
    period: "May 2025 — August 2025",

    highlights: [
       "Led the development of a non-COA digital signing service using .NET Framework, contributing to a secure and efficient document workflow.",
  "Served as Project Manager, overseeing GitHub collaboration, managing branch workflows, and ensuring seamless team coordination and alignment with project timelines.",
  "Worked as the primary frontend developer, building responsive and user-friendly interfaces to support the overall system.",
  "Handled WordPress file transfers and assisted in managing website content as part of additional responsibilities."
    ],
    tags: [
      { label: "Figma", icon: SiFigma, color: "#F24E1E" },
      { label: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
];

function TechTag({ tags }) {
  return (
    <div className="flex items-center mt-2">
      {tags.map((tag, i) => {
        const Icon = tag.icon;

        return (
          <motion.div
            key={tag.label}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`relative flex items-center ${i !== 0 ? "-ml-2.5" : ""}`}
          >
            <motion.div
              variants={{
                rest: { width: 28 },
                hover: { width: 90 },
              }}
              transition={{ type: "spring", damping: 10 }}
              className="h-6.5 rounded-full bg-[#d8bfd8] border border-[#6b5b95] flex items-center overflow-hidden shadow-sm"
            >
              <div className="w-6.5 h-6.5 flex items-center justify-center flex-shrink-0">
                <Icon style={{ color: tag.color }} className="w-3.5 h-3.5" />
              </div>

              <motion.span
                variants={{
                  rest: { opacity: 0, x: -6 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.18 }}
                className="text-[11px] text-black whitespace-nowrap pr-2 font-medium"
              >
                {tag.label}
              </motion.span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-14 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center bg-purple-100 text-purple-700 border border-purple-400 text-xs font-outfit tracking-widest uppercase px-3 py-1 rounded-full">
          {exp.period}
        </span>
        {/* <span
          className={twMerge(
            "text-xs font-medium px-2.5 py-0.5 rounded-full",
            typeColor[exp.type],
          )}
        >
          {exp.type}
        </span> */}
      </div>

      <div className="relative bg-[#e6f4ea] shadow-md border border-zinc-200 rounded-2xl p-6  overflow-hidden">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
          <div>
            <h1 className=" text-2xl md:text-3xl font-bold text-brand-text tracking-tight leading-none mb-2 md:mb-3">
              {exp.company}
            </h1>
            <p className="text-[13px] md:text-[14px] font-semibold text-zinc-500 tracking-wide uppercase">
              {exp.role}
            </p>
          </div>
        </div>

        <ul className="space-y-2.5 mb-5">
          {exp.highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed"
            >
              {/* <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black" /> */}
              {point}
            </li>
          ))}
        </ul>

        <TechTag tags={exp.tags} />
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen py-30 px-4 font-outfit">
      <div className="max-w-2xl mx-auto mb-16 pl-5 md:pl-0">
        <h1 className="mb-1 text-3xl md:text-5xl font-semibold text-gray-900 font-outfit tracking-tight">
          Work Experience
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-xl text-left">
          Early in my journey, but already shipping products that solve real
          problems for real users.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto pt-2 relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
