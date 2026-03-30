export const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Architecture", href: "#architecture" },
  { label: "Results", href: "#metrics" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  headline: "Your data infrastructure should be a",
  highlightedText: "competitive weapon",
  headlineEnd: ", not a reporting obligation.",
  subtext:
    "We embed directly into your revenue operations to build AI-native intelligence systems that unify CRM, finance, marketing, and operational data into a single source of executive truth. No generic dashboards. No year-long implementations. Production value in weeks.",
};

/* ── Problem Section (side-by-side comparison) ── */

export const problemIntro = {
  label: "The Problem",
  title: "The Era of Generic SaaS is Over",
  description:
    "Most enterprises run 15+ disconnected tools that force unique workflows into a vendor's standardized roadmap. The result:",
};

export const problemLeft = {
  heading: "Rigid SaaS Model",
  bullets: [
    "Revenue data trapped in silos across CRM, ERP, and marketing platforms",
    "Executive decisions made on stale, manually assembled reports",
    "Software debt that compounds every quarter as culture bends to fit the tool",
    "Vendor lock-in creating bottlenecks while waiting on third-party feature cycles",
  ],
};

export const problemRight = {
  heading: "Custom AI Deployment",
  bullets: [
    "Bespoke solutions built around your exact data topology and workflow",
    "Forward-deployed teams embedding directly into your operations",
    "The implementation moat — proprietary systems competitors can't replicate",
    "Continuous evolution driven by your roadmap, not a vendor's release cycle",
  ],
};

export const problemTagline =
  "We don't just sell software. We build the system that builds your business.";

/* Keep legacy export for any other consumers */
export const problemItems = [
  ...problemLeft.bullets.map((b, i) => ({
    title: ["Revenue Silos", "Stale Reports", "Software Debt", "Vendor Lock-in"][i],
    description: b,
  })),
];

/* ── How We Work ── */

export const howWeWorkContent = {
  label: "How We Work",
  title: "Forward-Deployed Execution",
  description:
    "We don't hand you a login and wish you luck. Our team embeds inside your operation to build, configure, and optimize systems that fit your exact data reality.",
  steps: [
    {
      num: 1,
      title: "Diagnose",
      description:
        "Map your data ecosystem, identify gaps, score readiness",
    },
    {
      num: 2,
      title: "Deploy",
      description:
        "Build and configure agentic intelligence in your environment",
    },
    {
      num: 3,
      title: "Refine",
      description:
        "Iterate with your team until insights drive real decisions",
    },
  ],
};

/* ── Architecture (multi-column flow) ── */

export const architectureInputs = [
  { title: "CRM Systems", icon: "Users", description: "Salesforce, HubSpot, pipeline data" },
  { title: "ERP / Finance", icon: "DollarSign", description: "NetSuite, QuickBooks, actuals" },
  { title: "Market & Web", icon: "Globe", description: "Analytics, intent signals, trends" },
  { title: "Operations", icon: "Settings", description: "Ticketing, inventory, fulfillment" },
];

export const architectureCore = [
  { title: "Ingestion", description: "API/ETL pipelines normalize & enrich" },
  { title: "Agentic AI Core", description: "Pattern recognition, memory layer, models", highlighted: true },
  { title: "Predictive Analysis", description: "Forecasting, anomaly detection, scoring" },
];

export const architectureOutputs = [
  { role: "CEO", icon: "BarChart3", description: "Strategic KPIs & cross-functional intelligence" },
  { role: "CFO", icon: "TrendingUp", description: "Cash flow intelligence & budget optimization" },
  { role: "CMO", icon: "Megaphone", description: "Campaign ROI, attribution & content strategy" },
  { role: "CRO", icon: "Target", description: "Pipeline velocity, win-rate & territory insights" },
  { role: "COO", icon: "Activity", description: "Operational efficiency & resource utilization" },
];

export const architectureFinal = {
  title: "Global Revenue Intelligence",
  description: "Unified executive decision surface powered by your proprietary data",
};

/* Keep legacy export */
export const architectureStages = [
  { title: "Data Inputs", description: "CRM, ERP, Market Data, Operational Systems" },
  { title: "AI Ingestion", description: "API/ETL pipelines normalize & enrich" },
  { title: "Agentic Core", description: "Pattern recognition, memory layer, models" },
  { title: "Predictive Analysis", description: "Forecasting, anomaly detection, scoring" },
  { title: "Executive Intelligence", description: "CFO, CMO, CRO decision surfaces", highlighted: true },
];

/* ── Metrics ── */

export const metrics = [
  { value: 83, suffix: "%", label: "Data Health Score\nWithin 30 Days" },
  { value: 4, suffix: "x", label: "Faster Pipeline\nVisibility" },
  { value: 100, suffix: "%", label: "Revenue Data\nUnified" },
  { value: 90, prefix: "<", suffix: "", label: "Days to\nProduction Value" },
];

/* ── Solutions ── */

export const solutions = [
  {
    icon: "CheckCircle",
    title: "Data Health & Forecasting",
    description: "Field-level scoring, gap analysis, predictive models",
  },
  {
    icon: "Diamond",
    title: "Pipeline Intelligence",
    description: "Agentic deal tracking, stage velocity, win-rate analysis",
  },
  {
    icon: "BarChart3",
    title: "Revenue Visualization",
    description: "Real-time dashboards, actuals vs. forecast, trend lines",
  },
  {
    icon: "Star",
    title: "Content Generation",
    description: "Brand-aligned collateral, campaign briefs, marketing ops",
  },
  {
    icon: "Settings",
    title: "Operational Compliance",
    description: "Automated audits, process documentation, SOP enforcement",
  },
];

/* ── CTA ── */

export const ctaContent = {
  tagline:
    "We don't just sell software. We build the system that builds your business.",
  links: [
    { label: "performancelabs.ai", href: "https://performancelabs.ai" },
    { label: "aplora.ai", href: "https://aplora.ai" },
  ],
  email: "tony@performancelabs.ai",
};
