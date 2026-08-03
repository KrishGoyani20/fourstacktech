"use client";

import { ArrowUpRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/components/animations";

export default function CTABanner() {
  const handleClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="rounded-3xl px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "#fff",
            border: "1px solid var(--border-card)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--blue-pale)" }}
            >
              <MessageSquare size={20} style={{ color: "var(--blue-primary)" }} />
            </div>
            <div>
              <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                Have a project in mind?
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Let&apos;s create something amazing together.
              </p>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="btn-blue flex items-center gap-2"
          >
            Get In Touch
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
