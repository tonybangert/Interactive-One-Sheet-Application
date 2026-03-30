import { useRef } from "react";
import { useInView } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { useCountUp } from "../hooks/useCountUp";
import { metrics } from "../data/content";

function MetricCard({
  value,
  suffix,
  prefix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animated = useCountUp(value, 2000, isInView);

  return (
    <RevealOnScroll delay={delay} className="flex-1">
      <div
        ref={ref}
        className="p-5 text-center bg-brand-orange/[0.04] border-r border-brand-orange/10 last:border-r-0"
      >
        <div className="font-display text-3xl md:text-4xl text-brand-orange leading-none tracking-tight">
          {prefix}
          {animated}
          {suffix}
        </div>
        <div className="text-[10px] text-gray-300 uppercase tracking-widest mt-2 leading-snug whitespace-pre-line">
          {label}
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="px-6 md:px-16 lg:px-24 py-20">
      <RevealOnScroll>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-3">
          Results
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-white mb-10 tracking-tight leading-[1.15]">
          Measurable Impact
        </h3>
      </RevealOnScroll>

      <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-brand-orange/15">
        {metrics.map((m, i) => (
          <MetricCard
            key={i}
            value={m.value}
            suffix={m.suffix}
            prefix={m.prefix}
            label={m.label}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
