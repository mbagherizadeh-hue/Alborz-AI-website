import SectionTitle from "./SectionTitle";
export default function PageHeader({ title, sub, eyebrow }: { title: string; sub?: string; eyebrow?: string }) {
  return (
    <div className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="container-page pb-6 pt-12"><SectionTitle as="h1" title={title} sub={sub} eyebrow={eyebrow} /></div>
    </div>
  );
}
