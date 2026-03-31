import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { problemIntro, problemCards } from "../data/content";
import { Wrench, Clock, TrendingDown, Lock } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wrench,
  Clock,
  TrendingDown,
  Lock,
};

export default function ProblemSection() {
  return (
    <section id="problem" className="px-6 md:px-16 lg:px-24 py-8">
      {/* Section header with decorative lines */}
      <RevealOnScroll>
        <div className="section-header-line mb-2">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
            {problemIntro.label}
          </h2>
        </div>
        <p className="text-center text-brand-orange font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-6">
          {problemIntro.subtitle}
        </p>
      </RevealOnScroll>

      {/* 4 problem cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {problemCards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <motion.div
                className="problem-card glass rounded-xl p-6 text-center h-full flex flex-col items-center"
                whileHover={{
                  y: -6,
                  scale: 1.2,
                  borderColor: "var(--hover-border-orange)",
                  boxShadow: "var(--hover-shadow-glow)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-gray-300" />
                </div>

                {/* Number badge */}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-orange text-navy-deep text-sm font-bold mb-3">
                  {card.num}
                </span>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{card.title}</p>
              </motion.div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
