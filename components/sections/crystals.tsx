import Image from "next/image";

export default function Crystals() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#FDE8E8] via-[#F5EEF8] to-[#FFF8F5]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-6 justify-center">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
          <span className="font-cinzel text-purple-600 text-sm tracking-[0.3em] uppercase">Sacred Stones</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
        </div>

        <div className="text-center mb-4">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4">Crystals</h2>
          <p className="text-purple-600/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Every crystal holds an ancient frequency — chosen for you, attuned to your energy, and placed with intention to heal, protect, and manifest.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left: tall portrait */}
          <div className="relative md:row-span-2 rounded-3xl overflow-hidden min-h-[380px] md:min-h-[560px] shadow-lg">
            <Image
              src="/crystal-2.jpg"
              alt="Amethyst crystal journal"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
          </div>

          {/* Top right */}
          <div className="relative rounded-3xl overflow-hidden h-[270px] shadow-lg">
            <Image
              src="/crystal-3.jpg"
              alt="Crystal collection on wood"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
          </div>

          {/* Bottom right */}
          <div className="relative rounded-3xl overflow-hidden h-[270px] shadow-lg">
            <Image
              src="/crystal-4.jpg"
              alt="Crystal and stone tray"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
          </div>

          {/* Full-width bottom */}
          <div className="relative md:col-span-2 rounded-3xl overflow-hidden h-[300px] shadow-lg">
            <Image
              src="/crystal-1.jpg"
              alt="Astrology and crystals"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="font-cinzel text-white text-sm tracking-[0.3em] uppercase opacity-80">
                ✦ &nbsp; Aligned with the Stars &nbsp; ✦
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
