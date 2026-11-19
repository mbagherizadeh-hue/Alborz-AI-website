import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "مطالعات موردی و نمونه‌های واقعی بین‌المللی", description: "نمونه‌های واقعی و قابل استناد از Bosch، Siemens و P&G، BlueScope، World Economic Forum و NIST درباره هوش مصنوعی در تولید." };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="مطالعات موردی و نمونه‌های واقعی بین‌المللی" eyebrow="با لینک منبع اصلی" sub="فقط نمونه‌های قابل استناد درج شده‌اند. ارقام عیناً از منبع اصلی نقل شده و متعلق به همان شرکت‌هاست؛ این نمونه‌ها پروژه ارائه‌دهنده این طرح نیستند و تضمینی برای تکرار همین نتایج در صنایع البرز نیستند. نام شرکت‌ها صرفاً برای ارجاع به منبع آمده و به معنای همکاری رسمی نیست." />
      <div className="container-page space-y-6 py-10">
        {caseStudies.map((c) => <CaseStudyCard key={c.id} cs={c} />)}
        <p className="supp">تصاویر این صفحه نمادین‌اند و تصویر کارخانه‌های نام‌برده نیستند. در صورت دریافت مجوز تصاویر رسمی، آن‌ها را در public/images قرار دهید.</p>
      </div>
    </>
  );
}
