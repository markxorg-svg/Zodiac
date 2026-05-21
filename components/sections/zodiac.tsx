const signs = [
  { name: "Aries",       symbol: "♈", dates: "Mar 21 – Apr 19" },
  { name: "Taurus",      symbol: "♉", dates: "Apr 20 – May 20" },
  { name: "Gemini",      symbol: "♊", dates: "May 21 – Jun 20" },
  { name: "Cancer",      symbol: "♋", dates: "Jun 21 – Jul 22" },
  { name: "Leo",         symbol: "♌", dates: "Jul 23 – Aug 22" },
  { name: "Virgo",       symbol: "♍", dates: "Aug 23 – Sep 22" },
  { name: "Libra",       symbol: "♎", dates: "Sep 23 – Oct 22" },
  { name: "Scorpio",     symbol: "♏", dates: "Oct 23 – Nov 21" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21" },
  { name: "Capricorn",   symbol: "♑", dates: "Dec 22 – Jan 19" },
  { name: "Aquarius",    symbol: "♒", dates: "Jan 20 – Feb 18" },
  { name: "Pisces",      symbol: "♓", dates: "Feb 19 – Mar 20" },
];

export default function Zodiac() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#FDE8E8] via-[#F5EEF8] to-[#FFF8F5] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <span className="font-cinzel text-purple-500 text-xs tracking-[0.4em] uppercase">The Stars</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-purple-900 mb-4">Online Horoscopes</h2>
          <p className="text-purple-600/70 max-w-xl mx-auto">
            Discover what the cosmos holds for your sign — personalised readings available for all twelve.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {signs.map(({ name, symbol, dates }) => (
            <a
              key={name}
              href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20a%20horoscope%20reading!"
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-purple-200 bg-white/80 hover:bg-gradient-to-b hover:from-purple-50 hover:to-rose-50 hover:border-purple-400 hover:shadow-md transition-all hover:scale-105 cursor-pointer backdrop-blur-sm"
            >
              <span className="text-4xl text-purple-600 group-hover:text-purple-800 transition-colors">{symbol}</span>
              <span className="font-cinzel text-purple-900 text-xs font-semibold">{name}</span>
              <span className="text-purple-400 text-[10px] text-center leading-tight">{dates}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
