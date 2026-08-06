"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, BarChart3, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    name: "SplitPilot",
    category: "Mobile App",
    color: "#eff6ff",
    accent: "#1a56ff",
    img: "https://play-lh.googleusercontent.com/pJFOLimzroS5wmogBfpqonMeOyryFmxHotIOO4bREktdTBF3bcNlSYGcXuQGjrCgdYZns-GUfcRNitBqRyrVuHk=w480-h960-rw",
    icon: <Smartphone size={12} />,
  },
  {
    name: "CalcifyAI",
    category: "Mobile App",
    color: "#ecfdf5",
    accent: "#059669",
    img: "https://play-lh.googleusercontent.com/HXKJU7AnyOo8xinHpIFeoJSatkPMDeqS5T1Xnuj_S1FknCwEcIWVY1hXBMwq1H3-vsxnNa5NP8G300vht1xUApI=w480-h960-rw",
    icon: <Smartphone size={12} />,
  },
  {
    name: "EaterIQ",
    category: "Mobile App",
    color: "#f3e8ff",
    accent: "#7c3aed",
    img: "https://play-lh.googleusercontent.com/8WKYFIxlapXI6HsDvNDQp8UDMwHAUUpQjnkBdWD4N4HntEO10IDDa1sJxtW3xx1cLWrYIEfpL7y-4Nc_CgUm9g=w480-h960-rw",
    icon: <Smartphone size={12} />,
  },
];

export default function PortfolioAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[480px] mx-auto ${className}`}>

      {/* ── Ambient Glow ── */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-blue-400/8 via-indigo-400/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* ── Browser Window Chrome ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 24px 60px rgba(26,86,255,0.10), 0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        {/* Browser top bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-slate-100"
          style={{ background: "#f8fafc" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div
            className="flex-1 mx-3 h-6 rounded-full px-3 flex items-center text-xs text-slate-400"
            style={{ background: "#fff", border: "1px solid #e2e8f0" }}
          >
            fourstacktech.com/portfolio
          </div>
          <Globe size={13} className="text-slate-400" />
        </div>

        {/* Window Body — Project Cards */}
        <div className="p-4 space-y-3" style={{ background: "#f8fafc" }}>
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Thumbnail */}
              <div
                className="w-10 h-10 rounded-[12px] overflow-hidden flex-shrink-0 border border-slate-100"
                style={{ background: proj.color }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={proj.img} alt={proj.name} className="w-full h-full object-cover rounded-[12px]" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-slate-800 leading-tight">{proj.name}</p>
                <div
                  className="inline-flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold"
                  style={{ background: proj.color, color: proj.accent }}
                >
                  {proj.icon}
                  {proj.category}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} size={9} fill="currentColor" />
                ))}
              </div>

              <ArrowUpRight size={12} className="text-slate-400" />
            </motion.div>
          ))}

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="grid grid-cols-3 gap-2 pt-1"
          >
            {[
              { label: "Projects", value: "10+", color: "#eff6ff", text: "#1a56ff" },
              { label: "Clients", value: "8+", color: "#ecfdf5", text: "#059669" },
              { label: "Rating", value: "4.9★", color: "#fef9c3", text: "#ca8a04" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-lg p-2 text-center"
                style={{ background: m.color }}
              >
                <p className="text-sm font-black" style={{ color: m.text }}>{m.value}</p>
                <p className="text-[9px] font-semibold text-slate-500">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating Chart Widget ── */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute -right-6 -bottom-6 rounded-2xl px-4 py-3 z-10 flex items-center gap-3"
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 12px 36px rgba(26,86,255,0.12)",
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-blue-600"
          style={{ background: "#eff6ff" }}
        >
          <BarChart3 size={18} />
        </div>
        <div>
          <p className="text-xs font-black text-slate-800">98% Success</p>
          <p className="text-[10px] text-slate-500">Client Satisfaction</p>
        </div>
      </motion.div>

      {/* ── Floating Delivery Badge ── */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-4 top-6 rounded-full px-4 py-2 z-10 flex items-center gap-2"
        style={{
          background: "linear-gradient(90deg, #1a56ff, #3b82f6)",
          boxShadow: "0 8px 24px rgba(26,86,255,0.30)",
        }}
      >
        <span className="text-white text-[10px] font-bold">✓ On-Time Delivery</span>
      </motion.div>

    </div>
  );
}
