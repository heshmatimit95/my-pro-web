import { MetadataRoute } from 'next';

// آرایه پروژه‌های تو (فقط فیلدهای مورد نیاز برای سایت‌مپ)
const projects = [
  { id: 1, title: "سیستم هوشمند مدیریت رستوران (اصیل)", video: "/asil.mp4", desc: "اتوماسیون کامل سفارشات آنلاین، سالن و آشپزخانه" },
  { id: 2, title: "پلتفرم گردشگری شاهو تور", video: "/shaho3.mp4", desc: "رزرو آنلاین تورهای داخلی، طبیعت‌گردی و اقامتگاه" },
  { id: 3, title: "داشبورد هوشمند ارزی و مالی اکسل", video: "/gold-3.mp4", desc: "تحلیل خودکار بازار دلار و طلا به ۴ زبان" },
  { id: 4, title: "سیستم مدیریت دارایی (SHIS)", video: "/SHIS.mp4", desc: "مدیترنت هوشمند دارایی‌های IT و تجهیزات سازمانی" },
  { id: 5, title: "سیستم گزارش‌گیری  BPMRS", video: "/BPMRS.mp4", desc: "سیستم گزارش‌گیری مدیریت فرآیندها BPMRS" },
  { id: 6, title: "پروژه MAP (تحلیل نظام پیشنهادات)", video: "/AMAR.mp4", desc: "پاکسازی داده‌های انبوه و داشبورد مدیریتی نظام پیشنهادات" },
  { id: 7, title: "گزارش تحلیلی فروش و زنجیره تأمین شرکت پخش دارو", video: "/داشبورد فروش.mp4", desc: "کنترل موجودی هوشمند و تحلیل زنجیره تأمین دارو" },
  { id: 8, title: "داشبورد داینامیک مانیتورینگ عملکرد مراکز فروش (Sales Performance Dashboard)", video: "/نمودارهای داینامیک.mp4", desc: "پایش هوشمند عملکرد، تحلیل روندها و رتبه‌بندی خودکار مراکز" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myproweb.ir';

  // ۱. صفحات اصلی و کلیدی سایت (اضافه شدن مسیرهای جدید شما)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // صفحه اصلی
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`, // صفحه نمونه کارها
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`, // صفحه درباره من (حتماً چک کن آدرس روت همین باشه)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`, // صفحه مسیر شغلی (اگر اسم فولدرت چیز دیگه‌ای مثل resume هست، تغییرش بده)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // ۲. تولید داینامیک آدرس صفحات اختصاصی هر پروژه (در صورت وجود صفحه مجزا)
  const projectPages: MetadataRoute.Sitemap = projects.map((pro) => ({
    url: `${baseUrl}/portfolio/${pro.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ترکیب نهایی کل آدرس‌ها برای معرفی به گوگل
  return [...staticPages, ...projectPages];
}