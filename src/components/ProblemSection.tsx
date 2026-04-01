import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { problemIntro, problemCards, solutions } from "../data/content";
import { Wrench, Clock, TrendingDown, Lock, Check, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wrench, Clock, TrendingDown, Lock,
};

export default function ProblemSection() {
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <section id="problem" className="py-16 md:py-20">
      <RevealOnScroll>
        <p className="text-text-primary text-base md:text-lg font-semibold tracking-wide uppercase mb-6 text-center">
          {problemIntro.subtitle}
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setShowSolutions(false)}
            className={`text-sm px-4 py-1.5 rounded border transition-colors ${
              !showSolutions
                ? "border-brand-orange/30 text-brand-orange bg-brand-orange/5"
                : "border-border text-text-tertiary hover:text-text-secondary"
            }`}
          >
            The Problem
          </button>
          <ArrowRight size={14} className="text-text-tertiary" />
          <button
            onClick={() => setShowSolutions(true)}
            className={`text-sm px-4 py-1.5 rounded border transition-colors ${
              showSolutions
                ? "border-accent/30 text-accent bg-accent/5"
                : "border-border text-text-tertiary hover:text-text-secondary"
            }`}
          >
            Our Solution
          </button>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problemCards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={i}
              className={`rounded-lg p-8 h-full flex flex-col items-center text-center relative overflow-hidden border transition-all duration-300 ${
                showSolutions
                  ? "border-accent/20"
                  : "border-border"
              }`}
              style={showSolutions ? { boxShadow: "0 0 20px rgba(91, 184, 245, 0.15), 0 0 40px rgba(91, 184, 245, 0.05)" } : {}}
            >
              <AnimatePresence mode="wait">
                {!showSolutions ? (
                  <motion.div
                    key="problem"
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center mb-4">
                      <Icon size={18} className="text-text-tertiary" />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{card.title}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="solution"
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="w-10 h-10 rounded-md border border-accent/20 bg-accent/5 flex items-center justify-center mb-4">
                      <Check size={18} className="text-accent" />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">{card.solution}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Solutions text - visible only when Our Solution is toggled */}
      <AnimatePresence>
        {showSolutions && (
          <motion.div
            className="max-w-2xl mx-auto space-y-6 text-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {solutions.map((sol, i) => (
              <motion.p
                key={i}
                className="text-text-secondary text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <span className="font-semibold text-text-primary">{sol.title}</span>{" "}
                {sol.description}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
