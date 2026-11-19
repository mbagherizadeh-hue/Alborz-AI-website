import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const pages = ["", "/proposal", "/courses", "/projects", "/industries", "/case-studies", "/methodology", "/about", "/contact", "/references"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...courses.map((c) => ({ url: `${base}/courses/${c.id}`, lastModified: new Date() })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.id}`, lastModified: new Date() })),
  ];
}
