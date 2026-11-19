import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PrintButton from "@/components/PrintButton";
import { proposal } from "@/data/proposal";
import { industries } from "@/data/industries";
import { courses } from "@/data/courses";
import { projectCategories, projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "پروپوزال کامل طرح", description: "متن کامل پروپوزال طرح جامع نیازسنجی، طراحی و اجرای پروژه‌ها و برنامه‌های آموزشی هوش مصنوعی در صنایع استان البرز." };

const H = ({ id, n, children }: { id: string; n: string; children: React.ReactNode }) => <h2 id={id} className="mb-4 mt-12 scroll-mt-24 text-2xl font-bold">{n}. {children}</h2>;

export default function Proposal() {
  const toc = [["intro", "مقدمه"], ["necessity", "ضرورت و توجیه اجرای طرح"], ["goals", "اهداف طرح"], ["target", "جامعه هدف و صنایع مشمول"], ["axes", "محورهای اصلی خدمات"], ["courses", "برنامه دوره‌ها و کارگاه‌های آموزشی"], ["projects", "فهرست پروژه‌های پیشنهادی"], ["expected", "نتایج مورد انتظار"], ["conclusion", "جمع‌بندی و درخواست همکاری"], ["refs", "منابع و مستندات"]];
  return (
    <>
      <PageHeader title="پروپوزال کامل طرح" eyebrow="سند اصلی" sub={siteConfig.projectName} />
      <div className="container-page grid gap-8 py-10 lg:grid-cols-4">
        <aside className="no-print lg:col-span-1"><nav className="card sticky top-24 text-sm" aria-label="فهرست پروپوزال"><p className="mb-2 font-bold">فهرست</p><ol className="space-y-1.5">{toc.map(([id, t], i) => <li key={id}><a className="hover:text-brand-700" href={`#${id}`}>{(i + 1).toLocaleString("fa-IR")}. {t}</a></li>)}</ol><div className="mt-4"><PrintButton /></div></nav></aside>
        <article className="leading-9 text-gray-800 lg:col-span-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-bold">{siteConfig.university.line1} {siteConfig.university.line2}</p>
            <p className="mt-1 font-bold">{siteConfig.projectName}</p>
            <p className="mt-3 text-sm">ارائه‌دهنده: {siteConfig.presenter.name} — {siteConfig.presenter.role}؛ {siteConfig.presenter.expertise}</p>
          </div>

          <H id="intro" n="۱">مقدمه</H>
          {proposal.intro.map((p, i) => <p key={i} className="mb-4">{p}</p>)}

          <H id="necessity" n="۲">ضرورت و توجیه اجرای طرح توسعه هوش مصنوعی در صنایع البرز</H>
          <p className="mb-3">{proposal.necessityIntro}</p>
          <ul className="mb-4 list-disc space-y-1 pe-6">{proposal.necessityList.map((x) => <li key={x}>{x}</li>)}</ul>
          {proposal.necessityAfter.map((p, i) => <p key={i} className="mb-4">{p}</p>)}

          <H id="goals" n="۳">اهداف طرح</H>
          <p className="mb-3">{proposal.mainGoal}</p>
          <p className="mb-2 font-semibold">اهداف اختصاصی عبارت‌اند از:</p>
          <ol className="mb-4 list-decimal space-y-1 pe-6">{proposal.goals.map((x) => <li key={x}>{x}</li>)}</ol>

          <H id="target" n="۴">جامعه هدف و صنایع مشمول طرح</H>
          <p className="mb-4">{proposal.targetIntro}</p>
          <div className="table-wrap mb-4"><table><thead><tr><th>حوزه صنعتی</th><th>زمینه‌های پیشنهادی استفاده از هوش مصنوعی</th></tr></thead><tbody>{industries.map((i) => <tr key={i.slug}><td className="font-semibold"><Link href={`/industries#${i.slug}`} className="hover:text-brand-700">{i.name === "دارویی" ? "صنایع دارویی" : i.name}</Link></td><td>{i.proposalUse}</td></tr>)}</tbody></table></div>
          <p className="mb-4">{proposal.targetAfter}</p>

          <H id="axes" n="۵">محورهای اصلی خدمات قابل ارائه</H>
          <p className="mb-3">خدمات این طرح در سه محور اصلی ارائه می‌شود:</p>
          {proposal.axes.map((a) => <div key={a.id} className="mb-3"><p className="font-bold">{a.key}) {a.title}</p><p>{a.text}</p></div>)}
          <p className="mb-4">{proposal.axesAfter}</p>

          <H id="courses" n="۶">برنامه دوره‌ها و کارگاه‌های آموزشی</H>
          {proposal.coursesIntro.map((p) => <p key={p} className="mb-3">{p}</p>)}
          <p className="mb-3">فهرست کامل {courses.length.toLocaleString("fa-IR")} دوره (با جدول، جست‌وجو و فیلتر) در <Link className="text-brand-700 underline" href="/courses">صفحه دوره‌ها</Link> قرار دارد.</p>
          <div className="table-wrap mb-4"><table><thead><tr><th>ردیف</th><th>عنوان دوره</th><th>مخاطبان</th><th>دستاورد و پروژه عملی</th><th>ساعت</th></tr></thead><tbody>{courses.map((c) => <tr key={c.id}><td>{c.id.toLocaleString("fa-IR")}</td><td><Link href={`/courses/${c.id}`} className="font-semibold hover:text-brand-700">{c.title}</Link></td><td>{c.audience}</td><td>{c.outcome}{c.outcomeExtra && <><br />{c.outcomeExtra}</>}</td><td>{c.hours.toLocaleString("fa-IR")}</td></tr>)}</tbody></table></div>

          <H id="projects" n="۷">فهرست پروژه‌های پیشنهادی هوش مصنوعی برای صنایع</H>
          <p className="mb-3">{proposal.projectsIntro}</p>
          <p className="mb-3">فهرست {projects.length.toLocaleString("fa-IR")} پروژه در {projectCategories.length.toLocaleString("fa-IR")} گروه:</p>
          {projectCategories.map((c) => (
            <div key={c.id} className="mb-6">
              <h3 className="mb-2 font-bold"><Link href={`/projects#${c.id}`} className="hover:text-brand-700">{c.order.toLocaleString("fa-IR")}. {c.title}</Link></h3>
              {c.intro && <p className="mb-2 text-sm">{c.intro}</p>}
              <div className="table-wrap"><table><thead><tr><th>#</th><th>عنوان</th><th>شرح و خروجی</th></tr></thead><tbody>{projects.filter((p) => p.categoryId === c.id).map((p) => <tr key={p.id}><td>{p.n.toLocaleString("fa-IR")}</td><td><Link href={`/projects/${p.id}`} className="font-semibold hover:text-brand-700">{p.title}</Link></td><td>{p.description}</td></tr>)}</tbody></table></div>
              {c.example && <p className="mt-2 text-sm">{c.example}</p>}
              {c.note && <p className="mt-2 text-sm font-semibold">{c.note}</p>}
            </div>
          ))}

          <H id="expected" n="۸">نتایج مورد انتظار از اجرای طرح</H>
          <p className="mb-3">{proposal.expectedIntro}</p>
          <ul className="mb-4 list-disc space-y-1 pe-6">{proposal.expected.map((x) => <li key={x}>{x}</li>)}</ul>

          <H id="conclusion" n="۹">جمع‌بندی و درخواست همکاری</H>
          {proposal.conclusion.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
          <p className="mt-6 font-semibold">با احترام<br />{siteConfig.presenter.name}<br /><span className="font-normal text-sm">{siteConfig.presenter.role}<br />{siteConfig.presenter.expertise}</span></p>

          <H id="refs" n="۱۰">منابع و مستندات مورد استفاده</H>
          <p>فهرست کامل منابع با تاریخ و لینک مستقیم در <Link className="text-brand-700 underline" href="/references">صفحه منابع</Link> آمده است.</p>
        </article>
      </div>
    </>
  );
}
