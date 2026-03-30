import StickyNav from "./components/StickyNav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowWeWork from "./components/HowWeWork";
import Architecture from "./components/Architecture";
import Metrics from "./components/Metrics";
import Solutions from "./components/Solutions";
import CallToAction from "./components/CallToAction";

export default function App() {
  return (
    <>
      <StickyNav />

      <main className="relative z-10 max-w-6xl mx-auto">
        <Hero />
        <ProblemSection />
        <HowWeWork />
        <Architecture />
        <Metrics />
        <Solutions />
        <CallToAction />
      </main>
    </>
  );
}
