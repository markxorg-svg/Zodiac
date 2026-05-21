const serviceLinks = ["Love & Relationship Reading","Mediumship Session","Work, Career & Money","Tarot Reading","Spell Work","Personal Horoscope"];
const quickLinks   = ["Home","Services","About","Horoscopes","Testimonials","Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-rose-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-cinzel text-2xl font-bold text-white mb-3 tracking-[0.2em]">TAROT</div>
          <p className="text-rose-200/80 text-sm leading-relaxed mb-5">
            Professional astrological services by Tarot Pooja Chauhan — guiding seekers since 2004.
          </p>
          <div className="space-y-3 text-sm">
            <a href="tel:+919834946893" className="block text-white font-medium tracking-wide hover:text-rose-200 transition-colors">
              +91 98349 46893
            </a>
            <a href="mailto:pooja.s.chauhaan@gmail.com" className="block text-white font-medium tracking-wide hover:text-rose-200 transition-colors break-all">
              pooja.s.chauhaan@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-cinzel text-white font-semibold uppercase tracking-widest text-xs mb-5">Services</h4>
          <ul className="text-sm space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20a%20reading!"
                  target="_blank" rel="noopener noreferrer"
                  className="text-purple-200 hover:text-rose-200 transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-white font-semibold uppercase tracking-widest text-xs mb-5">Quick Links</h4>
          <ul className="text-sm space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-purple-200 hover:text-rose-200 transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-white font-semibold uppercase tracking-widest text-xs mb-5">Book a Session</h4>
          <p className="text-purple-200 text-sm leading-relaxed mb-5">
            Ready for clarity? Reach out directly on WhatsApp and Pooja will personally connect with you.
          </p>
          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20a%20reading!"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 text-white text-sm font-semibold hover:from-rose-300 hover:to-purple-400 transition-all shadow-lg shadow-rose-500/20"
          >
            ✦ WhatsApp Pooja
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center">
        <p className="text-xs text-purple-300/60 tracking-widest">
          ✦ &nbsp; © {new Date().getFullYear()} Tarot Pooja Chauhan · All Rights Reserved &nbsp; ✦
        </p>
      </div>
    </footer>
  );
}
