import HourlyChart from "../charts/HourlyChart";
import RevenueChart from "../charts/RevenueChart";
import TopDrinkChart from "../charts/TopDrinkChart";
import OrdersTable from "../dashboard/OrdersTable";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div
      className="flex-1 rounded-2xl px-5 py-4 bg-cafe-bg"
      style={{ boxShadow: "var(--shadow-neu-raised)" }}
    >
      <p className="text-xs text-cafe-brown-light uppercase tracking-widest mb-4">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function Sections() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SectionCard title="Weekly revenue">
        <RevenueChart />
      </SectionCard>
      <SectionCard title="Top drinks">
        <TopDrinkChart />
      </SectionCard>
      <SectionCard title="Busy hours">
        <HourlyChart />
      </SectionCard>
      <SectionCard title="Recent orders">
        <OrdersTable />
      </SectionCard>
    </div>
  );
}
