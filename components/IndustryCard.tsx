import Link from "next/link";
import { Factory } from "lucide-react";
import type { Industry } from "@/data/industries";
import { projectsForIndustry } from "@/data/industries";

export default function IndustryCard({ ind }: { ind: Industry }) {
  return (
    <Link href={`/industries#${ind.slug}`} className="card block transition hover:border-brand-600">
      <Factory size={22} className="mb-3 text-brand-600" />
      <h3 className="font-bold">{ind.name}</h3>
      <p className="mt-1 text-sm leading-7 text-gray-600">{ind.proposalUse}</p>
      <p className="mt-3 text-xs text-brand-700">{projectsForIndustry(ind.slug).length.toLocaleString("fa-IR")} پروژه مرتبط</p>
    </Link>
  );
}
