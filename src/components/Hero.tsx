import { motion } from "framer-motion";
import { heroContent } from "../data/content";
import logoPerformanceLabs from "../assets/logo-performancelabs.png";
import logoAplora from "../assets/logo-aplora-ai.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16"
    >
      {/* Header logos + brand */}
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={logoPerformanceLabs}
          alt="PerformanceLabs"
          className="w-10 h-10 rounded-lg"
        />
        <img
          src={logoAplora}
          alt="Aplora.ai"
          className="w-10 h-10 rounded-lg"
        />
        <div className="ml-2">
          <h1 className="font-display text-xl md:text-2xl font-normal text-white leading-tight tracking-tight">
            PerformanceLabs Revenue Intelligence
          </h1>
          <p className="text-xs text-gray-300 tracking-widest mt-0.5">
            Powered by <span className="text-aplora-blue font-medium">Aplora.ai</span>
          </p>
        </div>
        <div className="ml-auto text-right hidden md:block">
          <p className="text-[10px] font-medium text-brand-orange tracking-[0.18em] uppercase">
            Agentic Business Intelligence
          </p>
          <p className="text-[9px] text-gray-500 tracking-widest uppercase mt-0.5">
            Enterprise AI That Deploys Into Your Operation
          </p>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] max-w-4xl tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {heroContent.headline}{" "}
        <em className="italic text-brand-orange">{heroContent.highlightedText}</em>
        {heroContent.headlineEnd}
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 text-base md:text-lg mt-6 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {heroContent.subtext}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-brand-orange text-navy-deep font-semibold text-sm hover:brightness-110 transition-all"
        >
          Get Started
        </a>
        <a
          href="#architecture"
          className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:border-brand-orange/50 hover:text-brand-orange transition-all"
        >
          See the Architecture
        </a>
      </motion.div>

      {/* Gradient line */}
      <motion.div
        className="gradient-line mt-10 w-full opacity-60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-brand-orange rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
