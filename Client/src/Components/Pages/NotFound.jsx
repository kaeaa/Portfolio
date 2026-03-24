import React from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen w-full relative p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative flex items-center justify-center flex-col">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[200px] font-bold tracking-tight sm:text-[350px] md:text-[400px] lg:text-[410px] text-center select-none pointer-events-none"
          style={{
            color: "black",
            background: "linear-gradient(180deg, #2E8B57 30%, black 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          404
        </motion.span>

        <motion.div
          className="absolute z-20 text-center top-1/2 md:top-3/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-black font-medium font-plus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: "linear-gradient(180deg, black 20%,  #2E8B57 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Whoa!
          </motion.h1>

          <motion.h2
            className="text-[25px] sm:text-[32px] md:text-[35px] font-medium text-black mb-2 font-plus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            That Didn't Work Out
          </motion.h2>

          <motion.p
            className="text-gray-700 text-center mb-5 sm:text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            The page you’re trying to reach doesn’t exist or might be under
            maintenance.
          </motion.p>
          <Link to={"/"}>
           <motion.button
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            animate={{ y: 0 }}
            className="bg-gradient-to-br from-black to-[#2E8B57] text-white px-7 py-3 rounded-xl shadow-lg flex items-center gap-2 mx-auto cursor-pointer font-plus overflow-hidden"
          >
            <span><FiHome size={20}/></span>
            Go To HomePage
          </motion.button>
          </Link>
         
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFound;
