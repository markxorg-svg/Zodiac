"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Crystals() {
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
        <div className="mt-14 flex flex-col md:flex-row gap-4 items-stretch">

          {/* Left: portrait photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-2/5 rounded-3xl overflow-hidden shadow-xl group min-h-[340px]"
          >
            <Image
              src="/crystal-new3.jpg"
              alt="Crystal collection"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="font-cinzel text-white text-xs tracking-[0.3em] uppercase opacity-80">✦ Healing Stones ✦</span>
            </div>
          </motion.div>

          {/* Right: infographic + label */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-3/5 rounded-3xl overflow-hidden shadow-xl group min-h-[340px]"
          >
            <Image
              src="/crystal-22.jpeg"
              alt="Crystal types and their powers"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="font-cinzel text-white text-xs tracking-[0.3em] uppercase opacity-80">✦ Each Crystal, A Purpose ✦</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
