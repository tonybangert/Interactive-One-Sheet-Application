import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import {
  problemIntro,
  problemLeft,
  problemRight,
  problemTagline,
} from "../data/content";

/* ── CSS 3D Wireframe Cube (rigid / caged) ── */
function WireframeCube() {
  return (
    <div className="cube-scene mx-auto">
      <div className="cube">
        <div className="cube-face cube-face--front" />
        <div className="cube-face cube-face--back" />
        <div className="cube-face cube-face--right" />
        <div className="cube-face cube-face--left" />
        <div className="cube-face cube-face--top" />
        <div className="cube-face cube-face--bottom" />
      </div>
    </div>
  );
}

/* ── Glowing Node Cluster (dynamic AI) ── */
function NodeCluster() {
  const nodes = [
    { cx: 60, cy: 40, r: 8 },
    { cx: 100, cy: 30, r: 6 },
    { cx: 130, cy: 60, r: 10 },
    { cx: 80, cy: 80, r: 7 },
    { cx: 110, cy: 95, r: 5 },
    { cx: 55, cy: 100, r: 6 },
    { cx: 140, cy: 35, r: 5 },
  ];

  const edges = [
    [0, 1], [0, 3], [1, 2], [1, 6], [2, 4], [3, 5], [3, 4], [2, 6],
  ];

  return (
    <svg viewBox="0 0 190 130" className="w-32 h-auto mx-auto">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-brand-orange)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-aplora-blue)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="url(#nodeGlow)"
          strokeWidth="1.2"
          style={{ animation: `line-glow 3s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={i % 2 === 0 ? "var(--svg-orange-50)" : "var(--svg-blue-50)"}
          style={{ animation: `node-pulse 2.5s ease-in-out ${i * 0.4}s infinite` }}
        />
      ))}
    </svg>
  );
}

/* ── Center Arrow ── */
function CenterArrow() {
  return (
    <div className="flex flex-col items-center gap-2 py-4 md:py-0 md:px-3 shrink-0">
      {/* Vertical on mobile, horizontal on desktop */}
      <div className="hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-gray-500/30 to-brand-orange/60" />
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-semibold text-center leading-tight whitespace-nowrap border border-brand-orange/25"
          style={{ background: "var(--accent-gradient)" }}
        >
          Vibe Coding &<br />Rapid Prototyping
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-brand-orange/60 to-aplora-blue/60" />
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-aplora-blue">
          <path d="M6 0 L12 6 L6 12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Mobile: horizontal arrow */}
      <div className="flex md:hidden items-center gap-2">
        <div className="h-px w-6 bg-gradient-to-r from-gray-500/30 to-brand-orange/60" />
        <div
          className="px-3 py-1.5 rounded-full text-[10px] font-semibold text-center leading-tight border border-brand-orange/25"
          style={{ background: "var(--accent-gradient)" }}
        >
          Vibe Coding & Rapid Prototyping
        </div>
        <div className="h-px w-6 bg-gradient-to-r from-brand-orange/60 to-aplora-blue/60" />
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function ProblemSection() {
  return (
    <section id="problem" className="px-6 md:px-16 lg:px-24 py-28 md:py-36 section-glow-orange">
      {/* Header */}
      <RevealOnScroll>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-3">
          {problemIntro.label}
        </p>
        <h3 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight leading-[1.15]">
          {problemIntro.title}
        </h3>
        <p className="text-gray-300 max-w-xl mb-14 leading-relaxed">
          {problemIntro.description}
        </p>
      </RevealOnScroll>

      {/* Side-by-side comparison */}
      <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-5xl mx-auto">
        {/* LEFT: Rigid SaaS */}
        <RevealOnScroll direction="left" className="flex-1">
          <motion.div
            className="glass rounded-2xl p-8 h-full flex flex-col items-center"
            whileHover={{
              y: -4,
              borderColor: "var(--hover-border-gray)",
              boxShadow: "var(--hover-shadow-dark)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <h4 className="font-display text-xl text-gray-300 mb-6 text-center tracking-tight">
              {problemLeft.heading}
            </h4>
            <WireframeCube />
            <ul className="mt-8 space-y-3 w-full">
              {problemLeft.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500" />
                  <span className="text-gray-400 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </RevealOnScroll>

        {/* CENTER ARROW */}
        <CenterArrow />

        {/* RIGHT: Custom AI */}
        <RevealOnScroll direction="right" className="flex-1">
          <motion.div
            className="glass rounded-2xl p-8 h-full flex flex-col items-center border-brand-orange/[0.12]"
            whileHover={{
              y: -4,
              borderColor: "var(--hover-border-orange)",
              boxShadow: "var(--hover-shadow-glow-lg)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <h4 className="font-display text-xl text-white mb-6 text-center tracking-tight">
              {problemRight.heading}
            </h4>
            <NodeCluster />
            <ul className="mt-8 space-y-3 w-full">
              {problemRight.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Bottom tagline bar */}
      <RevealOnScroll>
        <div
          className="mt-12 max-w-3xl mx-auto text-center px-8 py-5 rounded-xl bg-brand-orange/[0.04] border border-brand-orange/20"
        >
          <p className="text-gray-200 text-sm md:text-base italic font-display">
            "{problemTagline}"
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
