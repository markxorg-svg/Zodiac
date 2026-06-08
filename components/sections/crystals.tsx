"use client";

import { motion } from "framer-motion";

const crystalImages = [
  "/IMG_3887.jpg",
  "/IMG_3888.jpg",
  "/IMG_3889.jpg",
  "/IMG_3890.jpg",
  "/IMG_3891.jpg",
  "/IMG_3892.jpg",
  "/IMG_3893.jpg",
  "/IMG_3894.jpg",
  "/IMG_3895.jpg",
  "/IMG_3896.jpg",
];

const row1 = [...crystalImages, ...crystalImages];
const row2 = [...crystalImages].reverse().concat([...crystalImages].reverse());

export default function Crystals() {
  return (
    <section className="py-24 px-0 bg-gradient-to-b from-[#FDE8E8] via-[#F5EEF8] to-[#FFF8F5] overflow-hidden">
      <style>{`
        @keyframes crystals-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes crystals-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .crystals-track-left  { animation: crystals-left  28s linear infinite; }
        .crystals-track-right { animation: crystals-right 28s linear infinite; }
        .crystals-track-left:hover,
        .crystals-track-right:hover { animation-play-state: paused; }
        .crystals-fade {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 mb-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-2">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4">Crystals</h2>
            <p className="text-purple-600/80 text-lg max-w-2xl mx-auto leading-relaxed">
              We sell authentic crystals, gemstone and spiritual products for healing, protection, manifestation, and positive energy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="crystals-fade mb-4 overflow-hidden">
          <div className="crystals-track-left flex gap-4 w-max">
            {row1.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-purple-300/20 hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={src}
                  alt={`Crystal ${(i % crystalImages.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="crystals-fade overflow-hidden">
          <div className="crystals-track-right flex gap-4 w-max">
            {row2.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-purple-300/20 hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={src}
                  alt={`Crystal ${(i % crystalImages.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mt-12 px-4"
      >
        <a
          href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20order%20a%20crystal!"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-rose-500 text-white font-semibold hover:from-purple-500 hover:to-rose-400 transition-all shadow-lg shadow-purple-300/40 hover:scale-[1.02]"
        >
          ✦ Order Your Crystal
        </a>
      </motion.div>
    </section>
  );
}
