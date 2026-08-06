"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Smartphone, Globe, BarChart3, Layers } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

type Category = "All" | "Mobile Apps" | "Web Apps" | "ERP & CRM";

const categories: Category[] = ["All", "Mobile Apps", "Web Apps", "ERP & CRM"];

const categoryIcons: Record<Category, React.ReactNode> = {
  All: <Layers size={14} />,
  "Mobile Apps": <Smartphone size={14} />,
  "Web Apps": <Globe size={14} />,
  "ERP & CRM": <BarChart3 size={14} />,
};

type Project = {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  category: Exclude<Category, "All">;
  tag: string;
  tagColor: string;
  tagBg: string;
  img: string;
  imgBg: string;
  techStack: { label: string; bg: string }[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    title: "SplitPilot",
    subtitle: "Expense Sharing App",
    desc: "A comprehensive expense splitting and bill sharing app designed for groups, travelers, and roommates. Available on iOS and Android.",
    category: "Mobile Apps",
    tag: "MOBILE APP",
    tagColor: "#1a56ff",
    tagBg: "#eff6ff",
    img: "https://play-lh.googleusercontent.com/pJFOLimzroS5wmogBfpqonMeOyryFmxHotIOO4bREktdTBF3bcNlSYGcXuQGjrCgdYZns-GUfcRNitBqRyrVuHk=w480-h960-rw",
    imgBg: "#f8fafc",
    techStack: [
      { label: "Flutter", bg: "#e0f2fe" },
      { label: "Dart", bg: "#ede9fe" },
      { label: "Firebase", bg: "#fef3c7" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.calcifyai.splitpilot",
    featured: true,
  },
  {
    num: "02",
    title: "CalcifyAI",
    subtitle: "AI Smart Calculator",
    desc: "An all-in-one AI-powered smart calculator for solving math, tracking goals, and managing finances.",
    category: "Mobile Apps",
    tag: "MOBILE APP",
    tagColor: "#059669",
    tagBg: "#ecfdf5",
    img: "https://play-lh.googleusercontent.com/HXKJU7AnyOo8xinHpIFeoJSatkPMDeqS5T1Xnuj_S1FknCwEcIWVY1hXBMwq1H3-vsxnNa5NP8G300vht1xUApI=w480-h960-rw",
    imgBg: "#f8fafc",
    techStack: [
      { label: "Flutter", bg: "#e0f2fe" },
      { label: "Firebase", bg: "#fef3c7" },
      { label: "OpenAI", bg: "#f3e8ff" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.calcifyai",
  },
  {
    num: "03",
    title: "EaterIQ",
    subtitle: "Food Intelligence App",
    desc: "A food intelligence and barcode scanner app to understand ingredients and make healthier grocery choices.",
    category: "Mobile Apps",
    tag: "MOBILE APP",
    tagColor: "#7c3aed",
    tagBg: "#f3e8ff",
    img: "https://play-lh.googleusercontent.com/8WKYFIxlapXI6HsDvNDQp8UDMwHAUUpQjnkBdWD4N4HntEO10IDDa1sJxtW3xx1cLWrYIEfpL7y-4Nc_CgUm9g=w480-h960-rw",
    imgBg: "#f5f3ff",
    techStack: [
      { label: "Flutter", bg: "#e0f2fe" },
      { label: "ML", bg: "#ecfdf5" },
      { label: "Firebase", bg: "#fef3c7" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.eateriq",
  },
  {
    num: "04",
    title: "Truemeds",
    subtitle: "E-Pharmacy Platform",
    desc: "An e-pharmacy platform allowing users to purchase branded and generic medicines and access healthcare products online.",
    category: "Mobile Apps",
    tag: "MOBILE APP",
    tagColor: "#059669",
    tagBg: "#ecfdf5",
    img: "https://play-lh.googleusercontent.com/1oki0fL3WrM46GyiA3yEiQzH3k5muuDCTxt4wBO494TlpxApg-_ZoVr52E6naBbksLa24fMcWzSr2DhJyspqoQ=s96-rw",
    imgBg: "#f0fdf4",
    techStack: [
      { label: "React Native", bg: "#e0f2fe" },
      { label: "Node.js", bg: "#ecfdf5" },
      { label: "MongoDB", bg: "#fef3c7" },
    ],
    link: "https://play.google.com/store/apps/details?id=com.intellihealth.truemeds",
  },
  {
    num: "05",
    title: "Enterprise E-Commerce",
    subtitle: "Full-Stack Web Platform",
    desc: "A feature-rich e-commerce platform with product filters, mobile-first UI, payment gateway, and admin dashboard.",
    category: "Web Apps",
    tag: "WEB APP",
    tagColor: "#0284c7",
    tagBg: "#e0f2fe",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    imgBg: "#f0f9ff",
    techStack: [
      { label: "Next.js", bg: "#f8fafc" },
      { label: "Laravel", bg: "#fef2f2" },
      { label: "MySQL", bg: "#e0f2fe" },
    ],
  },
  {
    num: "06",
    title: "Business ERP System",
    subtitle: "Enterprise Resource Planning",
    desc: "A robust ERP system that streamlined an entire business operation — inventory, HR, finance, and reporting in one platform.",
    category: "ERP & CRM",
    tag: "ERP SYSTEM",
    tagColor: "#ea580c",
    tagBg: "#fff7ed",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    imgBg: "#fff7ed",
    techStack: [
      { label: "React", bg: "#e0f2fe" },
      { label: "Node.js", bg: "#ecfdf5" },
      { label: "PostgreSQL", bg: "#f3e8ff" },
    ],
  },
];

export default function PortfolioGridSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = projects.find((p) => p.featured);

  return (
    <section className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-[0.15em] mb-2"
            style={{ color: "var(--blue-primary)" }}
          >
            ALL PROJECTS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl lg:text-5xl font-black mb-3"
          >
            Crafted Digital Experiences<br />
            That Drive{" "}
            <span style={{ color: "var(--blue-primary)" }}>Results</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Crafted digital experiences that help brands grow, engage users, and make a lasting impact.
          </motion.p>
        </motion.div>

        {/* ── Featured Project (Full Width) ── */}
        {featured && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-8 rounded-3xl p-7 lg:p-10 relative overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid var(--border-card)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Featured badge */}
            <div className="flex items-center gap-2 mb-5">
              <span style={{ color: "var(--blue-primary)", fontSize: 14 }}>✦</span>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--blue-primary)" }}
              >
                FEATURED PROJECT
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                  style={{ background: featured.tagBg, color: featured.tagColor }}
                >
                  {featured.tag}
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-black mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {featured.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {featured.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-light)" }}>
                    TECH STACK
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {featured.techStack.map((t) => (
                      <span
                        key={t.label}
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: t.bg, color: "var(--text-secondary)" }}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA links */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://apps.apple.com/sg/app/splitpilot/id6763706961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-blue inline-flex items-center gap-1 text-sm"
                  >
                    App Store <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-1 transition-all duration-200"
                    style={{ background: "var(--blue-pale)", color: "var(--blue-primary)" }}
                  >
                    Play Store <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Visual card */}
              <div
                className="rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" }}
              >
                <div className="text-center text-white p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-20 h-20 rounded-[20px] object-cover shadow-xl mx-auto mb-3"
                  />
                  <p className="font-bold text-sm">{featured.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{featured.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Filter Tabs ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200"
                style={{
                  background: active ? "var(--blue-primary)" : "#fff",
                  color: active ? "#fff" : "var(--text-secondary)",
                  border: `1px solid ${active ? "var(--blue-primary)" : "var(--border-card)"}`,
                  boxShadow: active ? "0 4px 16px rgba(26,86,255,0.25)" : "var(--shadow-sm)",
                }}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
                className="rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-card)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Image */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: proj.imgBg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className={`h-28 w-28 drop-shadow-xl transition-transform duration-300 group-hover:scale-105 ${
                      proj.category === "Mobile Apps" ? "rounded-3xl object-cover" : "rounded-xl object-cover w-auto"
                    }`}
                  />
                  {/* Num badge */}
                  <div
                    className="absolute top-4 left-4 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-slate-700"
                    style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)" }}
                  >
                    {proj.num}
                  </div>
                  {/* Category badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: "#fff", color: proj.tagColor, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
                  >
                    {proj.tag}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3
                    className="font-black text-base mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: proj.tagColor }}>
                    {proj.subtitle}
                  </p>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {proj.desc}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.techStack.map((t) => (
                      <span
                        key={t.label}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: t.bg, color: "var(--text-secondary)" }}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={proj.link || "#contact"}
                    target={proj.link ? "_blank" : "_self"}
                    rel={proj.link ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-1.5 text-xs font-black transition-all duration-200 hover:gap-2.5"
                    style={{ color: proj.tagColor }}
                  >
                    View Project <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
