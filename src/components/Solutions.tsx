import RevealOnScroll from "./ui/RevealOnScroll";
import { solutions } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-20">
      <RevealOnScroll>
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-10 text-center">
          Ready-to-Configure Solutions
        </p>
      </RevealOnScroll>

      <div className="max-w-2xl mx-auto space-y-6 text-center">
        {solutions.map((sol, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="font-semibold text-text-primary">{sol.title}</span>{" "}
              {sol.description}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
