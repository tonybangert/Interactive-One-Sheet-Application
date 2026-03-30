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
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-navy-deep/80 border-b border-white/5"
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoPerformanceLabs}
            alt="PerformanceLabs"
            className="w-7 h-7 rounded"
          />
          <span className="font-display text-sm text-white hidden sm:block">
            PerformanceLabs
          </span>
        </div>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-gray-300 hover:text-brand-orange transition-colors hidden md:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs px-4 py-1.5 rounded-md bg-brand-orange text-navy-deep font-semibold hover:brightness-110 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
