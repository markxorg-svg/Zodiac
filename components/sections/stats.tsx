"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+",    label: "Years of Experience", icon: "🌙" },
  { value: "4,500+", label: "Readings Given",       icon: "🔮" },
  { value: "1,200+", label: "Personal Alerts",      icon: "⭐" },
  { value: "20k+",   label: "Happy Clients",        icon: "✨" },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-rose-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-14 justify-center"
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-300/40" />
          <span className="font-cinzel text-rose-200 text-sm tracking-[0.3em] uppercase">Our Legacy</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-300/40" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {stats.map(({ value, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center gap-3 p-8 rounded-2xl border border-white/15 bg-white/8 hover:bg-white/15 hover:border-white/25 transition-all backdrop-blur-sm"
            >
              <span className="text-3xl">{icon}</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
                className="font-cinzel text-4xl md:text-5xl font-bold text-white"
              >
                {value}
              </motion.span>
              <span className="text-rose-200/70 text-xs uppercase tracking-widest leading-relaxed">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
