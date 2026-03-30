/** Mock bar chart with axis labels and trend line */
export default function MockChart() {
  const bars = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 55 },
    { label: "Mar", value: 48 },
    { label: "Apr", value: 72 },
    { label: "May", value: 65 },
    { label: "Jun", value: 88 },
  ];

  const maxVal = 100;

  return (
    <div className="flex flex-col h-full min-h-[140px]">
      {/* Y-axis label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[9px] text-gray-500 uppercase tracking-wider">Revenue ($M)</span>
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-[10px] text-brand-orange font-medium">+32% YoY</span>
      </div>

      {/* Chart area */}
      <div className="flex-1 flex items-end gap-2 px-1">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex justify-center">
              <div
                className="w-full max-w-[28px] rounded-t-md transition-all duration-700"
                style={{
                  height: `${(bar.value / maxVal) * 100}%`,
                  minHeight: "8px",
                  background: "var(--bar-gradient)",
                }}
              />
            </div>
            <span className="text-[9px] text-gray-500">{bar.label}</span>
          </div>
        ))}
      </div>

      {/* X-axis line */}
      <div className="h-px bg-white/10 mt-1" />
    </div>
  );
}
