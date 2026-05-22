import Image from "next/image";


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

        <div className="flex flex-col md:flex-row items-stretch gap-14 mb-20">
          {/* Photo */}
          <div className="flex-shrink-0 relative self-stretch">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-purple-300 to-rose-300 opacity-40 blur-xl" />
            <div className="relative w-72 md:w-80 h-[420px] md:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl ring-2 ring-purple-200">
              <Image src="/pooja.jpg" alt="Tarot Pooja Chauhan" fill className="object-cover object-top" priority />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-purple-900 mb-2">Tarot Pooja Chauhan</h2>
            <p className="text-purple-500 text-sm tracking-widest uppercase mb-6">Tarot Reader, Numerology & Crystals</p>
            <blockquote className="border-l-2 border-purple-300 pl-6 space-y-4 text-purple-800/80 leading-relaxed">
              <p>
                I am Pooja, a gifted Psychic, Tarot Reader, Clairvoyant, Energy Reader, Empath, and White Witch with a deep connection to the universe and spiritual energies. Through my psychic abilities, clairvoyance, precognition, intuition, and tarot guidance, I help people gain clarity, healing, direction, and deeper insight into their life journey.
              </p>
              <p>
                I had many strange and unexplainable experiences during my childhood, but at that time I couldn&apos;t fully understand what was happening to me. As I grew older, I discovered that I have natural psychic and intuitive abilities, and suddenly everything started making sense.
              </p>
              <p>
                I feel deeply connected to the universe and guided by divine spiritual energies. Through my abilities, I receive messages, emotions, signs, and intuitive insights from angels, souls, archangels, and ascended masters. This connection helps me understand energies beyond the physical world and guide people toward clarity and direction.
              </p>
              <p>
                I have strong intuition and the ability to predict situations with accuracy through spiritual guidance and inner knowing. I believe predictions are not fixed outcomes set in stone — they are messages that help reveal possible paths, opportunities, and guidance for the future.
              </p>
              <div className="space-y-1.5">
                <p className="font-semibold text-purple-800 mb-2">I have been blessed with the 5 sacred Clairs:</p>
                <p>✨ Clairvoyance</p>
                <p>✨ Clairaudience</p>
                <p>✨ Clairsentience</p>
                <p>✨ Claircognizance</p>
                <p>✨ Clairalience</p>
              </div>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
