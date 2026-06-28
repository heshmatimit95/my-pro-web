export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b2447] py-12 px-4 md:px-6" dir="rtl">
      <div className="max-w-2xl mx-auto">
        
        {/* تیتر صفحه */}
        <h1 className="text-3xl md:text-4xl font-black text-white text-center mb-10">
          شرایط و <span className="text-amber-500">مسیر همکاری</span>
        </h1>

        {/* کارت اصلی */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl">
          
          {/* مقدمه */}
          <p className="text-slate-300 text-center mb-10 text-base md:text-lg leading-relaxed">
            ما باور داریم که یک همکاری موفق بر پایه صداقت و شفافیت بنا می‌شود. در اینجا شرایطِ مسیرِ رسیدن به نتیجه‌ی عالی را برایتان لیست کرده‌ایم.
          </p>

          <div className="space-y-10">
            
            {/* مورد اول: مدل پرداخت */}
            <section className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-black font-black text-lg">۰۱</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">مدل پرداخت مرحله‌ای</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                جهت تضمین کیفیت و امنیت مالی، پرداخت‌ها در ۳ مرحله انجام می‌شود: ۲۰٪ پیش‌پرداخت، ۳۰٪ پس از تایید نمونه اولیه، و ۵۰٪ پس از تحویل نهایی و تست عملیاتی.
              </p>
            </section>

            {/* مورد دوم: پشتیبانی */}
            <section className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-black font-black text-lg">۰۲</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">دوره تضمین کیفیت</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                تمامی پروژه‌ها شامل یک دوره ۳۰ روزه «تضمین عملکرد» هستند. پس از پایان این دوره، برای اطمینان از توسعه مستمر، قراردادهای «نگهداری و پشتیبانیِ ویژه» در سطوح مختلف در دسترس شما خواهد بود.
              </p>
            </section>

            {/* مورد سوم: تعهدات */}
            <section className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-black font-black text-lg">۰۳</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">تعهدات طرفین</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                مشتری متعهد به ارائه اطلاعاتِ لازم جهتِ پیاده‌سازیِ اتوماسیون بوده و ما متعهد به حفظِ محرمانگیِ تمامیِ داده‌هایِ کسب‌وکارِ شما هستیم.
              </p>
            </section>

          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-10 text-center">
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all text-sm md:text-base"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}