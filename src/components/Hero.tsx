import { motion } from "framer-motion";
import { heroContent } from "../data/content";
import logoPerformanceLabs from "../assets/logo-performancelabs.png";
import logoAplora from "../assets/logo-aplora-ai.png";

export default function Hero() {
  return (
    <section id="hero" className="relative px-6 md:px-16 lg:px-24 pt-10 pb-16">
      {/* Header: Dual logos */}
      <motion.div
        className="flex items-center justify-center gap-6 md:gap-12 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Aplora logo + name */}
        <div className="flex items-center gap-2.5">
          <img src={logoAplora} alt="Aplora.ai" className="w-10 h-10 rounded-lg" />
          <span className="font-display text-xl md:text-2xl text-white tracking-tight">
            Aplora.ai
          </span>
        </div>

        {/* Decorative swoosh connector */}
        <div className="hidden sm:block">
          <svg width="80" height="24" viewBox="0 0 80 24" className="text-brand-orange">
            <path
              d="M0 18 Q20 0, 40 12 Q60 24, 80 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="40" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* PerformanceLabs logo + name */}
        <div className="flex items-center gap-2.5">
          <img src={logoPerformanceLabs} alt="PerformanceLabs" className="w-10 h-10 rounded-lg" />
          <div className="flex items-baseline gap-1">
            <span className="font-body text-lg md:text-xl font-bold text-white tracking-tight uppercase">
              Performance
            </span>
            <span className="font-body text-lg md:text-xl font-bold text-brand-orange tracking-tight uppercase">
              Labs.AI
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main title with bracket decorations */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight">
          <span className="title-bracket text-brand-orange">{heroContent.title}</span>
        </h1>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-brand-orange mt-1">
          {heroContent.titleLine2}
        </h1>
      </motion.div>

      {/* Quote */}
      <motion.p
        className="text-center font-display text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 italic leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {heroContent.quote}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-center text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {heroContent.description}
      </motion.p>
    </section>
  );
}
