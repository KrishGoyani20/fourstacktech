"use client";
import React from "react";
import { motion } from "framer-motion";

export const TeamAnimated = ({ className = "" }) => (
  <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full max-h-[220px] ${className}`}>
    
    {/* Background Glow / Abstract Shapes */}
    <motion.circle 
      cx="200" cy="125" r="100" 
      fill="#ffffff" 
      initial={{ opacity: 0.05, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1.1 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
    <motion.circle 
      cx="200" cy="125" r="150" 
      fill="#ffffff" 
      initial={{ opacity: 0.02, scale: 0.9 }}
      animate={{ opacity: 0.08, scale: 1.2 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
    />

    {/* Connection Lines (Network) */}
    <motion.path 
      d="M120 160 L200 90 L280 160 L200 180 Z" 
      stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />

    {/* Left Node (Developer) */}
    <motion.g
      initial={{ y: 5 }}
      animate={{ y: -5 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    >
      <circle cx="120" cy="160" r="30" fill="#93c5fd" />
      <path d="M100 180 Q 120 140 140 180" fill="#3b82f6" />
      <circle cx="120" cy="145" r="12" fill="#ffffff" />
      {/* Floating code icon */}
      <motion.rect x="80" y="100" width="30" height="30" rx="8" fill="#fef08a" 
        initial={{ scale: 0.8 }} animate={{ scale: 1.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
      <text x="95" y="120" fontSize="14" fill="#b45309" textAnchor="middle" fontWeight="bold">{"</>"}</text>
    </motion.g>

    {/* Right Node (Designer/Manager) */}
    <motion.g
      initial={{ y: -5 }}
      animate={{ y: 5 }}
      transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
    >
      <circle cx="280" cy="160" r="30" fill="#a7f3d0" />
      <path d="M260 180 Q 280 140 300 180" fill="#10b981" />
      <circle cx="280" cy="145" r="12" fill="#ffffff" />
      {/* Floating graph icon */}
      <motion.rect x="290" y="100" width="30" height="30" rx="8" fill="#fbcfe8"
        initial={{ scale: 0.8 }} animate={{ scale: 1.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }} />
      <text x="305" y="120" fontSize="14" fill="#be185d" textAnchor="middle" fontWeight="bold">📊</text>
    </motion.g>

    {/* Center Node (Leader / Main System) */}
    <motion.g
      initial={{ y: 0 }}
      animate={{ y: -10 }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
    >
      <circle cx="200" cy="90" r="40" fill="#ffffff" />
      <path d="M165 120 Q 200 60 235 120" fill="#e2e8f0" />
      <circle cx="200" cy="75" r="16" fill="#3b82f6" />
      {/* Crown / Star */}
      <motion.path d="M190 50 L195 40 L200 45 L205 40 L210 50 Z" fill="#f59e0b"
        initial={{ rotate: -10 }} animate={{ rotate: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />
    </motion.g>

    {/* Connecting Data Packets (Dots moving along lines) */}
    <motion.circle cx="120" cy="160" r="4" fill="#fef08a"
      animate={{ cx: [120, 200], cy: [160, 90], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle cx="280" cy="160" r="4" fill="#a7f3d0"
      animate={{ cx: [280, 200], cy: [160, 90], opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }}
    />

    {/* Bottom Base */}
    <rect x="80" y="210" width="240" height="8" rx="4" fill="#1e3a8a" opacity="0.6" />
    <motion.rect x="150" y="210" width="100" height="8" rx="4" fill="#60a5fa" 
      initial={{ width: 0 }} animate={{ width: 100 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);
