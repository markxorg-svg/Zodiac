import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import FeaturesCards from "@/components/ui/feature-shader-cards";
import Crystals from "@/components/sections/crystals";
import Stats from "@/components/sections/stats";
import PulseCTA from "@/components/sections/pulse-cta";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import LeaveReview from "@/components/sections/leave-review";
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

      {/* 5. Crystals */}
      <Crystals />

      {/* 6. Statistics */}
      <Stats />

      {/* 6. PulseBeams CTA */}
      <PulseCTA />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Leave a Review */}
      <LeaveReview />

      {/* 10. Why Work With Us */}
      <WhyUs />

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}
