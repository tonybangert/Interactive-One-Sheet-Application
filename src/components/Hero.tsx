import { motion } from "framer-motion";
import { heroContent } from "../data/content";
import logoPerformanceLabs from "../assets/logo-performancelabs.png";
import logoAplora from "../assets/logo-aplora-ai.png";

export default function Hero() {
  return (
    <section id="hero" className="relative px-6 md:px-16 lg:px-24 pt-8 pb-8">
      {/* Header: Dual logos with divider */}
      <motion.div
        className="flex items-center justify-center gap-8 md:gap-12 mb-10 pt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logoPerformanceLabs} alt="PerformanceLabs" className="w-14 h-14 md:w-16 md:h-16 rounded-lg" />
        <div className="h-12 md:h-14 w-px bg-white/20" />
        <img src={logoAplora} alt="Aplora.ai" className="w-14 h-14 md:w-16 md:h-16 rounded-lg" />
      </motion.div>

      {/* Main title */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-brand-orange">
          {heroContent.title} {heroContent.titleLine2}
        </h1>
      </motion.div>

      {/* Quote */}
      <motion.p
        className="text-center text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-3 italic leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {heroContent.quote}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-center text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {heroContent.description}
      </motion.p>
    </section>
  );
}
