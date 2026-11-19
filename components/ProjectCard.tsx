import Link from "next/link";
import { projects, tagLabels, getCategory, type Project } from "@/data/projects";
import { Wrench, FlaskConical } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const cat = getCategory(project.categoryId);
  return (
    <article className="card flex h-full flex-col" id={`project-${project.id}`}>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {project.tags.map((t) => <span key={t} className="chip">{tagLabels[t]}</span>)}
        {cat.developmental && <span className="chip-warn"><FlaskConical size={12} className="ms-1" />نیازمند امکان‌سنجی و همکاری تخصصی</span>}
        {project.relatedLabel && <span className="chip-gray">موضوع مرتبط</span>}
      </div>
      <h3 className="font-bold leading-8"><Link href={`/projects/${project.id}`} className="hover:text-brand-700">{project.title}</Link></h3>
      <p className="mt-1 text-sm leading-7 text-gray-700">{project.description}</p>
      {cat.specialist && <p className="mt-2 flex gap-1.5 text-xs leading-6 text-gray-500"><Wrench size={14} className="mt-1 shrink-0" />با مشارکت متخصصان یا شرکت‌های فناور مرتبط</p>}
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <Link href={`/contact?project=${project.id}#project`} className="btn-primary !px-3 !py-2 !text-xs">درخواست بررسی و امکان‌سنجی</Link>
        <Link href={`/projects/${project.id}`} className="btn-outline !px-3 !py-2 !text-xs">جزئیات</Link>
      </div>
    </article>
  );
}
