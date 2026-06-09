"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  { src: "/h1.jpg" },
  { src: "/h2.jpg" },
  { src: "/h3.jpg" },
  { src: "/h4.jpg" },
  { src: "/h5.jpg" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Ken Burns keyframes — each slide zooms in a different direction */}
      <style>{`
        @keyframes kb1 { 0%{transform:scale(1.0)  translate(0%,  0%)} 100%{transform:scale(1.18) translate(-2%,-1%)} }
        @keyframes kb2 { 0%{transform:scale(1.15) translate(-2%, 0%)} 100%{transform:scale(1.0)  translate(2%,  1%)} }
        @keyframes kb3 { 0%{transform:scale(1.0)  translate(2%,  1%)} 100%{transform:scale(1.18) translate(-1%,-2%)} }
        @keyframes kb4 { 0%{transform:scale(1.15) translate(0%,  2%)} 100%{transform:scale(1.0)  translate(-2%,-1%)} }
        @keyframes kb5 { 0%{transform:scale(1.0)  translate(-1%, 1%)} 100%{transform:scale(1.18) translate(2%,  -2%)} }
        @keyframes kb6 { 0%{transform:scale(1.18) translate(2%, -1%)} 100%{transform:scale(1.0)  translate(-1%, 2%)} }
        @keyframes kb7 { 0%{transform:scale(1.0)  translate(1%, -2%)} 100%{transform:scale(1.15) translate(-2%, 1%)} }
        @keyframes kb8 { 0%{transform:scale(1.15) translate(-1%, 2%)} 100%{transform:scale(1.0)  translate(1%, -1%)} }
        @keyframes kb9 { 0%{transform:scale(1.0)  translate(0%,  2%)} 100%{transform:scale(1.18) translate(1%,  -2%)} }
      `}</style>

      {/* All slides stacked — img tags for reliable rendering */}
      {slides.map(({ src }, i) => (
        <div
          key={src}
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Ken Burns wrapper — overflow hidden keeps zoom inside bounds */}
          <div
            className="absolute inset-0"
            style={{ animation: `kb${i + 1} 6s ease-in-out infinite alternate` }}
          >
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
          </div>
        </div>
      ))}

      {/* Overlays — light enough to show images, dark enough for text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/10 to-black/65" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-purple-950/25 via-transparent to-black/10" />

      {/* Shimmer */}
      <motion.div
        className="absolute z-20 top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
      />

      {/* Decorative stars */}
      <motion.div className="absolute z-20 top-32 left-8 text-rose-300/60 text-5xl select-none"
        animate={{ opacity: [0.4, 0.9, 0.4], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute z-20 top-44 right-14 text-purple-300/50 text-3xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}>✧</motion.div>
      <motion.div className="absolute z-20 bottom-48 left-16 text-rose-300/40 text-2xl select-none"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>✦</motion.div>
      <motion.div className="absolute z-20 bottom-36 right-10 text-purple-300/50 text-4xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}>✧</motion.div>

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center pt-28">



        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 drop-shadow-2xl"
        >
          Tarot Pooja Chauhaan
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-purple-200 to-pink-200">
            Tarot Reader, Numerology &amp; Crystals
          </span>
        </motion.h2>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#services"
            className="px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-semibold text-lg transition-all backdrop-blur-sm"
          >
            View Services
          </Link>
        </motion.div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-2 mt-10"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? "w-10 h-2 bg-gradient-to-r from-purple-400 to-rose-400"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-t from-[#FFF8F5] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.3em] uppercase"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
