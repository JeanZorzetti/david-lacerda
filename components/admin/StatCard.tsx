interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  accent?: string;
}

export default function StatCard({ icon, label, value, sub, accent = "#6b538d" }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e7e8e9] shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: accent + "20" }}>
          <span
            className="material-symbols-outlined text-xl"
            style={{ color: accent, fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            {icon}
          </span>
        </div>
        <p className="text-sm text-[#4a454e] font-medium">{label}</p>
      </div>
      <p className="text-3xl font-extrabold text-[#28113e]" style={{ fontFamily: "var(--font-headline)" }}>
        {value}
      </p>
      {sub && <p className="text-xs text-[#7c757e] mt-1">{sub}</p>}
    </div>
  );
}
