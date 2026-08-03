"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOptions } from "@/components/animations";

// Import images directly from the components/images folder
import RushilImage from "@/components/images/RushilSavani.png";
import PurvImage from "@/components/images/PurvRavani.png";

const team = [
  {
    name: "Rushil Savani",
    role: "Co-Founder & CTO",
    bio: "Leading technology strategy and engineering excellence. Dedicated to crafting robust architectures and guiding our technical teams to deliver top-tier software.",
    image: RushilImage,
    email: "rushil@fourstacktech.com",
    linkedin: "#",
    bgColor: "#e0f2fe", // blue accent
    textColor: "#0284c7"
  },
  {
    name: "Purv Ravani",
    role: "CEO & Founder",
    bio: "Driving the strategic vision and growth of FourStackTech. Passionate about building impactful digital solutions that empower businesses to scale and innovate.",
    image: PurvImage,
    email: "purv@fourstacktech.com",
    linkedin: "#",
    bgColor: "#f3e8ff", // purple accent
    textColor: "#7e22ce"
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-pad" style={{ background: "var(--bg-base)" }}>
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
              LEADERSHIP
            </p>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-black mb-4">
            Meet Our <span style={{ color: "var(--blue-primary)" }}>Leadership Team</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Meet the people driving our vision, innovation, and growth.
          </motion.p>
        </motion.div>

        {/* Team Grid (Centers 2 items nicely, wraps to column on mobile) */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.2 }}
              className="p-8 flex flex-col items-center text-center w-full md:w-1/2"
              style={{
                background: "#fff",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-sm)",
                borderRadius: "16px", // Specifically requested 16px
              }}
            >
              {/* Photo */}
              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center font-black mb-5 shadow-inner overflow-hidden"
                style={{ background: member.bgColor, color: member.textColor }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                {member.name}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: "var(--blue-primary)" }}>
                {member.role}
              </p>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                {member.bio}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "var(--bg-base)", color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = member.textColor;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-base)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={16} />
                </a>
                <a
                  href={member.linkedin}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "var(--bg-base)", color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0077b5"; // LinkedIn Blue
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-base)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
