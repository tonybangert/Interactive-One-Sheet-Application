import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowWeWork from "./components/HowWeWork";
import Architecture from "./components/Architecture";
import Solutions from "./components/Solutions";
import CallToAction from "./components/CallToAction";
import MiniDashboard from "./components/MiniDashboard";
import GridBackground from "./components/StarfieldCanvas";

export default function App() {
  return (
    <>
      <GridBackground />
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <Hero />
        <div className="divider" />
        <HowWeWork />
        <div className="divider" />
        <ProblemSection />
        <div className="divider" />
        <Solutions />
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
