"use client";

import { motion } from "framer-motion";

const tips = [
  {
    number: "01",
    heading: "Let the Psychic Guide You",
    body: "Allow the psychic to guide the session and ask you questions. Trust the process — the cards reveal what your energy calls forward.",
  },
  {
    number: "02",
    heading: "Ask for Elaboration",
    body: "You can ask the psychic to elaborate on any point that needs attention. Your questions help deepen the reading and bring greater clarity.",
  },
  {
    number: "03",
    heading: "Be Positive & Go with the Flow",
    body: "Be positive and go with the flow. The universe has your back always — come with an open heart and a willing spirit.",
  },
  {
    number: "04",
    heading: "You Have Free Will",
    body: "We are all offered different courses of action and paths. And remember, in the end, we have the free will to do what we want to do.",
  },
  {
    number: "05",
    heading: "Choose What Is Best for You",
    body: "We can choose what is best for us. A reading illuminates possibilities — the power to act always remains yours.",
  },
];

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

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Guidance</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4 leading-tight">
            How to Get the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
              Best Reading
            </span>
          </h2>
          <p className="text-purple-600/70 text-base max-w-xl mx-auto leading-relaxed">
            A few simple intentions before your session will open the channel and bring you the deepest clarity.
          </p>
        </motion.div>

        {/* Tips */}
        <div className="flex flex-col gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-start gap-6 p-7 rounded-3xl bg-white/70 border border-purple-100 shadow-sm shadow-purple-100/60 hover:shadow-md hover:shadow-purple-200/50 hover:border-purple-200 transition-all backdrop-blur-sm"
            >
              {/* Number badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-rose-500 flex items-center justify-center shadow-lg shadow-purple-300/40">
                <span className="font-cinzel text-white text-sm font-bold">{tip.number}</span>
              </div>

              <div>
                <h3 className="font-cinzel text-purple-900 font-semibold text-lg mb-2 group-hover:text-purple-700 transition-colors">
                  {tip.heading}
                </h3>
                <p className="text-purple-700/65 text-sm leading-relaxed">
                  {tip.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="font-cinzel text-purple-800 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;The universe speaks to those who are ready to listen.&rdquo;
          </p>
          <span className="inline-block mt-4 text-purple-400 text-2xl">✦</span>
        </motion.div>
      </div>
    </section>
  );
}
