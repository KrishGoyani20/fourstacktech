"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle, Link2, GitBranch, Share2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-pad bg-[#050510] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-900/10 blur-[150px]" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">Get In Touch</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ready to transform your vision into reality? Book a free consultation or drop us a message. We respond within 24 hours — guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { icon: <Mail size={20} />, label: "Email", value: "fourstacktech02@gmail.com", href: "mailto:fourstacktech02@gmail.com", color: "text-violet-400" },
              { icon: <Phone size={20} />, label: "Phone / WhatsApp", value: "+91 9537295884", href: "tel:+919537295884", color: "text-emerald-400" },
              { icon: <MapPin size={20} />, label: "Location", value: "Remote · Available Worldwide", href: "#", color: "text-cyan-400" },
              { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/919537295884", color: "text-green-400" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-4 glass-card card-glow hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${c.color} group-hover:bg-white/10 transition-all`}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{c.label}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Book a meeting */}
            <a
              href="https://calendly.com/fourstacktech"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center py-3.5"
            >
              <Calendar size={18} />
              Book a Free Consultation
            </a>

            {/* Social */}
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: <Link2 size={16} />, href: "#", label: "LinkedIn" },
                  { icon: <GitBranch size={16} />, href: "https://github.com/purvravani0587", label: "GitHub" },
                  { icon: <Share2 size={16} />, href: "#", label: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 card-glow">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-400 block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="John Smith"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-400 block mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-400 block mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="+1 234 567 8900"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-400 block mb-1.5">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-all"
                      >
                        <option value="" className="bg-[#0f0f23]">Select a service</option>
                        <option value="mobile" className="bg-[#0f0f23]">Mobile App Development</option>
                        <option value="web" className="bg-[#0f0f23]">Web Application</option>
                        <option value="design" className="bg-[#0f0f23]">UI/UX Design</option>
                        <option value="backend" className="bg-[#0f0f23]">Backend / API</option>
                        <option value="ai" className="bg-[#0f0f23]">AI & Automation</option>
                        <option value="saas" className="bg-[#0f0f23]">SaaS Development</option>
                        <option value="enterprise" className="bg-[#0f0f23]">Enterprise Software</option>
                        <option value="other" className="bg-[#0f0f23]">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-400 block mb-1.5">Project Details *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      rows={4}
                      placeholder="Tell us about your project — what you're building, your timeline, and your budget range..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    We respond within 24 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
