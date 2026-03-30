import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  DollarSign,
  Globe,
  Settings,
  TrendingUp,
  Megaphone,
  Target,
  BarChart3,
  Activity,
} from "lucide-react";
import RevealOnScroll from "./ui/RevealOnScroll";
import GlassCard from "./ui/GlassCard";
import {
  architectureInputs,
  architectureCore,
  architectureOutputs,
  architectureFinal,
} from "../data/content";

const inputIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  DollarSign,
  Globe,
  Settings,
};

const outputIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BarChart3,
  TrendingUp,
  Megaphone,
  Target,
  Activity,
};

/* ── Animated Flow Dots on SVG paths ── */
function FlowDots() {
  const [dots, setDots] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    let id = 0;
    intervalRef.current = setInterval(() => {
      id++;
      setDots((prev) => [...prev.slice(-4), id]);
    }, 1800);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      {dots.map((dotId) => (
        <motion.div
          key={dotId}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-orange"
          initial={{ left: "0%", opacity: 0 }}
          animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, ease: "linear" }}
          onAnimationComplete={() =>
            setDots((prev) => prev.filter((d) => d !== dotId))
          }
          style={{ boxShadow: "var(--glow-dot-orange)" }}
        />
      ))}
    </>
  );
}

/* ── Glowing AI Chip SVG ── */
function AiChipIcon() {
  return (
    <div className="relative w-16 h-16 mx-auto">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Chip body */}
        <rect
          x="16"
          y="16"
          width="32"
          height="32"
          rx="4"
          fill="var(--svg-orange-08)"
          stroke="var(--svg-orange-50)"
          strokeWidth="1.5"
        />
        {/* Inner circuit lines */}
        <path
          d="M24 28 H32 V36 H40"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ animation: "circuit-pulse 2.5s ease-in-out infinite" }}
        />
        <path
          d="M24 36 H28 V28 H36 V36 H40"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
          style={{ animation: "circuit-pulse 2.5s ease-in-out 0.8s infinite" }}
        />
        {/* Pins - top */}
        {[24, 32, 40].map((x) => (
          <line key={`t${x}`} x1={x} y1="8" x2={x} y2="16" stroke="var(--svg-orange-30)" strokeWidth="1" />
        ))}
        {/* Pins - bottom */}
        {[24, 32, 40].map((x) => (
          <line key={`b${x}`} x1={x} y1="48" x2={x} y2="56" stroke="var(--svg-orange-30)" strokeWidth="1" />
        ))}
        {/* Pins - left */}
        {[24, 32, 40].map((y) => (
          <line key={`l${y}`} x1="8" y1={y} x2="16" y2={y} stroke="var(--svg-orange-30)" strokeWidth="1" />
        ))}
        {/* Pins - right */}
        {[24, 32, 40].map((y) => (
          <line key={`r${y}`} x1="48" y1={y} x2="56" y2={y} stroke="var(--svg-orange-30)" strokeWidth="1" />
        ))}
      </svg>
      {/* Glow behind chip */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "var(--chip-glow-bg)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ── Column Connector Arrow ── */
function ColumnConnector() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center px-2 shrink-0">
      <div className="relative h-full w-4 flex items-center">
        {/* Dashed line */}
        <svg width="40" height="8" viewBox="0 0 40 8" className="overflow-visible">
          <line
            x1="0"
            y1="4"
            x2="32"
            y2="4"
            stroke="var(--svg-orange-40)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            style={{ animation: "dash-flow 1.5s linear infinite" }}
          />
          <path d="M30 0 L38 4 L30 8" fill="var(--svg-orange-40)" />
        </svg>
      </div>
    </div>
  );
}

/* ── Main Architecture Section ── */
export default function Architecture() {
  return (
    <section id="architecture" className="px-6 md:px-16 lg:px-24 py-28 md:py-36 section-glow-blue relative">
      {/* Background glow blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--glow-blue-bg)" }}
      />

      <div className="relative z-10">
        <RevealOnScroll>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-3">
            The Architecture
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight leading-[1.15]">
            From Ingestion to Executive Insight
          </h3>
          <p className="text-gray-400 max-w-xl mb-14 leading-relaxed">
            A three-stage pipeline that transforms raw operational data into executive-grade
            intelligence — no manual assembly required.
          </p>
        </RevealOnScroll>

        {/* Flow dot track (desktop) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto mb-4">
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-4 z-10 pointer-events-none">
            <FlowDots />
          </div>
        </div>

        {/* Three-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-0 max-w-6xl mx-auto">
          {/* ── INPUTS ── */}
          <div className="flex-1 lg:basis-[30%] w-full">
            <RevealOnScroll>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4 text-center">
                Inputs
              </p>
            </RevealOnScroll>
            <div className="flex flex-col gap-3">
              {architectureInputs.map((input, i) => {
                const Icon = inputIcons[input.icon];
                return (
                  <RevealOnScroll key={i} delay={i * 0.08} direction="left">
                    <GlassCard className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-aplora-blue" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{input.title}</p>
                        <p className="text-gray-500 text-[11px]">{input.description}</p>
                      </div>
                    </GlassCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          <ColumnConnector />

          {/* ── THE CORE ── */}
          <div className="flex-1 lg:basis-[40%] w-full">
            <RevealOnScroll>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4 text-center">
                The Core
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div
                className="glass rounded-2xl p-5 flex flex-col gap-3 border-brand-orange/[0.12]"
              >
                {architectureCore.map((step, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-xl p-4 text-center ${
                      step.highlighted
                        ? "bg-gradient-to-br from-brand-orange/10 to-brand-red/5 border border-brand-orange/20"
                        : "glass"
                    }`}
                    whileHover={{
                      scale: 1.03,
                      y: -4,
                      borderColor: step.highlighted
                        ? "var(--hover-border-orange)"
                        : "var(--hover-border-gray)",
                      boxShadow: step.highlighted
                        ? "var(--hover-shadow-glow-core)"
                        : "var(--hover-shadow-dark-sm)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {step.highlighted && <AiChipIcon />}
                    <h4 className="font-semibold text-white text-sm mt-1">{step.title}</h4>
                    <p className="text-gray-500 text-[11px] leading-snug mt-1">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <ColumnConnector />

          {/* ── EXECUTIVE OUTPUTS ── */}
          <div className="flex-1 lg:basis-[30%] w-full">
            <RevealOnScroll>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-4 text-center">
                Executive Outputs
              </p>
            </RevealOnScroll>
            <div className="flex flex-col gap-3">
              {architectureOutputs.map((output, i) => {
                const Icon = outputIcons[output.icon];
                return (
                  <RevealOnScroll key={i} delay={i * 0.08} direction="right">
                    <GlassCard className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{output.role}</p>
                        <p className="text-gray-500 text-[11px]">{output.description}</p>
                      </div>
                    </GlassCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Global Revenue Intelligence block ── */}
        <RevealOnScroll>
          <div
            className="mt-10 max-w-md mx-auto lg:ml-auto lg:mr-0 text-center rounded-xl p-6 bg-white/[0.03] border border-transparent"
            style={{ borderImage: "var(--border-gradient-accent) 1" }}
          >
            <h4 className="font-display text-lg text-white mb-1 tracking-tight">
              {architectureFinal.title}
            </h4>
            <p className="text-gray-400 text-xs">{architectureFinal.description}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
