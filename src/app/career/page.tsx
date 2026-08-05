"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

const jobs = [
  {
    title: "React JS Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Build dynamic, high-performance web applications using React JS and modern frontend tools.",
    color: "#e0f2fe",
    textColor: "#0284c7"
  },
  {
    title: "Node JS Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Develop scalable server-side logic and robust APIs using Node.js and modern backend frameworks.",
    color: "#dcfce7",
    textColor: "#16a34a"
  },
  {
    title: "Laravel Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Design and build advanced web applications using the Laravel framework and PHP ecosystem.",
    color: "#fce7f3",
    textColor: "#db2777"
  },
  {
    title: "Backend Developer",
    experience: "2 to 4 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Architect and maintain secure, scalable server-side systems, databases, and microservices.",
    color: "#ede9fe",
    textColor: "#7c3aed"
  },
  {
    title: "Android App Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Create native Android applications using Kotlin or Java for the best mobile user experience.",
    color: "#dcfce7",
    textColor: "#16a34a"
  },
  {
    title: "iOS App Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Build seamless, high-quality native iOS applications using Swift and Apple frameworks.",
    color: "#e0f2fe",
    textColor: "#0284c7"
  },
  {
    title: "React Native Developer",
    experience: "Fresher to 2 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Join our mobile team to build high-performance cross-platform applications. Experience with React and native bridging is a plus.",
    color: "#ede9fe",
    textColor: "#7c3aed"
  },
  {
    title: "Flutter Developer",
    experience: "Fresher to 2 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Help us craft beautiful and fast natively compiled applications for mobile from a single codebase using Dart.",
    color: "#fef9c3",
    textColor: "#ca8a04"
  },
  {
    title: "Shopify Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Develop and customize highly performant e-commerce storefronts and custom Shopify applications.",
    color: "#dcfce7",
    textColor: "#16a34a"
  },
  {
    title: "WordPress Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Build scalable, secure, and highly customized WordPress websites, custom themes, and plugins.",
    color: "#e0f2fe",
    textColor: "#0284c7"
  },
  {
    title: "PHP Developer",
    experience: "1 to 3 years",
    type: "Full-Time",
    location: "On-site / Hybrid",
    description: "Develop dynamic web applications and backend systems using core and advanced PHP concepts.",
    color: "#ede9fe",
    textColor: "#7c3aed"
  },
  {
    title: "UI/UX Designer",
    experience: "Fresher to 2 years",
    type: "Full-Time",
    location: "On-site",
    description: "We are looking for a creative UI/UX designer to craft intuitive user experiences and stunning interfaces.",
    color: "#fce7f3",
    textColor: "#db2777"
  }
];

export default function CareerPage() {
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
              CAREERS
            </p>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Join Our <span style={{ color: "var(--blue-primary)" }}>Team</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            We&apos;re always looking for talented individuals to join our growing team.
            If you are passionate about technology and innovation, we&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        {/* Job Listings Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {jobs.map((job) => (
            <motion.div
              key={job.title}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="p-8 flex flex-col rounded-[24px]"
              style={{
                background: "#fff",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Icon & Exp Badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: job.color, color: job.textColor }}
                >
                  <Briefcase size={20} />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ background: "var(--bg-base)", color: "var(--text-secondary)" }}
                >
                  {job.experience}
                </span>
              </div>

              {/* Title & Info */}
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {job.title}
              </h3>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                  {job.type}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                  {job.location}
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "var(--text-muted)" }}>
                {job.description}
              </p>

              {/* Apply Button */}
              <a
                href={`mailto:careers@fourstacktech.com?subject=Application for ${job.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-blue flex items-center justify-center gap-2 group"
              >
                Apply Now
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
