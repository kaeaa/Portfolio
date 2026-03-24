import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaBug,
  FaCogs,
  FaDatabase,
  FaTerminal,
  FaClock,
  FaDownload,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

import { MdOutlineDeveloperMode } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { BsGearWideConnected } from "react-icons/bs";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { PiFlowArrowBold } from "react-icons/pi";

const backgroundIcons = [
  {
    icon: <FaCode />,
    style: { top: "12%", left: "8%", fontSize: "100px" },
    color: "black",
  },
  {
    icon: <FaLaptopCode />,
    style: { top: "30%", left: "85%" },
    color: "#1976d2",
    size: 18,
  },
  {
    icon: <FaServer />,
    style: { top: "60%", left: "12%" },
    color: "#6d4c41",
    size: 18,
  },
  {
    icon: <FaBug />,
    style: { top: "70%", left: "80%" },
    color: "#d84315",
    size: 18,
  },
  { icon: <FaCogs />, style: { top: "15%", left: "60%" }, color: "#607d8b" },

  { icon: <FaTerminal />, style: { top: "50%", left: "50%" }, color: "#333" },
  {
    icon: <MdOutlineDeveloperMode />,
    style: { top: "25%", left: "35%" },
    color: "#43a047",
  },
  {
    icon: <AiOutlineTool />,
    style: { top: "65%", left: "65%" },
    color: "#fbc02d",
  },
  {
    icon: <BsGearWideConnected />,
    style: { top: "40%", left: "20%" },
    color: "#0288d1",
  },
  {
    icon: <HiOutlineCpuChip />,
    style: { top: "10%", left: "75%" },
    color: "#7b1fa2",
  },
  {
    icon: <PiFlowArrowBold />,
    style: { top: "85%", left: "25%" },
    color: "#d81b60",
  },
];

