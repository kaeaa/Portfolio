import React from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";
import DescriptiveText from "./Components/DescriptiveText";
import ProjectsGallery from "./Components/ProjectsGallery";
import { useEffect, useState } from "react";
import TechCarousel from "./Components/TechCarousel";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Loader from "./Components/Pages/Loader";

let hasLoaded = false;
const HomePage = ({ setIsModalOpen }) => {
  const [isLoading, setisLoading] = useState(!hasLoaded);

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      hasLoaded = true;
      setisLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero setIsModalOpen={setIsModalOpen} />
          <ProjectsGallery />
          <DescriptiveText />
          <TechCarousel />
          <About />
          <Projects />
          <Work />
          <Contact setIsModalOpen={setIsModalOpen} />
          
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default HomePage;
