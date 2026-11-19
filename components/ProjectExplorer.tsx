"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects, projectCategories, tagLabels, projectIndustryOptions, type ProjectTag } from "@/data/projects";
import SearchFilter from "./SearchFilter";
import ProjectCard from "./ProjectCard";
import { AlertTriangle, Wrench } from "lucide-react";

const norm = (s: string) => s.replace(/ي/g, "ی").replace(/ك/g, "ک").toLowerCase();

export default function ProjectExplorer() {
  const sp = useSearchParams();
  const [q, setQ] = useState(""); const [ind, setInd] = useState(sp.get("industry") ?? "");
  const [cat, setCat] = useState(sp.get("category") ?? ""); const [tag, setTag] = useState(sp.get("tag") ?? "");
  const catMap = useMemo(() => Object.fromEntries(projectCategories.map((c) => [c.id, c])), []);
  const list = useMemo(() => projects.filter((p) => {
    const c = catMap[p.categoryId];
    return (!q || norm(`${p.title} ${p.description}`).includes(norm(q))) &&
      (!ind || c.industries.includes(ind) || c.industries.includes("همه صنایع")) &&
      (!cat || p.categoryId === cat) && (!tag || p.tags.includes(tag as ProjectTag));
  }), [q, ind, cat, tag, catMap]);
  const reset = () => { setQ(""); setInd(""); setCat(""); setTag(""); };
  return (
    <>
      <SearchFilter query={q} onQuery={setQ} placeholder="جست‌وجوی عنوان یا شرح پروژه…" shown={list.length} total={projects.length} unit="پروژه" onReset={reset}
        selects={[
          { label: "صنعت", value: ind, onChange: setInd, options: projectIndustryOptions.map((i) => ({ value: i, label: i })) },
          { label: "حوزه کاربرد", value: cat, onChange: setCat, options: projectCategories.map((c) => ({ value: c.id, label: c.title })) },
          { label: "نوع پروژه", value: tag, onChange: setTag, options: (Object.keys(tagLabels) as ProjectTag[]).map((t) => ({ value: t, label: tagLabels[t] })) },
        ]} />
      {list.length === 0 && <p className="card text-center text-gray-600">پروژه‌ای با این فیلتر یافت نشد. می‌توانید <a className="text-brand-700 underline" href="/contact#consulting">مشاوره و نیازسنجی</a> درخواست دهید.</p>}
      {projectCategories.map((g) => {
        const items = list.filter((p) => p.categoryId === g.id);
        if (!items.length) return null;
        return (
          <section key={g.id} className="mb-12" aria-labelledby={`pg-${g.id}`} id={g.id}>
            <h2 id={`pg-${g.id}`} className="text-xl font-bold">{g.order.toLocaleString("fa-IR")}. {g.title} <span className="text-sm font-normal text-gray-500">({items.length.toLocaleString("fa-IR")} پروژه)</span></h2>
            <div className="my-3 space-y-2 text-sm leading-7 text-gray-700">
              {g.intro && <p>{g.intro}</p>}
              {g.note && <p className="rounded-lg bg-brand-50 p-3 text-brand-700">{g.note}</p>}
              {g.developmental && <p className="flex gap-2 rounded-lg bg-amber-50 p-3 text-amber-900 ring-1 ring-amber-200"><AlertTriangle size={18} className="mt-1 shrink-0" />«پروژه‌های توسعه‌ای و نیازمند امکان‌سنجی و همکاری تخصصی» — خدمت آماده و قطعی نیستند.</p>}
              {g.specialist && <p className="flex gap-2 text-gray-600"><Wrench size={16} className="mt-1 shrink-0" />{g.specialist}</p>}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
            {g.example && <p className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7"><strong>مثال از پروپوزال: </strong>{g.example}</p>}
          </section>
        );
      })}
    </>
  );
}
