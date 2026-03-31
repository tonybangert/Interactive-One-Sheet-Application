import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, TrendingDown, BarChart3 } from "lucide-react";

const insights = [
  {
    type: "opportunity" as const,
    icon: BarChart3,
    title: "ICP SWEET SPOT",
    description:
      "2 industries score Tier 1 — $21.9M revenue, 16 deals, 46% avg win rate.",
    value: "$21.9M",
  },
  {
    type: "critical" as const,
    icon: AlertCircle,
    title: "SILENT DECLINE",
    description:
      "4 accounts declining with no CRM engagement — top account at $1.3M. Total: $2.7M.",
    value: "$2.7M",
  },
  {
    type: "info" as const,
    icon: TrendingDown,
    title: "SEASONAL VOLATILITY",
    description:
      "61 accounts show significant month-to-month revenue swings — peaks in Aug, troughs in Feb.",
    value: "$33.5M",
  },
];

const typeStyles = {
  critical: { border: "border-red-500/30", accent: "text-red-400", bar: "bg-red-500", badge: "bg-red-500/10 text-red-400" },
  opportunity: { border: "border-green-500/30", accent: "text-green-400", bar: "bg-green-500", badge: "bg-green-500/10 text-green-400" },
  info: { border: "border-blue-500/30", accent: "text-blue-400", bar: "bg-blue-500", badge: "bg-blue-500/10 text-blue-400" },
};

export default function MiniDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {insights.map((insight, i) => {
        const style = typeStyles[insight.type];
        const Icon = insight.icon;

        return (
          <motion.div
            key={i}
            className={`relative border ${style.border} rounded-lg p-6 overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.3 }}
          >
            {/* Left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${style.bar}`} />

            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <Icon size={14} className={style.accent} />
              <span className={`text-[11px] font-semibold tracking-widest uppercase ${style.accent}`}>
                {insight.title}
              </span>
            </div>

            {/* Description */}
            <motion.p
              className="text-text-secondary text-sm leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.3 + 0.3 }}
            >
              {insight.description}
            </motion.p>

            {/* Value */}
            <motion.p
              className="text-text-tertiary text-sm font-semibold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.3 + 0.5 }}
            >
              {insight.value}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
}
