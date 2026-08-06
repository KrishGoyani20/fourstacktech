"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";
import stepDiscovery from "@/components/images/about/step_discovery.png";
import stepDesign from "@/components/images/about/step_design.png";
import stepDevelopment from "@/components/images/about/step_development.png";
import stepTesting from "@/components/images/about/step_testing.png";
import stepLaunch from "@/components/images/about/step_launch.png";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We listen deeply to understand your goals, business challenges, and target audience. We map out a strategic roadmap — defining features, timelines and success metrics — before writing a single line of code.",
    image: stepDiscovery,
    color: "#dbeafe",
    accent: "#1a56ff",
    tags: ["Requirements Analysis", "Market Research", "Roadmapping"],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers craft wireframes and high-fidelity mockups. You see your product before it's built — interactive prototypes let you experience the flow and provide feedback, keeping you in full control.",
    image: stepDesign,
    color: "#f3e8ff",
    accent: "#7c3aed",
    tags: ["UI/UX Design", "Wireframing", "Prototyping"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our engineers build your product using modern, scalable technologies. We follow clean code standards, agile sprints, and regular demos — so you always know what's being built and when it ships.",
    image: stepDevelopment,
    color: "#ecfdf5",
    accent: "#059669",
    tags: ["Frontend", "Backend", "Mobile Apps", "APIs"],
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Every feature goes through rigorous quality checks — functional testing, UI testing, performance profiling and security audits — before launch. We ship products that work, not just demos.",
    image: stepTesting,
    color: "#fff7ed",
    accent: "#ea580c",
    tags: ["QA Testing", "Performance", "Security Audit"],
  },
  {
    number: "05",
    title: "Launch & Ongoing Support",
    description:
      "We deploy your product and stay by your side. From monitoring uptime and fixing issues, to rolling out new features and scaling with your growth — we are your long-term technology partner.",
    image: stepLaunch,
    color: "#f0fdf4",
    accent: "#16a34a",
    tags: ["Deployment", "Monitoring", "Maintenance", "Scale"],
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-surface, #f8faff)" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p variants={fadeInUp} className="section-label">HOW WE WORK</motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-4">
            Our Proven{" "}
            <span style={{ color: "var(--blue-primary)" }}>5-Step Process</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            A structured, transparent process that keeps you informed and confident at every stage — from idea to launch and beyond.
          </motion.p>
        </motion.div>

        {/* Steps — zig-zag layout */}
        <div className="flex flex-col gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12 rounded-3xl p-6 lg:p-10`}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-card)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Illustration */}
                <div
                  className="relative w-full lg:w-80 lg:flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-56"
                  style={{ background: step.color }}
                >
                  {/* Step number badge */}
                  <div
                    className="absolute top-3 right-3 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg text-white shadow-lg z-10"
                    style={{ background: step.accent }}
                  >
                    {step.number}
                  </div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={200}
                    className="object-contain drop-shadow-lg p-4"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Step label */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ background: step.color, color: step.accent }}
                  >
                    Step {step.number}
                  </div>

                  <h3
                    className="text-xl lg:text-2xl font-black mb-3 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base leading-relaxed mb-5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: step.color, color: step.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline connector (decorative, desktop only) */}
        <div className="hidden lg:flex flex-col items-center mt-8">
          <div
            className="w-0.5 h-8 rounded-full"
            style={{ background: "var(--border-light)" }}
          />
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
            style={{ background: "var(--blue-primary)" }}
          >
            ✓
          </div>
          <p className="text-sm mt-2 font-semibold" style={{ color: "var(--blue-primary)" }}>
            Project Delivered!
          </p>
        </div>

      </div>
    </section>
  );
}
