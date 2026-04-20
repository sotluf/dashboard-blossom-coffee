import { KpiCardProps } from "@/types";
import { calcDelta, todayStats, weeklySales } from "@/data/mockData";

const today = weeklySales[weeklySales.length - 1];
const yesterday = weeklySales[weeklySales.length - 2];

export function KpiCard({ label, value, delta, deltaLabel }: KpiCardProps) {
  const isPositive = delta ? Number(delta) >= 0 : null;

  return (
    <div
      className="flex-1 rounded-2xl px-5 py-4 bg-cafe-bg"
      style={{ boxShadow: "var(--shadow-neu-raised)" }}
    >
      <p className="text-xs text-cafe-brown-light uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className="font-display text-2xl text-cafe-brown-dark mb-1">
        {value}
      </p>
      {deltaLabel ? (
        <p className="text-xs text-cafe-brown-light">{deltaLabel}</p> ) : delta && (
        <p
          className="text-xs"
          style={{ color: isPositive ? "var(--color-cafe-sage)" : "#c47a6a" }}
        >
          {isPositive ? `+${delta}%` : `${delta}%`} vs yesterday
        </p>
      )}
    </div>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <KpiCard
        label="Revenue today"
        value={`€ ${todayStats.revenue}`}
        delta={calcDelta(today.revenue, yesterday.revenue)}
      />
      <KpiCard
        label="Orders"
        value={String(todayStats.orders)}
        delta={calcDelta(today.orders, yesterday.orders)}
      />
      <KpiCard
        label="Avg check"
        value={`€ ${todayStats.avgCheck}`}
        delta={calcDelta(todayStats.avgCheck, (yesterday.revenue / yesterday.orders))}
      />
      <KpiCard
        label="Top item"
        value={todayStats.topItem.name}
        deltaLabel={`${todayStats.topItem.soldToday} sold today`}
      />
    </div>
  );
}