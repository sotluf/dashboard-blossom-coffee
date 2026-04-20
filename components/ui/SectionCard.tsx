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
    <>
      <SectionCard title="Weekly revenue">
        <div />
      </SectionCard>
      <SectionCard title="Top drinks">
        <div />
      </SectionCard>
      <SectionCard title="Busy hours">
        <div />
      </SectionCard>
      <SectionCard title="Recent orders">
        <div />
      </SectionCard>
    </>
  );
}
