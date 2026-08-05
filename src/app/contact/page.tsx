"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

export default function LetsTalkPage() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24" style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--blue-primary)" }}>
              GET IN TOUCH
            </p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Let&apos;s Build Something <span style={{ color: "var(--blue-primary)" }}>Amazing</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Whether you have a specific project in mind or just want to explore possibilities, 
            our team is ready to help you turn your vision into reality.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                Reach Out to Us
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We are always excited to discuss new ideas, solve complex problems, and build lasting partnerships.
                Feel free to contact us through any of the channels below.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--blue-pale)" }}>
                  <Mail size={20} style={{ color: "var(--blue-primary)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--text-secondary)" }}>Email Us</p>
                  <a href="mailto:hello@fourstacktech.com" className="text-base font-semibold hover:underline" style={{ color: "var(--text-primary)" }}>
                    hello@fourstacktech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--blue-pale)" }}>
                  <Phone size={20} style={{ color: "var(--blue-primary)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--text-secondary)" }}>Call Us</p>
                  <a href="tel:+919876543210" className="text-base font-semibold hover:underline" style={{ color: "var(--text-primary)" }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--blue-pale)" }}>
                  <MapPin size={20} style={{ color: "var(--blue-primary)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--text-secondary)" }}>Visit Us</p>
                  <p className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                    123 Innovation Drive, Tech Park<br />
                    Surat, Gujarat, India
                  </p>
                </div>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 rounded-3xl"
            style={{
              background: "#fff",
              border: "1px solid var(--border-card)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-secondary)" }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    style={{ background: "var(--bg-base)", border: "1px solid var(--border-card)", color: "var(--text-primary)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-secondary)" }}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20"
                    style={{ background: "var(--bg-base)", border: "1px solid var(--border-card)", color: "var(--text-primary)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-secondary)" }}>Service of Interest</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 appearance-none"
                  style={{ background: "var(--bg-base)", border: "1px solid var(--border-card)", color: "var(--text-primary)" }}
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>ERP / CRM Systems</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: "var(--text-secondary)" }}>Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  style={{ background: "var(--bg-base)", border: "1px solid var(--border-card)", color: "var(--text-primary)" }}
                ></textarea>
              </div>

              <button className="w-full btn-blue flex items-center justify-center gap-2 mt-2 group py-4 text-base">
                Send Message
                <Send size={18} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
