"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface MrrChartProps {
  data: { month: string; mrr: number }[];
}

function formatCurrency(v: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 }).format(v);
}

export default function MrrChart({ data }: MrrChartProps) {
  if (data.length === 0) {
    return (
      <div className="h-56 flex items-center justify-center text-sm text-[#7c757e]">
        Sem dados de receita ainda.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 8 }}>
        <defs>
          <linearGradient id="mrrGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6b538d" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#6b538d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#7c757e" }} tickLine={false} axisLine={false} />
        <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 11, fill: "#7c757e" }} tickLine={false} axisLine={false} width={70} />
        <Tooltip formatter={(v) => [formatCurrency(Number(v)), "MRR"]} labelStyle={{ color: "#28113e", fontWeight: 600 }} contentStyle={{ borderRadius: 12, border: "1px solid #e7e8e9", fontSize: 12 }} />
        <Area type="monotone" dataKey="mrr" stroke="#6b538d" strokeWidth={2} fill="url(#mrrGradient)" dot={false} activeDot={{ r: 4, fill: "#6b538d" }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
