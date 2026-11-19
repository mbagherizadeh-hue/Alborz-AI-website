import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "درباره ارائه‌دهنده طرح — دکتر مهدی باقری‌زاده", description: "دکتر مهدی باقری‌زاده، عضو هیئت علمی گروه مهندسی کامپیوتر دانشگاه آزاد اسلامی واحد کرج؛ متخصص هوش مصنوعی، یادگیری ماشین و فناوری و نوآوری." };

export default function About() {
  const p = siteConfig.presenter;
  return (
    <>
      <PageHeader title="درباره ارائه‌دهنده طرح" eyebrow="معرفی" />
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm text-gray-500">
          {p.photo ? <img src={p.photo} alt={p.name} className="h-full w-full rounded-xl object-cover" /> : <span>فضای تصویر پرتره رسمی<br />(فایل را در public/images قرار دهید و مسیر را در config/site.ts وارد کنید)</span>}
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold">{p.name}</h2>
          <dl className="mt-4 space-y-2 leading-8">
            <div><dt className="inline font-semibold">سمت: </dt><dd className="inline">{p.role}</dd></div>
            <div><dt className="inline font-semibold">تخصص: </dt><dd className="inline">{p.expertise}</dd></div>
            <div><dt className="inline font-semibold">وابستگی دانشگاهی: </dt><dd className="inline">{p.affiliation}</dd></div>
          </dl>
          <h3 className="mb-3 mt-8 font-bold">محورهای تخصصی</h3>
          <ul className="flex flex-wrap gap-2">{p.specialties.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
          <p className="supp mt-8">این صفحه فقط شامل اطلاعات ارائه‌شده در پروپوزال است. در پروژه‌هایی که به بینایی ماشین صنعتی، تجهیزات اندازه‌گیری، حسگرها، PLC، اتوماسیون صنعتی و مهندسی تخصصی فرایند نیاز دارند، اجرا با مشارکت متخصصان و شرکت‌های فناور مرتبط انجام می‌شود. سوابق، مدارک یا افتخارات دیگر را می‌توانید در config/site.ts و این صفحه اضافه کنید.</p>
          <Link href="/contact" className="btn-primary mt-6">درخواست همکاری</Link>
        </div>
      </div>
    </>
  );
}
