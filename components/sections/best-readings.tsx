"use client";

import { motion } from "framer-motion";

export default function BestReadings() {
  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F7F0FB] to-[#FDE8E8] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <motion.div className="absolute top-16 right-12 text-purple-300/25 text-5xl select-none"
        animate={{ rotate: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute bottom-20 left-10 text-rose-300/20 text-4xl select-none"
        animate={{ rotate: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}>✧</motion.div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Guidance</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-10 leading-tight">
            How to Get the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
              Best Reading
            </span>
          </h2>
          <p className="text-purple-800/70 text-base md:text-lg leading-relaxed">
            Stay open-minded and allow the psychic to guide the session. Feel free to ask for clarification when needed. Remain positive and trust the process. Remember, guidance reveals possibilities and paths, but your free will always determines the choices you make.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
