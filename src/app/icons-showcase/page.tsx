import React from "react";
import { Icons } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IconsShowcasePage() {
  const iconEntries = Object.entries(Icons);

  return (
    <div className="bg-[#050510] min-h-screen pt-32 pb-24 text-white">
      <Navbar />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mb-4">SVG Icons Gallery</div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            All Exported <span className="gradient-text-cyan">Icons</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            These are the 40+ customized SVG icons generated and exported from a single file (<code>Icons.tsx</code>) used across the entire website replacing the old emojis.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {iconEntries.map(([name, IconComponent]) => (
            <div 
              key={name}
              className="glass-card p-6 card-glow text-center border border-white/[0.06] rounded-3xl hover:-translate-y-1 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/15 flex items-center justify-center mx-auto mb-4 border border-blue-500/20 shadow-[0_4px_16px_rgba(0,180,255,0.1)]">
                <IconComponent size={28} className="text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-200 truncate px-2" title={name}>
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
