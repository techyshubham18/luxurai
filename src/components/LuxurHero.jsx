import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LuxurHero = () => {
  const containerRef = useRef(null);

  // Scroll tracking for the entire cinematic sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Text and Flute Animation (Scrolls up and fades out smoothly)
  const logoY = useTransform(scrollYProgress, [0, 0.25], ["0vh", "-60vh"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  // 2. Peacock Feather 3D Path Animation (Right -> Left Down -> Bottom Middle)
  // X-axis trajectory: Starts on the right of the text, swings left, settles in the middle
  const featherX = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["18vw", "-20vw", "-15vw", "0vw"]);
  // Y-axis trajectory: Stays with logo, drops down, moves lower, lands at bottom middle
  const featherY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["0vh", "25vh", "55vh", "75vh"]);
  // Rotation trajectory: Rotates dynamically, ending with the tip pointing left (-90 or 270 deg)
  const featherRotate = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [15, -45, -75, -90]);
  // 3D Depth Scale: Simulates moving closer and further from the camera
  const featherScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1.4, 1.6, 1.3]);

  // 3. Liquid Glass "Get Started" Button Animation (Appears at the very end over the feather)
  const buttonOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.7, 0.9, 1]);
  const buttonGlow = useTransform(scrollYProgress, [0.8, 1], ["rgba(16, 185, 129, 0)", "rgba(16, 185, 129, 0.6)"]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden"
      style={{ height: "400vh" }} // 400vh gives ultra-smooth high-fps scroll experience
    >
      {/* --- INFUSE PREMIUM PEACOCK MESH GRADIENT BACKGROUND --- */}
      {/* This background continuously flows and morphs, blending with light/dark mode */}
      <div 
        className="fixed inset-0 z-0 opacity-60 dark:opacity-40 blur-[130px] pointer-events-none mix-blend-multiply dark:mix-blend-screen transform scale-110"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #06b6d4 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, #10b981 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #6366f1 0%, transparent 55%),
            radial-gradient(circle at 70% 70%, #fbbf24 0%, transparent 40%)
          `,
          animation: "meshMotion 20s ease-in-out infinite alternate"
        }}
      />

      {/* --- STICKY VIEWPORT CONTAINER --- */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10 overflow-hidden">
        
        {/* --- LUXUR AI LOGO & INTEGRATED FLUTE --- */}
        <motion.div 
          style={{ y: logoY, opacity: logoOpacity, scale: logoScale }}
          className="relative flex flex-col items-center select-none z-20 px-4"
        >
          <div className="relative flex flex-col items-center">
            
            {/* THE ARTISTIC FLUTE (Acts as the Devanagari Shirorekha Line) */}
            <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-[110%] h-2 md:h-3 rounded-full flex items-center justify-between px-6 shadow-[0_0_30px_rgba(234,179,8,0.4)] bg-gradient-to-r from-amber-700 via-amber-500 to-amber-800 border border-amber-600/30">
              {/* Flute Details: Traditional decorative threads & holes */}
              <div className="w-1 h-full bg-red-600 rounded-full opacity-70" />
              <div className="flex space-x-4 md:space-x-6 mx-auto">
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-black/60 shadow-inner" />
              </div>
              <div className="w-1 h-full bg-red-600 rounded-full opacity-70" />
            </div>

            {/* DEVANAGARI-INSPIRED LATIN TYPOGRAPHY */}
            <h1 
              className="text-6xl sm:text-7xl md:text-9xl font-black tracking-wider uppercase text-center relative pt-2 font-serif bg-clip-text text-transparent bg-gradient-to-b from-black via-gray-900 to-gray-800 dark:from-white dark:via-gray-100 dark:to-gray-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                letterSpacing: "0.15em"
              }}
            >
              Luxur AI
            </h1>

            {/* Subheading for a completely balanced clean UI */}
            <p className="text-xs md:text-sm font-medium tracking-[0.6em] uppercase mt-4 text-emerald-600 dark:text-emerald-400 opacity-80 pl-[0.6em] text-center">
              Mythological Modern Fusion
            </p>
          </div>
        </motion.div>

        {/* --- THE GLOWING 3D PEACOCK FEATHER --- */}
        {/* Detaches dynamically and performs a seamless cinematic scroll transition */}
        <motion.div
          style={{ 
            x: featherX, 
            y: featherY, 
            rotate: featherRotate,
            scale: featherScale
          }}
          className="absolute z-30 flex items-center justify-center pointer-events-none transform origin-bottom"
        >
          {/* Detailed SVG Feather for absolute clarity and infinite crisp rendering */}
          <div className="relative w-28 h-60 md:w-36 md:h-72 drop-shadow-[0_0_45px_rgba(16,185,129,0.7)] filter dark:drop-shadow-[0_0_45px_rgba(6,182,212,0.5)]">
            <svg 
              viewBox="0 0 200 400" 
              className="w-full h-full transform transition-transform duration-300 animate-featherFloat"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Spine / Quill */}
              <path d="M100,380 Q100,200 100,20" stroke="url(#quillGrad)" strokeWidth="4" strokeLinecap="round" />
              
              {/* Soft Barbs / Side Strands */}
              <g opacity="0.85">
                {[...Array(35)].map((_, i) => {
                  const yPos = 40 + i * 9;
                  const curveLeft = 100 - (Math.sin(i * 0.15) * 65);
                  const curveRight = 100 + (Math.sin(i * 0.15) * 65);
                  return (
                    <g key={i}>
                      <path d={`M100,${yPos} Q40,${yPos - 25} ${curveLeft},${yPos - 50}`} stroke="url(#barbGrad)" strokeWidth="1.2" />
                      <path d={`M100,${yPos} Q160,${yPos - 25} ${curveRight},${yPos - 50}`} stroke="url(#barbGrad)" strokeWidth="1.2" />
                    </g>
                  );
                })}
              </g>

              {/* The Majestic Core Eye of the Feather */}
              <g transform="translate(100, 90)">
                {/* Outer Golden Aura */}
                <ellipse cx="0" cy="0" rx="42" ry="52" fill="url(#goldEye)" filter="blur(2px)" />
                {/* Emerald Layer */}
                <ellipse cx="0" cy="5" rx="32" ry="40" fill="url(#emeraldEye)" />
                {/* Deep Royal Blue Layer */}
                <ellipse cx="0" cy="10" rx="22" ry="26" fill="url(#blueEye)" />
                {/* Futuristic Glowing Turquoise Core Indent */}
                <path d="M -15,12 C -15,-10 15,-10 15,12 C 10,22 -10,22 -15,12 Z" fill="#22d3ee" filter="drop-shadow(0 0 12px #06b6d4)" />
              </g>

              {/* Gradients Definitions */}
              <defs>
                <linearGradient id="quillGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="70%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>
                <linearGradient id="barbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#047857" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="goldEye" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="70%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="emeraldEye" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="75%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </radialGradient>
                <radialGradient id="blueEye" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="60%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#030712" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* --- ULTRA-PREMIUM LIQUID GLASS GET STARTED BUTTON --- */}
          {/* Overlaid gracefully at the center of the feather's final state */}
          <motion.div 
            style={{ opacity: buttonOpacity, scale: buttonScale }}
            className="absolute pointer-events-auto"
          >
            <button 
              className="relative px-10 py-4 rounded-full font-bold text-sm tracking-[0.25em] uppercase text-black dark:text-white border border-white/40 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-black/20 overflow-hidden group transition-all duration-500 hover:scale-110 active:scale-95"
              style={{
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              {/* Floating internal liquid reflection overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Dynamic Outer Aura Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-emerald-500/10 -z-10" />
              
              Get Started
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Injecting CSS Keyframes directly to keep it perfectly self-contained for easy mobile use */}
      <style>{`
        @keyframes meshMotion {
          0% { transform: scale(1) translate(0px, 0px) rotate(0deg); }
          50% { transform: scale(1.15) translate(40px, -60px) rotate(4deg); }
          100% { transform: scale(1) translate(-20px, 30px) rotate(-2deg); }
        }
        @keyframes featherFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default LuxurHero;
