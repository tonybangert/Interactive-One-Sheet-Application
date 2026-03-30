import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { metrics } from "../data/content";

function MetricCard({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const animated = useCountUp(value, 2000, isInView);

  return (
    <div
      ref={ref}
      className="flex-1 px-4 py-4 text-center border-r border-brand-orange/10 last:border-r-0"
    >
      <div className="font-display text-2xl md:text-3xl text-brand-orange leading-none tracking-tight">
        {prefix}
        {animated}
        {suffix}
      </div>
      <div className="text-[9px] text-gray-400 uppercase tracking-widest mt-1.5 leading-snug whitespace-pre-line">
        {label}
      </div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="px-6 md:px-16 lg:px-24 py-6 md:py-8">
      <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-brand-orange/10 bg-brand-orange/[0.02]">
        {metrics.map((m, i) => (
          <MetricCard
            key={i}
            value={m.value}
            suffix={m.suffix}
            prefix={m.prefix}
            label={m.label}
          />
        ))}
      </div>
    </section>
  );
}
