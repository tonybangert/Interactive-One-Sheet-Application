import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { howWeWorkContent } from "../data/content";

export default function HowWeWork() {
  const { label, cards } = howWeWorkContent;

  return (
    <section id="how-we-work" className="px-6 md:px-16 lg:px-24 py-8">
      <RevealOnScroll>
        <div className="section-header-line mb-6">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
            {label}
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <motion.div
              className="rounded-xl p-6 text-center h-full flex flex-col items-center justify-center border border-white/10 relative"
              style={{ backgroundColor: "rgba(12, 26, 48, 0.65)" }}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
                backgroundColor: "rgba(17, 34, 64, 0.8)",
                borderColor: "var(--hover-border-orange)",
                boxShadow: "var(--hover-shadow-glow)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-brand-orange font-semibold text-base mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
