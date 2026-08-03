import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTABanner from "@/components/sections/CTABanner";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero — Left text + right floating service icons */}
      <HeroSection />

      {/* 2. Trusted By — marquee of client logos */}
      <TrustedBySection />

      {/* 3. About Us + Our Story + Stats */}
      <AboutSection />

      {/* Leadership Team */}
      <LeadershipSection />

      {/* 4. Work Process — 4-step cards */}
      <ProcessSection />

      {/* 5. Services — 6 service cards */}
      <ServicesSection />

      {/* 6. CTA Banner — "Have a project in mind?" */}
      <CTABanner />

      {/* 7. Portfolio — Featured + mini list */}
      <PortfolioSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
