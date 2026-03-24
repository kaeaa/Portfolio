import React from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJsSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { color, motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import {  SiExpress, SiHubspot, SiLaravel, SiNextdotjs, SiPhp, SiShadcnui, SiTailwindcss, SiTypescript, SiBun } from "react-icons/si";
import { IconBrandTypescript } from "@tabler/icons-react";
import sibolImg from "../assets/SIBOL.png";
import learnquake from "../assets/LearnQuake.png";
import myxculture from "../assets/MyxCulture.png";

const Projects = () => {
  const Projects = [
    {
      slug: "SIBOL",
      img: sibolImg,
      title: "SIBOL",
      desc: "A smart, community-based biogas system dedicated to transforming organic waste into renewable energy and improving sustainability.",
      icons: [
        <SiTailwindcss color="#1a1a1a" key="css3" />,
        <FaReact color="#1a1a1a" key="react" />,
        <SiExpress color="#1a1a1a" key="express" />,
        <SiBun color="#1a1a1a" />,
      ],
      link: "/projects2/SIBOL",
    },
    {
      slug: "learnquake",
      img: learnquake,
      title: "LearnQuake",
      desc: "A modern learning platform dedicated to making education more accessible, engaging, and effective through interactive and technology-driven experiences.",
      icons: [
        <IconBrandTypescript size={25} color="#1a1a1a"/>,
        <FaReact color="#1a1a1a" />,
        <SiTailwindcss color="#1a1a1a" />,
        <SiExpress color="#1a1a1a" />,
    
      ],
      link: "/projects2/LearnQuake",
    },
    {
     slug:"myxculture",
      img: myxculture,
      title:"MyxCulture",
      desc: "E-commerce platform that offers currated styles for everyone, providing a seamless shopping experience.",
      icons: [
        <IconBrandTypescript size={25} color="#1a1a1a"/>,
        <SiTailwindcss/>,
        <SiShadcnui/>,
        <FaReact color="#1a1a1a" />,
        <SiExpress color="#1a1a1a" />,
      ],
      link: "/projects2/MyxCulture",
    },
    

  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <div className="bg-[#F0FFF0] mt-10 pb-10 mb-10 " id="projects">
      <motion.div
        className="flex flex-col justify-center items-center  mb-12 pt-8 px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800  font-outfit tracking-tight">
          {" "}
          Here's What I've Been Innovating
        </h1>
        {/* <p className='text-base md:text-lg text-gray-600 text-center'>
            Check out some of Judah<span className="text-purple-600 font-semibold">4Good</span> projects.
          </p> */}
      </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Projects.map(({ title, img, icons, desc, link }, index) => (
            <motion.div
              className="bg-[#e6f4ea] text-black rounded-2xl shadow-md min-h-[320px]  max-w-[360px] mx-auto  flex flex-col items-start justify-start p-5 sm:p-6"
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 4px 24px rgba(33,136,56,0.13)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="w-full flex flex-col items-center mb-2">
                <img
                  src={img}
                  className="w-full max-w-[300px] h-auto rounded-lg mb-3 object-cover"
                  alt={title}
                />
              </div>

              <div className="flex flex-col w-full items-start mt-0 ">
                <h1 className="text-brand-text font-semibold text-xl sm:text-[22px] mb-2 font-outfit ">
                  {title}
                </h1>
                <p className="text-sm sm:text-[0.9rem] text-gray-700 mb-4 font-nunito">
                  {desc}
                </p>

                <div className="flex justify-start items-center gap-2 mb-auto">
                  {icons.map((icon, i) => (
                    <span key={i} className="text-2xl">
                      {icon}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-end w-full mt-auto pt-3">
                  {link && (
                    <>
                      <Link to={link} className="mr-[8%] mb-1">
                        <button className="group px-2.5 py-2 md:px-3 md:py-2.5 cursor-pointer bg-[#E0E0E0] text-[#354B21] font-outfit font-medium rounded-md  transition-all duration-300">
                          <span className="text-sm md:text-md ">
                            View Project{" "}
                          </span>
                          <MdKeyboardArrowRight
                            className="inline-block  group-hover:pl-2  transition-all duration-300 w-8"
                            size={20}
                            style={{ verticalAlign: "middle" }}
                          />
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="mt-19">
         <button className="bg-neutral-950 px-4 py-3 text-white rounded-lg ">View More</button> 
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
