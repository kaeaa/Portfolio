import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectdata from "../data/projectdata.js";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { IconBrandGithub } from "@tabler/icons-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectdata.find((p) => p.slug === slug);

  useEffect(() => {
    // When entering the project detail page, ensure we're at the top.
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      // immediate jump using duration 0; change duration for smooth scroll if desired
      window.lenis.scrollTo(0, { duration: 0 });
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug]);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <motion.section
      className="min-h-screen w-full px-2.5 sm:px-6 md:px-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative max-w-3xl mx-auto py-30">
        <span className="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-300" />
        <span className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300" />

        <div className="px-4 sm:px-8">
          <h1 className="text-[32px] sm:text-[38px] md:text-[48px] font-semibold text-neutral-800 font-outfit">
            {project.title}
          </h1>

          <p className="text-[16px] sm:text-[18px] flex-grow text-gray-500 mb-10 max-w-2xl leading-[25px]">
            {project.desc}
          </p>

          <div className="rounded-xl border border-gray-200 p-6.5 bg-[#ede2f0]">
            <span className="text-base font-bold font-inter flex items-center gap-2">
              Description
              <span className="text-purple-500 bg-purple-100 px-3 py-1 rounded-lg transition-colors duration-300 ease-in hover:bg-gray-300">
                !
              </span>
            </span>

            <p className="mt-2 text-gray-700 text-base font-medium font-nunito">
              {project.para1}
            </p>

            <p className="mt-4 text-red-400 text-base font-medium font-nunito">
              <span className="text-red-400 font-bold">Problem Noticed:</span>{" "}
              {project.para2}
            </p>

            <p className="mt-4 text-gray-700 text-base font-medium font-nunito">
              <span className="text-purple-500 font-bold ">
                Solution Built ✅:
              </span>{" "}
              {project.para3}
            </p>

            <hr className="mt-8 mb-6 text-neutral-300" />

            <div>
              <h2 className="font-bold font-inter">Technologies</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#d8a8fc] px-4 rounded-md py-1.5 text-purple-800 font-outfit font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex py-2 gap-2 mt-8">
            <>
              {project.link && project.link.startsWith("http") && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] inline-flex items-center gap-2 bg-black text-white px-3 py-2.5 rounded-lg font-outfit font-normal cursor-pointer"
                >
                  View Project <FiExternalLink size={20} />
                </a>
              )}

              {project.githubLink && project.githubLink.startsWith("http") && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg font-outfit font-normal cursor-pointer"
                >
                  GitHub <IconBrandGithub size={20} />
                </a>
              )}
            </>
          </div>
          <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-white rounded-[18px] p-7 shadow-[0_20px_40px_rgba(147,51,234,0.12),_0_6px_10px_rgba(0,0,0,0.06)] mt-10">
            <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>

            <div className="w-full h-full rounded-xl overflow-hidden ">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
