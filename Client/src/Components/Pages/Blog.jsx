import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiH3 } from "react-icons/hi2";

const Blog = () => {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center p-8 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-xl text-center">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 text-purple-700 mb-6 shadow-md"
          initial={{ scale: 0.8, rotate: -6, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          aria-hidden="true"
        >
          <FiFileText size={28} />
        </motion.div>
         <h1 className="text-4xl font-outfit font-semibold mb-4">Blog Posts</h1>
        <h3 className="text-2xl sm:text-3xl  mb-3 text-neutral-900 font-outfit">
          No articles available yet
        </h3>

        <p className="text-gray-600 mb-6 font-nunito">
          Thoughts, ideas and insights about software development
        </p>

        <div className="flex items-center justify-center gap-3">
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
                   Back Home
                 </motion.button>
                 </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;