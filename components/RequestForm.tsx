"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Copy, CheckCircle2, AlertTriangle } from "lucide-react";
import { siteConfig, isPlaceholder } from "@/config/site";
import { getCourse, courses } from "@/data/courses";
import { getProject, projectCategories } from "@/data/projects";
import { industryNames } from "@/data/industries";

type Kind = "course" | "consulting" | "project";
type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "number" | "textarea" | "select"; required?: boolean; options?: string[]; hint?: string };

const industryOpts = [...industryNames, "سایر"];
const nameRole: Field[] = [{ name: "company", label: "نام شرکت", required: true }, { name: "contact", label: "نام و سمت", required: true }, { name: "phone", label: "شماره تماس", type: "tel", required: true }, { name: "email", label: "ایمیل", type: "email", required: true }, { name: "industry", label: "صنعت", type: "select", options: industryOpts, required: true }];

const defs: Record<Kind, { title: string; subject: string; fields: Field[] }> = {
  course: { title: "فرم درخواست دوره آموزشی", subject: "درخواست برگزاری دوره آموزشی",
    fields: [...nameRole,
      { name: "courseTitle", label: "عنوان دوره موردنیاز", type: "select", options: [...courses.map((c) => `${c.title} (${c.hours} ساعت)`), "دوره اختصاصی / سایر"], required: true },
      { name: "count", label: "تعداد شرکت‌کنندگان", type: "number" },
      { name: "level", label: "مدت یا سطح دوره", type: "select", options: ["مقدماتی", "متوسط", "پیشرفته", "مطابق جدول پروپوزال", "نیاز به مشاوره"] },
      { name: "notes", label: "توضیحات تکمیلی", type: "textarea" }] },
  consulting: { title: "فرم درخواست مشاوره و نیازسنجی", subject: "درخواست مشاوره و نیازسنجی هوش مصنوعی",
    fields: [{ name: "company", label: "نام شرکت", required: true }, { name: "contact", label: "نام و سمت مدیر یا نماینده", required: true }, { name: "phone", label: "شماره تماس", type: "tel", required: true }, { name: "email", label: "ایمیل", type: "email", required: true }, { name: "industry", label: "صنعت", type: "select", options: industryOpts, required: true },
      { name: "problem", label: "مسئله یا چالش اصلی شرکت", type: "textarea", required: true },
      { name: "dataState", label: "وضعیت فعلی داده‌ها و سامانه‌ها", type: "textarea", hint: "مثلاً اکسل، ERP، MES، سامانه انبار…" },
      { name: "interests", label: "موضوعات موردعلاقه برای هوشمندسازی", type: "textarea" },
      { name: "notes", label: "توضیحات", type: "textarea" }] },
  project: { title: "فرم درخواست اجرای پروژه هوش مصنوعی", subject: "درخواست بررسی و اجرای پروژه هوش مصنوعی",
    fields: [...nameRole,
      { name: "area", label: "حوزه پروژه", type: "select", options: [...projectCategories.map((c) => c.title), "سایر / نیاز به مشاوره"], required: true },
      { name: "projectTitle", label: "پروژه موردنظر (اختیاری)" },
      { name: "problem", label: "شرح مسئله", type: "textarea", required: true },
      { name: "data", label: "داده‌های در دسترس", type: "textarea" },
      { name: "infra", label: "زیرساخت موجود", type: "textarea" },
      { name: "timeline", label: "زمان مورد انتظار" },
      { name: "notes", label: "توضیحات تکمیلی", type: "textarea" }] },
};

