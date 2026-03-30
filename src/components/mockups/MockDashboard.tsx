/** Mock dashboard with donut chart, stat cards, and field-fill-rate list */
export default function MockDashboard() {
  const segments = [
    { pct: 45, color: "var(--color-brand-orange)" },
    { pct: 25, color: "var(--color-aplora-blue)" },
    { pct: 18, color: "var(--color-brand-red)" },
    { pct: 12, color: "var(--color-gray-500)" },
  ];

  const fields = [
    { name: "Company Name", pct: 97 },
    { name: "Revenue", pct: 84 },
    { name: "Deal Stage", pct: 91 },
    { name: "Contact Email", pct: 76 },
  ];

  // Build donut arcs
  let offset = 0;
  const circumference = 2 * Math.PI * 36;
  const arcs = segments.map((s) => {
    const dash = (s.pct / 100) * circumference;
    const gap = circumference - dash;
    const arc = { dash, gap, offset, color: s.color };
    offset += dash;
    return arc;
  });

  return (
    <div className="flex gap-4 h-full min-h-[200px]">
      {/* Left: donut + score */}
      <div className="flex flex-col items-center justify-center gap-2 shrink-0">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
            {arcs.map((a, i) => (
              <circle
                key={i}
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke={a.color}
                strokeWidth="7"
                strokeDasharray={`${a.dash} ${a.gap}`}
                strokeDashoffset={-a.offset}
                strokeLinecap="round"
                opacity="0.85"
              />
            ))}
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
            83%
          </span>
        </div>
        <span className="text-[10px] text-gray-500 text-center leading-tight">
          Overall Health
        </span>
      </div>

      {/* Right: stats + field list */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Stat cards row */}
        <div className="flex gap-2">
          <div className="glass rounded-lg px-3 py-2 flex-1">
            <p className="text-[9px] text-gray-500 uppercase tracking-wider">Pipeline</p>
            <p className="text-white font-bold text-sm">$1,215M</p>
          </div>
          <div className="glass rounded-lg px-3 py-2 flex-1">
            <p className="text-[9px] text-gray-500 uppercase tracking-wider">Forecast</p>
            <p className="text-brand-orange font-bold text-sm">$892M</p>
          </div>
        </div>

        {/* Field fill rates */}
        <div className="flex flex-col gap-1.5 mt-1">
          {fields.map((f) => (
            <div key={f.name} className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 w-20 truncate">{f.name}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${f.pct}%`,
                    background:
                      f.pct > 90
                        ? "var(--status-green)"
                        : f.pct > 80
                          ? "var(--color-brand-orange)"
                          : "var(--color-brand-red)",
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-500 w-7 text-right">{f.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
