"use client";
import { motion } from "framer-motion";
import {
  FlutterIcon, ReactIcon, NextjsIcon, AngularIcon,
  NodejsIcon, ExpressIcon, LaravelIcon,
  MongoDBIcon, PostgreSQLIcon, MySQLIcon, FirebaseIcon,
  AWSIcon, GCIcon, AzureIcon,
  GitHubIcon, DockerIcon, FigmaIcon, PostmanIcon, JiraIcon
} from "../icons/TechIcons";

const categories = [
  {
    name: "Frontend",
    color: "from-blue-600 to-cyan-600",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    techs: [
      { name: "Flutter", icon: <FlutterIcon className="text-[#02569B]" /> },
      { name: "React", icon: <ReactIcon className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <NextjsIcon className="text-white" /> },
      { name: "Angular", icon: <AngularIcon className="text-[#DD0031]" /> },
    ],
  },
  {
    name: "Backend",
    color: "from-violet-600 to-purple-600",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    techs: [
      { name: "Node.js", icon: <NodejsIcon className="text-[#339933]" /> },
      { name: "Express", icon: <ExpressIcon className="text-white" /> },
      { name: "Laravel", icon: <LaravelIcon className="text-[#FF2D20]" /> },
    ],
  },
  {
    name: "Database",
    color: "from-green-600 to-emerald-600",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    techs: [
      { name: "MongoDB", icon: <MongoDBIcon className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <PostgreSQLIcon className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <MySQLIcon className="text-[#4479A1]" /> },
      { name: "Firebase", icon: <FirebaseIcon className="text-[#FFCA28]" /> },
    ],
  },
  {
    name: "Cloud",
    color: "from-orange-600 to-amber-600",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    techs: [
      { name: "AWS", icon: <AWSIcon className="text-[#232F3E] dark:text-white" /> },
      { name: "Google Cloud", icon: <GCIcon className="text-[#4285F4]" /> },
      { name: "Azure", icon: <AzureIcon className="text-[#0078D4]" /> },
    ],
  },
  {
    name: "Tools",
    color: "from-pink-600 to-rose-600",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    techs: [
      { name: "GitHub", icon: <GitHubIcon className="text-white" /> },
      { name: "Docker", icon: <DockerIcon className="text-[#2496ED]" /> },
      { name: "Figma", icon: <FigmaIcon className="text-[#F24E1E]" /> },
      { name: "Postman", icon: <PostmanIcon className="text-[#FF6C37]" /> },
      { name: "Jira", icon: <JiraIcon className="text-[#0052CC]" /> },
    ],
  },
];

// Duplicate for infinite marquee
const allTechs = categories.flatMap((c) => c.techs.map((t) => ({ ...t, category: c.name, color: c.color })));

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="pt-16 lg:pt-[120px] pb-0 bg-[#050510] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-900/10 blur-[120px]" />

      <div className="container relative z-10 mb-16 lg:mb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label">Tech Stack</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We master the modern tech stack — carefully curated for performance, scalability, and developer experience.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-5 card-glow ${cat.border} border`}
            >
              <div className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-4`}>
                {cat.name}
              </div>
              <div className="flex flex-col gap-2">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-3 p-2.5 rounded-xl ${cat.bg} border ${cat.border} hover:scale-105 transition-transform cursor-default`}
                  >
                    <span className="flex items-center justify-center w-5 h-5">{tech.icon}</span>
                    <span className="text-xs font-semibold text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden py-4">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050510] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050510] to-transparent z-10" />
        <div className="flex gap-4 animate-marquee">
          {[...allTechs, ...allTechs].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full glass border border-white/[0.07] shrink-0 hover:border-violet-500/30 transition-colors"
            >
              <span className="flex items-center justify-center w-4 h-4">{tech.icon}</span>
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
