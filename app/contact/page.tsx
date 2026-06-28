export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b2447] py-20 px-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        
        {/* تیتر صفحه */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl font-black text-white mb-4">
            ارتباط با <span className="text-amber-500">تیم فنی</span>
          </h1>
          <p className="text-slate-300 text-lg">
            آماده‌ایم تا هوش مصنوعی و اتوماسیون را به قلب کسب‌وکار شما بیاوریم.
          </p>
        </div>

        {/* کارت تماس */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactItem label="شماره پشتیبانی" value="09191294068" />
              <ContactItem label="ایمیل" value="myproweb56@gmail.com" />
              <ContactItem label="تلگرام" value="myproweb56@" />
            </div>
            <div className="flex flex-col justify-center border-r border-white/10 pr-0 md:pr-8">
              <h3 className="text-white font-bold text-xl mb-4">ساعات کاری</h3>
              <p className="text-blue-200 font-bold">
                ما در روزهای کاری از ساعت ۹ صبح تا ۶ عصر آماده شنیدن ایده‌های شما و پاسخگویی به سوالات فنی‌تان هستیم.
              </p>
              <div className="mt-8 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500 text-sm">
                به‌صورت آنلاین و از راه دور، در سراسر ایران در کنار شما هستیم.
              </div>
            </div>
          </div>
        </div>

        {/* دکمه بازگشت */}
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all transform hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </a>
        </div>

      </div>
    </div>
  );
}

function ContactItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-white font-bold text-lg hover:text-amber-500 transition-colors">{value}</p>
    </div>
  );
}