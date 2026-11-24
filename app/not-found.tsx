import Link from "next/link";

// فایل: app/not-found.tsx  (صفحه‌ی ۴۰۴)
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b2447] flex items-center justify-center px-6" dir="rtl">
      <div className="max-w-md text-center">
        <p className="text-7xl font-black text-amber-500 mb-4">۴۰۴</p>
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">این صفحه پیدا نشد</h1>
        <p className="text-slate-300 mb-8 leading-relaxed">
          آدرسی که وارد کرده‌اید وجود ندارد یا جابه‌جا شده است. از لینک‌های زیر ادامه دهید.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all">
            صفحه اصلی
          </Link>
          <Link href="/portfolio" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all">
            مشاهده نمونه‌کارها
          </Link>
        </div>
      </div>
    </div>
  );
}
