"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Soft blush-lavender overlay matching wallpaper palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/65 via-rose-950/40 to-purple-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-rose-900/20" />

      {/* Decorative stars */}
      <div className="absolute top-32 left-8 text-rose-300/40 text-5xl select-none">✦</div>
      <div className="absolute top-40 right-12 text-purple-300/30 text-3xl select-none">✧</div>
      <div className="absolute bottom-32 left-16 text-rose-300/30 text-2xl select-none">✦</div>
      <div className="absolute bottom-24 right-8 text-purple-300/40 text-4xl select-none">✧</div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 whitespace-nowrap"
        >
          Tarot Pooja Chauhan
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-purple-200 to-pink-200">
            Tarot Reader, Numerology &amp; Crystals
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-rose-100/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Individual online readings for love, career, numerology &amp; tarot —
          personalised guidance you can truly trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20a%20reading!"
            target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-semibold text-lg transition-all shadow-2xl shadow-purple-700/40 hover:scale-105"
          >
            ✦ Book a Reading
          </a>
          <Link
            href="#services"
            className="px-10 py-4 rounded-full border border-rose-300/60 text-rose-100 hover:bg-white/10 hover:border-rose-200 font-semibold text-lg transition-all backdrop-blur-sm"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF8F5] to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-200/70 text-xs tracking-[0.3em] uppercase">
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
