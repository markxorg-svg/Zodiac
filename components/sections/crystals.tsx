"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CrystalSlider } from "@/components/ui/crystal-slider";

const crystals = [
  { name: "Amazonite",       bgPos: "0% 2%",   properties: ["Throat Chakra Stone", "Calming", "Truthfulness"] },
  { name: "Amethyst",        bgPos: "50% 2%",  properties: ["Enhances meditation", "Purifying", "Immune Boosting"] },
  { name: "Aura Quartz",     bgPos: "100% 2%", properties: ["Inspires joy", "Heals mentally & physically", "Connection to angel guides"] },
  { name: "Black Moonstone", bgPos: "0% 39%",  properties: ["Stimulates inner visions", "Repels negative energy", "Self reflection"] },
  { name: "Black Onyx",      bgPos: "50% 39%", properties: ["Strength & stamina", "Stress Relief", "Grounding"] },
  { name: "Blue Jade",       bgPos: "100% 39%",properties: ["Calming & comforting", "Peaceful mind", "Restores emotional balance"] },
  { name: "Clear Quartz",    bgPos: "0% 75%",  properties: ["Master healing crystal", "Clarity", "Enhances properties of other stones"] },
  { name: "Citrine",         bgPos: "50% 75%", properties: ["Abundance & wealth", "Self-esteem & joy", "Increases creativity"] },
  { name: "Fancy Jasper",    bgPos: "100% 75%",properties: ["Heals trauma", "Determination", "Imagination"] },
];

export default function Crystals() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % crystals.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#FDE8E8] via-[#F5EEF8] to-[#FFF8F5] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Sacred Stones</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>

          <div className="text-center mb-4">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4">Crystals</h2>
            <p className="text-purple-600/80 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
              Every crystal holds an ancient frequency — chosen for you, attuned to your energy, and placed with intention to heal, protect, and manifest. ✨
            </p>
            <p className="text-purple-700 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
              Order your crystal today and invite the energy your soul has been searching for. 💫
            </p>
            <p className="text-purple-900 font-semibold text-lg max-w-2xl mx-auto leading-relaxed italic font-cinzel">
              Because the right crystal doesn&apos;t just find you — it changes you.
            </p>
          </div>
        </motion.div>

        {/* Image Layout */}
        <div className="mt-14 flex flex-col md:flex-row gap-5 items-stretch">

          {/* Left: crystal photo - portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative w-full md:w-[45%] rounded-3xl overflow-hidden shadow-2xl group min-h-[600px]"
          >
            <Image
              src="/crystal-s4.jpg"
              alt="Crystal and stone collection"
              fill
              className="object-cover object-center group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-purple-950/10 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-6 left-0 right-0 text-center"
            >
              <span className="font-cinzel text-white text-xs tracking-[0.35em] uppercase drop-shadow-lg">✦ &nbsp; Sacred Collection &nbsp; ✦</span>
            </motion.div>
          </motion.div>

          {/* Right: crystal slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="relative w-full md:w-[55%] rounded-3xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#8A2BE2" }}
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center px-10 gap-6"
              >
                <div
                  className="w-56 h-56 rounded-3xl shadow-2xl ring-2 ring-white/20"
                  style={{
                    backgroundImage: "url('/crystal-44.png')",
                    backgroundSize: "300% 1200%",
                    backgroundPosition: crystals[current].bgPos,
                  }}
                />
                <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">
                  {crystals[current].name}
                </h3>
                <ul className="space-y-2">
                  {crystals[current].properties.map((p) => (
                    <li key={p} className="text-white/90 text-lg flex items-center gap-2 justify-center">
                      <span className="text-white/50">✦</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-6 flex gap-2">
              {crystals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-5" : "bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Infinite crystal image scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <CrystalSlider />
        </motion.div>

      </div>
    </section>
  );
}
