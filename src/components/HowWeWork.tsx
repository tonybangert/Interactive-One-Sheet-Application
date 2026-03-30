import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { howWeWorkContent } from "../data/content";

export default function HowWeWork() {
  const { label, title, description, steps } = howWeWorkContent;

  return (
    <section id="how-we-work" className="px-6 md:px-16 lg:px-24 py-20">
      <RevealOnScroll>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-3">
          {label}
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-tight leading-[1.15]">
          {title}
        </h3>
        <p className="text-gray-300 max-w-xl mb-12 leading-relaxed">{description}</p>
      </RevealOnScroll>

      <div className="relative flex flex-col md:flex-row gap-6">
        {/* Connecting line (desktop) */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0"
          style={{ background: "var(--connector-gradient)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {steps.map((step, i) => (
          <RevealOnScroll
            key={i}
            delay={i * 0.15}
            className="relative z-10 flex-1"
          >
            <motion.div
              className="glass rounded-xl p-6 relative overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -4,
                borderColor: "var(--hover-border-orange)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="absolute top-3 right-4 font-display text-4xl text-brand-orange/20">
                {step.num}
              </span>
              <h4 className="font-semibold text-white text-lg mb-2">
                {step.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
