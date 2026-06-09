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
  title: "Tarot Pooja Chauhaan — Tarot Reader, Numerology & Crystal Healer",
  description:
    "Book a personal tarot reading, numerology session, or crystal healing with Tarot Pooja Chauhaan. Psychic, Clairvoyant & Medium with 20+ years of experience. Available worldwide on WhatsApp.",
  keywords: [
    "tarot reader", "tarot reading online", "Pooja Chauhaan", "psychic reading",
    "numerology", "crystal healing", "clairvoyant", "medium", "spiritual reading",
    "love tarot reading", "career tarot reading", "tarot reader India",
    "online tarot reading", "WhatsApp tarot reading",
  ],
  authors: [{ name: "Tarot Pooja Chauhaan" }],
  openGraph: {
    title: "Tarot Pooja Chauhaan — Tarot Reader, Numerology & Crystal Healer",
    description:
      "Book a personal tarot reading, numerology session, or crystal healing with Tarot Pooja Chauhaan. 20+ years experience. Available worldwide.",
    url: "https://zodiac-delta-henna.vercel.app",
    siteName: "Tarot Pooja Chauhaan",
    images: [{ url: "/pooja.jpg", width: 1200, height: 630, alt: "Tarot Pooja Chauhaan" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarot Pooja Chauhaan — Tarot Reader, Numerology & Crystal Healer",
    description: "Book a personal tarot reading with Pooja Chauhaan. 20+ years experience. Available worldwide on WhatsApp.",
    images: ["/pooja.jpg"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://zodiac-delta-henna.vercel.app"),
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
