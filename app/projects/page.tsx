import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ProjectExplorer from "@/components/ProjectExplorer";
import { proposal } from "@/data/proposal";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = { title: "بانک پروژه‌های هوش مصنوعی صنایع", description: "۸۷ پروژه پیشنهادی هوش مصنوعی در ۱۰ حوزه برای صنایع استان البرز؛ با جست‌وجو و فیلتر بر اساس صنعت، حوزه کاربرد و نوع پروژه." };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="بانک پروژه‌های هوش مصنوعی صنایع" eyebrow={`${projects.length.toLocaleString("fa-IR")} پروژه پیشنهادی در ${projectCategories.length.toLocaleString("fa-IR")} گروه`} sub={proposal.projectsIntro} />
      <div className="container-page py-10">
        <p className="supp mb-6">همه موارد «پروژه پیشنهادی و قابل امکان‌سنجی» هستند و ادعای اجرای قبلی ندارند. فیلدهای مسئله، داده‌های موردنیاز، فناوری و پیش‌نیاز در صفحه جزئیات، «مطلب تکمیلی» و در سطح هر حوزه‌اند. شرح و خروجی هر پروژه عیناً از پروپوزال است.</p>
        <Suspense fallback={<p>در حال بارگذاری…</p>}><ProjectExplorer /></Suspense>
      </div>
    </>
  );
}
