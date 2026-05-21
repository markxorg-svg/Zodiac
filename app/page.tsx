import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import FeaturesCards from "@/components/ui/feature-shader-cards";
import Stats from "@/components/sections/stats";
import Zodiac from "@/components/sections/zodiac";
import PulseCTA from "@/components/sections/pulse-cta";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import WhyUs from "@/components/sections/why-us";
import Footer from "@/components/sections/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FFF8F5]">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. About / Intro */}
      <Intro />

      {/* 4. Features / Services Cards */}
      <FeaturesCards />

      {/* 5. Statistics */}
      <Stats />

      {/* 6. Zodiac Signs */}
      <Zodiac />

      {/* 7. PulseBeams CTA */}
      <PulseCTA />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Why Work With Us */}
      <WhyUs />

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}
