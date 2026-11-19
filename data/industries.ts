/** صنایع هدف — جدول «جامعه هدف» پروپوزال (بخش ۴). متن ستون «زمینه‌های پیشنهادی» عیناً از پروپوزال است. */
import { projects, projectCategories } from "./projects";

export type Industry = {
  slug: string; name: string;
  proposalUse: string; // متن اصلی پروپوزال
  applications: string[]; // کاربردهای شاخص (از متن پروپوزال و فهرست‌های درخواستی)
  challenges: string[]; // چالش‌های متداول (از بخش «ضرورت» پروپوزال)
  courseIds: number[]; caseIds: string[]; extraCategoryIds: string[];
  start: string; // پیشنهاد شروع (تکمیلی)
  priority?: boolean;
};

const common = ["افزایش هزینه‌های تولید، انرژی، نگهداری و تأمین مواد اولیه", "داده‌های پراکنده در تولید، فروش، انبار، مالی و کنترل کیفیت بدون تحلیل یکپارچه"];

export const industries: Industry[] = [
  { slug: "pharma", name: "دارویی", priority: true, proposalUse: "تحلیل داده‌های تولید و کیفیت، بررسی مستندات، دستیار هوشمند، تحلیل انحرافات و پیش‌بینی شاخص‌های فرایندی",
    applications: ["تحلیل داده‌های تولید", "تحلیل انحرافات", "دستیار هوشمند مستندات", "تحلیل اطلاعات بچ تولید", "کنترل تصویری بسته‌بندی", "پیش‌بینی تقاضا و موجودی"],
    challenges: [...common, "دشواری دسترسی سریع به مستندات فنی و دستورالعمل‌ها", "نیاز به رعایت دقیق الزامات کیفیت و ایمنی"],
    courseIds: [17, 11, 19, 14], caseIds: ["wef-lighthouse", "siemens-pg"], extraCategoryIds: ["pharma-food", "genai", "vision", "supply-chain"],
    start: "جلسه معرفی و نیازسنجی داده‌های بچ و گزارش‌های انحراف، سپس دوره «هوش مصنوعی در صنایع دارویی و غذایی» و یک پایلوت تحلیل انحرافات با اعتبارسنجی تخصصی." },
  { slug: "food", name: "غذایی و آشامیدنی", priority: true, proposalUse: "تحلیل تولید، کنترل کیفیت، پیش‌بینی تقاضا، مدیریت موجودی و کاهش ضایعات",
    applications: ["کنترل کیفیت تصویری", "تحلیل ضایعات", "پیش‌بینی تقاضا", "مدیریت موجودی", "پیش‌بینی مصرف انرژی", "تحلیل فرایند تولید"],
    challenges: [...common, "ضایعات و افت کیفیت", "محدودیت تأمین انرژی"],
    courseIds: [17, 11, 13, 14], caseIds: ["wef-lighthouse", "siemens-pg"], extraCategoryIds: ["pharma-food", "vision", "energy", "supply-chain"],
    start: "بررسی داده‌های ضایعات و مصرف انرژی خط تولید و اجرای داشبورد/پیش‌بینی آزمایشی روی یک خط." },
  { slug: "medical-devices", name: "تجهیزات پزشکی", priority: true, proposalUse: "تحلیل اطلاعات تولید و کنترل کیفیت، پردازش اسناد فنی و دستیار هوشمند",
    applications: ["تحلیل اطلاعات تولید و کنترل کیفیت", "پردازش اسناد فنی", "دستیار هوشمند"],
    challenges: [...common, "حجم بالای اسناد فنی و مستندات"],
    courseIds: [19, 23, 11], caseIds: ["wef-lighthouse"], extraCategoryIds: ["genai", "pharma-food"],
    start: "دوره ساخت دستیار RAG و پایلوت جست‌وجوی هوشمند اسناد فنی." },
  { slug: "chemical", name: "شیمیایی و پلیمری", priority: true, proposalUse: "تحلیل داده‌های فرایند، پیش‌بینی مصرف مواد اولیه، انرژی و کیفیت",
    applications: ["تحلیل داده‌های فرایند", "پیش‌بینی مصرف مواد اولیه", "پیش‌بینی مصرف انرژی", "پیش‌بینی کیفیت"],
    challenges: [...common, "فرایندهای انرژی‌بر"],
    courseIds: [9, 13, 12], caseIds: ["wef-lighthouse"], extraCategoryIds: ["pharma-food", "energy", "production"],
    start: "نیازسنجی داده فرایند و پایلوت پیش‌بینی مصرف انرژی و مواد اولیه." },
  { slug: "auto-parts", name: "قطعه‌سازی و ماشین‌سازی", priority: true, proposalUse: "تحلیل توقفات، کنترل کیفیت، پردازش تصویر و تحلیل سوابق تعمیرات",
    applications: ["داشبورد تولید", "تحلیل توقفات", "کنترل تصویری عیوب", "تحلیل سوابق تعمیرات", "پیش‌بینی ضایعات", "تحلیل عملکرد خطوط"],
    challenges: [...common, "دشواری شناسایی الگوهای مؤثر بر توقف خطوط، ضایعات و افت کیفیت"],
    courseIds: [9, 12, 11, 10], caseIds: ["bosch", "bluescope", "siemens-pg"], extraCategoryIds: ["production", "maintenance", "vision"],
    start: "تبدیل فایل‌های اکسل توقفات و ضایعات به داشبورد تحلیلی؛ پایلوتی کم‌هزینه و کم‌ریسک." },
  { slug: "metal-mining", name: "فلزی و معدنی", proposalUse: "تحلیل داده‌های تولید، انرژی، کیفیت و نگهداری تجهیزات",
    applications: ["تحلیل داده‌های تولید", "تحلیل انرژی", "تحلیل کیفیت", "نگهداری تجهیزات"],
    challenges: [...common, "توقف‌های پیش‌بینی‌نشده تجهیزات"],
    courseIds: [10, 13, 18], caseIds: ["bluescope"], extraCategoryIds: ["maintenance", "energy", "production"],
    start: "تحلیل سوابق تعمیرات و پایلوت تشخیص ناهنجاری روی تجهیزات منتخب." },
  { slug: "textile", name: "نساجی و پوشاک", proposalUse: "تحلیل کیفیت، بررسی عیوب محصول و پیش‌بینی فروش",
    applications: ["تحلیل کیفیت", "تشخیص عیوب پارچه و منسوجات", "پیش‌بینی فروش"],
    challenges: [...common],
    courseIds: [11, 15], caseIds: ["siemens-pg"], extraCategoryIds: ["vision", "supply-chain"],
    start: "پایلوت تشخیص عیوب ظاهری با تصاویر نمونه و پیش‌بینی فروش." },
  { slug: "packaging-printing", name: "بسته‌بندی و چاپ", proposalUse: "کنترل کیفیت تصویری، تحلیل ضایعات و بررسی اطلاعات بسته‌بندی",
    applications: ["کنترل کیفیت تصویری", "تحلیل ضایعات", "بررسی اطلاعات بسته‌بندی"],
    challenges: [...common],
    courseIds: [11, 12], caseIds: ["siemens-pg"], extraCategoryIds: ["vision", "production"],
    start: "نیازسنجی تصویربرداری خط و پایلوت کنترل صحت اطلاعات چاپ‌شده." },
  { slug: "trade-distribution", name: "بازرگانی و پخش", proposalUse: "پیش‌بینی فروش و تقاضا، مدیریت موجودی و تحلیل مشتریان",
    applications: ["پیش‌بینی فروش و تقاضا", "مدیریت موجودی", "تحلیل مشتریان"],
    challenges: ["نبود ابزار تحلیلی مناسب برای پیش‌بینی فروش و تقاضا", ...common],
    courseIds: [15, 14], caseIds: ["wef-lighthouse"], extraCategoryIds: ["supply-chain"],
    start: "دوره پیش‌بینی فروش و پایلوت مدیریت موجودی و تاریخ انقضا." },
  { slug: "admin-support", name: "واحدهای اداری و پشتیبانی صنایع", proposalUse: "اتوماسیون فرایندها، دستیار سازمانی، تحلیل اسناد و گزارش‌سازی هوشمند",
    applications: ["اتوماسیون فرایندها", "دستیار سازمانی", "تحلیل اسناد", "گزارش‌سازی هوشمند"],
    challenges: ["وابستگی فرایندهای اداری و کارشناسی به فعالیت‌های تکراری و دستی", "دشواری دسترسی سریع به اطلاعات موجود در دستورالعمل‌ها و قراردادها"],
    courseIds: [2, 8, 19, 20, 21], caseIds: ["nist"], extraCategoryIds: ["genai", "hr-finance"],
    start: "دوره مهندسی پرامپت و اتوماسیون n8n؛ سپس پایلوت استخراج اطلاعات فاکتورها." },
];

export const industryNames = industries.map((i) => i.name);

/** پروژه‌های مرتبط با یک صنعت: بر اساس فهرست صنایع هر حوزه + «همه صنایع» + حوزه‌های اضافی صنعت */
export function projectsForIndustry(slug: string) {
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return [];
  const catIds = new Set(
    projectCategories.filter((c) => c.industries.includes(ind.name) || c.industries.includes("همه صنایع")).map((c) => c.id)
  );
  ind.extraCategoryIds.forEach((id) => catIds.add(id));
  return projects.filter((p) => catIds.has(p.categoryId));
}
