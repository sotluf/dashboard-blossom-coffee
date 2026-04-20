import Image from "next/image";
import KpiCards from "@/components/ui/KpiCard";
import "./globals.css";
import Sections from "@/components/ui/SectionCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <KpiCards />
      <Sections />
    </div>
  );
}
