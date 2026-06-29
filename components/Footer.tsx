'use client'
import { useEffect } from 'react';
import Link from 'next/link';
export default function Footer({ setIsTimeModalOpen }: any) {

  return (
    <footer className="bg-[#0b2447] text-white py-16 px-8">
      {/* ساختار گرید ۳ ستونه که ستون وسط را دقیقاً مدیریت می‌کند */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-right">
        
        {/* ستون اول: معرفی (سمت راست) */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-amber-500">هوشمندسازی پرو وب؛ راهکار جامع خودکارسازی کسب‌ وکارها</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            MyProWeb؛ جایی که اعداد رستوران شما، به زبان سود صحبت می‌کنند. ما با ترکیب هوش مصنوعی و اتوماسیون اکسل، فرآیندهای کسب‌وکار شما را سریع‌تر، دقیق‌تر و هوشمندتر می‌کنیم. با یک کلیک بر روی دکمه زیر رایگان زمان هدر رفته را محاسبه کنید.
          </p>
          <button 
            onClick={() => setIsTimeModalOpen(true)}
            className="bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition shadow-lg"
          >
            ماشین‌حسابِ زمان از دست رفته
          </button>
        </div>

        {/* ستون دوم: دسترسی سریع (وسط) */}
<div className="flex flex-col items-end md:items-center">
  <div className="w-full md:w-auto">
    <h3 className="text-xl font-black mb-6 border-b-2 border-amber-500 pb-2 inline-block">دسترسی سریع</h3>
    <ul className="space-y-4 text-slate-300 text-sm">
      <li>
        <Link href="/terms" className="hover:text-amber-500 transition-colors">مسیر همکاری</Link>
      </li>
      <li>
       <a href="/portfolio#consulat" className="hover:text-amber-500 transition-colors">
  مشاوره رایگان
</a>
      </li>
      <li>
        <Link href="/portfolio#projects" className="hover:text-amber-500 transition-colors">نمونه پروژه‌های سودآور</Link>
      </li>
      <li>
        <p> <Link href="/contact" className="hover:text-amber-500 transition-colors">پشتیبانی فنی در ساعات اداری</Link></p>
      </li>
    <li>
        <Link href="/#QR" className="hover:text-amber-500 transition-colors">سوالات متداول</Link>
      </li>
   
    </ul>
  </div>
</div>
        {/* ستون سوم: تماس با ما (سمت چپ) */}
        <div className="flex flex-col items-end md:items-start">
          
          <h3 className="text-xl font-black mb-6 border-b-2 border-amber-500 pb-2 inline-block">تماس با ما</h3>
          <div className="space-y-4 text-slate-300 text-sm text-right md:text-right">
                        <p>ایمیل: myproweb56@gmail.com</p>
            <p>شماره تماس: ۰۹۱۹۱۲۹۴۰۶۸</p>

<p>برای دسترسی به شبکه‌های اجتماعی روی علامت مثبت کلیک کنید.</p>
      </div>
{/* کانتینر برای مدیریت بهتر موقعیت لوگو */}
<div className="flex items-center justify-start mt-4">
  <a 
    referrerPolicy="origin" 
    target="_blank" 
    href="https://trustseal.enamad.ir/?id=750152&Code=d7LDKiWiCltqdvBMTSzMnBSq7sfXd4Pe"
  >
    <img 
      referrerPolicy="origin" 
      src="https://trustseal.enamad.ir/logo.aspx?id=750152&Code=d7LDKiWiCltqdvBMTSzMnBSq7sfXd4Pe" 
      alt="اینماد" 
      style={{ cursor: 'pointer' }} 
      className="w-18 h-18 object-contain bg-white rounded-lg p-1" // این کلاس‌ها را حتماً اضافه کن
    />
  </a>
</div>
 </div>
       
        </div>



      {/* کپی‌رایت */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-900 text-center text-slate-300 text-xs">
        تمامی حقوق این سایت متعلق به «هوشمندسازی پرو وب» است. ۱۴۰۵ ©
     
      </div>
    
 

    </footer>
  );
}


