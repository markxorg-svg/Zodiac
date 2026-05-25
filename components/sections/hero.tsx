"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  { src: "/a.jpg", alt: "Tarot reading atmosphere" },
  { src: "/b.jpg", alt: "Spiritual guidance" },
  { src: "/c.jpg", alt: "Crystal energy" },
  { src: "/d.jpg", alt: "Mystical journey" },
];

/* Each slide has its own slow Ken Burns direction while active */
const kenBurns = [
  { initial: { scale: 1.08, x: "1%",  y: "0%"  }, animate: { scale: 1.18, x: "-1%", y: "-1%" } },
  { initial: { scale: 1.1,  x: "-2%", y: "0%"  }, animate: { scale: 1.05, x: "2%",  y: "1%"  } },
  { initial: { scale: 1.05, x: "0%",  y: "2%"  }, animate: { scale: 1.14, x: "-1%", y: "-2%" } },
  { initial: { scale: 1.12, x: "1%",  y: "-1%" }, animate: { scale: 1.07, x: "-2%", y: "1%"  } },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ── Slideshow with Ken Burns ── */}
      <AnimatePresence>
        {slides.map((slide, i) =>
          i === current ? (
            <motion.div
              key={slide.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0 z-0"
            >
              <motion.div
                className="absolute inset-0"
                initial={kenBurns[i].initial}
                animate={kenBurns[i].animate}
                transition={{ duration: 7, ease: "easeInOut" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* ── Layered overlays ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-purple-950/15 to-black/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-purple-950/35 via-transparent to-black/25" />

      {/* ── Shimmer line ── */}
      <motion.div
        className="absolute z-20 top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
        animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />

      {/* ── Decorative stars ── */}
      <motion.div
        className="absolute z-20 top-32 left-8 text-rose-300/50 text-5xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >✦</motion.div>
      <motion.div
        className="absolute z-20 top-40 right-12 text-purple-300/40 text-3xl select-none"
        animate={{ opacity: [0.2, 0.7, 0.2], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >✧</motion.div>
      <motion.div
        className="absolute z-20 bottom-44 left-16 text-rose-300/30 text-2xl select-none"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >✦</motion.div>
      <motion.div
        className="absolute z-20 bottom-36 right-8 text-purple-300/40 text-4xl select-none"
        animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
      >✧</motion.div>

      {/* ── Main content ── */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center pt-28">

        {/* Est. badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/60" />
          <span className="font-cinzel text-rose-200/80 text-xs tracking-[0.45em] uppercase">Est. 2004</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/60" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 drop-shadow-2xl"
        >
          Tarot Pooja Chauhan
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          Individual online readings for love, career, numerology &amp; tarot —
          personalised guidance you can truly trust.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
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

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-t from-[#FFF8F5] to-transparent" />

      {/* ── Scroll indicator ── */}
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
