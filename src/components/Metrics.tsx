import { useRef } from "react";
import { useInView } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { useCountUp } from "../hooks/useCountUp";
import { metrics } from "../data/content";

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
  label,
  color,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animated = useCountUp(value, 2000, isInView);

  return (
    <RevealOnScroll delay={delay} className="flex-1 min-w-[160px]">
      <div
        ref={ref}
        className={`metric-card rounded-xl p-6 text-center bg-white/[0.03] border-2 ${colorBorders[color]}`}
      >
        <div className={`font-display text-4xl md:text-5xl leading-none tracking-tight ${colorValues[color]}`}>
          {prefix}
          {animated}
          {suffix}
        </div>
        <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-3 leading-snug whitespace-pre-line">
          {label}
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="px-6 md:px-16 lg:px-24 py-16">
      <RevealOnScroll>
        <div className="section-header-line mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
            Proven Results
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {metrics.map((m, i) => (
          <MetricCard
            key={i}
            value={m.value}
            suffix={m.suffix}
            prefix={m.prefix}
            label={m.label}
            color={m.color}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
