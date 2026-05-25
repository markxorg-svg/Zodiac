"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clairs = ["Clairvoyance", "Clairaudience", "Clairsentience", "Claircognizance", "Clairalience"];

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

        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative self-start md:sticky md:top-32"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-purple-300/40 via-rose-200/20 to-purple-200/30 blur-2xl" />
            <div className="relative w-72 md:w-80 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-purple-200/60">
              <Image
                src="/pooja.jpg"
                alt="Tarot Pooja Chauhan"
                width={320}
                height={480}
                className="object-cover object-top w-full"
                style={{ height: "480px" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-cinzel text-white text-center text-sm tracking-[0.2em] uppercase drop-shadow">Tarot Pooja Chauhan</p>
                <p className="text-purple-200/80 text-center text-[11px] tracking-widest mt-1 drop-shadow">Est. 2004</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -right-5 top-12 bg-white rounded-2xl shadow-xl shadow-purple-200/60 px-4 py-3 border border-purple-100 text-center"
            >
              <div className="font-cinzel text-2xl font-bold text-purple-800">20+</div>
              <div className="text-purple-500 text-[10px] tracking-widest uppercase mt-0.5">Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.5, type: "spring" }}
              className="absolute -left-5 bottom-20 bg-white rounded-2xl shadow-xl shadow-rose-200/60 px-4 py-3 border border-rose-100 text-center"
            >
              <div className="font-cinzel text-2xl font-bold text-rose-700">20k+</div>
              <div className="text-rose-400 text-[10px] tracking-widest uppercase mt-0.5">Clients</div>
            </motion.div>
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
              Meet Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
                Spiritual Guide
              </span>
            </h2>

            <div className="space-y-4 text-purple-800/70 leading-relaxed text-base">
              <p>
                I am Pooja, a gifted Psychic, Tarot Reader, Clairvoyant, Energy Reader, Empath, and White Witch with a deep connection to the universe and spiritual energies. Through my psychic abilities, clairvoyance, precognition, intuition, and tarot guidance, I help people gain clarity, healing, direction, and deeper insight into their life journey.
              </p>
              <p>
                I had many strange and unexplainable experiences during my childhood, but at that time I couldn&apos;t fully understand what was happening to me. As I grew older, I discovered that I have natural psychic and intuitive abilities, and suddenly everything started making sense.
              </p>
              <p>
                I feel deeply connected to the universe and guided by divine spiritual energies. Through my abilities, I receive messages, emotions, signs, and intuitive insights from angels, souls, archangels, and ascended masters. This connection helps me understand energies beyond the physical world and guide people toward clarity and direction.
              </p>
              <p>
                I have strong intuition and the ability to predict situations with accuracy through spiritual guidance and inner knowing. I believe predictions are not fixed outcomes set in stone — they are messages that help reveal possible paths, opportunities, and guidance for the future.
              </p>
            </div>

            {/* 5 Clairs */}
            <div className="mt-10">
              <p className="font-cinzel text-purple-700 text-xs tracking-[0.3em] uppercase mb-5">Blessed with the 5 Sacred Clairs</p>
              <div className="flex flex-wrap gap-3">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-700 to-rose-500 text-white font-semibold hover:from-purple-600 hover:to-rose-400 transition-all shadow-lg shadow-purple-300/40 hover:shadow-purple-400/50 hover:scale-[1.02]"
              >
                ✦ Book an Appointment
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
