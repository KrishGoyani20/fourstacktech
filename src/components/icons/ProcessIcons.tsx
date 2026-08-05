"use client";
import React from "react";
import { motion } from "framer-motion";

export const ClipboardAnimated = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Board */}
    <rect x="14" y="10" width="36" height="48" rx="4" fill="#e2e8f0" />
    <rect x="14" y="10" width="36" height="48" rx="4" fill="url(#board-grad)" />
    {/* Paper */}
    <rect x="20" y="20" width="24" height="32" rx="1" fill="#ffffff" />
    
    {/* Clip */}
    <path d="M26 6h12a4 4 0 014 4v4H22v-4a4 4 0 014-4z" fill="#94a3b8" />
    <rect x="28" y="4" width="8" height="6" rx="2" fill="#64748b" />
    
    {/* Animated Lines (Writing Effect) */}
    <motion.rect x="24" y="28" width="16" height="2" rx="1" fill="#94a3b8" 
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
    <motion.rect x="24" y="34" width="12" height="2" rx="1" fill="#94a3b8" 
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
    <motion.rect x="24" y="40" width="14" height="2" rx="1" fill="#94a3b8" 
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
      
    <defs>
      <linearGradient id="board-grad" x1="14" y1="10" x2="50" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f8fafc" />
        <stop offset="1" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
  </svg>
);

export const DesktopAnimated = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Monitor */}
    <rect x="8" y="12" width="48" height="32" rx="3" fill="#cbd5e1" />
    <rect x="10" y="14" width="44" height="28" rx="1" fill="#0f172a" />
    <path d="M26 44h12v6H26z" fill="#94a3b8" />
    <path d="M20 50h24v2H20z" fill="#64748b" />
    
    {/* Animated Design Elements on Screen */}
    <motion.rect x="14" y="18" width="12" height="12" rx="2" fill="#ef4444"
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "backOut" }} />
      
    <motion.circle cx="40" cy="24" r="6" fill="#3b82f6"
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "reverse", ease: "backOut" }} />
      
    <motion.path d="M14 40 L22 32 L30 40 Z" fill="#10b981"
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatType: "reverse", ease: "backOut" }} />
  </svg>
);

export const LaptopAnimated = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Laptop */}
    <rect x="10" y="14" width="44" height="30" rx="3" fill="#cbd5e1" />
    <rect x="13" y="17" width="38" height="24" rx="1" fill="#0f172a" />
    <path d="M6 44h52v4a4 4 0 01-4 4H10a4 4 0 01-4-4v-4z" fill="#94a3b8" />
    
    {/* Animated Code Lines */}
    <motion.rect x="16" y="20" width="10" height="2" rx="1" fill="#3b82f6"
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "linear" }} />
    <motion.rect x="28" y="20" width="8" height="2" rx="1" fill="#f59e0b"
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 0.6, delay: 0.3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} />
      
    <motion.rect x="16" y="26" width="14" height="2" rx="1" fill="#10b981"
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatType: "reverse", ease: "linear" }} />
      
    <motion.rect x="16" y="32" width="20" height="2" rx="1" fill="#ef4444"
      initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: 0 }}
      transition={{ duration: 0.6, delay: 0.9, repeat: Infinity, repeatType: "reverse", ease: "linear" }} />
  </svg>
);

export const RocketAnimated = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left fin */}
    <path d="M24 38c0 4 2 8 4 10l-8 8H12l4-12c0-2-1-4-1-6z" fill="#ef4444" />
    {/* Right fin */}
    <path d="M40 38c0 4-2 8-4 10l8 8h8l-4-12c0-2 1-4 1-6z" fill="#ef4444" />
    {/* Body */}
    <path d="M32 6C32 6 18 20 18 38c0 4 2 8 4 10h20c2-2 4-6 4-10 0-18-14-32-14-32z" fill="#e2e8f0" />
    <circle cx="32" cy="26" r="6" fill="#cbd5e1" />
    <circle cx="32" cy="26" r="4" fill="#0ea5e9" />
    
    {/* Animated Fire */}
    <motion.g 
      initial={{ scaleY: 0.8, opacity: 0.8 }}
      animate={{ scaleY: 1.3, opacity: 1 }}
      transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      style={{ transformOrigin: "32px 48px", originY: 0 }}
    >
      <path d="M26 48h12l-3 10-3-4-3 4-3-10z" fill="#f59e0b" />
      <path d="M29 48h6l-1 6-2-3-2 3-1-6z" fill="#fef08a" />
    </motion.g>
  </svg>
);