export default function RequestForm({ kind, id }: { kind: Kind; id: string }) {
  const sp = useSearchParams();
  const def = defs[kind];
  const initial = useMemo(() => {
    const v: Record<string, string> = {};
    const cid = sp.get("course"); const pid = sp.get("project");
    if (kind === "course" && cid) { const c = getCourse(Number(cid)); if (c) v.courseTitle = `${c.title} (${c.hours} ساعت)`; }
    if (kind === "project" && pid) { const p = getProject(pid); if (p) { v.projectTitle = p.title; const cat = projectCategories.find((x) => x.id === p.categoryId); if (cat) v.area = cat.title; } }
    if (kind === "consulting" && pid) { const p = getProject(pid); if (p) v.interests = p.title; }
    return v;
  }, [sp, kind]);
  const [vals, setVals] = useState<Record<string, string>>({});
  const get = (n: string) => vals[n] ?? initial[n] ?? "";
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const to = siteConfig.contact.email; const emailOk = !isPlaceholder(to);

  const buildSummary = () => `${def.subject}\n\n` + def.fields.map((f) => `${f.label}: ${get(f.name) || "—"}`).join("\n");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const s = buildSummary(); setSummary(s); setCopied(false); setStatus("idle");
    const ep = siteConfig.contact.formEndpoint;
    if (ep) {
      try {
        const body: Record<string, string> = { _subject: def.subject, kind };
        def.fields.forEach((f) => (body[f.name] = get(f.name)));
        const r = await fetch(ep, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body) });
        setStatus(r.ok ? "sent" : "error");
      } catch { setStatus("error"); }
    }
  }
  const mailto = summary ? `mailto:${to}?subject=${encodeURIComponent(def.subject)}&body=${encodeURIComponent(summary)}` : "#";

  return (
    <section id={id} className="card scroll-mt-24" aria-labelledby={`${id}-t`}>
      <h2 id={`${id}-t`} className="mb-4 text-xl font-bold">{def.title}</h2>
      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        {def.fields.map((f) => {
          const wide = f.type === "textarea" || f.name === "courseTitle" || f.name === "area";
          return (
            <div key={f.name} className={wide ? "sm:col-span-2" : ""}>
              <label className="label" htmlFor={`${id}-${f.name}`}>{f.label}{f.required && <span className="text-brand-600"> *</span>}</label>
              {f.type === "textarea" ? (
                <textarea id={`${id}-${f.name}`} className="field min-h-24" required={f.required} value={get(f.name)} onChange={(e) => setVals({ ...vals, [f.name]: e.target.value })} />
              ) : f.type === "select" ? (
                <select id={`${id}-${f.name}`} className="field" required={f.required} value={get(f.name)} onChange={(e) => setVals({ ...vals, [f.name]: e.target.value })}>
                  <option value="">انتخاب کنید…</option>{f.options!.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={`${id}-${f.name}`} className="field" type={f.type ?? "text"} required={f.required} dir={f.type === "email" || f.type === "tel" ? "ltr" : undefined} min={f.type === "number" ? 1 : undefined}
                  value={get(f.name)} onChange={(e) => setVals({ ...vals, [f.name]: e.target.value })} />
              )}
              {f.hint && <p className="mt-1 text-xs text-gray-500">{f.hint}</p>}
            </div>
          );
        })}
        <div className="sm:col-span-2"><button className="btn-primary" type="submit">ثبت و مشاهده خلاصه درخواست</button></div>
      </form>
      {summary && (
        <div className="mt-6 rounded-lg border border-brand-200 bg-brand-50/50 p-4" role="status">
          <p className="mb-2 flex items-center gap-2 font-semibold"><CheckCircle2 size={18} className="text-brand-600" />خلاصه درخواست شما</p>
          <pre className="whitespace-pre-wrap break-words text-sm leading-7 font-sans">{summary}</pre>
          <div className="mt-4 flex flex-wrap gap-2">
            {emailOk ? <a className="btn-primary !py-2" href={mailto}><Mail size={16} />ارسال با ایمیل</a> : <span className="chip-warn"><AlertTriangle size={13} className="ms-1" />ایمیل مقصد هنوز در config/site.ts تنظیم نشده است</span>}
            <button type="button" className="btn-outline !py-2" onClick={() => { navigator.clipboard?.writeText(summary); setCopied(true); }}><Copy size={16} />{copied ? "کپی شد" : "کپی خلاصه"}</button>
          </div>
          {status === "sent" && <p className="mt-3 text-sm text-green-700">درخواست به سرویس فرم ارسال شد.</p>}
          {status === "error" && <p className="mt-3 text-sm text-red-700">ارسال به سرویس فرم ناموفق بود؛ از ایمیل یا کپی خلاصه استفاده کنید.</p>}
          <p className="mt-3 text-xs text-gray-600">توجه: این وب‌سایت سرور ندارد و اطلاعات فرم در هیچ پایگاه داده‌ای ذخیره نمی‌شود؛ درخواست فقط با ارسال ایمیل شما (یا سرویس فرم متصل‌شده) به مقصد می‌رسد.</p>
        </div>
      )}
    </section>
  );
}
