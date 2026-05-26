"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Personal & Confidential",    icon: "🔐", desc: "Every reading is held in complete privacy — just between you and me. What you share stays sacred." },
  { name: "Available Worldwide",        icon: "🌍", desc: "Sessions via WhatsApp, video call, or email report — wherever you are in the world, I am here." },
  { name: "20+ Years of Practice",      icon: "✨", desc: "Two decades and over 20,000 readings have sharpened my ability to tune into your unique energy." },
  { name: "Honest, Not Just Comforting",icon: "🕊", desc: "You receive truth delivered with compassion — real clarity, not empty reassurance." },
];

export default function WhyUs() {
  return (
    <section id="services" className="relative py-32 px-4 bg-gradient-to-b from-[#1a0533] via-[#2d0a4e] to-[#1a0640] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/[0.08] rounded-full blur-3xl pointer-events-none" />
      <motion.div className="absolute top-16 left-12 text-purple-300/20 text-6xl select-none" animate={{ rotate: [0, 15, 0], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 8, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute bottom-24 right-16 text-rose-300/15 text-5xl select-none" animate={{ rotate: [0, -12, 0], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }}>✧</motion.div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20 justify-center"
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-400/40" />
          <span className="font-cinzel text-purple-400 text-sm tracking-[0.3em] uppercase">My Services</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-400/40" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Reading That Is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-rose-300">
                Truly Yours
              </span>
            </h2>
            <p className="text-purple-200/65 leading-relaxed mb-4 text-base">
              With over two decades of practice, I bring both deep spiritual insight and genuine human empathy
              to every reading. I never give generic answers — I take time to tune into your unique energy
              and situation before I say a word.
            </p>
            <p className="text-purple-200/65 leading-relaxed mb-4 text-base">
              Whether you are facing a crossroads in love, uncertainty in your career, grief, or simply a
              hunger for self-understanding, my readings give you real clarity — not just comfort.
            </p>
            <p className="text-purple-200/65 leading-relaxed mb-10 text-base">
              Sessions available via WhatsApp, video call, or email report — wherever you are in the world.
            </p>
            <a
              href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-rose-500 text-white font-semibold hover:from-purple-400 hover:to-rose-400 transition-all shadow-xl shadow-purple-900/50 hover:scale-[1.02]"
            >
              ✦ Book a Consultation
            </a>
          </motion.div>

          <div className="flex flex-col gap-4">
            {services.map(({ name, icon, desc }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/30 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-purple-900/40"
              >
                <span className="text-4xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <h4 className="font-cinzel text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors text-base">{name}</h4>
                  <p className="text-purple-200/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
