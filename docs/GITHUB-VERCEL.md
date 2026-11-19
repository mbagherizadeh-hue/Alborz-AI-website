# راهنمای بارگذاری در GitHub و انتشار روی Vercel

## ۱) بارگذاری در GitHub
1. در github.com یک مخزن جدید بسازید (مثلاً `alborz-ai-plan`)؛ تیک README/.gitignore را نزنید.
2. در پوشه پروژه:
```bash
git init
git add .
git commit -m "نسخه اولیه وب‌سایت طرح هوش مصنوعی صنایع البرز"
git branch -M main
git remote add origin https://github.com/<USERNAME>/alborz-ai-plan.git
git push -u origin main
```
(پوشه‌های `node_modules` و `.next` طبق `.gitignore` بارگذاری نمی‌شوند.)

## ۲) اتصال به Vercel
1. در vercel.com با حساب GitHub وارد شوید → **Add New → Project**.
2. مخزن را Import کنید. Framework به‌صورت خودکار «Next.js» انتخاب می‌شود؛ تنظیمات پیش‌فرض (Build: `next build`) را تغییر ندهید.
3. **Deploy** را بزنید. پس از چند دقیقه آدرس `https://<name>.vercel.app` ساخته می‌شود.
4. مقدار `siteUrl` در `config/site.ts` را با آدرس نهایی جایگزین و دوباره push کنید (برای sitemap و Open Graph).
5. دامنه اختصاصی: Project → Settings → Domains.

هر `git push` به شاخه `main` به‌صورت خودکار دوباره منتشر می‌شود.

## ۳) چک‌لیست پیش از معرفی رسمی
- [ ] ایمیل و تلفن واقعی در `config/site.ts`
- [ ] عکس رسمی ارائه‌دهنده
- [ ] تصاویر واقعی خط تولید (با مجوز) در `public/images`
- [ ] آزمایش ارسال یک فرم از موبایل
- [ ] بازبینی نهایی متن توسط ارائه‌دهنده
