import type { Metadata } from "next";
import PortfolioHeroSection from "@/components/sections/PortfolioHeroSection";
import PortfolioGridSection from "@/components/sections/PortfolioGridSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio | FourStackTech — Our Digital Projects & Case Studies",
  description:
    "Explore FourStackTech's portfolio of mobile apps, web platforms, and ERP solutions. See the real digital products we've built for clients across multiple industries.",
};

export default function PortfolioPage() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Banner */}
      <PortfolioHeroSection />

      {/* 2. Projects Grid with Filter Tabs */}
      <PortfolioGridSection />

      {/* 3. Client Testimonials */}
      <TestimonialsSection />

      {/* 4. CTA Banner */}
      <CTABanner />
    </main>
  );
}
