import ParticleCanvas from "./components/ParticleCanvas";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import StickyNav from "./components/StickyNav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowWeWork from "./components/HowWeWork";
import Architecture from "./components/Architecture";
import Metrics from "./components/Metrics";
import Solutions from "./components/Solutions";
import CallToAction from "./components/CallToAction";

function SectionDivider({ variant = "orange" }: { variant?: "orange" | "blue" | "subtle" }) {
  const gradients = {
    orange: "linear-gradient(90deg, transparent, rgba(250, 168, 64, 0.2), transparent)",
    blue: "linear-gradient(90deg, transparent, rgba(91, 184, 245, 0.15), transparent)",
    subtle: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)",
  };
  return (
    <div
      className="mx-6 md:mx-16 lg:mx-24 h-px"
      style={{ background: gradients[variant] }}
    />
  );
}

export default function App() {
  return (
    <>
      {/* Global layers */}
      <ParticleCanvas />
      <CursorGlow />
      <ScrollProgress />
      <StickyNav />

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <SectionDivider variant="subtle" />
        <HowWeWork />
        <SectionDivider variant="blue" />
        <Architecture />
        <Metrics />
        <Solutions />
        <SectionDivider variant="orange" />
        <CallToAction />
      </main>
    </>
  );
}
