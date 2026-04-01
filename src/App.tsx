import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowWeWork from "./components/HowWeWork";
import Architecture from "./components/Architecture";
import CallToAction from "./components/CallToAction";
import MiniDashboard from "./components/MiniDashboard";
import GridBackground from "./components/StarfieldCanvas";

export default function App() {
  return (
    <>
      {/* Global SVG gradient for icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#faa840" />
            <stop offset="100%" stopColor="#ef4537" />
          </linearGradient>
        </defs>
      </svg>
      <GridBackground />
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <Hero />
        <div className="divider" />
        <ProblemSection />
        <div className="divider" />
        <HowWeWork />
        <div className="divider" />
        <Architecture />
        <div className="divider" />
        <section className="py-16 md:py-20">
          <p className="text-text-tertiary text-sm font-medium tracking-widest uppercase mb-10 text-center">
            What Real Revenue Insights Look Like
          </p>
          <MiniDashboard />
        </section>
        <div className="divider" />
        <CallToAction />
      </main>
    </>
  );
}
