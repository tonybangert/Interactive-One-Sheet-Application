export const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Architecture", href: "#architecture" },
  { label: "Results", href: "#metrics" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Agentic",
  titleLine2: "Revenue Intelligence",
  quote:
    '"Your data infrastructure should be a competitive weapon, not a reporting obligation."',
  description:
    "We embed directly into your revenue operations to build AI-native intelligence systems that unify CRM, finance, marketing, and operational data into a single source of executive truth. No generic dashboards. No year-long implementations. Production value in weeks.",
};

/* ── Problem Section (4 numbered cards) ── */

export const problemIntro = {
  label: "The Problem",
  subtitle: "THE ERA OF GENERIC SAAS IS OVER",
};

export const problemCards = [
  {
    num: 1,
    title: "Revenue data trapped in silos across CRM, ERP, and marketing platforms",
    icon: "Wrench",
  },
  {
    num: 2,
    title: "Executive decisions made on stale, manually assembled reports",
    icon: "Clock",
  },
  {
    num: 3,
    title: "Software debt that compounds every quarter as culture bends to fit the tool",
    icon: "TrendingDown",
  },
  {
    num: 4,
    title: "Vendor lock-in creating bottlenecks while waiting on third-party feature cycles",
    icon: "Lock",
  },
];

/* ── How We Work ── */

export const howWeWorkContent = {
  label: "How We Work",
  subtitle: "FORWARD-DEPLOYED EXECUTION",
  steps: [
    {
      num: 1,
      title: "Diagnose",
      description: "Map your data ecosystem, identify gaps, score readiness.",
    },
    {
      num: 2,
      title: "Build",
      description:
        "Build and configure agentic intelligence in your environment.",
    },
    {
      num: 3,
      title: "Refine",
      description:
        "Iterate with your team until insights drive real decisions.",
    },
  ],
};

/* ── Architecture ── */

export const architectureContent = {
  label: "The Architecture",
  subtitle: "FROM INGESTION TO EXECUTIVE INSIGHT",
};

export const architectureInputs = [
  "CRM",
  "ERP, Market Data",
  "Operational Systems",
];

export const architectureStages = [
  {
    title: "AI Ingestion",
    description: "API/ETL pipelines normalize & enrich",
    icon: "Database",
  },
  {
    title: "Agentic Core",
    description: "Pattern recognition, memory layer, models",
    icon: "Cpu",
    highlighted: true,
  },
  {
    title: "Predictive Analysis",
    description: "Forecasting, anomaly detection, scoring",
    icon: "BarChart3",
  },
  {
    title: "Executive Intelligence",
    description: "CFO, CMO, CRO decision surfaces",
    icon: "Users",
  },
];

/* ── Metrics (Proven Results) ── */

export const metrics = [
  {
    value: 83,
    suffix: "%",
    label: "Data Health Score\nWithin 30 Days",
    color: "orange",
  },
  {
    value: 4,
    suffix: "x",
    label: "Faster Pipeline\nVisibility",
    color: "blue",
  },
  {
    value: 100,
    suffix: "%",
    label: "Revenue Data\nUnified",
    color: "red",
  },
  {
    value: 90,
    prefix: "<",
    suffix: "",
    label: "<90 Days to\nProduction Value",
    color: "orange",
  },
];

/* ── Solutions ── */

export const solutions = [
  {
    marker: "check",
    title: "Data Health & Forecasting:",
    description: "Field-level scoring, gap analysis, predictive models.",
    color: "orange",
  },
  {
    marker: "diamond",
    title: "Pipeline Intelligence:",
    description: "Agentic deal tracking, stage velocity, win-rate analysis.",
    color: "blue",
  },
  {
    marker: "square",
    title: "Revenue Visualization:",
    description: "Real-time dashboards, actuals vs. forecast, trend lines.",
    color: "gray",
  },
];

/* ── CTA ── */

export const ctaContent = {
  heading: "Ready to Get Started?",
  email: "tony@performancelabs.ai",
};
