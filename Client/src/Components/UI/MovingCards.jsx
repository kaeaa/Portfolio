"use client";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    addAnimation();
  }, []);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Duplicate items multiple times for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "reverse" : "forwards"
    );
  };
  
  const getSpeed = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
  };
  
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative h-[255px] md:min-w-[410px] md:h-[270px] max-w-full shrink-0 transition-transform hover:scale-105 ease-in-out duration-300"
          >
            <div className="w-full h-full bg-[#f0fff0] rounded-[18px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute bottom-4 left-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              
              <div className="w-full h-full rounded-xl overflow-hidden ">
                <Link 
                  to={item.link}
                  className="block w-full h-full"
                >
                  <img
                    src={item.src}
                    alt={item.alt || "image"}
                    className="w-full h-full object-cover "
                    loading="lazy"
                  />
                </Link> 
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};