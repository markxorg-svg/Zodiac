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

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FFF8F5]">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro — Know Me Better Pooja */}
      <Intro />

      {/* 3. Consult Banner */}
      <ConsultBanner />

      {/* 4. Services */}
      <FeaturesCards />

      {/* 5. How to Get the Best Reading */}
      <BestReadings />

      {/* 6. My Happy Client Reviews */}
      <TestimonialsSection />

      {/* 7. Crystals */}
      <Crystals />

      {/* 8. Contact / Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}
