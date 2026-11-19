import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CourseExplorer from "@/components/CourseExplorer";
import { courses } from "@/data/courses";
import { proposal } from "@/data/proposal";

export const metadata: Metadata = { title: "دوره‌ها و برنامه‌های آموزشی هوش مصنوعی", description: "۲۵ دوره و کارگاه کاربردی هوش مصنوعی برای مدیران و کارشناسان صنایع استان البرز؛ با جست‌وجو و فیلتر بر اساس مدت، مخاطب و حوزه." };

export default function CoursesPage() {
  return (
    <>
      <PageHeader title="دوره‌ها و برنامه‌های آموزشی" eyebrow={`${courses.length.toLocaleString("fa-IR")} دوره و کارگاه`} sub={proposal.coursesIntro.join(" ")} />
      <div className="container-page py-10">
        <CourseExplorer />
        <section className="mt-14" aria-labelledby="full-table">
          <h2 id="full-table" className="mb-4 text-xl font-bold">جدول کامل دوره‌ها (مطابق پروپوزال)</h2>
          <div className="table-wrap"><table><thead><tr><th>ردیف</th><th>عنوان دوره</th><th>مخاطبان</th><th>دستاورد و پروژه عملی</th><th>ساعت</th></tr></thead>
            <tbody>{courses.map((c) => <tr key={c.id}><td>{c.id.toLocaleString("fa-IR")}</td><td><Link className="font-semibold hover:text-brand-700" href={`/courses/${c.id}`}>{c.title}</Link></td><td>{c.audience}</td><td>{c.outcome}{c.outcomeExtra && <><br />{c.outcomeExtra}</>}</td><td>{c.hours.toLocaleString("fa-IR")}</td></tr>)}</tbody></table></div>
          <p className="mt-3 text-sm text-gray-600">شماره‌گذاری: ردیف دوم «۵» در متن اولیه پروپوزال به «۶» اصلاح شده است. مدت‌ها پیشنهادی و قابل تغییرند.</p>
        </section>
        <div className="card mt-10 text-center"><p className="font-semibold">دوره‌ای متناسب با صنعت یا واحد خود می‌خواهید؟</p><Link href="/contact#course" className="btn-primary mt-3">درخواست دوره اختصاصی</Link></div>
      </div>
    </>
  );
}
