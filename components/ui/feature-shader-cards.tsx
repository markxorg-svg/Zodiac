"use client";

import type React from "react";
import { Warp } from "@paper-design/shaders-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Love & Relationship",
    description:
      "Discover what the stars and cards reveal about your love life — compatibility, timing, soulmates, and the blocks keeping you from the relationship you deserve.",
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        {/* Circle at top */}
        <circle cx="50" cy="16" r="8"/>
        {/* Arms curving down */}
        <path d="M43 23 Q34 34 26 46"/>
        <path d="M57 23 Q66 34 74 46"/>
        {/* Outer crescent bowl */}
        <path d="M22 50 Q22 78 50 78 Q78 78 78 50"/>
        {/* Inner crescent */}
        <path d="M32 50 Q32 66 50 66 Q68 66 68 50"/>
      </svg>
    ),
  },
  {
    title: "Crystals",
    description:
      "Harness the healing power of crystals to cleanse your energy, attract abundance, and restore inner balance — each stone a unique vibration aligned to your needs.",
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        {/* Gem top facets */}
        <path d="M50 12 L30 32 L50 88 L70 32 Z"/>
        {/* Belt line */}
        <line x1="30" y1="32" x2="70" y2="32"/>
        {/* Top crown */}
        <path d="M38 12 L50 12 L62 12"/>
        <path d="M38 12 L30 32"/>
        <path d="M62 12 L70 32"/>
        {/* Inner facets */}
        <line x1="50" y1="12" x2="50" y2="32"/>
        <path d="M30 32 L50 52 L70 32"/>
      </svg>
    ),
  },
  {
    title: "Work, Career & Money",
    description:
      "Understand the cosmic energies influencing your career and finances. Get guidance on timing, opportunities, blockages, and the steps to unlock prosperity.",
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        {/* Eye outline */}
        <path d="M10 50 C10 50 25 20 50 20 C75 20 90 50 90 50 C90 50 75 80 50 80 C25 80 10 50 10 50 Z"/>
        {/* Crescent moon inside eye */}
        <path d="M42 38 A14 14 0 0 0 42 62 A10 10 0 0 1 42 38"/>
      </svg>
    ),
  },
  {
    title: "Tarot & Spell",
    description:
      "In-depth tarot spreads that illuminate the path ahead, paired with intention-setting spells to remove energetic blocks and draw in what you truly want.",
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 100 100">
        {/* Outer circle */}
        <circle cx="50" cy="50" r="38"/>
        {/* 5-pointed star */}
        <path d="M50 14 L56 36 L80 36 L61 50 L68 72 L50 58 L32 72 L39 50 L20 36 L44 36 Z"/>
      </svg>
    ),
  },
];

export default function FeaturesCards() {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6, swirlIterations: 8,
        shape: "checks" as const, shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9, swirlIterations: 12,
        shape: "stripes" as const, shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11,
        shape: "checks" as const, shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42, softness: 1.0, distortion: 0.19, swirl: 0.75, swirlIterations: 9,
        shape: "edge" as const, shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ];
    return configs[index % configs.length];
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-[#F5EEF8] via-[#FDE8E8] to-[#F5EEF8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            My Services
          </h2>
          <p className="text-lg text-purple-600/70 max-w-3xl mx-auto leading-relaxed">
            Four areas of deep spiritual guidance — each reading fully personal to your energy and situation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const cfg = getShaderConfig(index);
            return (
              <div key={index} className="relative h-80">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
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
                    speed={0.8}
                    colors={cfg.colors}
                  />
                </div>
                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/80 border border-white/20 dark:border-white/10">
                  <div className="mb-6 filter drop-shadow-lg">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="leading-relaxed flex-grow text-gray-100 text-sm font-medium">{feature.description}</p>
                  <div className="mt-6 flex items-center text-sm font-bold text-gray-200">
                    <span className="mr-2">Book now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
