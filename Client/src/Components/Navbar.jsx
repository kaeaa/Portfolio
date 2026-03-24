import React, { useState, useEffect } from "react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./UI/ResizableNavbar.jsx";
import { Link } from "react-router-dom";

const Navbar = ({ setIsModalOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
      name: "Experience",
      link: "#qualifications",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  useEffect(() => {
    const navlinks = document.querySelectorAll('a[href^="#"]');
    navlinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  const NavbarLogo = () => {
    return (
      <Link
        to={"/"}
        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      >
        <span className="font-medium font-outfit text-[#2E8B57] text-lg md:text-xl">
          K<span className="text-white">A</span>
        </span>
      </Link>
    );
  };

  const Open = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <div className="fixed top-5 left-0 right-0 w-full z-50 px-2">
      <ResizableNavbar className="top-0">
        <NavBody className="rounded-full">
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={() => {}} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" onClick={Open}>
              Let's Connect
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={Open} variant="primary" className="w-full">
                Let's Connect
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
};

export default Navbar;