const Hero = ({ setIsModalOpen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const borderRadius = useSpring(
    useTransform(scrollYProgress, [0, 0.7], ["0px", "90px"]),
    { stiffness: 60, damping: 18 },
  );
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.7], [1, 0.95]), {
    stiffness: 60,
    damping: 18,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 0.7], [0, -80]), {
    stiffness: 60,
    damping: 18,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * 4]);
  const smoothRotate = useSpring(rotate, { stiffness: 40, damping: 30 });

  const slowedRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const smoothSlowedRotate = useSpring(slowedRotate, {
    stiffness: 20,
    damping: 40,
  });

  const categories = [
    { name: "70%", texts: "Team Player" },
    { name: "90%", texts: "Eagerness To Learn" },
    { name: "54%", texts: "Coding Skills" },
  ];

  return (
    <motion.section
      ref={heroRef}
      className="w-full min-h-screen relative flex items-center justify-center box-border overflow-hidden flex-col bg-brand-main"
      id="home"
      style={{ borderRadius, scale, y }}
    >
      {/* Background Icons */}
      {backgroundIcons.map(({ style, color, icon }, idx) => (
        <motion.div
          key={idx}
          className="!text-[28px] !text-[beige]"
          style={{
            position: "absolute",
            ...style,
            zIndex: 0,
            color: color,
            pointerEvents: "none",
            opacity: 0.18,
          }}
          animate={{
            rotate: [0, 360],
            transition: {
              repeat: Infinity,
              duration: 16 - idx,
              ease: "linear",
            },
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Hero Content */}
      <motion.div
        style={{ zIndex: 1 }}
        className="w-full pr-0 py-[115px] flex flex-col items-center justify-center relative z-[2] transition-[border-radius,y] duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden will-change-[transform,border-radius]"
      >
        <div className="flex items-center justify-center gap-5.5 mb-5 px-6 py-3 rounded-full">
          <div className="flex items-center gap-2 bg-white/6 px-2 py-1.5 md:px-2.5 md:py-2 rounded-full">
            <div
              style={{
                animation: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
              className="w-3 h-3 bg-[#2E8B57] rounded-full animate-pulse"
            ></div>
            <span className="text-white text-[13px] font-medium font-outfit">
              Available for Hire
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <FaClock className="text-[#888] text-md md:text-lg" />
            <span className="text-[#E0E0E0] text-md md:text-lg font-outfit font-medium tabular-nums">
              {hours}:{minutes}:{seconds}
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center p-[20px] font-nunito z-[2] text-[#E0E0E0] max-w-[700px] mx-auto relative">
          <div className="flex flex-col items-center justify-center mb-6">
            <motion.div
              className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-3 border-white/60"
              initial={{ rotateY: 0, y: -80, opacity: 0 }}
              whileInView={{ rotateY: 360, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src="/profile.jpg"
                alt="Krisha Mae Alcaide"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[45px] max-[576px]:text-[25px] min-[577px]:max-[768px]:text-[2rem] min-[577px]:max-[768px]:break-words min-[577px]:max-[768px]:whitespace-normal font-semibold font-outfit"
          >
            I am Krisha Mae Alcaide,{" "}
            <span
              id="ChangeText"
              className="text-brand-text transition-[opacity,color] duration-500 ease-in-out inline-block min-w-[200px] min-[577px]:max-[768px]:min-w-auto min-[577px]:max-[768px]:text-center"
            >
              Front End Developer / UI/UX Designer
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[13px] max-[576px]:text-[10px] max-[576px]:w-full max-[576px]:max-w-[450px] max-[576px]:font-[200] min-[577px]:max-[768px]:text-[13px] min-[577px]:max-[768px]:w-full min-[577px]:max-[768px]:max-w-[599px] min-[769px]:max-[800px]:w-full min-[769px]:max-[800px]:max-w-[599px] min-[801px]:max-[1200px]:max-w-[620px] text-white tracking-[0.5px] mt-2.5 mb-6"
          >
            I combine technical expertise and creative vision to build intuitive
            interfaces that prioritizes quality, reliability, and user experience.
          </motion.p>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-3 ">
              <a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-2.5 py-2 md:px-3 md:py-2.5 cursor-pointer bg-[#E0E0E0] text-[#354B21] font-outfit font-medium  rounded-md hover:bg-white transition-colors duration-300"
                >
                  <span className="text-sm md:text-md">Get in touch</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-[#E0E0E0] text-[13px] md:text-[15px] font-extralight font-outfit mt-1.5  "
        >
          Connect with me
        </motion.p>
        {/* Socials */}
        <div className="flex flex-row items-center justify-center gap-4 mt-2 max-[576px]:mt-3 min-[577px]:max-[768px]:mt-4">
          <div className="insta">
            <a
              href="https://instagram.com/akkaeaa"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 max-[576px]:w-[30px] max-[576px]:h-[30px] min-[577px]:max-[768px]:w-9 min-[577px]:max-[768px]:h-9  cursor-pointer leading-[0] "
            >
              <FaInstagram className="w-7 h-7 text-white/60 " />
            </a>
          </div>

          <div className="git">
            <a
              href="https://github.com/kaeaa"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 max-[576px]:w-[30px] max-[576px]:h-[30px] min-[577px]:max-[768px]:w-9 min-[577px]:max-[768px]:h-9 cursor-pointer leading-[0]"
            >
              <IconBrandGithub className="w-7 h-7 text-white/60" />
            </a>
          </div>

          <div className="whatsapp">
            <a
              href="https://twitter.com/akkaeaa"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 max-[576px]:w-[30px] max-[576px]:h-[30px] min-[577px]:max-[768px]:w-9 min-[577px]:max-[768px]:h-9 cursor-pointer leading-[0] "
            >
              <IconBrandX className="w-7 h-7 text-white/60" />
            </a>
          </div>

          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/krisha-alcaide-92900335b/"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 max-[576px]:w-[30px] max-[576px]:h-[30px] min-[577px]:max-[768px]:w-9 min-[577px]:max-[768px]:h-9 cursor-pointer leading-[0] "
            >
              <FaLinkedin className="w-7 h-7 text-white/60" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
  k;
};

export default Hero;
