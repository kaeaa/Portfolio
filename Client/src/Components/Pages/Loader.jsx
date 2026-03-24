import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

const icons = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt];

const generateRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`, // avoid edges
  left: `${Math.random() * 80 + 10}%`,
});

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 h-screen w-screen bg-neutral-950 flex flex-col items-center justify-center text-white z-[9999]"
      style={{ fontFamily: "Nunito" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Spinner with Image */}
      {/* <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      ></motion.div> */}

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading Portfolio...
      </motion.p>

      {/* Random Floating Icons */}
      {icons.map((Icon, index) => {
        const randomPos = generateRandomPosition();
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ position: "absolute", ...randomPos }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random(),
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <Icon className="text-3xl text-white" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Loader;
