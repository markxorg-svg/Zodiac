import Image from "next/image";

const clairs = [
  { name: "Clairvoyance",    desc: "Clear seeing",   icon: "👁" },
  { name: "Clairaudience",   desc: "Clear hearing",  icon: "👂" },
  { name: "Clairsentience",  desc: "Clear feeling",  icon: "🤲" },
  { name: "Claircognizance", desc: "Clear knowing",  icon: "🧠" },
  { name: "Clairalience",    desc: "Clear smelling", icon: "🌸" },
];

export default function Intro() {
  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-[#FFF8F5] via-[#F5EEF8] to-[#FDE8E8] overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
          <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">About Pooja</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-14 mb-20">
          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-300 to-rose-300 opacity-40 blur-xl" />
            <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-xl ring-2 ring-purple-200">
              <Image src="/pooja.jpg" alt="Tarot Pooja Chauhan" fill className="object-cover object-top" priority />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-purple-900 mb-2">Tarot Pooja Chauhan</h2>
            <p className="text-purple-500 text-sm tracking-widest uppercase mb-6">Professional Astrologer & Tarot Reader</p>
            <blockquote className="border-l-2 border-purple-300 pl-6 space-y-4 text-purple-800/80 leading-relaxed">
              <p>
                I had strange experiences when I was a kid, but I couldn&apos;t understand what was happening.
                Then I discovered that I have natural psychic abilities, and it all started making sense to me.
                I have a deep connection with the universe.
              </p>
              <p>
                My abilities allow me to receive information and feelings from my angels, souls, archangels,
                and ascended masters. I can predict with accuracy — I can see, hear, feel, sense, and have
                intuitions beyond the boundaries of the physical world.
              </p>
              <p className="italic text-purple-600 font-medium">
                &ldquo;I believe predictions can show you the way and give you directions. But remember —
                a prediction isn&apos;t an absolute outcome that is set in stone.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* 5 Clairs */}
        <div className="rounded-3xl border border-purple-200 bg-white/70 backdrop-blur px-8 py-10 shadow-sm">
          <div className="text-center mb-8">
            <p className="font-cinzel text-purple-500 text-xs tracking-[0.4em] uppercase mb-2">Spiritual Gifts</p>
            <h3 className="font-cinzel text-purple-900 text-2xl font-bold">Blessed with The 5 Main Clairs</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clairs.map(({ name, desc, icon }) => (
              <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-b from-purple-50 to-rose-50 border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all text-center">
                <span className="text-3xl">{icon}</span>
                <p className="font-cinzel text-purple-800 text-xs font-semibold">{name}</p>
                <p className="text-purple-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
