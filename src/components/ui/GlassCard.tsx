import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverScale = 1.2,
}: Props) {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${className}`}
      whileHover={{
        scale: hoverScale,
        borderColor: "var(--hover-border-orange)",
        boxShadow: "var(--hover-shadow-glow)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
