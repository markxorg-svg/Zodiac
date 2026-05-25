"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  { src: "/a.jpg", alt: "Slide A" },
  { src: "/b.jpg", alt: "Slide B" },
  { src: "/c.jpg", alt: "Slide C" },
  { src: "/d.jpg", alt: "Slide D" },
];

const transitions = [
  { initial: { opacity: 0, scale: 1.15, x: 0 },    animate: { opacity: 1, scale: 1, x: 0 },      exit: { opacity: 0, scale: 0.92, x: 0 } },
  { initial: { opacity: 0, x: "100%", scale: 1.05 }, animate: { opacity: 1, x: "0%", scale: 1 },   exit: { opacity: 0, x: "-60%", scale: 1 } },
  { initial: { opacity: 0, y: "8%", scale: 1.1 },   animate: { opacity: 1, y: "0%", scale: 1 },   exit: { opacity: 0, y: "-6%", scale: 0.95 } },
  { initial: { opacity: 0, x: "-100%", scale: 1.05 },animate: { opacity: 1, x: "0%", scale: 1 },  exit: { opacity: 0, x: "60%", scale: 1 } },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
  };

  const t = transitions[current % transitions.length];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={t.initial}
          animate={t.animate}
          exit={t.exit}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url('${slides[current].src}')` }}
        />
      </AnimatePresence>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/20 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-black/30" />

      {/* Animated shimmer line */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      />

      {/* Decorative stars */}
      <motion.div
        className="absolute top-32 left-8 text-rose-300/50 text-5xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >✦</motion.div>
      <motion.div
        className="absolute top-40 right-12 text-purple-300/40 text-3xl select-none"
        animate={{ opacity: [0.2, 0.7, 0.2], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >✧</motion.div>
      <motion.div
        className="absolute bottom-40 left-16 text-rose-300/30 text-2xl select-none"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >✦</motion.div>
      <motion.div
        className="absolute bottom-32 right-8 text-purple-300/40 text-4xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
      >✧</motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/60" />
          <span className="font-cinzel text-rose-200/80 text-xs tracking-[0.4em] uppercase">Est. 2004</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 drop-shadow-2xl"
        >
          Tarot Pooja Chauhan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-purple-200 to-pink-200">
            Tarot Reader, Numerology &amp; Crystals
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/75 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          Individual online readings for love, career, numerology &amp; tarot —
          personalised guidance you can truly trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20a%20reading!"
            target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 text-white font-semibold text-lg transition-all shadow-2xl shadow-purple-700/50 hover:scale-105 hover:shadow-rose-500/40 group"
          >
            <span className="relative z-10">✦ Book an Appointment Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <Link
            href="#services"
            className="px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/60 font-semibold text-lg transition-all backdrop-blur-sm"
          >
            View Services
          </Link>
        </motion.div>

        {/* Slide dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 mt-10"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FFF8F5] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-[0.3em] uppercase"
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
