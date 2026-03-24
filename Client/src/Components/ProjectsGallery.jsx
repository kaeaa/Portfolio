"use client";

import { useParams } from "react-router-dom";
import { InfiniteMovingCards } from "./UI/MovingCards";
import sibolImg from "../assets/SIBOL.png";
import learnquake from "../assets/LearnQuake.png";
import myxculture from "../assets/MyxCulture.png";

const projects = [
  {
    slug: "sibol",
    src: sibolImg,
    alt: "sibol",
    link: "/projects2/SIBOL",
  },
  {
    slug: "learnquake",
    src: learnquake,
    alt: "LAGOS-learnquake",
    link: "/projects2/LearnQuake",
  },
  {
    slug: "myxculture",
    src: myxculture,
    alt: "myxculture",
    link: "/projects2/MyxCulture",
  },
];

const ProjectsGallery = () => {
  return (
    <div className="h-[20rem] mb-[10rem] flex flex-col antialiased items-center justify-center relative overflow-hidden cursor-pointer">
      <InfiniteMovingCards items={projects} direction="right" speed="slow" />
    </div>
  );
};

export default ProjectsGallery;
