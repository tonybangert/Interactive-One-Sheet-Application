/** Mock chat / content-generation UI with sidebar nav + greeting */
export default function MockChat() {
  const navItems = ["Campaigns", "Briefs", "Templates", "Analytics"];

  return (
    <div className="flex h-full min-h-[160px] gap-0 overflow-hidden rounded-lg">
      {/* Sidebar */}
      <div className="w-24 shrink-0 bg-white/[0.02] border-r border-white/5 p-2 flex flex-col gap-1">
        {navItems.map((item, i) => (
          <div
            key={item}
            className={`text-[10px] px-2 py-1.5 rounded-md truncate ${
              i === 0
                ? "bg-brand-orange/15 text-brand-orange font-medium"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 p-3 flex flex-col gap-3">
        <div>
          <p className="text-white font-semibold text-sm">Good morning</p>
          <p className="text-gray-500 text-[10px] mt-0.5">
            What would you like to create today?
          </p>
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap gap-1.5">
          {["Campaign Brief", "Social Post", "Email Sequence", "Landing Page"].map(
            (action) => (
              <button
                key={action}
                className="glass rounded-full px-3 py-1 text-[10px] text-gray-300 hover:text-white hover:border-brand-orange/30 transition-colors"
              >
                {action}
              </button>
            ),
          )}
        </div>

        {/* Sample output bubble */}
        <div className="glass rounded-lg p-2 mt-auto">
          <div className="flex gap-2 items-start">
            <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
              <span className="text-[9px] text-brand-orange font-bold">AI</span>
            </div>
            <div className="text-[10px] text-gray-400 leading-relaxed">
              Here's a draft for your Q3 product launch campaign targeting enterprise CFOs...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
