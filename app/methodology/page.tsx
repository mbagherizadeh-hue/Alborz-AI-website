import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { methodSteps, packages } from "@/data/proposal";

export const metadata: Metadata = { title: "روش اجرا و مدل همکاری", description: "مسیر ۹ مرحله‌ای همکاری با صنایع و سه مدل همکاری: بسته آموزشی، بسته مشاوره و نقشه راه، و بسته اجرای پروژه." };

export default function Methodology() {
  return (
    <>
      <PageHeader title="روش اجرا و مدل همکاری" eyebrow="مسیر اجرایی" sub="پروژه‌ها بر اساس مسائل واقعی هر شرکت انتخاب می‌شوند و اجرای آن‌ها مرحله‌ای، قابل ارزیابی و متناسب با ظرفیت همان مجموعه است." />
      <div className="container-page space-y-14 py-10">
        <section aria-labelledby="steps">
          <h2 id="steps" className="mb-6 text-xl font-bold">مسیر ۹ مرحله‌ای همکاری</h2>
          <ol className="relative space-y-4 border-s-2 border-brand-200 ps-6">
            {methodSteps.map((s) => (
              <li key={s.n} className="relative">
                <span className="absolute -start-[2.2rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{s.n.toLocaleString("fa-IR")}</span>
                <div className="card !p-4"><p className="text-xs text-brand-700">مرحله {s.n.toLocaleString("fa-IR")}</p><p className="font-semibold">{s.title}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section aria-labelledby="models">
          <h2 id="models" className="mb-6 text-xl font-bold">سه مدل همکاری</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.key} className="card flex flex-col"><span className="chip w-fit">{p.key}</span><h3 className="mt-3 text-lg font-bold">{p.title}</h3><p className="mt-2 text-sm leading-8 text-gray-700">{p.text}</p>
                <Link href={`/contact#${p.form}`} className="btn-primary mt-auto !py-2 !mt-6">درخواست این بسته</Link></div>
            ))}
          </div>
          <p className="supp mt-6">قیمت ثابتی ارائه نشده است. هزینه هر همکاری پس از مشخص‌شدن دامنه کار و مذاکره با کارفرما تعیین می‌شود. این سه محور مستقل یا یکپارچه قابل ارائه‌اند.</p>
        </section>
      </div>
    </>
  );
}
