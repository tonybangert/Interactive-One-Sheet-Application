import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { ctaContent } from "../data/content";

export default function CallToAction() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-8">
      <RevealOnScroll>
        <motion.div
          className="cta-block rounded-2xl py-10 px-8 text-center max-w-3xl mx-auto"
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(91, 184, 245, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-tight">
            {ctaContent.heading}
          </h2>
          <a
            href={`mailto:${ctaContent.email}`}
            className="text-brand-orange text-lg md:text-xl font-medium hover:underline transition-all"
          >
            {ctaContent.email}
          </a>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}
