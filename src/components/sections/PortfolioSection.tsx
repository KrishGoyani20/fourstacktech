"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from "@/components/animations";
import { Icons } from "@/components/Icons";

const stats = [
  { icon: Icons.Smile, value: "120+", label: "Projects Completed" },
  { icon: Icons.TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Icons.Factory, value: "10+", label: "Industries Served" },
];

const splitPilotTechStack = [
  { label: "Flutter", bg: "#e0f2fe" },
  { label: "Dart", bg: "#ede9fe" },
  { label: "Firebase", bg: "#fef3c7" },
];

type SideProject = {
  num: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  img: string;
  imgBg: string;
  link?: string;
};

const sideProjects: SideProject[] = [
  {
    num: "01",
    tag: "MOBILE APP",
    tagColor: "var(--blue-primary)",
    title: "CalcifyAI",
    desc: "An all-in-one AI-powered smart calculator for solving math, tracking goals, and managing finances.",
    img: "https://play-lh.googleusercontent.com/HXKJU7AnyOo8xinHpIFeoJSatkPMDeqS5T1Xnuj_S1FknCwEcIWVY1hXBMwq1H3-vsxnNa5NP8G300vht1xUApI=w480-h960-rw",
    imgBg: "#e8edf5",
    link: "https://play.google.com/store/apps/details?id=com.calcifyai",
  },
  {
    num: "02",
    tag: "MOBILE APP",
    tagColor: "#7c3aed",
    title: "EaterIQ",
    desc: "A food intelligence and barcode scanner app to understand ingredients and make healthier grocery choices.",
    img: "https://play-lh.googleusercontent.com/8WKYFIxlapXI6HsDvNDQp8UDMwHAUUpQjnkBdWD4N4HntEO10IDDa1sJxtW3xx1cLWrYIEfpL7y-4Nc_CgUm9g=w480-h960-rw",
    imgBg: "#ede9fe",
    link: "https://play.google.com/store/apps/details?id=com.eateriq",
  },
  {
    num: "03",
    tag: "MOBILE APP",
    tagColor: "#059669",
    title: "Truemeds",
    desc: "An e-pharmacy platform allowing users to purchase branded and generic medicines and access healthcare products online.",
    img: "https://play-lh.googleusercontent.com/1oki0fL3WrM46GyiA3yEiQzH3k5muuDCTxt4wBO494TlpxApg-_ZoVr52E6naBbksLa24fMcWzSr2DhJyspqoQ=s96-rw",
    imgBg: "#ecfdf5",
    link: "https://play.google.com/store/apps/details?id=com.intellihealth.truemeds",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="section-pad"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "var(--blue-primary)" }}>
            OUR PROJECTS
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-3">
            Crafted Digital Experiences<br />
            That Drive{" "}
            <span style={{ color: "var(--blue-primary)" }}>Results</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Crafted digital experiences that help brands grow, engage, and make a lasting impact.
          </motion.p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          style={{ background: "#fff", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}
        >
          {stats.map((s) => {
            const IconComp = s.icon;
            return (
            <div key={s.label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-800"
                style={{ background: "var(--blue-pale)" }}
              >
                <IconComp size={20} />
              </div>
              <div>
                <div
                  className="text-xl font-black"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </div>
              </div>
            </div>
          )})}
        </motion.div>

        {/* Main layout */}
        <motion.div
          className="grid lg:grid-cols-[1fr_380px] gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* LEFT: Featured Project */}
          <motion.div
            variants={fadeInLeft}
            whileHover={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
            className="rounded-3xl p-7 lg:p-8"
            style={{ background: "#fff", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span style={{ color: "var(--blue-primary)", fontSize: 14 }}>✦</span>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--blue-primary)" }}
              >
                FEATURED PROJECT
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
                  SplitPilot
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  A comprehensive expense splitting and bill sharing app designed for groups, travelers, and roommates. Available now on both iOS and Android platforms.
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a href="https://apps.apple.com/sg/app/splitpilot/id6763706961" target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-1">
                    App Store ↗
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.calcifyai.splitpilot&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm inline-flex items-center gap-1" style={{ background: "var(--blue-pale)", color: "var(--blue-primary)" }}>
                    Play Store ↗
                  </a>
                </div>

                {/* Tech stack */}
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--text-light)" }}
                  >
                    TECHNOLOGIES USED
                  </p>
                  <div className="flex gap-2">
                    {splitPilotTechStack.map((t) => (
                      <div
                        key={t.label}
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold"
                        style={{ background: t.bg, color: "var(--text-secondary)" }}
                      >
                        {t.label.slice(0, 2)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project preview */}
              <div
                className="rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                }}
              >
                <div className="text-center text-white p-4">
                  <div className="flex justify-center mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://play-lh.googleusercontent.com/pJFOLimzroS5wmogBfpqonMeOyryFmxHotIOO4bREktdTBF3bcNlSYGcXuQGjrCgdYZns-GUfcRNitBqRyrVuHk=w480-h960-rw" 
                      alt="SplitPilot Logo" 
                      className="w-20 h-20 rounded-[20px] object-cover shadow-xl" 
                    />
                  </div>
                  <p className="font-bold text-sm">SplitPilot</p>
                  <p className="text-xs text-slate-400 mt-1">Expense Sharing App</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Mini project list */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-4">
            {sideProjects.map((proj) => (
              <motion.div
                key={proj.num}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-5 flex gap-4 items-start"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-card)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-[80px] h-[70px] rounded-xl flex items-center justify-center overflow-hidden border border-slate-200"
                    style={{ background: proj.imgBg }}
                  >
                    {proj.img.startsWith("http") ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl">{proj.img}</span>
                    )}
                  </div>
                  <div
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--text-primary)" }}
                  >
                    {proj.num}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider mb-1"
                    style={{ color: proj.tagColor }}
                  >
                    {proj.tag}
                  </p>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {proj.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {proj.desc}
                  </p>
                  <a
                    href={proj.link || "#contact"}
                    target={proj.link ? "_blank" : "_self"}
                    rel={proj.link ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-1 mt-2 text-xs font-bold"
                    style={{ color: proj.tagColor }}
                  >
                    View Project <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
