"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <nav className={`px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-purple-200/60 shadow-sm shadow-purple-100"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-24">
          <Link href="/">
            <div className="bg-white h-24 w-24 overflow-hidden flex-shrink-0">
              <img
                src="/logo.png"
                alt="Tarot Pooja Chauhaan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <ul className={`hidden md:flex gap-8 text-sm tracking-wider transition-colors duration-500 ${scrolled ? "text-purple-700" : "text-white/90"}`}>
            {["Home", "Services", "About", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors relative group ${scrolled ? "hover:text-purple-500" : "hover:text-white"}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all group-hover:w-full ${scrolled ? "bg-purple-400" : "bg-white/70"}`} />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
            target="_blank" rel="noopener noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
              scrolled
                ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md shadow-purple-300/40 hover:from-purple-600 hover:to-purple-400"
                : "border border-white/60 text-white hover:bg-white/15 backdrop-blur-sm"
            }`}
          >
            <span>✦</span> Book a Consultation
          </a>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-purple-800" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 px-4 pb-6">
            <ul className="flex flex-col gap-4 mt-4 text-sm text-purple-700 tracking-wider">
              {["Home", "Services", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-purple-500 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919834946893?text=Hi%20Pooja%20ji%2C%20I%27d%20like%20to%20book%20an%20appointment!"
              target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm font-semibold"
            >
              ✦ Book a Consultation
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
