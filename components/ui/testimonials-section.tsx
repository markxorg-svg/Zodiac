"use client";

import { motion } from "framer-motion";

type Testimonial = {
  id: string;
  quote: string;
  badge: "Verified Purchase" | "Client Rating" | "Free Rating";
};

const testimonials: Testimonial[] = [
  {
    id: "9193184*****",
    badge: "Verified Purchase",
    quote: "Took a reading from her for the first time, I've gotta say she's really good at what she does. Her sense to interpret the meaning behind the cards is mind blowing. Keep up the good work Puja. God bless.",
  },
  {
    id: "9179819*****",
    badge: "Verified Purchase",
    quote: "The tarot reading was insightful and provided valuable guidance, empowering me to make positive changes.",
  },
  {
    id: "9192164*****",
    badge: "Client Rating",
    quote: "Knowledgeable, pleasant, and honest. Extremely passionate about your reading. You have a deep intense and fervent knowledge — we created a strong connection not by blood but by heart. ~Avichal",
  },
  {
    id: "9194255*****",
    badge: "Verified Purchase",
    quote: "Aap bahut sahajta se aur shanti se baat ko sunkar Taro dwara uska sahi samadhan aur stithi batati hain — you are excellent.",
  },
  {
    id: "9199960*****",
    badge: "Verified Purchase",
    quote: "Mind blowing accurate reading, great knowledge, highly recommended.",
  },
  {
    id: "9186938*****",
    badge: "Verified Purchase",
    quote: "Thank you so much for your support and guidance on this matter. God bless you and keep helping people like me.",
  },
  {
    id: "9198186*****",
    badge: "Free Rating",
    quote: "Very straightforward, and seems confident with her readings.",
  },
  {
    id: "9199960*****",
    badge: "Verified Purchase",
    quote: "Best of best — super accurate reading, great knowledge, highly recommended. (Suneel)",
  },
  {
    id: "9188264*****",
    badge: "Verified Purchase",
    quote: "Nice reading!!! Highly recommend, please go to her — also she is a sweet girl.",
  },
  {
    id: "9194255*****",
    badge: "Client Rating",
    quote: "Thank You Pooja ji — you are excellent.",
  },
  {
    id: "9179997*****",
    badge: "Client Rating",
    quote: "Fast and accurate.",
  },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials].reverse().concat([...testimonials].reverse());

function ReviewCard({ id, quote, badge }: Testimonial) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm mx-2 hover:border-purple-400/30 hover:bg-white/[0.08] transition-all">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="size-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      {/* Quote */}
      <p className="text-white/75 text-sm leading-relaxed flex-1 italic">&ldquo;{quote}&rdquo;</p>
      {/* Footer */}
      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
        <div className="size-7 rounded-full bg-purple-800/60 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
          <svg className="size-3.5 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <div>
          <p className="text-purple-300/60 text-[11px] font-mono tracking-tight">{id}</p>
          <span className={`text-[10px] font-semibold ${badge === "Verified Purchase" ? "text-emerald-400/80" : "text-amber-400/80"}`}>{badge}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 px-0 bg-gradient-to-b from-[#0e0120] via-[#160830] to-[#0e0120] overflow-hidden">
      <style>{`
        @keyframes reviews-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reviews-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .reviews-track-left  { animation: reviews-left  35s linear infinite; }
        .reviews-track-right { animation: reviews-right 35s linear infinite; }
        .reviews-track-left:hover,
        .reviews-track-right:hover { animation-play-state: paused; }
        .reviews-fade {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-rose-600/[0.07] rounded-full blur-3xl pointer-events-none" />

      <motion.div className="absolute top-16 right-20 text-purple-300/15 text-5xl select-none" animate={{ opacity: [0.1, 0.3, 0.1], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }}>✦</motion.div>
      <motion.div className="absolute bottom-20 left-16 text-rose-300/10 text-4xl select-none" animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}>✧</motion.div>

      <div className="relative max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-400/40" />
            <span className="font-cinzel text-purple-400 text-sm tracking-[0.3em] uppercase">Client Reviews</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-400/40" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real Voices
          </h2>
          <p className="text-purple-300/55 text-base max-w-xl mx-auto">
            Verified reviews from real clients — every rating earned through an actual reading with Pooja.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="reviews-fade mb-5 overflow-hidden">
        <div className="reviews-track-left flex w-max">
          {row1.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="reviews-fade overflow-hidden">
        <div className="reviews-track-right flex w-max">
          {row2.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
