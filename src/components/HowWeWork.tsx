import RevealOnScroll from "./ui/RevealOnScroll";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16 md:py-20">
      <RevealOnScroll>
        <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-6 text-center">
          What to Expect
        </p>
        <p className="text-accent text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center">
          We uncover hidden revenue streams and transform them into measurable bottom-line growth. Our AI-native systems give you a holistic, real-time view of your financial health so you can hit every target with precision. Predictable growth, powered by data-backed insights.
        </p>
      </RevealOnScroll>
    </section>
  );
}
