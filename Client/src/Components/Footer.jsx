import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const Avatar = () => (
  <img
    src="/profile.jpg"
    alt="Krisha Mae Alcaide"
    className="w-12 h-12 rounded object-cover"
  />
);

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const icons = [
  {
    icon: <IconBrandX size={18} />,
    link: "https://twitter.com/akkaeaa",
  },
  {
    icon: <IconBrandGithub size={18} />,
    link: "https://github.com/kaeaa",
  },
  {
    icon: <IconBrandLinkedin size={18} />,
    link: "https://www.linkedin.com/in/krisha-alcaide-92900335b/",
  },
  { icon: <IconMail size={18} />, link: "mailto:alcaide.krishamaebscs2022@gmail.com" },
];

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className=" border-t border-gray-200 px-6 py-18 font-outfit"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <Avatar />
          <p className="mt-4 text-sm md:text-md text-gray-500 max-w-md leading-relaxed">
            Crafting modern, high-performance web applications with frontend
            technologies building fast, scalable, user-focused digital
            experiences that are clean, impactful, and production-ready.
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-x-6  mb-6 pt-2"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-[#2E8B57] transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between border-t border-gray-300 pt-5"
        >
          <div className="flex items-center gap-3">
            {icons.map(({ icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all duration-150"
              >
                {icon}
              </a>
            ))}
          </div>

          <span className=" text-xs md:text-sm text-gray-600">
            © Krisha Mae Alcaide. All rights reserved. 2022–{year}.
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
