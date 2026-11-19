import Link from "next/link";
import { Clock, Users, Target, ClipboardCheck } from "lucide-react";
import type { Course } from "@/data/courses";
import { courseCategories } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  const cat = courseCategories.find((c) => c.id === course.category)?.title;
  return (
    <article className="card flex h-full flex-col" id={`course-${course.id}`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="chip-gray">دوره {course.id.toLocaleString("fa-IR")}</span>
        <span className="chip"><Clock size={13} className="ms-1" />{course.hours.toLocaleString("fa-IR")} ساعت</span>
      </div>
      <h3 className="text-lg font-bold leading-8"><Link href={`/courses/${course.id}`} className="hover:text-brand-700">{course.title}</Link></h3>
      <dl className="mt-3 space-y-3 text-sm leading-7">
        <div className="flex gap-2"><Users size={16} className="mt-1.5 shrink-0 text-brand-600" /><div><dt className="font-semibold">مخاطبان</dt><dd className="text-gray-700">{course.audience}</dd></div></div>
        <div className="flex gap-2"><Target size={16} className="mt-1.5 shrink-0 text-brand-600" /><div><dt className="font-semibold">دستاورد و پروژه عملی</dt><dd className="text-gray-700">{course.outcome}{course.outcomeExtra && <><br />{course.outcomeExtra}</>}</dd></div></div>
        <div className="flex gap-2"><ClipboardCheck size={16} className="mt-1.5 shrink-0 text-brand-600" /><div><dt className="font-semibold">پروژه یا تمرین نهایی</dt><dd className="text-gray-700">همان دستاورد عملی بالا (با داده‌های واقعی یا شبیه‌سازی‌شده صنعت شما)</dd></div></div>
      </dl>
      <p className="mt-3 text-xs text-gray-500">{cat} · حوزه: {course.field}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <Link href={`/contact?course=${course.id}#course`} className="btn-primary !py-2">درخواست برگزاری دوره</Link>
        <Link href={`/courses/${course.id}`} className="btn-outline !py-2">جزئیات</Link>
      </div>
    </article>
  );
}
