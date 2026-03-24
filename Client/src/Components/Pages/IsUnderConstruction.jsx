import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../UI/AnimatedModal.jsx";
import { MdOutlineUpdate } from "react-icons/md";
const IsUnderonstruction = () => {
  const images = [
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
  ];
  const features = [
    "Improved About Section",
    "Improved Timeline Section",
    "Improved Client-side routing",
    "Tailwind CSS implementation",
    "Interactive Navbar",
    "Performance Optimization",
    "Mobile Responsiveness",
  ];
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen w-full relative p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} 
    >
      <div className="relative flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
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
          503
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
            In Development!
          </motion.h1>

          <motion.h2
            className="text-[25px] sm:text-[32px] md:text-[35px] font-medium text-black mb-2 font-plus"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Perfecting the portfolio.
          </motion.h2>

          <motion.p
            className="text-gray-700 text-center mb-5 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I'm currently redesigning my portfolio to better showcase my work
            and skills. Please check back soon for the grand reveal!
          </motion.p>

          <Modal>
            <ModalTrigger>
              <motion.span className="flex items-center gap-2 mx-auto cursor-pointer font-plus">
                <MdOutlineUpdate size={20} />
                View Incoming Updates
              </motion.span>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Cooking Up Some{" "}
                  <span className="px-1 py-0.8 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    Digital
                  </span>{" "}
                  Magic! ✨
                </h4>
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <span className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm md:text-sm lg:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <span>And Many More...</span>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IsUnderonstruction;
