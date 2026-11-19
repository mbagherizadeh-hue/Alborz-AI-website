import Link from "next/link";
import { ArrowLeft, GraduationCap, Compass, Cpu, ExternalLink } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import ProjectCard from "@/components/ProjectCard";
import IndustryCard from "@/components/IndustryCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import ProjectFinder from "@/components/ProjectFinder";
import Faq from "@/components/Faq";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { statistics } from "@/data/references";
import { proposal, methodSteps } from "@/data/proposal";
import { siteConfig } from "@/config/site";

const axisIcons = { training: GraduationCap, consulting: Compass, projects: Cpu };
const featuredCourses = [3, 19, 20, 11, 9, 17].map((id) => courses.find((c) => c.id === id)!);
const featuredProjects = ["production-1", "genai-1", "maintenance-1", "vision-3", "pharma-food-3", "energy-1", "supply-chain-2", "genai-12"].map((id) => projects.find((p) => p.id === id)!);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container-page py-14">
        <SectionTitle title="معرفی کوتاه طرح" eyebrow="این طرح چیست؟" />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 leading-8 text-gray-700 lg:col-span-3">
            <p>{proposal.intro[2]}</p>
            <p>{proposal.intro[3]}</p>
          </div>
          <div className="card lg:col-span-2">
            <p className="font-bold">نقش دانشگاه آزاد اسلامی واحد کرج</p>
            <p className="mt-2 text-sm leading-8 text-gray-700">این طرح توسط عضو هیئت علمی گروه مهندسی کامپیوتر دانشگاه آزاد اسلامی واحد کرج ارائه می‌شود و هدف آن ایجاد ارتباط میان ظرفیت‌های دانشگاهی، شرکت‌های فناور و نیازهای واقعی صنایع استان است.</p>
            <Link href="/proposal" className="btn-outline mt-4 !py-2">مطالعه پروپوزال کامل <ArrowLeft size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14" aria-labelledby="stats">
        <div className="container-page">
          <SectionTitle title="آمار و ظرفیت صنعتی استان البرز" sub="همه ارقام با منبع و تاریخ درج شده‌اند؛ برای جزئیات به صفحه منابع مراجعه کنید." />
          <h2 id="stats" className="sr-only">آمار</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((s) => (
              <div key={s.id} className="card border-t-4 border-t-brand-600">
                {s.prefix && <p className="text-xs text-gray-500">{s.prefix}</p>}
                <p className="text-4xl font-extrabold text-brand-600">{s.value}</p>
                <p className="mt-1 font-semibold">{s.unit}</p>
                <p className="mt-2 text-xs leading-6 text-gray-500">{s.note}</p>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-brand-700 hover:underline">{s.source} · {s.date}<ExternalLink size={12} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionTitle title="سه محور اصلی طرح" sub={proposal.axesAfter} />
        <div className="grid gap-4 md:grid-cols-3">
          {proposal.axes.map((a) => { const I = axisIcons[a.id as keyof typeof axisIcons]; return (
            <div key={a.id} className="card">
              <I className="mb-3 text-brand-600" size={28} />
              <h3 className="text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-8 text-gray-700">{a.text}</p>
              <Link href={a.id === "training" ? "/courses" : a.id === "projects" ? "/projects" : "/methodology"} className="mt-3 inline-flex text-sm text-brand-700 hover:underline">اطلاعات بیشتر</Link>
            </div>); })}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="mb-6 flex items-end justify-between gap-4"><SectionTitle title="برخی از مهم‌ترین دوره‌ها" /><Link href="/courses" className="btn-outline mb-8 !py-2">همه {courses.length.toLocaleString("fa-IR")} دوره</Link></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featuredCourses.map((c) => <CourseCard key={c.id} course={c} />)}</div>
      </section>

      <section className="container-page py-10">
        <div className="mb-6 flex items-end justify-between gap-4"><SectionTitle title="برخی از مهم‌ترین پروژه‌های قابل امکان‌سنجی" sub="پروژه‌های پیشنهادی؛ انتخاب هر پروژه پس از بررسی نیاز، داده‌ها، زیرساخت و توجیه اقتصادی انجام می‌شود." /><Link href="/projects" className="btn-outline mb-8 hidden !py-2 sm:inline-flex">همه {projects.length.toLocaleString("fa-IR")} پروژه</Link></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{featuredProjects.map((p) => <ProjectCard key={p.id} project={p} />)}</div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container-page">
          <SectionTitle title="پروژه مناسب صنعت من چیست؟" sub="صنعت خود را انتخاب کنید تا پروژه‌ها و دوره‌های مرتبط با آن فهرست شود." />
          <ProjectFinder />
        </div>
      </section>

      <section className="container-page py-14">
        <SectionTitle title="صنایع هدف" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{industries.map((i) => <IndustryCard key={i.slug} ind={i} />)}</div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container-page">
          <SectionTitle title="نمونه‌های بین‌المللی" sub="نمونه‌های واقعی و قابل استناد با لینک منبع اصلی؛ نتایج متعلق به همان شرکت‌هاست و تضمینی برای تکرار در البرز نیست." />
          <div className="grid gap-4 md:grid-cols-3">{caseStudies.slice(0, 3).map((c) => <CaseStudyCard key={c.id} cs={c} compact />)}</div>
          <Link href="/case-studies" className="btn-outline mt-6">همه مطالعات موردی</Link>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionTitle title="فرایند همکاری با صنایع" />
        <ol className="grid gap-3 sm:grid-cols-3">
          {methodSteps.map((s) => <li key={s.n} className="card flex items-center gap-3 !p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">{s.n.toLocaleString("fa-IR")}</span><span className="text-sm font-medium">{s.title}</span></li>)}
        </ol>
        <Link href="/methodology" className="btn-outline mt-6">مدل‌های همکاری و جزئیات روش اجرا</Link>
      </section>

      <section className="container-page pb-14">
        <div className="card grid gap-6 md:grid-cols-4">
          <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-center text-sm text-gray-500 md:h-auto">{siteConfig.presenter.photo ? <img src={siteConfig.presenter.photo} alt={siteConfig.presenter.name} className="h-full w-full rounded-lg object-cover" /> : "جای تصویر پرتره رسمی"}</div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold">{siteConfig.presenter.name}</h2>
            <p className="mt-2 leading-8 text-gray-700">{siteConfig.presenter.role}؛ {siteConfig.presenter.expertise}. {siteConfig.presenter.affiliation}.</p>
            <Link href="/about" className="btn-outline mt-4 !py-2">درباره ارائه‌دهنده</Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-14"><SectionTitle title="پرسش‌های متداول" /><Faq /></section>

      <section className="bg-navy-800 py-14 text-white">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold !text-white">دعوت به همکاری</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-gray-200">برای معرفی طرح به واحد صنعتی شما، برگزاری نشست تخصصی و تعریف همکاری آموزشی یا اجرایی، درخواست خود را ثبت کنید.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact#course" className="btn-primary">درخواست دوره</Link>
            <Link href="/contact#consulting" className="btn bg-white text-navy-900 hover:bg-brand-50">درخواست مشاوره</Link>
            <Link href="/contact#project" className="btn border border-white/40 text-white hover:bg-white/10">درخواست پروژه</Link>
          </div>
        </div>
      </section>
    </>
  );
}
