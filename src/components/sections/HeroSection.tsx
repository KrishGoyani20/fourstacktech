"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from "@/components/animations";
import HeroLogo from "@/components/animations/HeroLogo";
import { Icons, IconType } from "@/components/Icons";

type FloatingCard = {
  label: string;
  bg: string;
  icon: IconType;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: string;
  dur: string;
  hideOnMobile?: boolean;
};

const floatingCards: FloatingCard[] = [
  // Left Side Column
  { label: "HRMS", bg: "#dbeafe", icon: Icons.Users, top: "15%", left: "6%", delay: "0s", dur: "5s" },
  { label: "UI/UX Design", bg: "#fce7f3", icon: Icons.Palette, top: "35%", left: "12%", delay: "1s", dur: "6s", hideOnMobile: true },
  { label: "Web App Dev", bg: "#e0f2fe", icon: Icons.Globe, top: "55%", left: "4%", delay: "0.5s", dur: "6s" },
  { label: "Cloud Solutions", bg: "#e0f2fe", icon: Icons.Cloud, top: "75%", left: "14%", delay: "2s", dur: "5.5s", hideOnMobile: true },
  { label: "WooCommerce", bg: "#ecfdf5", icon: Icons.ShoppingCart, top: "85%", left: "8%", delay: "1.5s", dur: "7s" },

  // Right Side Column
  { label: "Web\nDevelopment", bg: "#dbeafe", icon: Icons.Laptop, top: "18%", right: "8%", delay: "0.7s", dur: "6s" },
  { label: "Shopify Dev", bg: "#ecfdf5", icon: Icons.Store, top: "38%", right: "14%", delay: "1.4s", dur: "5.5s", hideOnMobile: true },
  { label: "WordPress", bg: "#dbeafe", icon: Icons.Circle, top: "58%", right: "6%", delay: "0.9s", dur: "6s" },
  { label: "CRM", bg: "#dbeafe", icon: Icons.CreditCard, top: "78%", right: "15%", delay: "2.2s", dur: "5s", hideOnMobile: true },
  { label: "E-Commerce", bg: "#ecfdf5", icon: Icons.ShoppingBag, top: "85%", right: "8%", delay: "2.5s", dur: "6.5s" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[110px] md:pt-[72px] pb-24 md:pb-32"
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
        <div className="relative flex items-center justify-center min-h-[calc(100vh-72px)]">

          {/* ── Text ── */}
          <motion.div
            className="flex flex-col items-center text-center relative z-30 max-w-4xl mx-auto px-4 pointer-events-auto mt-10 md:mt-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInLeft} className="inline-flex items-center gap-2 mx-auto mb-6 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(26,86,255,0.2)", color: "var(--blue-primary)", backdropFilter: "blur(8px)" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--blue-primary)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--blue-primary)" }} />
              </span>
              Driving Digital Transformation
            </motion.div>

            {/* Animated 3D Logo */}
            <motion.div variants={fadeInLeft} className="mb-6 md:mb-10 w-32 h-32 md:w-48 md:h-48">
              <HeroLogo />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInLeft} className="text-[42px] sm:text-5xl lg:text-[58px] xl:text-[68px] font-black leading-[1.06] tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Transforming Businesses<br />
              Through <span style={{ color: "var(--blue-primary)" }}>Intelligent</span><br />
              Digital Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeInLeft} className="text-base lg:text-lg leading-relaxed mb-10 max-w-[640px] mx-auto" style={{ color: "var(--text-muted)" }}>
              We build powerful, scalable and future-ready software solutions that help businesses automate, innovate and grow in the digital era.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInLeft} className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-blue group">
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-outline-blue">
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* ── Floating Cards (Background) ── */}
          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            {/* All floating service cards */}
            {floatingCards.map((card, i) => {
              const IconComp = card.icon;
              return (
              <div key={i} className={`absolute animate-float ${card.hideOnMobile ? 'hidden md:block' : ''}`} style={{
                top: card.top, left: card.left, right: card.right, bottom: card.bottom,
                animationDelay: card.delay, animationDuration: card.dur,
              }}>
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2.5 flex flex-col items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.09)] transform scale-75 md:scale-100 origin-center"
                  style={{ minWidth: 78, border: "1px solid rgba(255,255,255,0.9)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: card.bg }}>
                    <IconComp size={18} className="text-slate-800" />
                  </div>
                  <span className="text-[9px] font-600 text-center leading-tight" style={{ color: "var(--text-secondary)", fontWeight: 600, maxWidth: 80 }}>
                    {card.label.split("\n").map((line, j) => (
                      <span key={j}>{line}{j < card.label.split("\n").length - 1 && <br />}</span>
                    ))}
                  </span>
                </div>
              </div>
            )})}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
