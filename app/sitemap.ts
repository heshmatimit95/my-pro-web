import type { MetadataRoute } from 'next';

// فایل: app/sitemap.ts  →  آدرس نهایی: https://myproweb.ir/sitemap.xml
export const dynamic = 'force-static';

const BASE = 'https://myproweb.ir';

export default function sitemap(): MetadataRoute.Sitemap {
  // تاریخ آخرین تغییر واقعی هر صفحه را اینجا به‌روز کنید (فرمت YYYY-MM-DD)
  return [
    { url: `${BASE}/`,          lastModified: '2026-11-24', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/portfolio`, lastModified: '2026-11-24', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/terms`,     lastModified: '2026-11-24', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,   lastModified: '2026-11-24', changeFrequency: 'monthly', priority: 0.6 },
  ];
}