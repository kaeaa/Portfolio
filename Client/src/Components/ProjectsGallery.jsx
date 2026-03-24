"use client";

import { useParams } from "react-router-dom";
import { InfiniteMovingCards } from "./UI/MovingCards";

const projects = [
  {
    slug: "sibol",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1768955091/Screenshot_2026-01-21_011811_ftbytq.png",
    alt: "sibol",
    link: "/projects2/SIBOL",
  },
  {
    slug: "learnquake",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1770849340/Screenshot_2026-02-11_233226_m7wjmg.png",
    alt: "LAGOS-learnquake",
    link: "/projects2/LearnQuake",
  },
  {
    slug: "myxculture",
    src: "https://res.cloudinary.com/dydmptpcg/image/upload/v1763632234/Screenshot_2025-11-20_104944_uxotyh.png",
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
