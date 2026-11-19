import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { courses, getCourse, courseCategories } from "@/data/courses";
import { projects } from "@/data/projects";

export function generateStaticParams() { return courses.map((c) => ({ id: String(c.id) })); }
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const c = getCourse(Number(params.id));
  return c ? { title: c.title, description: `${c.title} — ${c.hours} ساعت، مخاطبان: ${c.audience}. ${c.outcome}` } : {};
}

export default function CourseDetail({ params }: { params: { id: string } }) {
  const c = getCourse(Number(params.id));
  if (!c) notFound();
  const cat = courseCategories.find((x) => x.id === c.category)!;
  const related = projects.filter((p) => c.relatedProjectCategories.includes(p.categoryId)).slice(0, 8);
  return (
    <>
      <PageHeader title={c.title} eyebrow={`دوره ${c.id.toLocaleString("fa-IR")} · ${cat.title}`} />
      <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="table-wrap"><table><tbody>
            <tr><th className="w-44">مدت دوره</th><td>{c.hours.toLocaleString("fa-IR")} ساعت (پیشنهادی و قابل تغییر)</td></tr>
            <tr><th>مخاطبان</th><td>{c.audience}</td></tr>
            <tr><th>دستاورد و پروژه عملی</th><td>{c.outcome}{c.outcomeExtra && <><br />{c.outcomeExtra}</>}</td></tr>
            <tr><th>حوزه تخصصی</th><td>{c.field}</td></tr>
          </tbody></table></div>
          <p className="supp">مطلب تکمیلی: سرفصل‌های تفصیلی این دوره در پروپوزال نیامده است و پس از نیازسنجی آموزشی، متناسب با صنعت، سطح مخاطبان و داده‌های همان واحد تدوین می‌شود؛ تمرین نهایی همان دستاورد عملی بالاست.</p>
          <div><h2 className="mb-3 text-lg font-bold">پروژه‌های مرتبط با این دوره</h2>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm">{related.map((p) => <li key={p.id}><Link href={`/projects/${p.id}`} className="hover:text-brand-700 hover:underline">• {p.title}</Link></li>)}</ul></div>
        </div>
        <aside className="card h-fit"><p className="font-bold">درخواست برگزاری</p><p className="mt-2 text-sm leading-7 text-gray-600">برگزاری اختصاصی برای شرکت شما، با مثال‌های واقعی صنعت شما.</p>
          <Link href={`/contact?course=${c.id}#course`} className="btn-primary mt-4 w-full">درخواست برگزاری این دوره</Link>
          <Link href="/courses" className="btn-outline mt-2 w-full">بازگشت به همه دوره‌ها</Link></aside>
      </div>
    </>
  );
}
