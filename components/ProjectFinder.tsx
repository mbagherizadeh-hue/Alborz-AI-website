"use client";
import { useState } from "react";
import Link from "next/link";
import { industries, projectsForIndustry } from "@/data/industries";
import { projectCategories } from "@/data/projects";
import { courses } from "@/data/courses";
import { Search } from "lucide-react";

export default function ProjectFinder() {
  const [slug, setSlug] = useState("");
  const ind = industries.find((i) => i.slug === slug);
  const list = slug ? projectsForIndustry(slug) : [];
  const cats = projectCategories.filter((c) => list.some((p) => p.categoryId === c.id));
  return (
    <div className="card">
      <label className="label" htmlFor="finder-ind">صنعت خود را انتخاب کنید</label>
      <select id="finder-ind" className="field max-w-md" value={slug} onChange={(e) => setSlug(e.target.value)}>
        <option value="">انتخاب صنعت…</option>
        {industries.map((i) => <option key={i.slug} value={i.slug}>{i.name}</option>)}
      </select>
      {!ind && <p className="mt-4 flex items-center gap-2 text-sm text-gray-500"><Search size={16} />پس از انتخاب صنعت، پروژه‌ها و دوره‌های مرتبط نمایش داده می‌شوند.</p>}
      {ind && (
        <div className="mt-6" aria-live="polite">
          <p className="mb-1 text-sm text-gray-700"><strong>{ind.name}:</strong> {ind.proposalUse}</p>
          <p className="mb-4 text-sm"><strong>{list.length.toLocaleString("fa-IR")}</strong> پروژه پیشنهادی در {cats.length.toLocaleString("fa-IR")} حوزه برای این صنعت یافت شد.</p>
          <div className="space-y-4">
            {cats.map((c) => (
              <div key={c.id}>
                <h3 className="mb-2 text-sm font-bold text-brand-700">{c.title}{c.developmental && " (توسعه‌ای — نیازمند امکان‌سنجی)"}</h3>
                <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
                  {list.filter((p) => p.categoryId === c.id).map((p) => <li key={p.id}><Link className="hover:text-brand-700 hover:underline" href={`/projects/${p.id}`}>• {p.title}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-gray-50 p-3 text-sm"><strong>دوره‌های مرتبط: </strong>{ind.courseIds.map((id, i) => <span key={id}>{i > 0 && "، "}<Link className="text-brand-700 hover:underline" href={`/courses/${id}`}>{courses.find((c) => c.id === id)?.title}</Link></span>)}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href={`/contact?subject=${ind.slug}#consulting`}>درخواست مشاوره برای صنعت {ind.name}</Link>
            <Link className="btn-outline" href={`/industries#${ind.slug}`}>جزئیات صنعت</Link>
          </div>
        </div>
      )}
    </div>
  );
}
