"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import PortfolioAnimation from "@/components/animations/PortfolioAnimation";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Clients", value: "8+" },
  { label: "Industries", value: "10+" },
  { label: "Satisfaction", value: "98%" },
];

export default function PortfolioHeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Ambient blue glow — top right */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,86,255,0.12) 0%, transparent 70%)" }}
      />
      {/* Ambient glow — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,121,255,0.12) 0%, transparent 70%)" }}
      />

      {/* Dot matrix overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,86,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="text-center lg:text-left">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-1.5 mb-6 text-slate-500 text-sm font-medium"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} className="opacity-40" />
              <span className="text-slate-900 font-semibold">Portfolio</span>
            </motion.nav>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                background: "#eff6ff",
                color: "#1a56ff",
                border: "1px solid #dbeafe",
                boxShadow: "0 2px 12px rgba(26,86,255,0.08)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Our Portfolio
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6"
              style={{ color: "#0f172a" }}
            >
              Our Work That{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, #1a56ff 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Speaks
              </span>
              <br />
              For Itself
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              From mobile apps to enterprise platforms — here is a curated showcase of digital products we have built that help real businesses grow, engage users, and scale.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 18px rgba(26,86,255,0.07)",
                  }}
                >
                  <span className="font-black text-blue-600 text-base">{item.value}</span>
                  <span className="text-slate-600">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Portfolio Browser Animation ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <PortfolioAnimation />
          </motion.div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200/60" />
    </section>
  );
}
