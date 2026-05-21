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
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Mediumship",
    description:
      "Compassionate connections with loved ones who have passed. Receive messages, find closure, and experience the peace that comes from knowing they are still with you.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
      </svg>
    ),
  },
  {
    title: "Work, Career & Money",
    description:
      "Understand the cosmic energies influencing your career and finances. Get guidance on timing, opportunities, blockages, and the steps to unlock prosperity.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    title: "Tarot & Spell",
    description:
      "In-depth tarot spreads that illuminate the path ahead, paired with intention-setting spells to remove energetic blocks and draw in what you truly want.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
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
