/** Mock kanban board with 3 columns and deal cards */
export default function MockKanban() {
  const columns = [
    {
      label: "Leads",
      color: "#5bb8f5",
      cards: [
        { name: "Acme Corp", value: "$120K" },
        { name: "Nova Inc", value: "$85K" },
      ],
    },
    {
      label: "Discovery",
      color: "#faa840",
      cards: [
        { name: "Bolt Systems", value: "$340K" },
        { name: "Orbit Labs", value: "$210K" },
      ],
    },
    {
      label: "Proposal",
      color: "#22c55e",
      cards: [
        { name: "Stellar AI", value: "$520K" },
        { name: "Apex Global", value: "$180K" },
      ],
    },
  ];

  return (
    <div className="flex gap-2 h-full min-h-[160px]">
      {columns.map((col) => (
        <div key={col.label} className="flex-1 flex flex-col gap-1.5">
          {/* Column header */}
          <div className="flex items-center gap-1.5 mb-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: col.color }}
            />
            <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-wide">
              {col.label}
            </span>
            <span className="text-[9px] text-gray-500 ml-auto">{col.cards.length}</span>
          </div>

          {/* Cards */}
          {col.cards.map((card) => (
            <div
              key={card.name}
              className="glass rounded-lg px-2.5 py-2 border-l-2"
              style={{ borderLeftColor: col.color }}
            >
              <p className="text-[11px] text-white font-medium truncate">
                {card.name}
              </p>
              <p className="text-[10px] text-gray-500">{card.value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
