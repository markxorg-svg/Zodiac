const services = [
  { name: "Love & Relationship", icon: "💕", desc: "Clarity on soulmates, compatibility, timing, and what is truly holding your heart back." },
  { name: "Mediumship",          icon: "🕊", desc: "Compassionate connections with loved ones who have passed — messages, closure, and peace." },
  { name: "Work, Career & Money",icon: "💫", desc: "Understand the energies around your career path, finances, and the right timing to act." },
  { name: "Tarot & Spell",       icon: "🔮", desc: "In-depth tarot spreads and intention-setting spells to remove blocks and attract what you deserve." },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F5EEF8] to-[#FFF8F5] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
          <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Why Choose Pooja</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-purple-900 mb-6 leading-snug">
              A Reading That Is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
                Truly Yours
              </span>
            </h2>
            <p className="text-purple-700/80 leading-relaxed mb-4">
              With over two decades of practice, I bring both deep spiritual insight and genuine human empathy
              to every reading. I never give generic answers — I take time to tune into your unique energy
              and situation before I say a word.
            </p>
            <p className="text-purple-700/80 leading-relaxed mb-4">
              Whether you are facing a crossroads in love, uncertainty in your career, grief, or simply a
              hunger for self-understanding, my readings give you real clarity — not just comfort.
            </p>
            <p className="text-purple-700/80 leading-relaxed mb-8">
              Sessions available via WhatsApp, video call, or email report — wherever you are in the world.
            </p>
            <a
              href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20a%20reading!"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-700 to-rose-500 text-white font-semibold hover:from-purple-600 hover:to-rose-400 transition-all shadow-lg shadow-purple-300/40"
            >
              ✦ Book Now
            </a>
          </div>

          <div id="services" className="flex flex-col gap-4">
            {services.map(({ name, icon, desc }) => (
              <div key={name} className="group flex items-start gap-4 p-5 rounded-2xl border border-purple-100 bg-white/80 hover:bg-gradient-to-r hover:from-purple-50 hover:to-rose-50 hover:border-purple-300 hover:shadow-sm transition-all backdrop-blur-sm">
                <span className="text-3xl mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <h4 className="font-cinzel text-purple-900 font-semibold mb-1 group-hover:text-purple-600 transition-colors">{name}</h4>
                  <p className="text-purple-600/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
