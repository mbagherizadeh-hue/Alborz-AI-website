import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { references, statistics } from "@/data/references";

export const metadata: Metadata = { title: "منابع و مستندات", description: "منابع آمار صنایع استان البرز، گزارش‌های تولید هوشمند و مطالعات موردی بین‌المللی با تاریخ و لینک مستقیم." };

export default function References() {
  const groups = Array.from(new Set(references.map((r) => r.group)));
  return (
    <>
      <PageHeader title="منابع و مستندات" eyebrow="شفافیت منابع" sub="آمارهای استانی با تاریخ، عنوان منبع و لینک مستقیم درج شده‌اند. آخرین بازبینی لینک‌ها: ۲۸ آبان ۱۴۰۵ (۱۹ نوامبر ۲۰۲۶)." />
      <div className="container-page space-y-10 py-10">
        <section><h2 className="mb-4 text-xl font-bold">آمارهای استفاده‌شده در سایت</h2>
          <div className="table-wrap"><table><thead><tr><th>آمار</th><th>منبع</th><th>تاریخ</th></tr></thead><tbody>
            {statistics.map((s) => <tr key={s.id}><td>{s.prefix} {s.value} {s.unit}</td><td><a className="inline-flex items-center gap-1 text-brand-700 hover:underline" href={s.url} target="_blank" rel="noopener noreferrer">{s.source}<ExternalLink size={12} /></a></td><td>{s.date}</td></tr>)}
          </tbody></table></div></section>
        {groups.map((g) => (
          <section key={g}><h2 className="mb-3 text-xl font-bold">{g}</h2>
            <ul className="space-y-3">{references.filter((r) => r.group === g).map((r) => (
              <li key={r.url} className="card !p-4"><p className="font-semibold" dir="auto">{r.title}</p><p className="text-sm text-gray-600">{r.publisher} · {r.date}</p>{r.note && <p className="text-xs text-gray-500">{r.note}</p>}
                <a className="mt-2 inline-flex items-center gap-1 break-all text-sm text-brand-700 hover:underline" href={r.url} target="_blank" rel="noopener noreferrer" dir="ltr">{r.url}<ExternalLink size={12} /></a></li>
            ))}</ul></section>
        ))}
      </div>
    </>
  );
}
