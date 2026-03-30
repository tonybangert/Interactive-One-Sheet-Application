import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { ctaContent } from "../data/content";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-14 md:py-16 relative"
    >
      {/* Gradient accent */}
      <div className="gradient-line opacity-40 mb-10" />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.p
            className="font-display text-2xl md:text-3xl italic text-gray-300 max-w-lg tracking-tight"
            whileInView={{ opacity: [0.5, 1] }}
            viewport={{ once: true }}
          >
            {ctaContent.tagline}
          </motion.p>

          <div className="text-right space-y-2">
            {ctaContent.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 text-sm hover:text-brand-orange transition-colors"
                whileHover={{ x: -4 }}
              >
                {link.label}
              </motion.a>
            ))}
            <p className="text-gray-300 text-sm">{ctaContent.email}</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Bottom padding for scroll */}
      <div className="h-6" />
    </section>
  );
}
