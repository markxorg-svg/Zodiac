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

          {/* Right: crystal guide - light bg */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="relative w-full md:w-[55%] rounded-3xl overflow-hidden shadow-2xl group min-h-[600px]"
          >
            <div className="absolute inset-0" style={{ backgroundColor: "#8A2BE2" }} />
            <Image
              src="/crystal-44.png"
              alt="Crystal guide with healing properties"
              fill
              className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-in-out"
              style={{ mixBlendMode: "screen", filter: "invert(1) hue-rotate(180deg)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
