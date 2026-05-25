"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Love & Relationship",
    description: "Clarity on soulmates, compatibility, timing, and what is truly holding your heart back.",
    icon: (
      <svg className="w-28 h-28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        <circle cx="50" cy="16" r="8"/>
        <path d="M43 23 Q34 34 26 46"/>
        <path d="M57 23 Q66 34 74 46"/>
        <path d="M22 50 Q22 78 50 78 Q78 78 78 50"/>
        <path d="M32 50 Q32 66 50 66 Q68 66 68 50"/>
      </svg>
    ),
  },
  {
    title: "Crystals",
    description: "Harness the healing power of crystals — each stone a unique vibration aligned to your needs.",
    icon: (
      <svg className="w-28 h-28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        <path d="M50 12 L30 32 L50 88 L70 32 Z"/>
        <line x1="30" y1="32" x2="70" y2="32"/>
        <path d="M38 12 L50 12 L62 12"/>
        <path d="M38 12 L30 32"/>
        <path d="M62 12 L70 32"/>
        <line x1="50" y1="12" x2="50" y2="32"/>
        <path d="M30 32 L50 52 L70 32"/>
      </svg>
    ),
  },
  {
    title: "Work, Career & Money",
    description: "Understand the energies around your career path, finances, and the right timing to act.",
    icon: (
      <svg className="w-28 h-28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        <path d="M10 50 C10 50 25 20 50 20 C75 20 90 50 90 50 C90 50 75 80 50 80 C25 80 10 50 10 50 Z"/>
        <path d="M42 38 A14 14 0 0 0 42 62 A10 10 0 0 1 42 38"/>
      </svg>
    ),
  },
  {
    title: "Tarot & Spell",
    description: "In-depth tarot spreads and intention-setting spells to remove blocks and attract what you deserve.",
    icon: (
      <svg className="w-28 h-28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="38"/>
        <path d="M50 14 L56 36 L80 36 L61 50 L68 72 L50 58 L32 72 L39 50 L20 36 L44 36 Z"/>
      </svg>
    ),
  },
];

const shaderConfigs = [
  {
    proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6, swirlIterations: 8,
    shape: "checks" as const, shapeScale: 0.08,
    colors: ["hsl(280, 100%, 20%)", "hsl(320, 100%, 45%)", "hsl(340, 90%, 30%)", "hsl(300, 100%, 55%)"],
  },
  {
    proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9, swirlIterations: 12,
    shape: "stripes" as const, shapeScale: 0.12,
    colors: ["hsl(160, 100%, 15%)", "hsl(180, 100%, 40%)", "hsl(140, 90%, 25%)", "hsl(170, 100%, 50%)"],
  },
  {
    proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11,
    shape: "checks" as const, shapeScale: 0.11,
    colors: ["hsl(250, 100%, 20%)", "hsl(270, 100%, 50%)", "hsl(240, 90%, 28%)", "hsl(260, 100%, 60%)"],
  },
  {
    proportion: 0.42, softness: 1.0, distortion: 0.19, swirl: 0.75, swirlIterations: 9,
    shape: "edge" as const, shapeScale: 0.13,
    colors: ["hsl(330, 100%, 20%)", "hsl(350, 100%, 45%)", "hsl(340, 90%, 28%)", "hsl(345, 100%, 60%)"],
  },
];

export default function FeaturesCards() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F5EEF8] to-[#FFF8F5]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">What I Offer</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4">My Services</h2>
          <p className="text-purple-600/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Four areas of deep spiritual guidance — each reading fully personal to your energy and situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const cfg = shaderConfigs[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ height: "420px" }}
              >
                {/* Live shader background */}
                <div className="absolute inset-0">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={cfg.proportion}
                    softness={cfg.softness}
                    distortion={cfg.distortion}
                    swirl={cfg.swirl}
                    swirlIterations={cfg.swirlIterations}
                    shape={cfg.shape}
                    shapeScale={cfg.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.6}
                    colors={cfg.colors}
                  />
                </div>

                {/* Dark overlay — lightens on hover to reveal shader */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition-all duration-700" />

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/15 group-hover:ring-white/35 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-between p-8">

                  {/* Icon — centered, grows slightly on hover */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-white/90 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title + description */}
                  <div className="text-center">
                    <h3 className="font-cinzel text-xl font-bold text-white mb-2 tracking-wide">{feature.title}</h3>
                    <p className="text-white/0 group-hover:text-white/75 text-xs leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 to-rose-500 text-white font-semibold hover:from-purple-600 hover:to-rose-400 transition-all shadow-lg shadow-purple-300/40 hover:scale-[1.02]"
          >
            ✦ Book an Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
