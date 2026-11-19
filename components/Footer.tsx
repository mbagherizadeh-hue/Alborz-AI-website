import Link from "next/link";
import { siteConfig, isPlaceholder } from "@/config/site";
import { navItems } from "@/config/nav";

export default function Footer() {
  const c = siteConfig.contact;
  return (
    <footer className="mt-20 bg-navy-900 text-gray-200">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm text-brand-200">{siteConfig.university.line1} {siteConfig.university.line2}</p>
          <p className="mt-2 text-base font-bold text-white">{siteConfig.presenter.name}</p>
          <p className="mt-1 text-sm">{siteConfig.presenter.role}</p>
          <p className="mt-3 text-xs leading-6 text-gray-400">{siteConfig.projectName}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">دسترسی سریع</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[...navItems.slice(1), { href: "/contact", label: "درخواست همکاری" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-brand-200">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">تماس</p>
          <p>ایمیل: {isPlaceholder(c.email) ? <span className="text-gray-400">(در config/site.ts تنظیم شود)</span> : <a href={`mailto:${c.email}`} dir="ltr" className="underline">{c.email}</a>}</p>
          <p className="mt-1">تلفن: {isPlaceholder(c.phone) ? <span className="text-gray-400">(در config/site.ts تنظیم شود)</span> : <span dir="ltr">{c.phone}</span>}</p>
          <p className="mt-4 text-xs leading-6 text-gray-400">پروژه‌های معرفی‌شده «پیشنهادی و قابل امکان‌سنجی» هستند و ادعای اجرای قبلی ندارند. هزینه‌ها پس از تعیین دامنه کار و مذاکره مشخص می‌شود.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">© {siteConfig.presenter.name} — {siteConfig.presenter.affiliation}</div>
    </footer>
  );
}
