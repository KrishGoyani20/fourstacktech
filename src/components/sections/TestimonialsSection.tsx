"use client";

import { Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, scaleIn, staggerContainer, viewportOptions } from "@/components/animations";

const testimonials = [
  {
    quote:
      "I had the opportunity to be involved in an e-commerce website project, and the attention to detail was excellent. Product pages, filters, mobile responsiveness, and speed optimization were done thoughtfully. The team clearly understands how online businesses work.",
    name: "Rakib Mohammad",
    role: "Business Owner",
    country: "India",
    countryColor: "#dbeafe",
    countryText: "var(--blue-primary)",
    rating: 5,
    impact: "Project Impact",
    img: "R",
  },
  {
    quote:
      "Working with FourStackTech has been a game-changer for our business. They delivered our platform on time with incredible attention to detail. The quality exceeded our expectations and the support has been outstanding.",
    name: "Patrick Hermann",
    role: "CEO, Artgram",
    country: "Germany",
    countryColor: "#ecfdf5",
    countryText: "#059669",
    rating: 5,
    impact: "Client Review",
    img: "P",
  },
  {
    quote:
      "Highly professional team! They understood our requirements perfectly and built a robust ERP system that has streamlined our entire operation. Communication was smooth throughout the project.",
    name: "Das Gourav",
    role: "Operations Manager",
    country: "India",
    countryColor: "#ede9fe",
    countryText: "#7c3aed",
    rating: 5,
    impact: "ERP Project",
    img: "D",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
      <span className="ml-1 text-sm font-bold" style={{ color: "var(--text-primary)" }}>
        {count}.0
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16">
          {/* LEFT */}
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2"
              style={{ color: "var(--blue-primary)" }}
            >
              TESTIMONIALS
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--blue-primary)" }} />
            </p>

            <h2 className="text-3xl lg:text-4xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Trusted by Visionaries.
              <br />
              Proven by{" "}
              <span style={{ color: "var(--blue-primary)" }}>Results.</span>
            </h2>

            {/* Blue underline */}
            <div
              className="w-12 h-1 rounded mb-5"
              style={{ background: "var(--blue-primary)" }}
            />

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              We take pride in delivering solutions that drive growth, build trust,
              and create lasting impact.
              <br />
              Here&apos;s what our clients have to say about us.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--blue-pale)" }}
                >
                  <Award size={18} style={{ color: "var(--blue-primary)" }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    Proven Excellence
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Consistent 5-star feedback for delivering high-quality solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#ecfdf5" }}
                >
                  <Users size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    Client-Centric Approach
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    We listen, collaborate, and deliver beyond expectations every time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Testimonial cards */}
          <motion.div
            className="flex flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Top: Large card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl p-7"
              style={{
                background: "#fff",
                border: "1px solid var(--border-card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-black leading-none mb-4"
                style={{ color: "var(--blue-primary)", fontFamily: "Georgia, serif" }}
              >
                ❝
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white border-2"
                  style={{ background: "var(--blue-primary)", borderColor: "#fff" }}
                >
                  {testimonials[0].img}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                    {testimonials[0].name}
                  </p>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: testimonials[0].countryColor,
                      color: testimonials[0].countryText,
                    }}
                  >
                    {testimonials[0].country}
                  </span>
                </div>
              </div>

              <Stars count={testimonials[0].rating} />

              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>
                {testimonials[0].quote}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 mt-4 text-xs font-bold"
                style={{ color: "var(--blue-primary)" }}
              >
                {testimonials[0].impact} →
              </a>
            </motion.div>

            {/* Bottom: 2 smaller cards */}
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-5">
              {testimonials.slice(1).map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl p-5"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-card)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    className="text-3xl font-black leading-none mb-3"
                    style={{ color: t.countryText, fontFamily: "Georgia, serif" }}
                  >
                    ❝
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white overflow-hidden"
                      style={{ background: t.countryText }}
                    >
                      {t.img}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: t.countryColor, color: t.countryText }}
                  >
                    {t.country}
                  </span>

                  <Stars count={t.rating} />

                  <p className="text-xs leading-relaxed mt-2" style={{ color: "var(--text-secondary)" }}>
                    {t.quote.slice(0, 120)}…
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
