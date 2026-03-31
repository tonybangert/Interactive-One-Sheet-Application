import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Animated sparkline */
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 40;
  const w = 120;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");

  return (
    <svg width={w} height={h} className="overflow-visible">
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
}

/* Animated bar chart */
function BarChart({ values }: { values: number[] }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-1.5 h-10">
      {values.map((v, i) => (
        <motion.div
          key={i}
          className="w-3 rounded-sm bg-accent/40"
          initial={{ height: 0 }}
          animate={{ height: `${(v / max) * 100}%` }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        />
      ))}
    </div>
  );
}

/* Simulated updating number */
function LiveValue({ base, symbol }: { base: number; symbol: string }) {
  const [val, setVal] = useState(base);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => {
        const delta = (Math.random() - 0.4) * base * 0.02;
        return Math.round((prev + delta) * 10) / 10;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [base]);

  return (
    <span className="font-semibold text-text-primary tabular-nums">
      {symbol}{val.toLocaleString()}
    </span>
  );
}

export default function MiniDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const revenueData = [2.1, 2.4, 2.2, 2.8, 3.1, 2.9, 3.4, 3.6, 3.5, 4.0, 4.2, 4.1];
  const pipelineData = [12, 18, 15, 22, 19, 25, 28, 24, 30, 27, 32, 35];
  const barValues = [65, 78, 82, 91, 88, 95, 102];

  return (
    <motion.div
      ref={ref}
      className="border border-border rounded-lg overflow-hidden max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-raised">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[11px] text-text-tertiary ml-2">Revenue Intelligence — Executive View</span>
      </div>

      {/* Dashboard grid */}
      <div className="grid grid-cols-3 gap-px bg-border">
        {/* Revenue */}
        <div className="bg-bg-card p-5">
          <p className="text-[10px] text-text-tertiary tracking-widest uppercase mb-2">Revenue</p>
          <LiveValue base={4.2} symbol="$" />
          <span className="text-text-tertiary text-sm ml-0.5">M</span>
          <div className="mt-3">
            {isInView && <Sparkline data={revenueData} color="#5bb8f5" />}
          </div>
        </div>

        {/* Pipeline */}
        <div className="bg-bg-card p-5">
          <p className="text-[10px] text-text-tertiary tracking-widest uppercase mb-2">Pipeline Deals</p>
          <LiveValue base={147} symbol="" />
          <div className="mt-3">
            {isInView && <Sparkline data={pipelineData} color="#8b8fa3" />}
          </div>
        </div>

        {/* Quota */}
        <div className="bg-bg-card p-5">
          <p className="text-[10px] text-text-tertiary tracking-widest uppercase mb-2">Weekly Quota %</p>
          <LiveValue base={112} symbol="" />
          <span className="text-text-tertiary text-sm">%</span>
          <div className="mt-3">
            {isInView && <BarChart values={barValues} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
