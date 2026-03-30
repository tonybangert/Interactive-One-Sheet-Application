import { motion } from "framer-motion";
import RevealOnScroll from "./ui/RevealOnScroll";
import { solutions } from "../data/content";
import MockDashboard from "./mockups/MockDashboard";
import MockKanban from "./mockups/MockKanban";
import MockChat from "./mockups/MockChat";
import MockChart from "./mockups/MockChart";
import MockCompliance from "./mockups/MockCompliance";

const mockups = [MockDashboard, MockKanban, MockChart, MockChat, MockCompliance];

/* ── Tilted Label Badge ── */
function PanelBadge({ label }: { label: string }) {
  return (
    <div
      className="absolute bottom-3 left-3 z-10 px-3 py-1 rounded-md text-[10px] font-semibold text-white/90 tracking-wide -rotate-3 bg-white/[0.06] backdrop-blur border border-white/10"
    >
      {label}
    </div>
  );
}

/*
 * Bento grid: Dashboard spans 2 rows left (tall hero panel),
 * 4 smaller panels fill a 2×2 grid on the right.
 * 3-row layout lets the dashboard mockup breathe with its donut + stats + field list.
 * Using 3fr/2fr columns so the dashboard gets more real estate.
 */
const GRID_AREAS = [
  "dash",      // Data Health & Forecasting — spans rows 1-2
  "kanban",    // Pipeline Intelligence
  "chart",     // Revenue Visualization
  "chat",      // Content Generation
  "compliance", // Operational Compliance
];

/* ── Main Section ── */
export default function Solutions() {
  return (
    <section id="solutions" className="px-6 md:px-16 lg:px-24 py-28 md:py-36">
      <RevealOnScroll>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-3">
          Ready-to-Configure Solutions
        </p>
        <h3 className="font-display text-4xl md:text-5xl text-white mb-14 tracking-tight leading-[1.15]">
          What Gets Built
        </h3>
      </RevealOnScroll>

      <div
        className="grid gap-4 max-w-6xl mx-auto"
        style={{
          gridTemplateAreas: `"dash kanban" "dash chart" "chat compliance"`,
          gridTemplateColumns: "3fr 2fr",
          gridTemplateRows: "auto auto auto",
        }}
      >
        {solutions.map((sol, i) => {
          const Mockup = mockups[i];
          return (
            <div key={i} style={{ gridArea: GRID_AREAS[i] }}>
              <RevealOnScroll delay={i * 0.08} className="h-full">
                <motion.div
                  className="bento-panel glass rounded-2xl p-5 relative overflow-hidden h-full"
                  whileHover={{
                    y: -4,
                    borderColor: "var(--hover-border-orange-light)",
                    boxShadow: "var(--hover-shadow-glow-md)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="mb-10 relative z-0">
                    <Mockup />
                  </div>
                  <PanelBadge label={sol.title} />
                </motion.div>
              </RevealOnScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
}
