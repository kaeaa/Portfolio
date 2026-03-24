import  { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const DescriptiveText = () => {
  const items = [
    { number: "1+", text: "Years Of Experience" },
    { number: "3+", text: "Projects Delivered" },
    { number: "100%", text: "Clients Satisfaction" },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const mainText =
    "With 4 years of projects and collaboration, I’ve contributed to building modern, accessible web experiences alongside teams, using cutting-edge frontend technologies while continuously growing through hands-on work.";
  const words = mainText.split(" ");

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(20px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-[50vh] justify-center p-4 px-2 sm:p-6 mx-5 overflow-hidden mt-[5rem]"
    >
      <div className="sm:min-h-[50vh] min-h-[70vh]  relative max-w-4xl text-center z-10">
        <div className="font-inter text-neutral-800 text-center text-[32px] sm:text-[38px] md:text-[40px] font-bold leading-tight tracking-[-2px] mb-6">
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariant}
              initial="hidden"
              animate={controls}
              custom={index}
              className={`inline-block mr-[0.3em] ${
                word.includes("1+") || word.includes("years")
                  ? "text-brand-text"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={words.length * 0.08 + 1}
          className="text-center text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto font-outfit leading-relaxed mt-2"
        >
          From concept to deployment, I craft scalable solutions that not only
          meet business goals but also delight users.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          custom={words.length * 0.08 + 2}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10"
        >
          {items.map(({ text, number }, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              custom={words.length * 0.08 + 3 + idx}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div className="text-3xl sm:text-4xl font-bold text-brand-text font-outfit">
                {number}
              </motion.div>
              <div className="text-sm text-neutral-600 font-outfit mt-1">
                {text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptiveText;
