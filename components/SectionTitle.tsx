export default function SectionTitle({ title, sub, eyebrow, as: Tag = "h2" }: { title: string; sub?: string; eyebrow?: string; as?: "h1" | "h2" | "h3" }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="mb-2 text-sm font-semibold text-brand-600">{eyebrow}</p>}
      <Tag className="text-2xl font-bold leading-snug text-navy-900 sm:text-3xl">{title}</Tag>
      <div className="mt-3 h-1 w-14 rounded bg-brand-600" />
      {sub && <p className="mt-4 max-w-3xl leading-8 text-gray-600">{sub}</p>}
    </div>
  );
}
