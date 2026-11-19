import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GraduationCap, Compass, Cpu } from "lucide-react";

function LineArt() {
  return (
    <svg viewBox="0 0 480 320" className="h-auto w-full" role="img" aria-label="طرح خطی خط تولید با داشبورد تحلیل داده">
      <rect x="0" y="0" width="480" height="320" rx="16" fill="#fff7ed" />
      <rect x="28" y="28" width="200" height="120" rx="10" fill="#fff" stroke="#fed7aa" />
      <polyline points="44,120 80,96 112,108 150,66 190,82 214,52" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinejoin="round" />
      {[44, 80, 112, 150, 190, 214].map((x, i) => <circle key={x} cx={x} cy={[120, 96, 108, 66, 82, 52][i]} r="3.5" fill="#ea580c" />)}
      <rect x="248" y="28" width="204" height="120" rx="10" fill="#fff" stroke="#fed7aa" />
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={266 + i * 36} y={128 - [40, 62, 48, 78, 58][i]} width="22" height={[40, 62, 48, 78, 58][i]} rx="3" fill={i === 3 ? "#ea580c" : "#15233f"} opacity={i === 3 ? 1 : 0.8} />)}
      <rect x="28" y="190" width="424" height="14" rx="7" fill="#15233f" />
      {[60, 140, 220, 300, 380].map((x) => <g key={x}><rect x={x} y="150" width="44" height="40" rx="5" fill="#fff" stroke="#15233f" strokeWidth="2" /><rect x={x + 8} y="160" width="28" height="6" rx="3" fill="#fed7aa" /></g>)}
      {[56, 128, 200, 272, 344, 416].map((x) => <circle key={x} cx={x} cy="197" r="5" fill="#ea580c" />)}
      <rect x="28" y="228" width="424" height="64" rx="10" fill="#fff" stroke="#e5e7eb" />
      {[0, 1, 2, 3].map((i) => <g key={i}><rect x={48 + i * 102} y="244" width="70" height="8" rx="4" fill="#e5e7eb" /><rect x={48 + i * 102} y="262" width="46" height="8" rx="4" fill={i === 1 ? "#ea580c" : "#cbd5e1"} /></g>)}
    </svg>
  );
}

export default function Hero() {
  const p = siteConfig.presenter;
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/70 to-white">
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-5 lg:py-16">
        <div className="lg:col-span-3">
          <p className="text-lg font-bold leading-8 text-brand-700">{siteConfig.university.line1}<br />{siteConfig.university.line2}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.7] text-navy-900 sm:text-4xl">{siteConfig.projectName}</h1>
          <p className="mt-4 text-lg leading-9 text-gray-700">{siteConfig.subtitle}</p>
          <div className="mt-6 rounded-xl border-s-4 border-brand-600 bg-white p-4 shadow-sm">
            <p className="text-xl font-extrabold text-navy-900">{p.name}</p>
            <p className="mt-1 text-sm leading-7 text-gray-700">{p.role}<br />{p.expertise}<br />{p.affiliation}</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact#course" className="btn-primary"><GraduationCap size={18} />درخواست برگزاری دوره آموزشی</Link>
            <Link href="/contact#consulting" className="btn-dark"><Compass size={18} />درخواست مشاوره و نیازسنجی</Link>
            <Link href="/contact#project" className="btn-outline"><Cpu size={18} />درخواست اجرای پروژه هوش مصنوعی</Link>
          </div>
        </div>
        <div className="lg:col-span-2">
          <LineArt />
          <p className="mt-2 text-center text-xs text-gray-500">طرح خطی نمادین؛ تصویر واقعی خط تولید را می‌توانید در public/images قرار دهید.</p>
        </div>
      </div>
    </section>
  );
}
