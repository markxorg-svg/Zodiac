import Image from "next/image";

const clairs = [
  { name: "Clairvoyance",    desc: "Clear seeing"   },
  { name: "Clairaudience",   desc: "Clear hearing"  },
  { name: "Clairsentience",  desc: "Clear feeling"  },
  { name: "Claircognizance", desc: "Clear knowing"  },
  { name: "Clairalience",    desc: "Clear smelling" },
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
                From a very young age, I felt things others could not explain — whispers from beyond, feelings
                that arrived before the moment, visions that quietly unfolded into truth. For a long time I
                searched for answers, until I understood that I was not lost — I was simply awakening.
              </p>
              <p>
                Over two decades ago, I embraced my gift and devoted my life to helping others find clarity in
                moments of confusion, courage in moments of fear, and hope in moments of heartbreak. Through
                tarot, astrology, and deep intuitive guidance, I have sat with thousands of souls — and every
                reading has reminded me why I was born to do this work.
              </p>
              <p>
                I connect with angels, archangels, ascended masters, and the energy of the universe to bring
                you messages that are honest, compassionate, and deeply personal. I do not tell you what you
                want to hear — I tell you what your soul needs to know.
              </p>
              <p className="italic text-purple-600 font-medium">
                &ldquo;A reading with me is not just about the future — it is about understanding yourself
                so deeply that the future begins to shift. You are more powerful than you know.&rdquo;
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
            {clairs.map(({ name, desc }) => (
              <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-b from-purple-50 to-rose-50 border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all text-center">
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
