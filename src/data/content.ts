export const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Architecture", href: "#architecture" },
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

/* ── Problem / Solution toggle ── */

export const problemIntro = {
  label: "The Problem",
  subtitle: "THE ERA OF GENERIC SAAS IS OVER",
};

export const problemCards = [
  {
    num: 1,
    title: "Revenue data trapped in silos across CRM, ERP, and marketing platforms",
    icon: "Wrench",
    solution: "Unified data layer connects every revenue source into one real-time view",
  },
  {
    num: 2,
    title: "Executive decisions made on stale, manually assembled reports",
    icon: "Clock",
    solution: "Live intelligence feeds deliver insights the moment patterns emerge",
  },
  {
    num: 3,
    title: "Software debt that compounds every quarter as culture bends to fit the tool",
    icon: "TrendingDown",
    solution: "Custom-built systems that adapt to your workflow, not the other way around",
  },
  {
    num: 4,
    title: "Vendor lock-in creating bottlenecks while waiting on third-party feature cycles",
    icon: "Lock",
    solution: "You own the code, the data, and the roadmap — zero vendor dependency",
  },
];

/* ── How We Work ── */

export const howWeWorkContent = {
  label: "What to Expect",
  cards: [
    {
      title: "Capitalize on Every Opportunity",
      description: "Turn hidden revenue streams into measurable bottom-line growth.",
    },
    {
      title: "Transform Your Strategy",
      description: "Gain an entirely new, holistic view of your financial health.",
    },
    {
      title: "Achieve Predictable Growth",
      description: "Hit every target consistently using precise, data-backed insights.",
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
    detail: "Automated connectors for Salesforce, HubSpot, NetSuite, Snowflake, and 50+ sources. Schema detection, deduplication, and real-time CDC streams.",
    icon: "Database",
  },
  {
    title: "Agentic Core",
    description: "Pattern recognition, memory layer, models",
    detail: "Autonomous agents with persistent memory continuously monitor your data, surface anomalies, and learn from your team's decisions over time.",
    icon: "Cpu",
    highlighted: true,
  },
  {
    title: "Predictive Analysis",
    description: "Forecasting, anomaly detection, scoring",
    detail: "Multi-horizon revenue forecasts, deal risk scoring, churn prediction, and pipeline velocity analysis updated in real-time.",
    icon: "BarChart3",
  },
  {
    title: "Executive Intelligence",
    description: "Insights for every C-Suite exec",
    detail: "Role-specific dashboards for CEO, CFO, CRO, and VP Sales — each seeing exactly the metrics that drive their decisions.",
    icon: "Users",
  },
];

/* ── Metrics ── */

export const metricsHeading = "What Changes in 30 Days";

export const metrics = [
  {
    value: 83,
    suffix: "%",
    label: "of Revenue Blind Spots Eliminated in 30 Days",
    detail: "Average across 12 enterprise deployments measuring data coverage before and after implementation.",
    color: "orange",
  },
  {
    value: 4,
    suffix: "x",
    label: "Faster from Signal to Decision",
    detail: "Executive response time from anomaly detection to strategic action, compared to manual reporting workflows.",
    color: "blue",
  },
  {
    value: 1,
    suffix: "",
    textOverride: "One",
    label: "Number. Every Source. Zero Conflicts.",
    detail: "A single source of truth reconciling data across CRM, ERP, marketing automation, and financial systems.",
    color: "red",
  },
  {
    value: 30,
    prefix: "<",
    suffix: "",
    label: "Days to Go Live. ROI from Week 1.",
    detail: "First production dashboards delivered in under two weeks. Full system deployment within 30 days.",
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
