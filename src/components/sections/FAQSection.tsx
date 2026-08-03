"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How do we get started?", a: "Getting started is simple. Book a free consultation call through our website. During the call, we'll discuss your project goals, timeline, and budget. Within 48 hours, we'll send you a detailed proposal with scope, timeline, and investment required." },
  { q: "What is your typical project timeline?", a: "Timelines vary by project complexity. A mobile MVP typically takes 8–12 weeks. A full-featured SaaS platform can take 4–6 months. An enterprise system may take 6–12 months. We always provide a detailed Gantt chart upfront so you know exactly when to expect each milestone." },
  { q: "Do you work with startups or only enterprises?", a: "We work with both! We love helping early-stage startups validate their ideas quickly and efficiently. We also have enterprise clients who trust us with their mission-critical systems. Our engagement models are designed to fit any stage of business." },
  { q: "Who owns the code and IP after project completion?", a: "You own 100% of everything we build — source code, design files, documentation, and all intellectual property. We transfer full ownership upon project completion and final payment. We also sign NDAs before any discussion begins." },
  { q: "How do you handle project communication?", a: "We use Slack or Microsoft Teams for daily communication, Jira for project tracking, and hold weekly video demo calls. You have complete visibility into progress at all times. Our founders are directly accessible on every project." },
  { q: "Can you work with my existing team?", a: "Absolutely. We frequently augment existing engineering teams as embedded partners. We adapt to your tech stack, codebase standards, and team processes. We can work as a pure execution team, a technical advisory layer, or anything in between." },
  { q: "What technologies do you specialize in?", a: "Our core specialties are Flutter (mobile), React/Next.js (web), Node.js/Laravel (backend), and cloud platforms (AWS, GCP, Azure). We also have strong AI/ML capabilities and DevOps expertise. We choose the best technology for each project's specific needs." },
  { q: "Do you provide post-launch support?", a: "Yes — all our projects include 3 months of post-launch support. We offer extended maintenance plans ranging from basic monitoring to full 24/7 DevOps coverage. We're in it for the long term, not just the launch." },
  { q: "How do you ensure quality?", a: "Quality is embedded in every step. We use TDD where applicable, automated CI/CD pipelines, peer code reviews, dedicated QA engineers for every project, and a rigorous staging environment before every release. We have a 0 failed project record." },
  { q: "What is your pricing model?", a: "We offer Fixed Cost (for well-scoped projects), Dedicated Developer (from $3,000/mo), Monthly Team (from $8,000/mo), Hourly ($75–$120/hr), and Long-Term Partnership retainers. Every model includes transparent billing with no hidden fees." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-[#07071a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-violet-900/10 blur-[100px]" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">FAQ</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Everything you need to know before we start building together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glass-card overflow-hidden transition-all duration-300 border ${openIndex === idx ? "border-violet-500/30" : "border-white/[0.06]"}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-sm font-semibold transition-colors ${openIndex === idx ? "text-white" : "text-slate-300"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === idx ? "bg-violet-500/25 text-violet-400 rotate-0" : "bg-white/5 text-slate-400"}`}>
                  {openIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <div className={`accordion-content ${openIndex === idx ? "open" : ""}`}>
                <div className="px-5 pb-5">
                  <div className="w-full h-px bg-white/[0.06] mb-4" />
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <a href="mailto:fourstacktech02@gmail.com" className="btn-ghost text-sm py-2.5 px-6 w-full sm:w-auto">
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
