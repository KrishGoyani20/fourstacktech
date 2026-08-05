"use client";

import { Icons, IconType } from "@/components/Icons";

const reasons = [
  { icon: Icons.Brain, title: "Experienced Engineers", desc: "Senior engineers with 5+ years of hands-on experience building production-grade software at scale.", gradient: "from-violet-600 to-indigo-600" },
  { icon: Icons.Crown, title: "Founder-led Development", desc: "Founders personally oversee every project — your product gets C-suite attention, not junior outsourcing.", gradient: "from-indigo-600 to-blue-600" },
  { icon: Icons.Radio, title: "Transparent Communication", desc: "Daily updates, weekly demos, real-time Slack access, and full transparency. No black boxes, ever.", gradient: "from-blue-600 to-cyan-600" },
  { icon: Icons.Zap, title: "Agile Methodology", desc: "Sprint-based delivery with bi-weekly releases. You see progress every step of the way.", gradient: "from-cyan-600 to-teal-600" },
  { icon: Icons.Clock, title: "On-Time Delivery", desc: "97% of our projects ship on schedule. We respect your time and your roadmap like our own.", gradient: "from-emerald-600 to-green-600" },
  { icon: Icons.Building2, title: "Scalable Architecture", desc: "Every system is designed to handle 10x growth from day one. Built for where you're going, not just where you are.", gradient: "from-teal-600 to-emerald-600" },
  { icon: Icons.Lock, title: "Secure Development", desc: "OWASP compliance, penetration testing, encrypted data, and security audits baked into our process.", gradient: "from-amber-600 to-orange-600" },
  { icon: Icons.Target, title: "Dedicated Support", desc: "24/7 post-launch support with guaranteed SLA. We're with you through every user, every bug, every pivot.", gradient: "from-rose-600 to-pink-600" },
  { icon: Icons.Check, title: "Quality Assurance", desc: "Multi-layer QA: automated tests, manual testing, accessibility audits, and performance benchmarking.", gradient: "from-fuchsia-600 to-violet-600" },
  { icon: Icons.Handshake, title: "Long-Term Partnership", desc: "We build lasting relationships. Most clients stay with us for years — not just one project.", gradient: "from-violet-600 to-purple-600" },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-pad bg-[#07071a] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-900/8 blur-[200px]" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">Why FourStackTech</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            10 Reasons Clients <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just write code. We deliver outcomes, build trust, and become an indispensable part of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {reasons.map((r, i) => {
            const IconComp = r.icon;
            return (
            <div
              key={r.title}
              className="group glass-card p-6 card-glow hover:-translate-y-2 transition-all duration-300 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComp size={24} className="text-white" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
            </div>
          )})}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 glass-card p-8 card-glow text-center">
          <p className="text-slate-300 text-base leading-relaxed max-w-3xl mx-auto">
            <span className="text-white font-bold">95+ clients</span> across{" "}
            <span className="text-violet-400 font-bold">20+ countries</span> trust FourStackTech to build, scale, and maintain their most critical software products.{" "}
            <span className="text-white font-bold">98% client satisfaction rate</span> — not because we promise it, but because we earn it.
          </p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
