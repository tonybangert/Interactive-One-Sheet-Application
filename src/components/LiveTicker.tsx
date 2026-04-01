import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tickerData = [
  { label: "Pipeline Value", value: "$4.2M", delta: "+$380K", positive: true },
  { label: "Win Rate", value: "34.7%", delta: "+2.1%", positive: true },
  { label: "Avg Deal Cycle", value: "28d", delta: "-4d", positive: true },
  { label: "Forecast Accuracy", value: "91.3%", delta: "+5.8%", positive: true },
  { label: "Revenue at Risk", value: "$620K", delta: "-$140K", positive: true },
  { label: "Deals in Pipeline", value: "147", delta: "+12", positive: true },
  { label: "Quota Attainment", value: "112%", delta: "+8%", positive: true },
  { label: "Churn Probability", value: "3.2%", delta: "-0.9%", positive: true },
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tickerData.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const item = tickerData[index];

  return (
    <div className="flex items-center justify-center gap-2 text-sm h-6 overflow-hidden relative">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
      <span className="text-text-tertiary shrink-0">Live:</span>
      <div className="relative h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="inline-flex items-center gap-1.5 md:gap-2 whitespace-nowrap h-6 text-xs md:text-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-text-secondary">{item.label}</span>
            <span className="text-text-primary font-semibold">{item.value}</span>
            <span className="text-green-400">{item.delta}</span>
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
