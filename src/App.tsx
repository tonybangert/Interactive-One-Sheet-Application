import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowWeWork from "./components/HowWeWork";
import Architecture from "./components/Architecture";
import Solutions from "./components/Solutions";
import CallToAction from "./components/CallToAction";
import StarfieldCanvas from "./components/StarfieldCanvas";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <>
      <StarfieldCanvas />
      <CursorGlow />
      <main className="relative z-10 max-w-6xl mx-auto">
      <Hero />
      <ProblemSection />
      <Architecture />
      <HowWeWork />
      <Solutions />
      <CallToAction />
    </main>
    </>
  );
}
