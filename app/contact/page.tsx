import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import RequestForm from "@/components/RequestForm";
import { siteConfig, isPlaceholder } from "@/config/site";

export const metadata: Metadata = { title: "درخواست همکاری و تماس", description: "ثبت درخواست دوره آموزشی، مشاوره و نیازسنجی یا اجرای پروژه هوش مصنوعی برای صنایع استان البرز." };

export default function Contact() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHeader title="درخواست همکاری و تماس" eyebrow="ثبت درخواست" sub="یکی از سه فرم زیر را تکمیل کنید. خلاصه درخواست نمایش داده می‌شود و می‌توانید آن را با ایمیل ارسال کنید." />
      <div className="container-page space-y-8 py-10">
        <nav className="no-print flex flex-wrap gap-2" aria-label="انتخاب فرم"><a className="btn-outline !py-2" href="#course">درخواست دوره</a><a className="btn-outline !py-2" href="#consulting">مشاوره و نیازسنجی</a><a className="btn-outline !py-2" href="#project">اجرای پروژه</a></nav>
        <div className="card text-sm leading-8">
          <p><strong>ایمیل: </strong>{isPlaceholder(c.email) ? "جای‌نگهدار — در config/site.ts تنظیم شود" : <a href={`mailto:${c.email}`} dir="ltr" className="underline">{c.email}</a>}</p>
          <p><strong>تلفن: </strong>{isPlaceholder(c.phone) ? "جای‌نگهدار — در config/site.ts تنظیم شود" : <span dir="ltr">{c.phone}</span>}</p>
          <p><strong>نشانی: </strong>{isPlaceholder(c.address) ? "جای‌نگهدار — در config/site.ts تنظیم شود" : c.address}</p>
        </div>
        <Suspense fallback={<p>در حال بارگذاری فرم…</p>}>
          <RequestForm kind="course" id="course" />
          <RequestForm kind="consulting" id="consulting" />
          <RequestForm kind="project" id="project" />
        </Suspense>
      </div>
    </>
  );
}
