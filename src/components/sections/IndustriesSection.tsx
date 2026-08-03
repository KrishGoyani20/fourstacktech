"use client";

const industries = [
  { icon: "🏥", name: "Healthcare", desc: "EMR, telemedicine, patient portals, medical IoT", gradient: "from-red-600/20 to-rose-600/15", border: "hover:border-red-500/40" },
  { icon: "💰", name: "FinTech", desc: "Banking apps, crypto, insurance, lending platforms", gradient: "from-emerald-600/20 to-green-600/15", border: "hover:border-emerald-500/40" },
  { icon: "📚", name: "Education", desc: "LMS, EdTech, e-learning, assessment platforms", gradient: "from-blue-600/20 to-indigo-600/15", border: "hover:border-blue-500/40" },
  { icon: "🚚", name: "Logistics", desc: "Fleet management, tracking, supply chain, dispatch", gradient: "from-amber-600/20 to-orange-600/15", border: "hover:border-amber-500/40" },
  { icon: "🛒", name: "E-commerce", desc: "Marketplaces, D2C stores, wholesale platforms", gradient: "from-violet-600/20 to-purple-600/15", border: "hover:border-violet-500/40" },
  { icon: "🏠", name: "Real Estate", desc: "Property listings, virtual tours, CRM systems", gradient: "from-cyan-600/20 to-teal-600/15", border: "hover:border-cyan-500/40" },
  { icon: "✈️", name: "Travel", desc: "Booking systems, itinerary planners, hotel apps", gradient: "from-sky-600/20 to-blue-600/15", border: "hover:border-sky-500/40" },
  { icon: "🍔", name: "Food Delivery", desc: "Restaurant apps, delivery tracking, cloud kitchens", gradient: "from-orange-600/20 to-red-600/15", border: "hover:border-orange-500/40" },
  { icon: "💬", name: "Social Networking", desc: "Community apps, messaging platforms, creator tools", gradient: "from-pink-600/20 to-fuchsia-600/15", border: "hover:border-pink-500/40" },
  { icon: "🤖", name: "AI Products", desc: "ML-powered apps, chatbots, recommendation engines", gradient: "from-indigo-600/20 to-violet-600/15", border: "hover:border-indigo-500/40" },
  { icon: "☁️", name: "SaaS", desc: "B2B tools, productivity apps, analytics dashboards", gradient: "from-teal-600/20 to-cyan-600/15", border: "hover:border-teal-500/40" },
  { icon: "🏢", name: "Enterprise", desc: "ERP, CRM, internal tools, workflow automation", gradient: "from-slate-600/20 to-gray-600/15", border: "hover:border-slate-400/30" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-pad bg-[#050510] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-cyan-900/8 blur-[150px]" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">Industries We Serve</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Serving <span className="gradient-text-cyan">Every Vertical</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Deep domain expertise across 12+ industries — we speak your language, understand your users, and know your compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className={`group glass-card p-5 card-glow border border-white/[0.06] ${ind.border} hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {ind.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-violet-200 transition-colors">{ind.name}</h3>
              <p className="text-slate-500 text-[10px] leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
