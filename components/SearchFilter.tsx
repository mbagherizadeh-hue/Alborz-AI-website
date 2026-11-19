"use client";
import { Search, RotateCcw } from "lucide-react";

export type FilterSelect = { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] };

export default function SearchFilter({ query, onQuery, placeholder, selects, shown, total, unit, onReset }: {
  query: string; onQuery: (v: string) => void; placeholder: string; selects: FilterSelect[]; shown: number; total: number; unit: string; onReset: () => void;
}) {
  return (
    <div className="card no-print sticky top-[4.25rem] z-30 mb-8 !p-4">
      <div className="grid gap-3 md:grid-cols-12">
        <label className="relative md:col-span-12 lg:col-span-4">
          <span className="sr-only">جست‌وجو</span>
          <Search size={18} className="pointer-events-none absolute right-3 top-3 text-gray-400" />
          <input className="field pr-10" value={query} onChange={(e) => onQuery(e.target.value)} placeholder={placeholder} type="search" />
        </label>
        {selects.map((s) => (
          <label key={s.label} className="md:col-span-4 lg:col-span-2">
            <span className="sr-only">{s.label}</span>
            <select className="field" value={s.value} onChange={(e) => s.onChange(e.target.value)} aria-label={s.label}>
              <option value="">{s.label}: همه</option>
              {s.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
        <p aria-live="polite"><strong className="text-navy-900">{shown.toLocaleString("fa-IR")}</strong> {unit} از {total.toLocaleString("fa-IR")} {unit} نمایش داده می‌شود</p>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-1 text-brand-700 hover:underline"><RotateCcw size={14} />پاک‌کردن فیلترها</button>
      </div>
    </div>
  );
}
