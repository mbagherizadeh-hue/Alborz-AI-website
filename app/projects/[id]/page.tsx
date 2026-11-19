import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { projects, getProject, getCategory, tagLabels } from "@/data/projects";
import { courses } from "@/data/courses";
import { AlertTriangle, Wrench } from "lucide-react";

export function generateStaticParams() { return projects.map((p) => ({ id: p.id })); }
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const p = getProject(params.id);
  return p ? { title: p.title, description: `${p.title}: ${p.description}` } : {};
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const p = getProject(params.id);
  if (!p) notFound();
  const cat = getCategory(p.categoryId);
  const rel = (p.relatedIds ?? []).map((id) => getProject(id)!).filter(Boolean);
  const crs = cat.courseIds.map((id) => courses.find((c) => c.id === id)!).filter(Boolean);
  return (
    <>
      <PageHeader title={p.title} eyebrow={`${cat.order.toLocaleString("fa-IR")}. ${cat.title}`} />
      <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="chip">{tagLabels[t]}</span>)}{p.relatedLabel && <span className="chip-gray">{p.relatedLabel}</span>}</div>
          {cat.developmental && <p className="flex gap-2 rounded-lg bg-amber-50 p-4 text-sm leading-7 text-amber-900 ring-1 ring-amber-200"><AlertTriangle size={18} className="mt-1 shrink-0" />این مورد جزو «پروژه‌های توسعه‌ای و نیازمند امکان‌سنجی و همکاری تخصصی» است و خدمت آماده و قطعی نیست.</p>}
          <div className="table-wrap"><table><tbody>
            <tr><th className="w-48">عنوان پروژه</th><td>{p.title}</td></tr>
            <tr><th>شرح و خروجی (پروپوزال)</th><td>{p.description}</td></tr>
          </tbody></table></div>
          <h2 className="text-lg font-bold">اطلاعات تکمیلی حوزه <span className="chip-gray me-2 align-middle">تکمیلی</span></h2>
          <div className="table-wrap"><table><tbody>
            <tr><th className="w-48">مسئله‌ای که حل می‌کند</th><td>{cat.problem}</td></tr>
            <tr><th>داده‌های موردنیاز</th><td>{cat.data}</td></tr>
            <tr><th>فناوری‌های احتمالی</th><td>{cat.tech}</td></tr>
            <tr><th>خروجی قابل تحویل</th><td>{p.description}</td></tr>
            <tr><th>صنایع مناسب</th><td>{cat.industries.join("، ")}</td></tr>
            <tr><th>شرایط و پیش‌نیازهای اجرا</th><td>{cat.prerequisites}</td></tr>
          </tbody></table></div>
          {cat.specialist && <p className="flex gap-2 text-sm leading-7 text-gray-700"><Wrench size={16} className="mt-1 shrink-0" />{cat.specialist}</p>}
          {cat.note && <p className="rounded-lg bg-brand-50 p-3 text-sm leading-7 text-brand-700">{cat.note}</p>}
          {cat.example && <p className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7"><strong>مثال از پروپوزال: </strong>{cat.example}</p>}
          {rel.length > 0 && <div><h2 className="mb-2 text-lg font-bold">موضوع مرتبط / حوزه مکمل</h2><ul className="space-y-1 text-sm">{rel.map((r) => <li key={r.id}><Link className="text-brand-700 hover:underline" href={`/projects/${r.id}`}>• {r.title}</Link> <span className="text-gray-500">({getCategory(r.categoryId).title})</span></li>)}</ul></div>}
          <div><h2 className="mb-2 text-lg font-bold">دوره‌های آموزشی مرتبط</h2><ul className="grid gap-1 text-sm sm:grid-cols-2">{crs.map((c) => <li key={c.id}><Link className="text-brand-700 hover:underline" href={`/courses/${c.id}`}>• {c.title}</Link></li>)}</ul></div>
        </div>
        <aside className="card h-fit"><p className="font-bold">درخواست بررسی</p><p className="mt-2 text-sm leading-7 text-gray-600">انتخاب پروژه پس از بررسی نیاز، دسترسی به داده‌ها، زیرساخت و توجیه اقتصادی انجام می‌شود.</p>
          <Link href={`/contact?project=${p.id}#project`} className="btn-primary mt-4 w-full">درخواست بررسی و امکان‌سنجی</Link>
          <Link href={`/contact?project=${p.id}#consulting`} className="btn-outline mt-2 w-full">درخواست مشاوره درباره این پروژه</Link>
          <Link href={`/projects#${cat.id}`} className="btn-outline mt-2 w-full">بازگشت به این حوزه</Link></aside>
      </div>
    </>
  );
}
