import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import FeaturesCards from "@/components/ui/feature-shader-cards";
import BestReadings from "@/components/sections/best-readings";
import ConsultBanner from "@/components/sections/consult-banner";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import Crystals from "@/components/sections/crystals";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tarot Pooja Chauhaan",
  "alternateName": "Pooja Chauhaan",
  "description": "Tarot Reader, Psychic, Clairvoyant, Crystal Healer & Numerologist with 20+ years of experience. Personal readings available worldwide via WhatsApp.",
  "url": "https://zodiac-delta-henna.vercel.app",
  "telephone": "+919834946893",
  "email": "pooja.s.chauhaan@gmail.com",
  "founder": { "@type": "Person", "name": "Pooja Chauhaan" },
  "serviceType": ["Tarot Reading", "Numerology", "Crystal Healing", "Psychic Reading", "Spell Work"],
  "areaServed": "Worldwide",
  "availableLanguage": ["English", "Hindi"],
  "sameAs": ["https://wa.me/919834946893"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex flex-col min-h-screen bg-[#FFF8F5]">
        <Navbar />
        <Hero />
        <Intro />
        <ConsultBanner />
        <FeaturesCards />
        <BestReadings />
        <TestimonialsSection />
        <Crystals />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
