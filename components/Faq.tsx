import { faqs } from "@/data/proposal";
export default function Faq() {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="card group !p-0">
          <summary className="cursor-pointer list-none p-4 font-semibold marker:hidden">{f.q}</summary>
          <p className="border-t border-gray-100 p-4 text-sm leading-8 text-gray-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
