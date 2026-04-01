import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { heroContent, metrics } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { useTypewriter } from "../hooks/useTypewriter";
import LiveTicker from "./LiveTicker";
import logoPerformanceLabs from "../assets/logo-performancelabs.png";
import logoAplora from "../assets/aplora-icon.svg";

function HeroKPI({
  value,
  suffix,
  prefix,
  textOverride,
  label,
  detail,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  textOverride?: string;
  label: string;
  detail: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animated = useCountUp(value, 2000, isInView);
  const [hovered, setHovered] = useState(false);
  const progress = isInView ? (animated / value) * 100 : 0;

  return (
    <motion.div
      ref={ref}
      className="text-center cursor-default relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-5xl md:text-7xl font-bold tracking-tight text-text-secondary">
        {textOverride ? textOverride : <>{prefix}{animated}{suffix}</>}
      </div>

      {/* Progress bar */}
      <div className="h-px bg-border mt-3 mb-2 mx-auto max-w-[120px] overflow-hidden">
        <motion.div
          className="h-full bg-accent/40"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <p className="text-text-secondary text-sm leading-snug max-w-[180px] mx-auto">
        {label}
      </p>

      {/* Hover detail tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 p-3 rounded-lg border border-accent/20 bg-bg-card text-sm text-text-secondary leading-relaxed z-20"
            style={{ boxShadow: "0 0 20px rgba(91, 184, 245, 0.15), 0 0 40px rgba(91, 184, 245, 0.05)" }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Hero() {
  const titleText = `${heroContent.title} ${heroContent.titleLine2}`;
  const { displayed, done } = useTypewriter(titleText, 50, 400);

  return (
    <section className="py-16 md:py-24">
      {/* Logos */}
      <motion.div
        className="flex items-center justify-center gap-8 md:gap-10 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logoPerformanceLabs} alt="PerformanceLabs" className="w-[77px] h-[77px] md:w-24 md:h-24 rounded-lg" />
        <div className="h-14 md:h-16 w-px bg-white/20 -mr-2" />
        <img src={logoAplora} alt="Aplora.ai" className="w-[51px] h-[51px] md:w-16 md:h-16 ml-8" />
      </motion.div>

      {/* Typed title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 min-h-[2.5rem]">
        {displayed}
        {!done && <span className="inline-block w-0.5 h-8 bg-accent ml-1 animate-pulse align-middle" />}
      </h1>

      {/* Subtitle */}
      <motion.p
        className="text-center text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {heroContent.quote}
      </motion.p>

      {/* Live ticker */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <LiveTicker />
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mb-14">
        {metrics.map((m, i) => (
          <HeroKPI
            key={i}
            value={m.value}
            suffix={m.suffix}
            prefix={m.prefix}
            textOverride={m.textOverride}
            label={m.label}
            detail={m.detail}
            delay={0.3 + i * 0.1}
          />
        ))}
      </div>

      {/* Description */}
      <motion.p
        className="text-center text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {heroContent.description}
      </motion.p>
    </section>
  );
}
