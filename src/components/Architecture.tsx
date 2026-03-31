import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import {
  architectureContent,
  architectureInputs,
  architectureStages,
} from "../data/content";
import { Database, Cpu, BarChart3, Users } from "lucide-react";

const stageIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database,
  Cpu,
  BarChart3,
  Users,
};

/* Animated flow arrow between stages */
function FlowArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="hidden lg:flex items-center mx-2 shrink-0"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <svg width="40" height="16" viewBox="0 0 40 16" className="text-brand-orange/50">
        <line x1="0" y1="8" x2="28" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M26 2 L36 8 L26 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="px-6 md:px-16 lg:px-24 py-8 section-glow-blue relative">
      <div className="relative z-10">
        {/* Section header */}
        <RevealOnScroll>
          <div className="section-header-line mb-2">
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
              {architectureContent.label}
            </h2>
          </div>
          <p className="text-center text-brand-orange font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-6">
            {architectureContent.subtitle}
          </p>
        </RevealOnScroll>

        {/* Horizontal flow diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 max-w-6xl mx-auto">
          {/* Data Inputs block */}
          <RevealOnScroll direction="left">
            <div className="arch-block glass rounded-xl p-5 w-48">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-3 text-center">
                Data Inputs
              </p>
              <div className="space-y-2">
                {architectureInputs.map((input, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2 text-center"
                  >
                    <p className="text-white text-xs font-medium">{input}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <FlowArrow delay={0.2} />

          {/* Processing stages */}
          {architectureStages.map((stage, i) => {
            const Icon = stageIcons[stage.icon];
            return (
              <div key={i} className="flex items-center">
                <RevealOnScroll delay={0.1 * (i + 1)}>
                  <motion.div
                    className={`arch-block rounded-xl p-5 w-44 text-center ${
                      stage.highlighted
                        ? "bg-gradient-to-br from-brand-orange/10 to-brand-red/5 border border-brand-orange/25"
                        : "glass"
                    }`}
                    whileHover={{
                      y: -4,
                      scale: 1.2,
                      boxShadow: stage.highlighted
                        ? "var(--hover-shadow-glow-core)"
                        : "var(--hover-shadow-dark-sm)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon
                        size={20}
                        className={stage.highlighted ? "text-brand-orange" : "text-gray-300"}
                      />
                    </div>
                    <h4 className={`font-semibold text-sm mb-1 ${
                      stage.highlighted ? "text-brand-orange" : "text-white"
                    }`}>
                      {stage.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-snug">
                      {stage.description}
                    </p>
                  </motion.div>
                </RevealOnScroll>

                {i < architectureStages.length - 1 && (
                  <FlowArrow delay={0.3 + i * 0.1} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
