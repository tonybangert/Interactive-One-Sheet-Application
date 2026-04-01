import RevealOnScroll from "./ui/RevealOnScroll";
import { solutions } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" className="pb-16 md:pb-20 pt-6">

      <div className="max-w-2xl mx-auto space-y-6 text-center">
        {solutions.map((sol, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-text-primary">{sol.title}</span>{" "}
              {sol.description}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
