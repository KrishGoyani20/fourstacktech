"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Consultation &\nAnalysis",
    desc: "We dive deep into your business, goals, and target audience. Our experts analyze your requirements, competitors, and market position to craft the best digital strategy.",
    points: [
      "Business & Market Analysis",
      "Requirement Gathering",
      "Feasibility & ROI Evaluation",
      "Transparent Proposal",
    ],
    color: "var(--blue-primary)",
  },
  {
    num: "02",
    icon: "🎨",
    title: "Design &\nStrategy",
    desc: "We craft a detailed strategy and solution architecture tailored to your needs. Our team creates intuitive designs and maps the right technology roadmap for your project.",
    points: [
      "Solution Architecture",
      "UI/UX Design & Prototyping",
      "Technology & Platform Selection",
      "Project Roadmap",
    ],
    color: "#0284c7",
  },
  {
    num: "03",
    icon: "💻",
    title: "Development &\nQuality Assurance",
    desc: "We build your solution using agile methodologies with a focus on quality, security, and performance. Our QA team ensures a bug-free and reliable product.",
    points: [
      "Agile Development",
      "Continuous Testing",
      "Code Quality & Security",
      "Regular Updates & Feedback",
    ],
    color: "#059669",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Testing, Refinement\n& Launch",
    desc: "We test across all scenarios, refine every detail, and ensure everything works seamlessly. Once approved, we launch and provide continuous support for your success.",
    points: [
      "Comprehensive Testing",
      "Performance Optimization",
      "Secure Deployment",
      "Post-Launch Support",
    ],
    color: "#7c3aed",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{ background: "var(--bg-base)" }}
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
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--blue-primary)" }}>
              HOW WE WORK
            </p>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-4">
            How We Bring Your{" "}
            <span style={{ color: "var(--blue-primary)" }}>Ideas to Life</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            A proven, structured process that ensures every project is delivered
            on time, on budget, and beyond expectations.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} variants={fadeInUp} className="relative">
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden xl:flex absolute top-12 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs"
                    style={{ borderColor: "var(--blue-primary)", color: "var(--blue-primary)", background: "#fff" }}
                  >
                    →
                  </div>
                </div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl p-6 h-full flex flex-col"
                style={{ background: "#fff", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-sm)" }}
              >
                {/* Step number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ background: step.color }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 text-center">{step.icon}</div>

                {/* Title */}
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < step.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.desc}
                </p>

                {/* Points */}
                <div className="flex flex-col gap-2 mt-auto">
                  {step.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        style={{ color: step.color, flexShrink: 0 }}
                      />
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
