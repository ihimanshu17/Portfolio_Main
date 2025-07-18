import React, { useEffect } from "react";
import HeroImg from "@/assets/images/himanshu.png"; // your custom image
import { Card, CardContent } from "@/components/ui/card";
import Meteors from "@/components/ui/meteors";

// Grid Background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function About() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
  id="about"
  className="h-screen flex items-start justify-center text-white bg-[#04081A] relative overflow-hidden"
>

      {/* Grid + Meteors Background */}
      <GridBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={25} />
      </div>

      {/* Optional Floating Blurs */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

<div className="relative z-10 max-w-6xl mx-auto px-1 pt-24">
        {/* Image and Card Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left Column: About Me heading + Card */}
          <div className="w-full order-2 lg:order-1 flex flex-col gap-6">
            {/* About Me heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-7xl font-extrabold bg-gradient-to-r from-teal-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-gradientMove">
                About Me...
              </h2>
            </div>

            {/* Card Content */}
            <div className=" group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg z-0" />
              <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500 blur-md" />
              <Card className="relative bg-gray-900/80 border border-blue-500/30 shadow-lg backdrop-blur-xl z-10">
                <CardContent className="space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed pt-6 text-center lg:text-left">
                  <p>Hi, I’m <span className="font-semibold text-white">Himanshu Upadhyay</span>,</p>
                  <p>
                  Pursuing B.Tech in Computer Science and Engineering with Specialization in Artificial Intelligence from Pranveer Singh Institute of Technology, Kanpur. I'm having a strong foundation in Programming, Web Development, and AI/ML technologies.</p> 
                  <p>I’ve built practical projects like Plant Vigil for plant disease detection and NOVA, a browser-based voice assistant.</p> 
                  <p>Skilled in Java, Python, JavaScript, and frameworks like React and Node.js, I also have hands-on experience with tools like Docker, MySQL, and AWS basics.</p> 
                  <p>My achievements include being a State-level Child Scientist, securing AIR-99 in Coding Ninjas Premier League, and leading campus initiatives as the Vice-President of the Photography Club and Social Media Head of the Aryabhatta Club.</p>
                  
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Image Only */}
          <div className="relative w-full max-w-md mx-auto order-1 lg:order-2">
            <div className="relative top-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-[350px]">
              <img
                src={HeroImg}
                alt="Himanshu Upadhyay"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
