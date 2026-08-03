"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link2, GitBranch, Mail, Award, Code2, Users, Star } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2200;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="ticker">{count}{suffix}</span>;
}

const teamStats = [
  { icon: <Code2 size={18} />, label: "Projects Delivered", value: 120, suffix: "+" },
  { icon: <Star size={18} />, label: "Technologies Mastered", value: 25, suffix: "+" },
  { icon: <Users size={18} />, label: "Client Satisfaction", value: 98, suffix: "%" },
  { icon: <Award size={18} />, label: "Years of Experience", value: 5, suffix: "+" },
];

const founder = {
  name: "Purv Ravani",
  title: "Founder & CEO",
  image: "/images/founder.png",
  bio: "Visionary entrepreneur and full-stack architect with 5+ years of experience building scalable digital products. Purv founded FourStackTech with a mission to make world-class software development accessible to ambitious businesses globally.",
  vision: "My vision is to build a company where engineering excellence meets product thinking — creating software that doesn't just function, but truly transforms the way businesses operate and grow.",
  expertise: ["Strategic Leadership", "Product Architecture", "Business Development", "Client Relations", "Flutter & React", "Node.js & Cloud"],
  achievements: [
    "Led 120+ successful product launches across 20+ countries",
    "Built and scaled teams from 0 to 20+ engineers",
    "Secured $2M+ in client contracts within first 3 years",
    "Speaker at 5 international tech conferences",
  ],
  social: {
    linkedin: "#",
    github: "https://github.com/purvravani0587",
    email: "purv@fourstacktech.com",
  },
};

const cofounder = {
  name: "Aayush Shah",
  title: "Co-Founder & CTO",
  image: "/images/cofounder.png",
  bio: "Technical powerhouse and engineering architect with a deep passion for building robust, scalable systems. Aayush leads all technical decisions at FourStackTech, ensuring every product is built on a foundation of clean code and modern architecture.",
  vision: "Technology should be an enabler, not a barrier. I architect systems that are not just powerful today but ready to scale to millions of users tomorrow — built with precision, security, and infinite scalability in mind.",
  expertise: ["System Architecture", "Flutter & Dart", "React & Next.js", "Cloud & DevOps", "AI & Machine Learning", "Database Design"],
  achievements: [
    "Architected 60+ enterprise-grade applications",
    "Reduced client infrastructure costs by 40% through cloud optimization",
    "Pioneer in Flutter development since version 1.0",
    "Open-source contributor with 2K+ GitHub stars",
  ],
  social: {
    linkedin: "#",
    github: "#",
    email: "aayush@fourstacktech.com",
  },
};

function MemberCard({ member, accent }: { member: typeof founder; accent: string }) {
  return (
    <div className="glass-card p-0 overflow-hidden card-glow group relative">
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

      <div className="p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-36 h-36 mx-auto lg:mx-0">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} p-0.5`}>
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0f0f23]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center`}>
                <span className="text-white text-xs font-black">★</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-2xl font-black text-white">{member.name}</h3>
                <p className={`text-sm font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>{member.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/40 transition-all">
                  <Link2 size={14} />
                </a>
                <a href={member.social.github} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all">
                  <GitBranch size={14} />
                </a>
                <a href={`mailto:${member.social.email}`} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-400/40 transition-all">
                  <Mail size={14} />
                </a>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>

            {/* Vision */}
            <blockquote className="border-l-2 border-violet-500/50 pl-4 mb-5">
              <p className="text-slate-300 text-xs italic leading-relaxed">&ldquo;{member.vision}&rdquo;</p>
            </blockquote>

            {/* Expertise */}
            <div className="flex flex-wrap gap-2 mb-5">
              {member.expertise.map((e) => (
                <span key={e} className="tag">{e}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Achievements</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {member.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <span className="text-violet-400 text-xs mt-0.5">▸</span>
                <span className="text-slate-400 text-xs leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="section-pad bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[120px]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">Leadership Team</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Meet The <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our leadership team brings decades of combined experience, a track record of shipping world-class products, and an unwavering commitment to your success.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {teamStats.map((s) => (
            <div key={s.label} className="glass-card p-5 text-center card-glow">
              <div className="flex items-center justify-center gap-2 text-violet-400 mb-2">
                {s.icon}
              </div>
              <div className="text-3xl font-black text-white">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <MemberCard member={founder} accent="from-violet-500 to-indigo-500" />
          <MemberCard member={cofounder} accent="from-cyan-500 to-blue-500" />
        </div>
      </div>
    </section>
  );
}
