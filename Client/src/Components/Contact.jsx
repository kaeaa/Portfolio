import {
  ArrowRight,
  ContactIcon,
  ContactRound,
  Phone,
  PhoneCall,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact({ setIsModalOpen }) {
  return (
    <div className="w-full flex justify-center items-center py-16 px-3.5 min-h-[60vh]">
      <motion.div
        className="bg-[#264736] flex items-center flex-col rounded-[32px] text-center px-6 py-14 max-w-4xl w-full font-outfit relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="pointer-events-none absolute top-0 left-0 right-0 h-32 select-none opacity-30"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.20) 1px, transparent 1px)",
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Grid pattern at bottom */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 select-none opacity-30"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Content */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-4xl lg:text-[40px] text-center font-bold text-white leading-snug relative z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your next big thing <br />
          starts here!
        </motion.h2>

        <motion.p
          className="mt-5 text-blue-100 text-base sm:text-md max-w-md mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Let's work together to bring your ideas to life. Get in touch today
          and let's discuss how we can help you achieve your goals.
        </motion.p>

        <motion.div
          className="mt-8 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-row gap-2 px-8 py-3 rounded-lg  cursor-pointer bg-white/10 text-[#E0E0E0] font-outfit font-medium  hover:bg-[#247a4a] transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
