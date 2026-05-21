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
  title: "Tarot Pooja Chauhan — Astrology, Tarot & Spiritual Readings",
  description:
    "Personal astrology, tarot, mediumship and spell readings by Tarot Pooja Chauhan. Love, career, spiritual guidance — online sessions worldwide.",
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
