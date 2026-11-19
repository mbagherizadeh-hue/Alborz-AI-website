import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProjectFinder from "@/components/ProjectFinder";
import { industries, projectsForIndustry } from "@/data/industries";
import { courses } from "@/data/courses";
import { caseStudies } from "@/data/caseStudies";
import { proposal } from "@/data/proposal";

export const metadata: Metadata = { title: "صنایع هدف و کاربردهای تخصصی هوش مصنوعی", description: "کاربردهای هوش مصنوعی در صنایع دارویی، غذایی، تجهیزات پزشکی، شیمیایی، قطعه‌سازی، فلزی، نساجی، بسته‌بندی، بازرگانی و واحدهای اداری استان البرز." };

export default function IndustriesPage() {
  return (
    <>
      <PageHeader title="صنایع هدف و کاربردهای تخصصی" eyebrow="۱۰ حوزه صنعتی" sub={proposal.targetIntro + " " + proposal.targetAfter} />
      <div className="container-page space-y-10 py-10">
        <section><h2 className="mb-4 text-xl font-bold">پروژه مناسب صنعت من چیست؟</h2><ProjectFinder /></section>
        {industries.map((ind) => {
          const ps = projectsForIndustry(ind.slug);
          return (
            <section key={ind.slug} id={ind.slug} className="card scroll-mt-24">
              <h2 className="text-2xl font-bold">{ind.name} {ind.priority && <span className="chip align-middle">اولویت اولیه اجرا</span>}</h2>
              <p className="mt-3 leading-8 text-gray-700"><strong>زمینه‌های پیشنهادی (پروپوزال): </strong>{ind.proposalUse}</p>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div><h3 className="mb-2 font-bold">چالش‌های متداول</h3><ul className="list-disc space-y-1 pe-5 text-sm leading-7 text-gray-700">{ind.challenges.map((c) => <li key={c}>{c}</li>)}</ul></div>
                <div><h3 className="mb-2 font-bold">کاربردهای هوش مصنوعی</h3><ul className="list-disc space-y-1 pe-5 text-sm leading-7 text-gray-700">{ind.applications.map((c) => <li key={c}>{c}</li>)}</ul></div>
                <div><h3 className="mb-2 font-bold">دوره‌های آموزشی مرتبط</h3><ul className="space-y-1 text-sm">{ind.courseIds.map((id) => <li key={id}><Link className="text-brand-700 hover:underline" href={`/courses/${id}`}>• {courses.find((c) => c.id === id)?.title}</Link></li>)}</ul></div>
                <div><h3 className="mb-2 font-bold">نمونه کاربرد خارجی مرتبط</h3><ul className="space-y-1 text-sm">{ind.caseIds.map((id) => { const cs = caseStudies.find((c) => c.id === id)!; return <li key={id}><Link className="text-brand-700 hover:underline" href={`/case-studies#${id}`}>• {cs.company}</Link></li>; })}</ul></div>
              </div>
              <details className="mt-5"><summary className="cursor-pointer font-bold">پروژه‌های قابل تعریف ({ps.length.toLocaleString("fa-IR")} مورد)</summary>
                <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">{ps.map((p) => <li key={p.id}><Link className="hover:text-brand-700 hover:underline" href={`/projects/${p.id}`}>• {p.title}</Link></li>)}</ul></details>
              <div className="supp mt-5"><strong>پیشنهاد شروع همکاری (تکمیلی): </strong>{ind.start}</div>
              <Link href="/contact#consulting" className="btn-primary mt-4">درخواست مشاوره برای این صنعت</Link>
            </section>
          );
        })}
      </div>
    </>
  );
}
