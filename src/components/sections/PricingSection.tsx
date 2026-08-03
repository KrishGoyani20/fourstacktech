"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Fixed Cost",
    tagline: "For well-defined projects",
    price: "Custom Quote",
    description: "Perfect for projects with clear scope and requirements. Fixed timeline, fixed budget, zero surprises.",
    features: [
      "Detailed project scoping",
      "Fixed price guarantee",
      "Milestone-based delivery",
      "Full source code ownership",
      "3-month post-launch support",
      "Weekly progress reports",
    ],
    highlight: false,
    cta: "Get a Quote",
    badge: null,
    gradient: "from-slate-800/50 to-slate-700/30",
    border: "border-white/[0.08]",
  },
  {
    name: "Dedicated Developer",
    tagline: "Your engineer, full-time",
    price: "$3,000/mo",
    description: "Hire a dedicated senior engineer who works exclusively on your product. Fully integrated into your team.",
    features: [
      "1 dedicated senior engineer",
      "8 hours/day commitment",
      "Daily standups & reports",
      "Sprint-based workflow",
      "Direct Slack/Teams access",
      "Cancel anytime",
    ],
    highlight: false,
    cta: "Hire Developer",
    badge: null,
    gradient: "from-indigo-900/30 to-blue-900/20",
    border: "border-indigo-500/20",
  },
  {
    name: "Monthly Team",
    tagline: "Most popular",
    price: "From $8,000/mo",
    description: "A complete cross-functional team: developer, designer, QA, and PM — ready to execute at full speed.",
    features: [
      "Full engineering team",
      "Designer + Developer + QA",
      "Dedicated project manager",
      "Bi-weekly sprint delivery",
      "Priority support 24/7",
      "Performance analytics",
      "Monthly strategy call with founders",
    ],
    highlight: true,
    cta: "Get Started",
    badge: "Most Popular",
    gradient: "from-violet-900/40 to-indigo-900/30",
    border: "border-violet-500/40",
  },
  {
    name: "Hourly Model",
    tagline: "Pay as you go",
    price: "$75–$120/hr",
    description: "Flexible engagement for ongoing work, bug fixes, consultations, or scaling team capacity when needed.",
    features: [
      "No minimum commitment",
      "Hourly timesheet reporting",
      "Multiple engineer options",
      "On-demand availability",
      "24-hour response SLA",
      "Monthly billing",
    ],
    highlight: false,
    cta: "Start Now",
    badge: null,
    gradient: "from-amber-900/20 to-orange-900/15",
    border: "border-amber-500/20",
  },
  {
    name: "Long-Term Partnership",
    tagline: "Build together for years",
    price: "Custom",
    description: "Strategic technology partnership for companies building complex, long-term products. Retainer-based with priority access.",
    features: [
      "Priority resource allocation",
      "Dedicated infrastructure",
      "Quarterly strategy reviews",
      "Founder direct access",
      "Preferential pricing",
      "SLA guarantee",
      "Annual technology audit",
    ],
    highlight: false,
    cta: "Let's Talk",
    badge: "Enterprise",
    gradient: "from-purple-900/30 to-fuchsia-900/20",
    border: "border-purple-500/30",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad bg-[#07071a] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">Engagement Models</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Flexible <span className="gradient-text">Pricing</span> Models
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you&apos;re a startup launching your MVP or an enterprise scaling globally — we have an engagement model built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card overflow-hidden card-glow border ${plan.border} ${plan.highlight ? "ring-1 ring-violet-500/50" : ""} flex flex-col`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-80`} />

              {/* Highlight top border */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500" />
              )}

              <div className="relative z-10 p-7 flex flex-col h-full">
                {/* Badge */}
                {plan.badge && (
                  <div className="self-start mb-3">
                    <span className={`badge ${plan.highlight ? "" : "bg-amber-500/15 border-amber-500/30 text-amber-300"}`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/[0.08]">
                  <div className={`text-2xl font-black ${plan.highlight ? "gradient-text-violet" : "text-white"}`}>
                    {plan.price}
                  </div>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-violet-500/25" : "bg-white/8"}`}>
                        <Check size={10} className={plan.highlight ? "text-violet-400" : "text-slate-400"} />
                      </div>
                      <span className="text-slate-300 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`${plan.highlight ? "btn-primary" : "btn-ghost"} justify-center text-sm py-3`}
                >
                  {plan.cta} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          All prices are in USD. Custom arrangements available.{" "}
          <a href="#contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
            Contact us
          </a>{" "}
          for a tailored quote.
        </p>
      </div>
    </section>
  );
}
