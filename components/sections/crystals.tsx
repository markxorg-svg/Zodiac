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

        {/* Image Gallery */}
        <div className="mt-12 space-y-3">

          {/* Top row: 3 images */}
          <div className="grid grid-cols-3 gap-3">
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-md group">
              <Image src="/crystal-2.jpg" alt="Amethyst journal" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-md group">
              <Image src="/crystal-3.jpg" alt="Crystals on wood" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-md group">
              <Image src="/crystal-4.jpg" alt="Crystal stone tray" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
            </div>
          </div>

          {/* Bottom: wide feature image */}
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
            <Image src="/crystal-1.jpg" alt="Astrology wheel" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
            <div className="absolute bottom-5 left-0 right-0 text-center">
              <p className="font-cinzel text-white text-xs tracking-[0.35em] uppercase opacity-90">
                ✦ &nbsp; Aligned with the Stars &nbsp; ✦
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
