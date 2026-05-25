"use client";

import { motion } from "framer-motion";

const signs = [
  { name: "Aries",       symbol: "♈", dates: "Mar 21 – Apr 19" },
  { name: "Taurus",      symbol: "♉", dates: "Apr 20 – May 20" },
  { name: "Gemini",      symbol: "♊", dates: "May 21 – Jun 20" },
  { name: "Cancer",      symbol: "♋", dates: "Jun 21 – Jul 22" },
  { name: "Leo",         symbol: "♌", dates: "Jul 23 – Aug 22" },
  { name: "Virgo",       symbol: "♍", dates: "Aug 23 – Sep 22" },
  { name: "Libra",       symbol: "♎", dates: "Sep 23 – Oct 22" },
  { name: "Scorpio",     symbol: "♏", dates: "Oct 23 – Nov 21" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21" },
  { name: "Capricorn",   symbol: "♑", dates: "Dec 22 – Jan 19" },
  { name: "Aquarius",    symbol: "♒", dates: "Jan 20 – Feb 18" },
  { name: "Pisces",      symbol: "♓", dates: "Feb 19 – Mar 20" },
];

export default function Zodiac() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#08011a] via-[#12052e] to-[#08011a] overflow-hidden">
      {/* Star field */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Nebula glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-700/8 rounded-full blur-3xl pointer-events-none" />

      <motion.div className="absolute top-20 left-16 text-amber-300/20 text-5xl select-none" animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute bottom-24 right-20 text-purple-300/15 text-4xl select-none" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}>✧</motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-400/30" />
            <span className="font-cinzel text-amber-400/80 text-xs tracking-[0.4em] uppercase">The Stars</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-400/30" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">Online Horoscopes</h2>
          <p className="text-purple-300/60 max-w-xl mx-auto text-base">
            Discover what the cosmos holds for your sign — personalised readings available for all twelve.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {signs.map(({ name, symbol, dates }, i) => (
            <motion.a
              key={name}
              href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20a%20horoscope%20reading!"
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/10 hover:border-amber-400/30 hover:shadow-lg hover:shadow-purple-900/40 transition-all hover:scale-105 cursor-pointer backdrop-blur-sm"
            >
              <span className="text-4xl text-purple-300 group-hover:text-amber-300 transition-colors duration-300">{symbol}</span>
              <span className="font-cinzel text-white/90 text-xs font-semibold">{name}</span>
              <span className="text-purple-400/50 text-[10px] text-center leading-tight">{dates}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
