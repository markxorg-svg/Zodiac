"use client";

import { motion } from "framer-motion";

export default function ConsultBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-purple-900 via-purple-800 to-rose-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)] pointer-events-none" />
      <motion.div
        className="absolute top-4 left-8 text-white/10 text-6xl select-none"
        animate={{ rotate: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >✦</motion.div>
      <motion.div
        className="absolute bottom-4 right-10 text-white/10 text-5xl select-none"
        animate={{ rotate: [0, -12, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >✧</motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="font-cinzel font-bold text-rose-300 text-2xl md:text-4xl tracking-[0.5em] uppercase mb-4">Consult For</p>
        <h2 className="font-cinzel text-xl md:text-3xl font-bold text-white leading-snug mb-4">
          Accurate. Private and 100% Anonymous Readings.
        </h2>
        <p className="font-bold text-purple-200/80 text-base md:text-lg tracking-wide">I use Psychic Abilities</p>
      </motion.div>
    </section>
  );
}
