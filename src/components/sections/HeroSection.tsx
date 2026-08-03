"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from "@/components/animations";

type FloatingCard = {
  label: string;
  bg: string;
  icon: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: string;
  dur: string;
};

// Service icon cards - mimicking Sridix's pill-shaped app icon cards
const floatingCards: FloatingCard[] = [
  // Far Left
  { label: "HRMS", bg: "#dbeafe", icon: "👥", top: "5%", left: "5%", delay: "0s", dur: "5s" },
  { label: "UI/UX Design", bg: "#fce7f3", icon: "🎨", top: "35%", left: "2%", delay: "1s", dur: "6s" },
  { label: "Cloud Solutions", bg: "#e0f2fe", icon: "☁️", top: "65%", left: "8%", delay: "2s", dur: "5.5s" },
  { label: "WooCommerce", bg: "#ecfdf5", icon: "🛒", top: "85%", left: "4%", delay: "1.5s", dur: "7s" },

  // Inner Left
  { label: "Web App Dev", bg: "#e0f2fe", icon: "🌐", top: "15%", left: "28%", delay: "0.5s", dur: "6s" },
  { label: "System\nMaintenance", bg: "#ede9fe", icon: "🛡️", top: "78%", left: "25%", delay: "0.8s", dur: "5s" },
  { label: "ERP", bg: "#fef3c7", icon: "📊", top: "88%", left: "42%", delay: "1.2s", dur: "6.5s" },

  // Inner Right
  { label: "Custom Software", bg: "#ede9fe", icon: "⚙️", top: "12%", right: "35%", delay: "0.3s", dur: "5s" },
  { label: "IT Support", bg: "#fce7f3", icon: "🎧", top: "40%", right: "30%", delay: "1.8s", dur: "7s" },
  { label: "Software\nMaintenance", bg: "#e0f2fe", icon: "🔧", top: "82%", right: "32%", delay: "1.6s", dur: "5.5s" },

  // Far Right
  { label: "Web\nDevelopment", bg: "#dbeafe", icon: "💻", top: "8%", right: "8%", delay: "0.7s", dur: "6s" },
  { label: "Shopify Dev", bg: "#ecfdf5", icon: "🏪", top: "30%", right: "2%", delay: "1.4s", dur: "5.5s" },
  { label: "WordPress", bg: "#dbeafe", icon: "🔵", top: "55%", right: "6%", delay: "0.9s", dur: "6s" },
  { label: "CRM", bg: "#dbeafe", icon: "💳", top: "72%", right: "15%", delay: "2.2s", dur: "5s" },
  { label: "E-Commerce", bg: "#ecfdf5", icon: "🛍️", top: "90%", right: "5%", delay: "2.5s", dur: "6.5s" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{
        background: "linear-gradient(145deg, #e8edf5 0%, #dce6f5 50%, #e2ecf8 100%)",
      }}
    >
      {/* Subtle blue border glow on sides */}
      <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: "linear-gradient(to bottom, #1a56ff 0%, transparent 100%)", opacity: 0.5 }} />
      <div className="absolute top-0 right-0 w-[3px] h-full" style={{ background: "linear-gradient(to bottom, #1a56ff 0%, transparent 100%)", opacity: 0.5 }} />

      {/* Big soft glow blob */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(26,86,255,0.07) 0%, transparent 70%)" }} />

      <div className="container relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center min-h-[calc(100vh-72px)]">

          {/* ── LEFT: Text ── */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInLeft} className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(26,86,255,0.2)", color: "var(--blue-primary)", backdropFilter: "blur(8px)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--blue-primary)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--blue-primary)" }} />
              </span>
              Driving Digital Transformation
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInLeft} className="text-[42px] sm:text-5xl lg:text-[58px] xl:text-[64px] font-black leading-[1.06] tracking-tight mb-5" style={{ color: "var(--text-primary)" }}>
              Transforming<br />
              Businesses<br />
              Through{" "}
              <span style={{ color: "var(--blue-primary)" }}>Intelligent</span><br />
              Digital Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeInLeft} className="text-base lg:text-[17px] leading-relaxed mb-9 max-w-[460px]" style={{ color: "var(--text-muted)" }}>
              We build powerful, scalable and future-ready software solutions that help businesses automate, innovate and grow in the digital era.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInLeft} className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-blue group">
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-outline-blue">
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Floating Cards ── */}
          <motion.div
            className="relative h-[480px] lg:h-[600px] hidden lg:block"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Center card — FourStackTech logo */}
            <div className="absolute z-20 animate-float-gentle"
              style={{ top: "50%", left: "42%", transform: "translate(-50%,-50%)" }}>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center gap-1 shadow-[0_8px_32px_rgba(26,86,255,0.18)]"
                style={{ minWidth: 100, border: "2px solid rgba(26,86,255,0.15)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: "#e8eeff" }}>📊</div>
                <span className="text-[11px] font-bold text-center leading-tight" style={{ color: "var(--blue-primary)" }}>FourStack<br />Tech</span>
              </div>
            </div>

            {/* All floating service cards */}
            {floatingCards.map((card, i) => (
              <div key={i} className="absolute animate-float" style={{
                top: card.top, left: card.left, right: card.right, bottom: card.bottom,
                animationDelay: card.delay, animationDuration: card.dur,
              }}>
                <div className="bg-white rounded-2xl p-2.5 flex flex-col items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.09)]"
                  style={{ minWidth: 78, border: "1px solid rgba(255,255,255,0.9)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: card.bg }}>
                    {card.icon}
                  </div>
                  <span className="text-[9px] font-600 text-center leading-tight" style={{ color: "var(--text-secondary)", fontWeight: 600, maxWidth: 80 }}>
                    {card.label.split("\n").map((line, j) => (
                      <span key={j}>{line}{j < card.label.split("\n").length - 1 && <br />}</span>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
