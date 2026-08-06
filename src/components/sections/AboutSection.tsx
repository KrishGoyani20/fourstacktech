"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Shield, Zap, Briefcase, Smile, Users, Calendar, Headphones, Globe } from "lucide-react";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn, staggerContainer, viewportOptions } from "@/components/animations";
import { TeamAnimated } from "@/components/icons/AboutIcons";

const values = [
  {
    icon: <Users size={20} />,
    title: "Client First Approach",
    desc: "Your goals are our priority. We listen, understand and deliver solutions tailored to your business needs.",
    color: "#dbeafe",
    iconColor: "var(--blue-primary)",
  },
  {
    icon: <Shield size={20} />,
    title: "Quality & Reliability",
    desc: "We follow industry best practices to ensure secure, stable and high-performance solutions.",
    color: "#e0f2fe",
    iconColor: "#0284c7",
  },
  {
    icon: <Zap size={20} />,
    title: "Innovation Driven",
    desc: "We embrace new technologies and creative thinking to deliver future-ready digital products.",
    color: "#ecfdf5",
    iconColor: "#059669",
  },
];

const stats = [
  { label: "Projects Delivered", value: 10, suffix: "+", icon: <Briefcase size={24} /> },
  { label: "Months Experience", value: 7, suffix: "", icon: <Calendar size={24} /> },
  { label: "Happy Clients", value: 8, suffix: "+", icon: <Smile size={24} /> },
  { label: "Developers", value: 10, suffix: "+", icon: <Users size={24} /> },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="ticker">{count}{suffix}</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">

        {/* ===== ABOUT US TOP ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left — animated slide in from left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p variants={fadeInUp} className="section-label">ABOUT US</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-5 leading-tight">
              Empowering Businesses
              <br />
              Through Technology
              <br />
              Since{" "}
              <span style={{ color: "var(--blue-primary)" }}>2026</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              200+ satisfied clients. 100% commitment to your growth. We build
              technology solutions that increase efficiency, boost revenue, and
              position your business ahead of competitors in Surat and beyond.
            </motion.p>

            {/* Values */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeInLeft} custom={i} className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: v.color, color: v.iconColor }}
                  >
                    {v.icon}
                  </motion.div>
                  <div>
                    <p className="font-700 text-sm mb-0.5" style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                      {v.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — animated slide in from right */}
          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Decorative dots */}
            <div
              className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl hidden lg:block"
              style={{
                background: "radial-gradient(circle, rgba(26,86,255,0.12) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
            {/* Circle outline */}
            <div
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full hidden lg:block"
              style={{ border: "2px solid rgba(26,86,255,0.2)" }}
            />

            {/* Main photo */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{ background: "linear-gradient(135deg, #1a56ff 0%, #4f79ff 100%)" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-full flex justify-center mb-6"
                >
                  <TeamAnimated className="w-[80%] lg:w-[60%] drop-shadow-2xl" />
                </motion.div>
                <p className="font-bold text-2xl lg:text-3xl mb-2 mt-4 text-white drop-shadow-md">Our Expert Team</p>
                <p className="text-blue-100 text-sm lg:text-base opacity-90">50+ Dedicated Professionals</p>
              </div>
            </motion.div>

            {/* Blue "Our Purpose" overlay card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 lg:-left-10 rounded-2xl p-5 max-w-[220px] text-white card-blue"
              style={{ background: "var(--blue-primary)", boxShadow: "0 12px 40px rgba(26,86,255,0.35)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Target size={18} className="text-blue-200" />
                <p className="font-bold text-sm">Our Purpose</p>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                To build technology solutions that empower businesses and improve
                the way the world works.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== OUR STORY + STATS ===== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="rounded-3xl p-8 lg:p-10"
          style={{ background: "#fff", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-md)" }}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Our Story */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-[2px] rounded" style={{ background: "var(--blue-primary)" }} />
                <h3 className="font-bold text-xl" style={{ color: "var(--text-primary)" }}>Our Story</h3>
              </div>
              <div className="flex gap-6">
                {/* Photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden" style={{ background: "#e8edf5" }}>
                    <div className="w-full h-full flex items-center justify-center text-3xl">🏢</div>
                  </div>
                  <div
                    className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full flex items-center justify-center text-center text-white"
                    style={{ background: "var(--blue-primary)", fontSize: 10, fontWeight: 700 }}
                  >
                    Since<br />2026
                  </div>
                </div>
                {/* Story text */}
                <div className="flex flex-col gap-3">
                  {[
                    "Founded in 2026, FourStackTech started with a simple belief — technology should be simple, effective and accessible for every business.",
                    "From a small team of passionate developers to a full-scale digital transformation partner, our journey is built on trust, hard work and our commitment to excellence.",
                    "Today, we proudly serve 200+ clients across the globe and continue to build solutions that shape the future.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--blue-primary)" }} />
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="font-bold text-xl" style={{ color: "var(--text-primary)" }}>
                  FourStackTech At A Glance
                </h3>
                <div className="w-5 h-[2px] rounded" style={{ background: "var(--blue-primary)" }} />
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(26,86,255,0.1)" }}
                    className="p-4 rounded-2xl text-center transition-shadow"
                    style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                      style={{ background: "var(--blue-pale)", color: "var(--blue-primary)" }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs mt-0.5 leading-tight" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
