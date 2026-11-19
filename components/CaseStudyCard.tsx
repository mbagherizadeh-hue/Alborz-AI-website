import { ExternalLink, BarChart3, ScanEye, Wrench, Globe2, BookOpen } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

const icons = { chart: BarChart3, eye: ScanEye, wrench: Wrench, globe: Globe2, book: BookOpen };

export default function CaseStudyCard({ cs, compact = false }: { cs: CaseStudy; compact?: boolean }) {
  const Icon = icons[cs.icon];
  return (
    <article className="card flex h-full flex-col" id={cs.id}>
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-navy-800 p-4 text-white" role="img" aria-label="تصویر نمادین (غیرمربوط به کارخانه خاص)">
        <Icon size={32} className="text-brand-200" />
        <div><p className="font-bold">{cs.company}</p><p className="text-xs text-gray-300">{cs.country} · {cs.industry}</p></div>
      </div>
      <p className="text-xs text-gray-500">تاریخ منبع: {cs.date}</p>
      {!compact && (<>
        <h3 className="mt-3 text-sm font-bold">مسئله اولیه</h3><p className="text-sm leading-7 text-gray-700">{cs.problem}</p>
        <h3 className="mt-3 text-sm font-bold">راهکار هوش مصنوعی</h3><p className="text-sm leading-7 text-gray-700">{cs.solution}</p>
        <h3 className="mt-3 text-sm font-bold">فناوری یا کاربرد اصلی</h3><p className="text-sm leading-7 text-gray-700">{cs.tech}</p>
      </>)}
      <h3 className="mt-3 text-sm font-bold">نتیجه گزارش‌شده</h3>
      <ul className="list-disc space-y-1 pe-5 text-sm leading-7 text-gray-700">{cs.results.map((r) => <li key={r}>{r}</li>)}</ul>
      {cs.sub && !compact && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {cs.sub.map((s) => (
            <div key={s.name} className="rounded-lg border border-gray-200 p-3 text-sm">
              <p className="font-semibold">{s.name}</p><p className="text-xs text-gray-500">{s.place} · {s.industry}</p>
              <ul className="mt-2 list-disc space-y-0.5 pe-4 text-xs leading-6 text-gray-700">{s.results.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      {!compact && <><h3 className="mt-3 text-sm font-bold">ارتباط با پروژه‌های پیشنهادی در البرز</h3><p className="text-sm leading-7 text-gray-700">{cs.relation}</p></>}
      <p className="supp mt-4 !text-xs">این نتایج متعلق به همین شرکت‌هاست، پروژه ارائه‌دهنده این طرح نیست و تضمینی برای تکرار همین نتایج در صنایع البرز نمی‌دهد.</p>
      <a href={cs.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 !py-2 !text-xs" dir="ltr"><ExternalLink size={14} />{cs.sourceTitle}</a>
    </article>
  );
}
