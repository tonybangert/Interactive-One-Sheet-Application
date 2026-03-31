import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { useCountUp } from "../hooks/useCountUp";
import { metrics, metricsHeading } from "../data/content";

const colorBorders: Record<string, string> = {
  orange: "border-brand-orange/40",
  blue: "border-aplora-blue/40",
  red: "border-brand-red/40",
};

const colorValues: Record<string, string> = {
  orange: "text-brand-orange",
  blue: "text-aplora-blue",
  red: "text-brand-red",
};

function MetricCard({
  value,
  suffix,
  prefix,
  textOverride,
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  textOverride?: string;
  label: string;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animated = useCountUp(value, 2000, isInView);

  return (
    <RevealOnScroll delay={delay} className="flex-1 min-w-[200px]">
      <motion.div
        ref={ref}
        className={`metric-card rounded-xl p-8 text-center border-2 h-full flex flex-col items-center justify-center relative ${colorBorders[color]}`}
        style={{ backgroundColor: "#0c1a30" }}
        whileHover={{
          scale: 1.2,
          zIndex: 10,
          backgroundColor: "#112240",
          borderColor: "var(--hover-border-orange)",
          boxShadow: "var(--hover-shadow-glow)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={`font-display text-5xl md:text-6xl leading-none tracking-tight mb-4 ${colorValues[color]}`}>
          {textOverride ? textOverride : <>{prefix}{animated}{suffix}</>}
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {label}
        </p>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="px-6 md:px-16 lg:px-24 py-8">
      <RevealOnScroll>
        <div className="section-header-line mb-6">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
            {metricsHeading}
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {metrics.map((m, i) => (
          <MetricCard
            key={i}
            value={m.value}
            suffix={m.suffix}
            prefix={m.prefix}
            textOverride={m.textOverride}
            label={m.label}
            color={m.color}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
