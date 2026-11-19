"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = exports.courseFieldOptions = exports.courseAudienceOptions = exports.courseHoursOptions = exports.courses = exports.courseCategories = void 0;
exports.courseCategories = [
    { id: "general", title: "دوره‌های عمومی و مدیریتی" },
    { id: "data-ml", title: "دوره‌های تحلیل داده و یادگیری ماشین" },
    { id: "industry", title: "دوره‌های تخصصی صنعت" },
    { id: "genai", title: "دوره‌های دستیارهای هوشمند و هوش مصنوعی مولد" },
    { id: "automation", title: "دوره‌های اتوماسیون و عامل‌های هوشمند" },
    { id: "pharma-food", title: "دوره‌های کاربردی صنایع دارویی، غذایی و تولیدی" },
];
exports.courses = [
    { id: 1, title: "آشنایی با هوش مصنوعی و کاربردهای آن در صنعت", hours: 8, audience: "مدیران و کارشناسان", outcome: "شناخت کاربردها و فرصت‌های استفاده از AI در صنعت", category: "general", field: "عمومی", audienceGroup: "مدیران", relatedProjectCategories: ["production", "genai"] },
    { id: 2, title: "مهندسی پرامپت و استفاده حرفه‌ای از هوش مصنوعی", hours: 8, audience: "تمامی واحدها", outcome: "طراحی پرامپت‌های تخصصی برای فعالیت‌های سازمانی", category: "general", field: "هوش مصنوعی مولد", audienceGroup: "همه واحدها", relatedProjectCategories: ["genai"] },
    { id: 3, title: "هوش مصنوعی برای مدیران و تصمیم‌گیری سازمانی", hours: 8, audience: "مدیرعامل، مدیر کارخانه، مدیران ارشد", outcome: "تدوین نقشه راه هوش مصنوعی برای شرکت و شناسایی ۵ فرصت کاربردی", outcomeExtra: "استفاده از AI برای تحلیل اطلاعات، گزارش‌ها و تصمیم‌گیری", category: "general", field: "مدیریتی", audienceGroup: "مدیران", relatedProjectCategories: ["genai", "production"] },
    { id: 4, title: "کاربرد هوش مصنوعی مولد در مدیریت سازمان", hours: 8, audience: "مدیران و کارشناسان", outcome: "ساخت دستیار مدیریتی برای تهیه گزارش، تحلیل مستندات و تصمیم‌سازی", category: "general", field: "هوش مصنوعی مولد", audienceGroup: "مدیران", relatedProjectCategories: ["genai"] },
    { id: 5, title: "تصمیم‌گیری هوشمند و تحلیل داده‌های مدیریتی", hours: 8, audience: "مدیران تولید، مالی و برنامه‌ریزی", outcome: "طراحی داشبورد هوشمند عملکرد سازمان", category: "general", field: "تحلیل داده", audienceGroup: "مدیران", relatedProjectCategories: ["production", "hr-finance"] },
    { id: 6, title: "مدیریت پروژه‌های هوش مصنوعی در صنعت", hours: 8, audience: "مدیران فناوری و برنامه‌ریزی", outcome: "تدوین طرح اجرایی و اقتصادی یک پروژه AI برای کارخانه", category: "general", field: "مدیریتی", audienceGroup: "مدیران", relatedProjectCategories: ["advanced", "advanced-dev"] },
    { id: 7, title: "هوش مصنوعی و کاهش هزینه‌های عملیاتی", hours: 8, audience: "مدیران کارخانه و تولید", outcome: "شناسایی هزینه‌های قابل کاهش با تحلیل داده‌های تولید و مصرف", category: "general", field: "مدیریتی", audienceGroup: "مدیران", relatedProjectCategories: ["production", "energy"] },
    { id: 8, title: "هوش مصنوعی در مدیریت منابع انسانی", hours: 8, audience: "مدیران منابع انسانی", outcome: "ساخت دستیار منابع انسانی و تحلیل نیازهای آموزشی و نیروی انسانی", category: "general", field: "منابع انسانی و اداری", audienceGroup: "مدیران", relatedProjectCategories: ["hr-finance", "genai"] },
    { id: 9, title: "تحلیل داده‌های صنعتی با هوش مصنوعی", hours: 16, audience: "کارشناسان صنایع و IT", outcome: "تحلیل داده‌های تولید و استخراج الگوهای مؤثر بر عملکرد", category: "data-ml", field: "تحلیل داده", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["production"] },
    { id: 10, title: "یادگیری ماشین در صنعت", hours: 16, audience: "مهندسان و کارشناسان فنی", outcome: "ساخت مدل پیش‌بینی خرابی، کیفیت یا تولید", category: "data-ml", field: "یادگیری ماشین", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["maintenance", "production"] },
    { id: 11, title: "هوش مصنوعی در کنترل کیفیت محصولات", hours: 16, audience: "کارشناسان کنترل کیفیت", outcome: "طراحی نمونه تشخیص عیوب محصول با استفاده از تصویر", category: "industry", field: "کنترل کیفیت و بینایی ماشین", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["vision"] },
    { id: 12, title: "هوش مصنوعی در بهینه‌سازی فرآیند تولید", hours: 16, audience: "مدیران و کارشناسان تولید", outcome: "تحلیل گلوگاه‌های تولید و پیشنهاد بهینه‌سازی", category: "industry", field: "تولید", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["production"] },
    { id: 13, title: "هوش مصنوعی در مدیریت انرژی", hours: 16, audience: "کارشناسان برق و تأسیسات", outcome: "ساخت مدل پیش‌بینی مصرف انرژی و شناسایی مصرف غیرعادی", category: "industry", field: "انرژی", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["energy"] },
    { id: 14, title: "هوش مصنوعی در زنجیره تأمین و انبارداری", hours: 16, audience: "کارشناسان خرید، انبار و لجستیک", outcome: "پیش‌بینی موجودی و تعیین نقطه سفارش مواد اولیه", category: "industry", field: "زنجیره تأمین", audienceGroup: "کارشناسان اداری و پشتیبانی", relatedProjectCategories: ["supply-chain"] },
    { id: 15, title: "هوش مصنوعی در فروش و پیش‌بینی بازار", hours: 16, audience: "کارشناسان فروش و بازاریابی", outcome: "ساخت مدل پیش‌بینی فروش و تحلیل مشتریان", category: "data-ml", field: "فروش و بازار", audienceGroup: "کارشناسان اداری و پشتیبانی", relatedProjectCategories: ["supply-chain"] },
    { id: 16, title: "هوش مصنوعی در ایمنی و HSE", hours: 16, audience: "کارشناسان ایمنی و حراست", outcome: "طراحی نمونه تشخیص تجهیزات حفاظت فردی در تصاویر", category: "industry", field: "ایمنی و امنیت", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["safety"] },
    { id: 17, title: "هوش مصنوعی در صنایع دارویی و غذایی", hours: 16, audience: "کارشناسان تولید و تضمین کیفیت", outcome: "کنترل تصویری بسته‌بندی و تحلیل مستندات کیفیت", category: "pharma-food", field: "دارویی و غذایی", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["pharma-food", "vision"] },
    { id: 18, title: "اینترنت اشیای صنعتی و هوش مصنوعی", hours: 16, audience: "کارشناسان برق، ابزار دقیق و IT", outcome: "ساخت نمونه پایش وضعیت یک دستگاه با داده حسگر", category: "industry", field: "اینترنت اشیا و نگهداری", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["maintenance"] },
    { id: 19, title: "ساخت دستیار هوشمند سازمانی با RAG", hours: 24, audience: "کارشناسان IT و واحدهای فنی", outcome: "ساخت چت‌بات متصل به اسناد و دستورالعمل‌های شرکت", category: "genai", field: "هوش مصنوعی مولد", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["genai"] },
    { id: 20, title: "اتوماسیون هوشمند فرآیندها با n8n و AI", hours: 24, audience: "کارشناسان IT و اداری", outcome: "خودکارسازی یک فرآیند مانند ثبت درخواست خرید و تهیه گزارش", category: "automation", field: "اتوماسیون", audienceGroup: "کارشناسان اداری و پشتیبانی", relatedProjectCategories: ["genai", "hr-finance"] },
    { id: 21, title: "استخراج هوشمند اطلاعات از اسناد با OCR و AI", hours: 24, audience: "کارشناسان مالی، انبار و اداری", outcome: "استخراج خودکار اطلاعات فاکتور، فرم و بارنامه", category: "automation", field: "اتوماسیون", audienceGroup: "کارشناسان اداری و پشتیبانی", relatedProjectCategories: ["genai", "hr-finance"] },
    { id: 22, title: "ساخت عامل‌های هوشمند در سازمان", hours: 24, audience: "کارشناسان IT و تحول دیجیتال", outcome: "ساخت یک عامل برای انجام گردش‌کار مشخص سازمانی", category: "automation", field: "عامل‌های هوشمند", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["genai", "advanced"] },
    { id: 23, title: "تحلیل اسناد و گزارش‌های فنی با هوش مصنوعی", hours: 24, audience: "کارشناسان فنی و مهندسی", outcome: "ساخت سامانه تحلیل و جست‌وجوی گزارش‌های فنی", category: "genai", field: "هوش مصنوعی مولد", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["genai", "maintenance"] },
    { id: 24, title: "هوش مصنوعی در امنیت اطلاعات و امنیت صنعتی", hours: 24, audience: "کارشناسان IT و امنیت", outcome: "تحلیل نمونه رخدادهای امنیتی و ساخت سیستم دسته‌بندی هشدارها", category: "industry", field: "ایمنی و امنیت", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["safety"] },
    { id: 25, title: "کاربرد هوش مصنوعی در طراحی و مهندسی محصول", hours: 24, audience: "مهندسان طراحی و R&D", outcome: "طراحی و ارزیابی نمونه محصول و تحلیل مستندات فنی", category: "industry", field: "طراحی و مهندسی محصول", audienceGroup: "کارشناسان فنی", relatedProjectCategories: ["advanced"] },
];
exports.courseHoursOptions = [8, 16, 24];
exports.courseAudienceOptions = ["مدیران", "کارشناسان فنی", "کارشناسان اداری و پشتیبانی", "همه واحدها"];
exports.courseFieldOptions = Array.from(new Set(exports.courses.map((c) => c.field)));
const getCourse = (id) => exports.courses.find((c) => c.id === id);
exports.getCourse = getCourse;
