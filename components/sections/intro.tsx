"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clairs = ["Precognition", "Clairsentience", "Claircognizance"];

export default function Intro() {
  return (
    <section id="about" className="relative py-32 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F7F0FB] to-[#FDE8E8] overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-200/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <motion.div className="absolute top-16 left-10 text-purple-300/30 text-5xl select-none" animate={{ rotate: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 6, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute bottom-20 right-14 text-rose-300/25 text-4xl select-none" animate={{ rotate: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }}>✧</motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20 justify-center"
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
          <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">About Pooja</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-16">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative md:sticky md:top-32 self-stretch md:self-auto"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-purple-300/40 via-rose-200/20 to-purple-200/30 blur-2xl" />
            <div className="relative w-72 md:w-80 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-purple-200/60 h-full min-h-[480px]">
              <Image
                src="/pooja.jpg"
                alt="Tarot Pooja Chauhaan"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-cinzel text-white text-center text-sm tracking-[0.2em] uppercase drop-shadow">Tarot Pooja Chauhaan</p>
              </div>
            </div>

          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 min-w-0"
          >
            <p className="font-cinzel text-purple-500 text-xs tracking-[0.4em] uppercase mb-3">Tarot · Numerology · Crystals</p>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-8 leading-tight">
              Know Me Better<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
                Pooja
              </span>
            </h2>

            <div className="space-y-4 text-purple-800/70 leading-relaxed text-lg">
              <p>
                Since childhood, I&apos;ve had unexplained experiences that led me to discover my natural psychic abilities. I feel connected to the universe and receive guidance through intuition, visions, feelings, and spiritual messages. My predictions can offer insight and direction, but the future is never set in stone — free will always plays a role.
              </p>

            </div>

            {/* 3 Clairs */}
            <div className="mt-10">
              <p className="font-cinzel text-purple-700 text-xs tracking-[0.3em] uppercase mb-5">Blessed with the 3 Main Clairs</p>
              <div className="flex flex-col gap-3">
                {clairs.map((clair, i) => (
                  <motion.span
                    key={clair}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="px-4 py-2 rounded-full bg-white/80 border border-purple-200 text-purple-700 text-sm font-medium shadow-sm backdrop-blur-sm hover:border-purple-400 hover:shadow-md hover:shadow-purple-100/60 transition-all cursor-default"
                  >
                    ✦ {clair}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="mt-8 text-purple-800/70 leading-relaxed text-lg">
              I am Pooja, a Psychic, Tarot Reader, Medium, Clairvoyant, Energy Reader, Empath, and White Witch. Using intuition, clairvoyance, and tarot, I provide guidance, clarity, and spiritual insight.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
