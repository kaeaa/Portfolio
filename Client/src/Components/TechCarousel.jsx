import React from 'react';
import { SiNodedotjs, SiJavascript, SiMongodb, SiReact, SiNextdotjs, SiTypescript , SiTailwindcss } from 'react-icons/si';

const TechCarousel = () => {
  const logos = [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiTypescript },
    { name: "TailwindCss", Icon: SiTailwindcss },
  ];

  // Duplicate the logos array multiple times for truly seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="h-32 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-3xs sm:max-w-md rounded-xs overflow-hidden">
        <div className="flex gap-5 animate-scroll">
          {duplicatedLogos.map((logo, index) => {
            const Icon = logo.Icon;
            return (
              <div key={index} className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2E8B57]  to-neutral-800 rounded-lg p-2 flex items-center justify-center">
                  <Icon className="w-full h-full text-gray-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4));
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
          display: flex;
          width: max-content;
        }

      `}</style>
    </div>
  );
};

export default TechCarousel;
