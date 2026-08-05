"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroLogo({ className = "" }: { className?: string }) {
  // Path drawing animation variants
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.4;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Background soft glow for the entire logo */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
      
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-2xl">
        <defs>
          <linearGradient id="topGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="r1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="r2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="r3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g strokeLinejoin="round" strokeLinecap="round">
          <motion.path d="M 256 262 L 90 166 L 90 356 L 256 452 Z" fill="url(#left)" stroke="url(#left)" strokeWidth="4" 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ transformOrigin: "256px 256px" }} />
          
          <motion.path d="M 256 262 L 422 166 L 422 216 L 256 312 Z" fill="url(#r1)" stroke="url(#r1)" strokeWidth="4" 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
            
          <motion.path d="M 256 332 L 422 236 L 422 286 L 256 382 Z" fill="url(#r2)" stroke="url(#r2)" strokeWidth="4" 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} />
            
          <motion.path d="M 256 402 L 422 306 L 422 356 L 256 452 Z" fill="url(#r3)" stroke="url(#r3)" strokeWidth="4" 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} />
            
          <motion.path d="M 256 70 L 422 166 L 256 262 L 90 166 Z" fill="url(#topGrad)" stroke="url(#topGrad)" strokeWidth="4" 
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} />
        </g>

        {/* Glowing White Traces */}
        <g filter="url(#glow)" stroke="#ffffff" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M 200 400 L 120 354 L 120 314 L 200 360 L 200 320 L 120 274 L 120 204 L 200 250" custom={0} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 120 239 L 165 265" custom={1} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 160 227 L 140 195 L 200 160 L 260 195 L 336 151" custom={2} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 170 212 L 230 177 L 290 212" custom={3} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 110 178 L 150 155" custom={3} variants={draw} initial="hidden" animate="visible" />
        </g>

        {/* Sharp White Traces (Overlay) */}
        <g stroke="#ffffff" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <motion.path d="M 200 400 L 120 354 L 120 314 L 200 360 L 200 320 L 120 274 L 120 204 L 200 250" custom={0} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 120 239 L 165 265" custom={1} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 160 227 L 140 195 L 200 160 L 260 195 L 336 151" custom={2} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 170 212 L 230 177 L 290 212" custom={3} variants={draw} initial="hidden" animate="visible" />
          <motion.path d="M 110 178 L 150 155" custom={3} variants={draw} initial="hidden" animate="visible" />
        </g>

        {/* Arrowhead & Dots */}
        <g fill="#ffffff">
          <motion.polygon points="360,137 326,134 346,168" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1 + 2 * 0.4 + 1, duration: 0.5, type: "spring" }} 
            style={{ transformOrigin: "343px 146px" }} />
          
          <motion.circle cx="290" cy="212" r="8" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1 + 3 * 0.4 + 0.5, duration: 0.5, type: "spring" }} />
            
          <motion.circle cx="150" cy="155" r="8" 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1 + 3 * 0.4 + 0.5, duration: 0.5, type: "spring" }} />
        </g>
      </svg>
    </motion.div>
  );
}
