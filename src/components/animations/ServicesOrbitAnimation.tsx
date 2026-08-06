"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Smartphone, Globe, TrendingUp, BarChart3, PieChart, CheckCircle2 } from "lucide-react";

export default function ServicesOrbitAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center ${className}`}>

      {/* ── Background Ambient Glow ── */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-cyan-400/15 to-indigo-500/10 blur-3xl rounded-full scale-110 pointer-events-none" />

      {/* ── Orbit Circles SVG ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" fill="none">
        {/* Outer Orbit Path */}
        <circle cx="250" cy="250" r="200" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4" />
        
        {/* Middle Orbit Path */}
        <circle cx="250" cy="250" r="140" stroke="#cbd5e1" strokeWidth="1" />
        
        {/* Inner Orbit Path */}
        <circle cx="250" cy="250" r="70" stroke="#93c5fd" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Orbit Dots */}
        <motion.circle
          cx="250" cy="50" r="6" fill="#3b82f6"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="450" cy="250" r="5" fill="#60a5fa"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="120" cy="390" r="7" fill="#2563eb"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <circle cx="390" cy="390" r="8" fill="#dbeafe" />

        {/* Connector lines */}
        <path d="M 250 250 L 330 330" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 250 250 L 170 170" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* ── Central Glowing Core ── */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer Ring Pulse */}
        <motion.div
          className="absolute w-28 h-28 rounded-full border border-blue-400/30 bg-blue-500/5"
          animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Middle Ring Pulse */}
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-blue-500/40 bg-blue-500/10"
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Core Solid Orb */}
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-500 shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center justify-center text-white"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 rounded-full bg-white/90 shadow-inner" />
        </motion.div>
      </div>

      {/* ── Floating Service Pill Cards ── */}

      {/* 1. TOP-LEFT: Web Dev */}
      <motion.div
        className="absolute top-10 left-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)]"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
          <Globe size={18} />
        </div>
        <span className="font-bold text-slate-800 text-sm tracking-wide">Web Dev</span>
      </motion.div>

      {/* 2. TOP-RIGHT: UI/UX */}
      <motion.div
        className="absolute top-16 right-6 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)]"
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
          <LayoutGrid size={18} />
        </div>
        <span className="font-bold text-slate-800 text-sm tracking-wide">UI/UX</span>
      </motion.div>

      {/* 3. BOTTOM-LEFT: App Dev */}
      <motion.div
        className="absolute bottom-20 left-4 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)]"
        animate={{ y: [-5, 7, -5] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
          <Smartphone size={18} />
        </div>
        <span className="font-bold text-slate-800 text-sm tracking-wide">App Dev</span>
      </motion.div>

      {/* 4. BOTTOM-RIGHT: Strategy */}
      <motion.div
        className="absolute bottom-12 right-8 z-20 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)]"
        animate={{ y: [7, -5, 7] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center flex-shrink-0">
          <TrendingUp size={18} />
        </div>
        <span className="font-bold text-slate-800 text-sm tracking-wide">Strategy</span>
      </motion.div>

      {/* ── Mini Widget Cards ── */}

      {/* Mini Donut Chart (Top Center Left) */}
      <motion.div
        className="absolute top-28 left-28 z-10 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-md text-blue-600 flex items-center justify-center"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PieChart size={22} className="opacity-80" />
      </motion.div>

      {/* Mini Bar Chart (Center Right) */}
      <motion.div
        className="absolute top-44 right-20 z-10 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-lg flex items-end gap-1 h-12"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="w-1.5 h-4 bg-blue-200 rounded-full" />
        <div className="w-1.5 h-7 bg-blue-400 rounded-full" />
        <div className="w-1.5 h-9 bg-blue-600 rounded-full" />
      </motion.div>

      {/* Mini Dashboard Widget (Mid Left) */}
      <motion.div
        className="absolute top-48 left-16 z-10 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-md flex items-center gap-2"
        animate={{ x: [-2, 4, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <div className="flex flex-col gap-1">
          <div className="w-8 h-1 bg-slate-300 rounded" />
          <div className="w-5 h-1 bg-blue-500 rounded" />
        </div>
      </motion.div>

      {/* Mini Analytics Bars (Bottom Center Right) */}
      <motion.div
        className="absolute bottom-28 right-28 z-10 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-md flex items-center gap-1.5"
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <BarChart3 size={20} className="text-blue-600" />
      </motion.div>

    </div>
  );
}
