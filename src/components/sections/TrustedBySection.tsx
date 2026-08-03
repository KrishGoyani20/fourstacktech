"use client";

const clients = [
  { name: "Mary Martha Public School", initial: "M" },
  { name: "Taxidala", initial: "T" },
  { name: "RSL", initial: "R" },
  { name: "Team Office", initial: "T" },
  { name: "Goldman Trading", initial: "G" },
  { name: "Alert Force", initial: "A" },
  { name: "Doma Collection", initial: "D" },
  { name: "Skill India", initial: "S" },
  { name: "Artgram", initial: "A" },
  { name: "Radian PVC", initial: "R" },
  { name: "Mrunal Maddy", initial: "M" },
  { name: "BuildBetter", initial: "B" },
];

// Duplicate for seamless marquee
const allClients = [...clients, ...clients];

export default function TrustedBySection() {
  return (
    <section
      className="py-10 lg:py-14 overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div className="container mb-12 text-center">
        <p
          className="text-xs font-700 uppercase tracking-[0.15em] mb-1"
          style={{ color: "var(--blue-primary)", fontWeight: 700 }}
        >
          TRUSTED BY
        </p>
        <p className="text-base font-semibold" style={{ color: "var(--text-secondary)" }}>
          Forward-thinking companies around the world
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-24 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 w-24 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }} />

        <div className="marquee-track animate-marquee" style={{ gap: "24px" }}>
          {allClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 px-5 py-3 rounded-2xl"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                margin: "0 8px",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ background: "var(--blue-primary)" }}
              >
                {client.initial}
              </div>
              <span
                className="text-sm font-600 whitespace-nowrap"
                style={{ color: "var(--text-secondary)", fontWeight: 600 }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
