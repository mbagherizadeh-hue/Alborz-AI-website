"use client";
import { useMemo, useState } from "react";
import { courses, courseCategories, courseHoursOptions, courseAudienceOptions, courseFieldOptions } from "@/data/courses";
import SearchFilter from "./SearchFilter";
import CourseCard from "./CourseCard";

const norm = (s: string) => s.replace(/ي/g, "ی").replace(/ك/g, "ک").toLowerCase();

export default function CourseExplorer() {
  const [q, setQ] = useState(""); const [hours, setHours] = useState(""); const [aud, setAud] = useState(""); const [field, setField] = useState(""); const [cat, setCat] = useState("");
  const list = useMemo(() => courses.filter((c) =>
    (!q || norm(`${c.title} ${c.audience} ${c.outcome} ${c.outcomeExtra ?? ""} ${c.field}`).includes(norm(q))) &&
    (!hours || c.hours === Number(hours)) && (!aud || c.audienceGroup === aud) && (!field || c.field === field) && (!cat || c.category === cat)
  ), [q, hours, aud, field, cat]);
  const reset = () => { setQ(""); setHours(""); setAud(""); setField(""); setCat(""); };
  return (
    <>
      <SearchFilter query={q} onQuery={setQ} placeholder="جست‌وجوی عنوان، مخاطب یا دستاورد دوره…" shown={list.length} total={courses.length} unit="دوره" onReset={reset}
        selects={[
          { label: "مدت", value: hours, onChange: setHours, options: courseHoursOptions.map((h) => ({ value: String(h), label: `${h.toLocaleString("fa-IR")} ساعت` })) },
          { label: "مخاطب", value: aud, onChange: setAud, options: courseAudienceOptions.map((a) => ({ value: a, label: a })) },
          { label: "حوزه تخصصی", value: field, onChange: setField, options: courseFieldOptions.map((f) => ({ value: f, label: f })) },
          { label: "دسته‌بندی", value: cat, onChange: setCat, options: courseCategories.map((c) => ({ value: c.id, label: c.title })) },
        ]} />
      {list.length === 0 && <p className="card text-center text-gray-600">دوره‌ای با این فیلتر یافت نشد. فیلترها را پاک کنید یا <a className="text-brand-700 underline" href="/contact#course">دوره اختصاصی درخواست دهید</a>.</p>}
      {courseCategories.map((g) => {
        const items = list.filter((c) => c.category === g.id);
        if (!items.length) return null;
        return (
          <section key={g.id} className="mb-10" aria-labelledby={`g-${g.id}`}>
            <h2 id={`g-${g.id}`} className="mb-4 text-xl font-bold">{g.title} <span className="text-sm font-normal text-gray-500">({items.length.toLocaleString("fa-IR")} دوره)</span></h2>
            <div className="grid gap-4 md:grid-cols-2">{items.map((c) => <CourseCard key={c.id} course={c} />)}</div>
          </section>
        );
      })}
    </>
  );
}
