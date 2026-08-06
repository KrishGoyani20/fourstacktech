"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";
import valueClientFirst from "@/components/images/about/value_client_first.png";
import valueInnovation from "@/components/images/about/value_innovation.png";
import valueQuality from "@/components/images/about/value_quality.png";

const values = [
  {
    title: "Client First Approach",
    description:
      "Your goals are our north star. We listen, understand and tailor every solution to your unique business needs — because your success is our success.",
    image: valueClientFirst,
    color: "#dbeafe",
    accent: "#1a56ff",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
  },
  {
    title: "Innovation Driven",
    description:
      "We embrace the latest technologies and creative thinking to deliver future-ready digital products that give your business a competitive edge.",
    image: valueInnovation,
    color: "#fef9c3",
    accent: "#ca8a04",
    gradient: "linear-gradient(135deg, #fef9c3 0%, #fefce8 100%)",
  },
  {
    title: "Quality & Reliability",
    description:
      "We follow industry best practices to ensure secure, stable and high-performance solutions. Every line of code is reviewed, tested and production-ready.",
    image: valueQuality,
    color: "#ecfdf5",
    accent: "#059669",
    gradient: "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-base)" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p variants={fadeInUp} className="section-label">OUR VALUES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-4">
            What We{" "}
            <span style={{ color: "var(--blue-primary)" }}>Stand For</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Our values aren&apos;t just words on a wall — they guide every decision we make, every product we build.
          </motion.p>
        </motion.div>

        {/* Values cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Image area */}
              <div
                className="relative flex items-center justify-center h-48"
                style={{ background: value.gradient }}
              >
                <Image
                  src={value.image}
                  alt={value.title}
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-md"
                />
                {/* Accent dot decoration */}
                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                  style={{ background: value.accent }}
                />
                <div
                  className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full opacity-40"
                  style={{ background: value.accent }}
                />
              </div>

              {/* Text content */}
              <div className="p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: value.color, color: value.accent }}
                >
                  Core Value {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-lg font-black mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
