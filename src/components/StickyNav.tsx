import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../data/content";
import logoPerformanceLabs from "../assets/logo-performancelabs.png";

export default function StickyNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > window.innerHeight * 0.8);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-bg/80 border-b border-border"
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoPerformanceLabs}
            alt="PerformanceLabs"
            className="w-7 h-7 rounded"
          />
          <span className="text-sm font-semibold text-text-primary hidden sm:block">
            PerformanceLabs
          </span>
        </div>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors hidden md:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 rounded border border-accent/30 text-accent font-medium hover:bg-accent/5 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
