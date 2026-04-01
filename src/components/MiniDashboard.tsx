import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, TrendingDown, BarChart3, Lightbulb } from "lucide-react";

const insights = [
  {
    type: "opportunity" as const,
    icon: BarChart3,
    title: "ICP SWEET SPOT",
    description:
      "2 industries score Tier 1 — $21.9M revenue, 16 deals, 46% avg win rate.",
    value: "$21.9M",
    sparkline: [30, 42, 38, 55, 60, 52, 68, 72, 65, 80, 85, 82],
  },
  {
    type: "critical" as const,
    icon: AlertCircle,
    title: "SILENT DECLINE",
    description:
      "4 accounts declining with no CRM engagement — top account at $1.3M. Total: $2.7M.",
    value: "$2.7M",
    sparkline: [75, 70, 68, 60, 55, 50, 48, 42, 38, 35, 30, 28],
  },
  {
    type: "info" as const,
    icon: TrendingDown,
    title: "SEASONAL VOLATILITY",
    description:
      "61 accounts show significant month-to-month revenue swings — peaks in Aug, troughs in Feb.",
    value: "$33.5M",
    sparkline: [40, 28, 35, 50, 62, 75, 85, 90, 72, 55, 38, 32],
  },
];

const typeStyles = {
  critical: { border: "border-red-500/30", accent: "text-red-400", bar: "bg-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/20", sparkColor: "#f87171" },
  opportunity: { border: "border-green-500/30", accent: "text-green-400", bar: "bg-green-500", badge: "bg-green-500/10 text-green-400 border-green-500/20", sparkColor: "#4ade80" },
  info: { border: "border-blue-500/30", accent: "text-blue-400", bar: "bg-blue-500", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", sparkColor: "#60a5fa" },
};

/* Mini sparkline */
function Sparkline({ data, color, animate }: { data: number[]; color: string; animate: boolean }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 24;
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
        animate={animate ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

/* Animated "ago" timer */
function UpdateTimer() {
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s >= 59 ? 2 : s + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return <>{seconds < 60 ? `${seconds}s ago` : "just now"}</>;
}

export default function MiniDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto border border-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-raised">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex items-center gap-2 ml-2">
            <Lightbulb size={12} className="text-text-tertiary" />
            <span className="text-[11px] text-text-secondary">Cross-Data Intelligence</span>
            <span className="text-[11px] text-text-tertiary">/ 13 insights from health, pipeline, and CRM data</span>
          </div>
        </div>

        {/* Filter pills */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { label: "1 critical", style: typeStyles.critical },
            { label: "6 warning", style: typeStyles.info },
            { label: "3 opportunity", style: typeStyles.opportunity },
          ].map((pill, i) => (
            <span
              key={i}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${pill.style.badge}`}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>

      {/* Insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {insights.map((insight, i) => {
          const style = typeStyles[insight.type];
          const Icon = insight.icon;

          return (
            <motion.div
              key={i}
              className="relative bg-bg-card p-5 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.25 }}
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${style.bar}`} />

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon size={13} className={style.accent} />
                  <span className={`text-[10px] font-semibold tracking-widest uppercase ${style.accent}`}>
                    {insight.title}
                  </span>
                </div>
                <Sparkline data={insight.sparkline} color={style.sparkColor} animate={isInView} />
              </div>

              {/* Description */}
              <motion.p
                className="text-text-secondary text-sm leading-relaxed mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
              >
                {insight.description}
              </motion.p>

              {/* Value */}
              <motion.p
                className="text-text-primary text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.25 }}
              >
                {insight.value}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-bg-raised">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-text-tertiary">Live · Updated <UpdateTimer /></span>
        </div>
        <span className="text-[10px] text-text-tertiary">13 insights · 3 data sources</span>
      </div>
    </motion.div>
  );
}
