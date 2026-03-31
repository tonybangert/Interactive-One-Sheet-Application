import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { ctaContent } from "../data/content";

export default function CallToAction() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <RevealOnScroll>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            {ctaContent.heading}
          </h2>
          <motion.a
            href={`mailto:${ctaContent.email}`}
            className="inline-block text-accent text-base md:text-lg font-medium border-b border-accent/30 pb-0.5 hover:border-accent transition-colors"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
          >
            {ctaContent.email}
          </motion.a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
