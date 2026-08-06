import type { Metadata } from "next";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import ValuesSection from "@/components/sections/ValuesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | FourStackTech — Digital Transformation Partner",
  description:
    "Learn about FourStackTech — a passionate team of developers and designers based in Surat, India. Discover our story, how we work, and the values that drive us.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero Banner */}
      <AboutHeroSection />

      {/* 2. Company Information — Who We Are */}
      <CompanyInfoSection />

      {/* 3. How We Work — 5-step process */}
      <HowWeWorkSection />

      {/* 4. Our Values */}
      <ValuesSection />

      {/* 5. Leadership Team */}
      <LeadershipSection />

      {/* 6. CTA Banner */}
      <CTABanner />
    </main>
  );
}
