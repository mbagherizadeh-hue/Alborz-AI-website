"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-sm font-bold text-navy-900">{siteConfig.presenter.name}</span>
          <span className="text-xs text-brand-700">{siteConfig.shortTitle}</span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="منوی اصلی">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className={`rounded-md px-2.5 py-2 text-sm ${active(n.href) ? "bg-brand-50 font-semibold text-brand-700" : "text-navy-800 hover:text-brand-700"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden !py-2 sm:inline-flex">درخواست همکاری</Link>
          <button className="rounded-md p-2 xl:hidden" aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-gray-200 bg-white xl:hidden" aria-label="منوی موبایل">
          <div className="container-page grid gap-1 py-3">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`rounded-md px-3 py-2.5 text-sm ${active(n.href) ? "bg-brand-50 font-semibold text-brand-700" : ""}`}>{n.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">درخواست همکاری و تماس</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
