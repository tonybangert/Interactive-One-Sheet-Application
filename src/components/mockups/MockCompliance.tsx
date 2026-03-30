import { Check, AlertTriangle } from "lucide-react";

/** Mock compliance document with check items */
export default function MockCompliance() {
  const items = [
    { label: "Data Retention Policy", status: "pass" },
    { label: "Access Control Audit", status: "pass" },
    { label: "Pipeline Validation", status: "warn" },
    { label: "SOP Documentation", status: "pass" },
    { label: "Reporting Standards", status: "pass" },
  ];

  return (
    <div className="flex flex-col h-full min-h-[140px]">
      {/* Document header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center">
          <div className="w-3 h-4 border border-gray-500 rounded-sm" />
        </div>
        <div>
          <p className="text-[11px] text-white font-medium">Compliance Report</p>
          <p className="text-[9px] text-gray-500">Q3 2025 — Auto-generated</p>
        </div>
        <span className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium">
          4/5 Pass
        </span>
      </div>

      {/* Checklist */}
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 glass rounded-md px-2.5 py-1.5"
          >
            {item.status === "pass" ? (
              <Check size={12} className="text-green-400 shrink-0" />
            ) : (
              <AlertTriangle size={12} className="text-amber-400 shrink-0" />
            )}
            <span className="text-[10px] text-gray-300 flex-1">{item.label}</span>
            <span
              className={`text-[9px] font-medium ${
                item.status === "pass" ? "text-green-400" : "text-amber-400"
              }`}
            >
              {item.status === "pass" ? "Pass" : "Review"}
            </span>
          </div>
        ))}
      </div>

      {/* Fake text lines */}
      <div className="mt-auto pt-2 flex flex-col gap-1">
        <div className="h-1 w-3/4 bg-white/5 rounded" />
        <div className="h-1 w-1/2 bg-white/5 rounded" />
      </div>
    </div>
  );
}
