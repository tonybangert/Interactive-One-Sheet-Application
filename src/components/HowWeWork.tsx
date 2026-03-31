import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { howWeWorkContent } from "../data/content";

export default function HowWeWork() {
  const { label, cards } = howWeWorkContent;

  return (
    <section id="how-we-work" className="py-16 md:py-20">
      <RevealOnScroll>
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-10 text-center">
          {label}
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <motion.div
              className="border border-border rounded-lg p-8 h-full flex flex-col text-center items-center"
              whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-text-primary font-semibold text-base md:text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
