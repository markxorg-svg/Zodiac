import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pooja Chauhaan — Tarot Reader, Psychic & Crystal Healer | Tarot Pooja Chauhaan",
  description:
    "Pooja Chauhaan is a professional Tarot Reader, Psychic, Clairvoyant & Crystal Healer with 20+ years of experience. Book a personal tarot reading, numerology or crystal healing session online via WhatsApp. Available worldwide.",
  keywords: [
    "Pooja Chauhaan", "Tarot Pooja Chauhaan", "Pooja Chauhan tarot",
    "tarot reader", "tarot reading", "online tarot reading", "tarot reading online India",
    "psychic reading", "clairvoyant", "medium", "crystal healer", "numerology",
    "love tarot reading", "career tarot reading", "spiritual reading",
    "tarot reader India", "WhatsApp tarot reading", "protection remedy",
    "spell work", "tarot reading near me", "best tarot reader",
  ],
  authors: [{ name: "Pooja Chauhaan" }],
  openGraph: {
    title: "Pooja Chauhaan — Tarot Reader, Psychic & Crystal Healer",
    description:
      "Book a personal tarot reading, numerology or crystal healing with Pooja Chauhaan. 20+ years experience. Available worldwide on WhatsApp.",
    url: "https://zodiac-delta-henna.vercel.app",
    siteName: "Tarot Pooja Chauhaan",
    images: [{ url: "/pooja.jpg", width: 1200, height: 630, alt: "Pooja Chauhaan - Tarot Reader" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pooja Chauhaan — Tarot Reader, Psychic & Crystal Healer",
    description: "Book a personal tarot reading with Pooja Chauhaan. 20+ years experience. Available worldwide on WhatsApp.",
    images: ["/pooja.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  metadataBase: new URL("https://zodiac-delta-henna.vercel.app"),
  alternates: { canonical: "https://zodiac-delta-henna.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-raleway">{children}</body>
    </html>
  );
}
