import KpiCards from "@/components/ui/KpiCard";
import Sections from "@/components/ui/SectionCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <KpiCards />
      <Sections />
    </div>
  );
}
