import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { siteConfig } from "@/config/site";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-vazir", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.presenter.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.presenter.name }],
  openGraph: {
    title: siteConfig.title, description: siteConfig.description, type: "website", locale: "fa_IR",
    siteName: siteConfig.shortTitle, url: siteConfig.siteUrl,
  },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#ea580c", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", name: siteConfig.presenter.name, jobTitle: siteConfig.presenter.role,
      affiliation: { "@type": "CollegeOrUniversity", name: "دانشگاه آزاد اسلامی واحد کرج" },
      knowsAbout: siteConfig.presenter.specialties },
    { "@type": "WebSite", name: siteConfig.shortTitle, url: siteConfig.siteUrl, inLanguage: "fa-IR" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:right-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-2">پرش به محتوا</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
