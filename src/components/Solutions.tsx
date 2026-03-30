import RevealOnScroll from "./ui/RevealOnScroll";
import { solutions } from "../data/content";
import { Check, Diamond, Square } from "lucide-react";

const markerIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  check: Check,
  diamond: Diamond,
  square: Square,
};

const markerColors: Record<string, string> = {
  orange: "text-brand-orange",
  blue: "text-aplora-blue",
  gray: "text-gray-400",
};

export default function Solutions() {
  return (
    <section id="solutions" className="px-6 md:px-16 lg:px-24 py-12">
      <RevealOnScroll>
        <p className="text-center text-brand-orange font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-8">
          READY-TO-CONFIGURE SOLUTIONS
        </p>
      </RevealOnScroll>

      <div className="max-w-3xl mx-auto space-y-4">
        {solutions.map((sol, i) => {
          const MarkerIcon = markerIcons[sol.marker];
          return (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <MarkerIcon size={18} className={`mt-0.5 shrink-0 ${markerColors[sol.color]}`} />
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  <span className="font-semibold text-white">{sol.title}</span>{" "}
                  {sol.description}
                </p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
