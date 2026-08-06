"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Globe, Target, Lightbulb, Handshake } from "lucide-react";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";
import { TeamAnimated } from "@/components/icons/AboutIcons";

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

  return <span ref={ref}>{count}{suffix}</span>;
}

const highlights = [
  { icon: <MapPin size={16} />, label: "Based in Surat, India" },
  { icon: <Calendar size={16} />, label: "Founded in 2026" },
  { icon: <Globe size={16} />, label: "Global Reach" },
];

const floatingStats = [
  { label: "Projects Done", value: 10, suffix: "+" },
  { label: "Happy Clients", value: 8, suffix: "+" },
  { label: "Team Members", value: 10, suffix: "+" },
];

export default function CompanyInfoSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ─── Left — Text content ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p variants={fadeInUp} className="section-label">WHO WE ARE</motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-black mb-5 leading-tight"
            >
              A Technology Partner
              <br />
              Built for{" "}
              <span style={{ color: "var(--blue-primary)" }}>Modern Businesses</span>
            </motion.h2>

            <motion.div variants={staggerContainer} className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: <Target size={18} />,
                  title: "Our Mission",
                  text: "To build technology solutions that empower businesses of all sizes — making powerful digital tools simple, accessible and results-driven.",
                },
                {
                  icon: <Lightbulb size={18} />,
                  title: "Our Vision",
                  text: "To become the most trusted digital transformation partner for growing businesses across India and beyond.",
                },
                {
                  icon: <Handshake size={18} />,
                  title: "Our Promise",
                  text: "Transparent communication, on-time delivery, and long-term support — we don't just build software, we build relationships.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInLeft}
                  custom={i}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{ background: "#fff", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--blue-pale)", color: "var(--blue-primary)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlight pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "var(--blue-pale)", color: "var(--blue-primary)" }}
                >
                  {h.icon}
                  {h.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right — Visual card ─── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            {/* Decorative dots */}
            <div
              className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl hidden lg:block pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(26,86,255,0.12) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Main visual card */}
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
                <p className="font-bold text-2xl lg:text-3xl mb-2 text-white drop-shadow-md">Our Expert Team</p>
                <p className="text-blue-100 text-sm opacity-90">10+ Dedicated Professionals</p>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 lg:-left-10 rounded-2xl p-5 text-white"
              style={{ background: "var(--blue-primary)", boxShadow: "0 12px 40px rgba(26,86,255,0.35)" }}
            >
              <div className="flex gap-4">
                {floatingStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-black">
                      <Counter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-blue-200 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
