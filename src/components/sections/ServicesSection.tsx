"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

const services = [
  {
    num: "01",
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Scalable and secure e-commerce platforms that convert visitors into loyal customers with seamless shopping experiences.",
    color: "#dbeafe",
    iconColor: "var(--blue-primary)",
    dotColor: "var(--blue-primary)",
    linkColor: "var(--blue-primary)",
  },
  {
    num: "02",
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps built for seamless performance, engaging user experiences, and business growth.",
    color: "#ede9fe",
    iconColor: "#7c3aed",
    dotColor: "#7c3aed",
    linkColor: "#7c3aed",
  },
  {
    num: "03",
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, responsive, and fast websites & web applications tailored to your business objectives.",
    color: "#e0f2fe",
    iconColor: "#0284c7",
    dotColor: "#0284c7",
    linkColor: "#0284c7",
  },
  {
    num: "04",
    icon: "⚙️",
    title: "ERP & CRM Systems",
    desc: "Streamline operations, manage customer relationships, and improve efficiency with custom ERP & CRM solutions.",
    color: "#ede9fe",
    iconColor: "#7c3aed",
    dotColor: "#7c3aed",
    linkColor: "#7c3aed",
  },
  {
    num: "05",
    icon: "📊",
    title: "Business Management Solutions",
    desc: "Smart solutions to optimize workflows, track performance, and drive better business decisions.",
    color: "#fef3c7",
    iconColor: "#d97706",
    dotColor: "#d97706",
    linkColor: "#d97706",
  },
  {
    num: "06",
    icon: "🎧",
    title: "Support & Maintenance",
    desc: "Reliable support and ongoing maintenance to keep your applications secure, updated, and running smoothly.",
    color: "#e0f2fe",
    iconColor: "#0284c7",
    dotColor: "#0284c7",
    linkColor: "#0284c7",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--blue-primary)" }}>
              WHAT CAN WE OFFER
            </p>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-4">
            Services That Drive Your<br />
            Business{" "}
            <span style={{ color: "var(--blue-primary)" }}>Forward</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            We deliver end-to-end digital solutions that help you innovate, scale
            and stay ahead in a competitive world.
          </motion.p>
        </motion.div>

        {/* Services Grid: 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {services.map((svc) => (
            <motion.div
              key={svc.num}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              style={{
                background: "#fff",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Icon + Number row */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  {/* Circular track */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{ borderColor: svc.color, background: svc.color + "60" }}
                  >
                    <span className="text-2xl">{svc.icon}</span>
                  </div>
                  {/* Colored dot */}
                  <div
                    className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
                    style={{ background: svc.dotColor }}
                  />
                </div>
                <div className="flex flex-col gap-0.5 pt-1">
                  <span
                    className="text-xs font-bold"
                    style={{ color: svc.iconColor }}
                  >
                    {svc.num}
                  </span>
                  <h3
                    className="text-lg font-black leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {svc.title}
                  </h3>
                </div>
              </div>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {svc.desc}
              </p>

              {/* Explore link */}
              <a
                href="#contact"
                className="explore-link"
                style={{ color: svc.linkColor }}
              >
                Explore Service
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{
            background: "#fff",
            border: "1px solid var(--border-card)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "var(--blue-primary)" }}
            >
              🚀
            </div>
            <div>
              <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                Have a Project in Mind?
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Let&apos;s build something great together.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:gap-8">
            {[
              { icon: "🛡️", label: "Secure & Reliable", sub: "Enterprise-grade security you can trust." },
              { icon: "⏱️", label: "On-Time Delivery", sub: "We value your time and deliver on our promises." },
              { icon: "👥", label: "Expert Team", sub: "Skilled professionals dedicated to your success." },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-blue flex-shrink-0">
            Let&apos;s Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
