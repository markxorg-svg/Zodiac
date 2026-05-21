const stats = [
  { value: "20+",    label: "Years of Experience", icon: "🌙" },
  { value: "4,500+", label: "Readings Given",       icon: "🔮" },
  { value: "1,200+", label: "Personal Alerts",      icon: "⭐" },
  { value: "20k+",   label: "Happy Clients",        icon: "✨" },
];

export default function Stats() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-purple-700 via-purple-800 to-rose-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14 justify-center">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-300/50" />
          <span className="font-cinzel text-rose-200 text-sm tracking-[0.3em] uppercase">Our Legacy</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-300/50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm">
              <span className="text-3xl">{icon}</span>
              <span className="font-cinzel text-4xl md:text-5xl font-bold text-white">{value}</span>
              <span className="text-rose-200 text-sm uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
