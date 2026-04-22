const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  PENDING: { label: "Pendente", bg: "bg-yellow-50", text: "text-yellow-700" },
  RECEIVED: { label: "Recebido", bg: "bg-green-50", text: "text-green-700" },
  CONFIRMED: { label: "Confirmado", bg: "bg-green-50", text: "text-green-700" },
  OVERDUE: { label: "Vencido", bg: "bg-red-50", text: "text-red-700" },
  REFUNDED: { label: "Reembolsado", bg: "bg-gray-50", text: "text-gray-600" },
  ACTIVE: { label: "Ativo", bg: "bg-green-50", text: "text-green-700" },
  INACTIVE: { label: "Inativo", bg: "bg-gray-50", text: "text-gray-600" },
  EXPIRED: { label: "Expirado", bg: "bg-red-50", text: "text-red-700" },
};

export default function AsaasStatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? { label: status, bg: "bg-gray-50", text: "text-gray-600" };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
      {cfg.label}
    </span>
  );
}
