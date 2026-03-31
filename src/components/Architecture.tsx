import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import {
  architectureContent,
  architectureInputs,
  architectureStages,
} from "../data/content";
import { Database, Cpu, BarChart3, Users, ChevronRight } from "lucide-react";

const stageIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database, Cpu, BarChart3, Users,
};

function FlowChevron({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="hidden lg:block mx-4 shrink-0"
      initial={{ opacity: 0, x: -8 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.15 }}
    >
      <ChevronRight size={18} className="text-text-tertiary" />
    </motion.div>
  );
}

export default function Architecture() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-16 md:py-20">
      <RevealOnScroll>
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          {architectureContent.label}
        </p>
        <p className="text-text-primary text-base md:text-lg font-semibold tracking-wide uppercase mb-14 text-center">
          {architectureContent.subtitle}
        </p>
      </RevealOnScroll>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
        {/* Inputs */}
        <RevealOnScroll direction="left">
          <div className="text-center w-40">
            <p className="text-[10px] font-medium tracking-widest uppercase text-text-tertiary mb-4">
              Data Inputs
            </p>
            <div className="space-y-2">
              {architectureInputs.map((input, i) => (
                <p key={i} className="text-text-secondary text-sm">{input}</p>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <FlowChevron index={0} />

        {/* Stages */}
        {architectureStages.map((stage, i) => {
          const Icon = stageIcons[stage.icon];
          const isExpanded = expanded === i;

          return (
            <div key={i} className="flex items-center">
              <RevealOnScroll delay={0.08 * (i + 1)}>
                <motion.div
                  className={`text-center w-40 cursor-pointer rounded-lg p-3 transition-colors ${
                    isExpanded ? "bg-accent/[0.03]" : ""
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  whileHover={{ backgroundColor: "rgba(91, 184, 245, 0.03)" }}
                >
                  <Icon
                    size={32}
                    className={`mx-auto mb-3 transition-colors ${
                      stage.highlighted || isExpanded ? "text-accent" : "text-text-tertiary"
                    }`}
                  />
                  <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                    stage.highlighted || isExpanded ? "text-accent" : "text-text-primary"
                  }`}>
                    {stage.title}
                  </h4>
                  <p className="text-text-tertiary text-sm leading-snug">
                    {stage.description}
                  </p>
                </motion.div>
              </RevealOnScroll>

              {i < architectureStages.length - 1 && (
                <FlowChevron index={i + 1} />
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded detail panel */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            className="max-w-2xl mx-auto mt-8 p-6 border border-border rounded-lg text-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-text-secondary text-sm leading-relaxed">
              {architectureStages[expanded].detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
