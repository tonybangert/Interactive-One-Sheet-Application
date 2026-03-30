import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { howWeWorkContent } from "../data/content";

export default function HowWeWork() {
  const { label, subtitle, steps } = howWeWorkContent;

  return (
    <section id="how-we-work" className="px-6 md:px-16 lg:px-24 py-16">
      {/* Section header with decorative lines */}
      <RevealOnScroll>
        <div className="section-header-line mb-2">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
            {label}
          </h2>
        </div>
        <p className="text-center text-brand-orange font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-14">
          {subtitle}
        </p>
      </RevealOnScroll>

      {/* 3 horizontal steps with large numbers and connecting arrows */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <RevealOnScroll delay={i * 0.15}>
              <motion.div
                className="step-card flex flex-col items-center text-center w-56"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Large number with icon area */}
                <div className="relative mb-4">
                  <span className="font-display text-7xl md:text-8xl text-brand-orange/90 leading-none step-number">
                    {step.num}
                  </span>
                  {/* Decorative icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="step-icon-overlay w-16 h-16 rounded-full bg-white/[0.03] border border-white/10" />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">
                  <span className="text-brand-orange">{step.title}:</span>{" "}
                  <span className="text-gray-300 font-normal text-sm">
                    {step.description}
                  </span>
                </h3>
              </motion.div>
            </RevealOnScroll>

            {/* Connecting arrow (not after last step) */}
            {i < steps.length - 1 && (
              <motion.div
                className="hidden md:flex items-center mx-4"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                <svg width="60" height="24" viewBox="0 0 60 24" className="text-brand-orange/60">
                  <line x1="0" y1="12" x2="48" y2="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M44 4 L56 12 L44 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
