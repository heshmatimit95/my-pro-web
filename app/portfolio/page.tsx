"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';
import Footer from "../../components/Footer";
import Counter from "../../components/Counter";
import ProjectEstimator from '@/components/ProjectEstimator';
import { projects } from './projectsData'; // ایمپورت کردن داده‌ها
export default function Portfolio() {
  // --- وضعیت‌های اصلی (States) ---
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [dailyHours, setDailyHours] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

const projects = [
  { 
    id: 1, 
    title: "سیستم هوشمند مدیریت رستوران (اصیل)", 
    desc: "اتوماسیون کامل سفارشات آنلاین، سالن و آشپزخانه", 
    video: "/asil.mp4", 
    fullDetail: `مدیریت هم‌زمان و مانیتورینگ دقیق فرآیندها، چالش اصلی رستوران‌های بزرگ و زنجیره‌ای است. این سیستم یک پلتفرم اتوماسیون جامع است که تمام بخش‌های عملیاتی را یکپارچه می‌کند.

قابلیت‌های کلیدی سیستم:
🔹 پایش آنی سفارشات: تفکیک و هدایت هوشمند سفارش‌های آنلاین، بیرون‌بر و حضوری به تفکیک میزها.
🔹 مدیریت زنجیره آشپزخانه: ارسال آنی جزییات سفارش به مانیتورهای آشپزخانه و بخش بسته‌بندی جهت افزایش سرعت سرویس‌دهی.
🔹 گزارش‌گیری مالی و لحظه‌ای: داشبورد تحلیل فروش روزانه، سودآوری اقلام منو و صدور خودکار فاکتورهای آنلاین.

این سیستم با حذف خطاهای انسانی در ثبت سفارش، تجربه مشتری و بهره‌وری نیروی کار را به حداکثر می‌رساند.`, 
    color: "from-blue-500 to-blue-700"
  },
  { 
    id: 2, 
    title: "    دموی اولیه وب‌سایت تور گردشگری شاهو ", 
    desc: "مدیریت داینامیک پکیج‌های مسافرتی و فروش آنلاین تور", 
    video: "shahu.mp4",
    fullDetail: `در صنعت گردشگری، ارائه اطلاعات شفاف و فرآیند رزرو سریع، کلید تبدیل بازدیدکننده به مشتری است. وب‌سایت شاهو یک پلتفرم پویا برای معرفی، مدیریت و فروش پکیج‌های تور داخلی و خارجی است.

قابلیت‌های کلیدی سیستم:
🔹     دموی اولیه مدیریت داینامیک تورها: امکان تعریف پکیج‌های مسافرتی، زمان‌بندی حرکت، ظرفیت هتل‌ها و نرخ‌گذاری هوشمند بر اساس فصول.
🔹 درگاه پرداخت و ررزواسیون آنلاین: فرآیند کاملاً خودکار ثبت‌نام مسافران، تایید مدارک و صدور آنی بلیط و واچر هتل.
🔹 پنل کاربری تخصصی: فضای اختصاصی برای مسافران جهت پیگیری سوابق سفرها، تراکنش‌های مالی و دریافت اطلاعیه‌های سفر.

این پروژه یک راهکار فول‌استک برای آژانس‌های مسافرتی است که زنجیره فروش سنتی را به یک موتور درآمدزایی آنلاین تبدیل می‌کند.`, 
    color: "from-sky-500 to-cyan-700" 
  },
  { 
    id: 3, 
    title: "داشبورد هوشمند ارزی و مالی اکسل", 
    desc: "تحلیل خودکار بازار دلار و طلا به ۴ زبان", 
    video: "/gold-3.mp4", 
    fullDetail: `داشبورد مدیریتی در اکسل با قابلیت وب‌اسکرپینگ و دریافت لحظه‌ای نرخ دلار و طلا. این پروژه مجهز به موتور تحلیل هوشمند (باکس بنفش تایپ متحرک)، آرشیو خودکار سوابق قیمت و معماری منحصربه‌فرد مولتی‌لنگوئیج است که کل محیط داشبورد، چیدمان فیزیکی باکس‌ها (Mirroring) و نمودارها را به صورت آنی بین ۴ زبان فارسی، انگلیسی، فرانسه و آلمانی سوئیچ می‌کند.`, 
    color: "from-amber-400 to-orange-600" 
  },
  {
    id: 4, 
    title: "سیستم مدیریت دارایی (SHIS)", 
    desc: "مدیریت هوشمند دارایی‌های IT و تجهیزات سازمانی", 
    video: "/SHIS.mp4", 
    fullDetail: `در سازمان‌های بزرگ، ردیابی دقیق تجهیزات سخت‌افزاری و نرم‌افزاری پرسنل همواره یک چالش جدی است. سیستم SHIS راهکاری جامع و متمرکز برای مدیریت هوشمند این دارایی‌هاست؛ فراتر از یک لیست سنتی و ساده.

قابلیت‌های کلیدی سیستم:
🔹 بازیابی آنی اطلاعات: استخراج کامل مشخصات فنی سخت‌افزار (CPU، RAM، Storage و تجهیزات جانبی) تنها با جستجوی کد ملی یا نام پرسنل.
🔹 پایگاه داده متمرکز: تجمیع داده‌های پراکنده شبکه و سازمان در یک بانک اطلاعاتی ساختاریافته، امن و بهینه.
🔹 رابط کاربری (UI) پیشرفته: طراحی محیطی کاربرپسند و پویا که مدیریت و تحلیل داده‌های سنگین را برای واحد IT و پشتیبانی ساده می‌کند.

این پروژه اثبات می‌کند که چگونه می‌توان با معماری هوشمندانه پایگاه داده، نیاز سازمان به نرم‌افزارهای گران‌قیمت ERP را برطرف کرد.`, 
    color: "from-blue-500 to-blue-700" 
  },
  { 
    id: 5, 
    title: "سیستم گزارش‌گیری  BPMRS", 
    desc: "سیستم گزارش‌گیری مدیریت فرآیندها BPMRS", 
    video: "/BPMRS.mp4", 
    fullDetail: `مدیریت سازمان‌های بزرگ بدون داشتن دیدِ فرآیندی جامع غیرممکن است. پلتفرم BPMRS راهکاری یکپارچه برای مانیتورینگ و ارزیابی دقیق فرآیندها و زیرفرآیندهای سازمانی است که کنترل کاملی از مدل‌سازی تا اجرای عملیاتی به مدیران می‌دهد.

ویژگی‌های شاخص این سیستم:
🔹  قابلیت نمایش و رهگیری آنی گردش کار (Workflow) هر فرآیند تنها با یک کلیک.
🔹 سنجش سطح بلوغ فرآیندی: ارزیابی و تحلیل هوشمند میزان پختگی و اثربخشی فرآیندها در بخش‌های مختلف سازمان.
این ابزار با ترکیب خلاقانه منطق فرآیندی، اکسل را به یک موتور قدرتمند BPMS تبدیل کرده تا شکاف بین "طراحی فرآیند" و "اجرای عملیاتی" کاملاً پر شود.`, 
    color: "from-indigo-500 to-purple-700" 
  },
  { 
    id: 6, 
    title: "پروژه MAP (تحلیل نظام پیشنهادات)", 
    desc: "پاکسازی داده‌های انبوه و داشبورد مدیریتی نظام پیشنهادات", 
    video: "/AMAR.mp4", 
    fullDetail: `در سازمان‌های بزرگ، داده‌های خام معمولاً نامنظم، پراکنده و آشفته هستند. نرم‌افزار MAP راهکاری هوشمند و اختصاصی است که برای نظام پیشنهادات شرکت مخابرات طراحی کرده‌ام تا داده‌های کثیف را به تصمیمات استراتژیک مدیریتی تبدیل کند.

قابلیت‌های کلیدی این سیستم:
🔹 پاکسازی و آماده‌سازی داده‌ها (ETL): فرآیند خودکارسازی یکپارچه‌سازی داده‌های حجیم و نامنظم با استفاده از Power Query.
🔹 مدل‌سازی پیشرفته و امتیازدهی: بهره‌گیری از پایگاه داده Power Pivot و فرمول‌نویسی داینامیک جهت ارزیابی و امتیازدهی هوشمند پیشنهادات.
🔹 داشبورد مدیریتی پویا: بصری‌سازی پیشرفته شاخص‌های کلیدی عملکرد (KPIs) جهت تسهیل تصمیم‌گیری‌های کلان برای مدیران ارشد.

این سیستم اثبات می‌کند که با معماری درست ابزارها، می‌توان از دلِ آشفتگیِ داده‌های سازمانی، گنجینه‌ای از مسیرهای موفقیت استخراج کرد.`, 
    color: "from-amber-400 to-orange-600" 
  },
  { 
    id: 7, 
    title: "گزارش تحلیلی فروش و زنجیره تأمین شرکت پخش دارو", 
    desc: "کنترل موجودی هوشمند و تحلیل زنجیره تأمین دارو", 
    video: "/داشبورد فروش.mp4", 
    fullDetail: `در صنایع حساس مانند پخش و توزیع دارو، مدیریت دقیق زنجیره تأمین و پیش‌بینی تقاضا اهمیت حیاتی دارد. این داشبورد تحلیلی ابزاری قدرتمند برای پایش لحظه‌ای فرآیندهای فروش و بهینه‌سازی انبارداری است.

قابلیت‌های کلیدی این سیستم:
🔹 کنترل هوشمند موجودی: مانیتورینگ آنلاین وضعیت انبارها جهت جلوگیری از رسوب کالا یا مواجهه با کسریِ اقلام دارویی استراتژیک.
🔹 تحلیل رفتار بازار و فروش: شناسایی محصولات پرفروش، ارزیابی عملکرد مناطق جغرافیایی و پایش حاشیه سود کانال‌های توزیع.
🔹 داشبورد مدیریتی پویا: نمایش شاخص‌های کلیدی زنجیره تأمین (KPIs) در قالبی کاملاً بصری جهت اتخاذ تصمیمات سریع و دقیق.

این پروژه نشان می‌دهد که چگونه می‌توان با یکپارچه‌سازی داده‌های فروش، بهره‌وری عملیاتی را در سیستم‌های توزیع مویرگی به حداکثر رساند.`, 
    color: "from-green-500 to-emerald-700" 
  },
  { 
    id: 8, 
    title: "داشبورد داینامیک مانیتورینگ عملکرد مراکز فروش (Sales Performance Dashboard)", 
    desc: "پایش هوشمند عملکرد، تحلیل روندها و رتبه‌بندی خودکار مراکز", 
    video: "/نمودارهای داینامیک.mp4", 
    fullDetail: ` ارزیابی دقیق و سریع عملکرد دفاتر و مراکز فروش یک ضرورت است. این داشبورد تخصصی به جای گزارش‌های متنی و سنتی طولانی، وضعیت سلامت عملیاتی و بازدهی هر مرکز را در یک نگاه به تصویر می‌کشد.

قابلیت‌های کلیدی این سیستم:
🔹 پایش لحظه‌ای KPIها: مانیتورینگ  شاخص‌های کلیدی عملکرد و مقایسه آنی و هوشمند خروجی با اهداف (Targets) تعیین‌شده.
🔹 تحلیل روند (Trend Analysis): بررسی صعودی یا نزولی بودن عملکرد مراکز در بازه‌های زمانی مختلف جهت پیش‌بینی‌های دقیق‌تر بازار.
🔹 سیستم رتبه‌بندی خودکار: شناسایی هوشمند مراکز برتر و تفکیک نقاط نیازمند بهبود جهت تخصیص بهینه منابع و بودجه.

این سیستم با حذف فرآیندهای تحلیل دستی، سرعت و دقت تصمیم‌گیری مدیران ارشد را در مدیریت شبکه و خدمات به شدت افزایش داده است.`, 
    color: "from-green-500 to-emerald-700" 
  },
{ 
  id: 9, 
  title: "سیستم هوشمند و داینامیک انبارداری", 
  desc: "مدیریت زنجیره تأمین، پایش لحظه‌ای موجودی و کنترل کسری کالا", 
  video: "coming-soon", // به جای آدرس ویدیو، این کلمه کلیدی را بگذار
  fullDetail: `مدیریت دقیق و بهینه انبار، قلب تپنده بخش عملیات و فروش هر کسب‌وکار است. این سیستم انبارداری داینامیک ابزاری هوشمند برای کنترل متمرکز، دقیق و لحظه‌ای گردش کالا در سازمان است.
قابلیت‌های کلیدی این سیستم:
🔹 کنترل پویای موجودی: پایش آنلاین و خودکار وضعیت کالاهای ورودی و خروجی جهت بهینه‌سازی حجم انبارداری.
🔹 هشدار خودکار کسری کالا: سیستم هوشمند نقطه‌ سفارش (Reorder Point) برای جلوگیری از اتمام ناگهانی اقلام استراتژیک.
🔹 گزارش‌گیری و نمودارهای داینامیک: بصری‌سازی وضعیت انبار و سرعت گردش کالا جهت تصمیم‌گیری‌های مالی و تأمین بهینه.

این پروژه فرآیندهای سنتی و دستی انبارداری را به یک سیستم کاملاً مکانیزه و قابل اطمینان تبدیل می‌کند تا بهره‌وری زنجیره تأمین به حداکثر برسد.`, 
  color: "from-green-500 to-emerald-700" 
}
];

const handleFormSubmit = async (formData: any) => {
  const response = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  if (response.ok) {
    alert("ممنون! ثبت شد.");
  } else {
    alert("خطا: " + result.error);
  }
};
  return (
<main className="min-h-screen bg-slate-50" dir="rtl">
      {/* هدر */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-950">My<span className="text-amber-500">Pro</span>Web</div>
          
          <div className="hidden md:flex gap-6 font-bold text-blue-950 items-center">
            <a href="/" className="hover:text-amber-500 transition-colors">خانه</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">پروژه‌ها</a>
            <a href="#consulat" className="hover:text-amber-500 transition-colors">مشاوره رایگان</a>
            <a href="#result" className="hover:text-amber-500 transition-colors">نتایج ملموس</a>
            <a href="/terms" className="hover:text-amber-500 transition-colors">مسیر همکاری</a>
            <a href="/contact" className="hover:text-amber-500 transition-colors">تماس با ما</a>
            
            <button 
              onClick={() => setIsEstimatorOpen(true)} 
              className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
            >
              استعلام قیمت
            </button>
          </div>
        </nav>
      </header>
     {/* مودال استعلام قیمت (خارج از هدر و ناف قرار دارد) */}
      {isEstimatorOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg">
            
                        {/* کانتینر سفید مودال */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              <ProjectEstimator />
            

            </div>
          </div>
        </div>
      )}

      

{/* این بخشِ آبی‌رنگِ صفحه است */}
    <section className="py-25 bg-[#0b2447] text-center overflow-hidden">
      
      {/* تیتر پروژه‌های سودآور با رنگ سفید و نارنجی */}
<motion.h2 
  className="text-3xl md:text-3xl font-black mb-8 select-none"
  
  // تنظیمات اولیه و ورود
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  
  // حرکت دائمی
  animate={{ y: [0, -15, 0] }}
  
  // ادغامِ تنظیمات در یک آبجکتِ transition
  transition={{
    // تنظیمات مربوط به ورود (Spring)
    default: { type: "spring", stiffness: 300, damping: 10 },
    // تنظیمات مربوط به حرکت دائمی (y)
    y: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1 // شروع بعد از اتمام انیمیشن ورود
    }
  }}
>
  <span className="text-white">پروژه‌های </span>
  <span className="text-amber-500">سودآور</span>
</motion.h2>
      {/* باکس متحرک که به صورت خودکار خودش را نشان می‌دهد */}
      <div className="max-w-3xl mx-auto px-3">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }} // افکتِ ملایم هنگامِ هاور
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-lg shadow-2xl"
        >
          <div className="space-y-4">
            <h3 className="text-2xl text-white font-bold">اتوماسیون جامع رستوران</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              ما با ترکیب هوش مصنوعی، خطاهای محاسباتی شما را به صفر می‌رسانیم. 
              سیستمی که در هر ثانیه، سودِ واقعی شما را محاسبه می‌کند.
            </p>
            
            {/* خط جداکننده نوری */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent my-6"></div>
            
            <div className="text-amber-400 font-black text-2xl animate-pulse">
              افزایش ۳۰ درصدی بهره‌وری در ۳ ماه!
            </div>
<div className="flex justify-center items-center my-4"> {/* کانتینر برای مرکز کردن */}
  <div className="animate-bounce text-amber-500"> {/* تغییر رنگ به نارنجی */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>
              
              <button 
  onClick={() => setIsTimeModalOpen(true)}
 className="bg-amber-500 text-white px-3 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
>
 ماشین‌حسابِ زمان از دست رفته
</button>
          </div>
        </motion.div>
            </div>
    </section>
 
{/* بخش کارت‌های انیمیشنی */}
<section id="projects" className="max-w-6xl mx-auto py-10 px-6">
  {/* عنوان بخش پورتفولیو */}
  <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-blue-950">
    پروژه‌های من
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((pro) => (
      <motion.div 
        key={pro.id} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-slate-50 rounded-3xl p-6 shadow-lg border border-slate-300 hover:shadow-3xl transition-all duration-500"
      >
        {/* بخش ویدیو یا گرادینت به‌زودی */}
        <div className={`h-40 rounded-2xl mb-6 overflow-hidden relative ${pro.video !== "coming-soon" && !pro.video ? `bg-gradient-to-tr ${pro.color}` : ""}`}>
          
          {/* حالت اول: اگر ویدیو در حال آماده‌سازی بود */}
          {pro.video === "coming-soon" ? (
            <div className={`w-full h-full bg-gradient-to-tr ${pro.color} flex flex-col items-center justify-center p-4 text-center relative`}>
              {/* یک لایه تیره ملایم برای خوانایی فوق‌العاده متن روی هر نوع گرادینتی */}
              <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>
              
              <span className="text-base md:text-lg font-bold text-white z-10 animate-bounce flex items-center gap-1">
                ⏳ به‌زودی...
              </span>
              <p className="text-[11px] md:text-xs text-slate-100/90 mt-1 z-10 font-medium leading-relaxed">
                ویدیو این پروژه در حال آماده‌سازی است
              </p>
            </div>
          ) : pro.video && pro.video.trim() !== "" ? (
            /* حالت دوم: اگر آدرس ویدیو موجود بود */
            <video 
              src={pro.video} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover" 
            />
          ) : (
            /* حالت سوم: اگر کلاً فیلد ویدیو خالی یا ناموجود بود */
            <div className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>

        {/* بخش متون کارت با اصلاح سایز فونت برای موبایل و دسکتاپ */}
        <h3 className="text-medium md:text-base font-bold text-blue-950 truncate">
          {pro.title}
        </h3>

        <p className="text-sm md:text-sm text-slate-600 mt-2 mb-6 line-clamp-2">
          {pro.desc}
        </p>

        {/* دکمه اکشن باز کردن مودال جزئیات */}
        <button 
          onClick={() => setSelectedProject(pro)} 
          className="w-full py-2.5 md:py-3 rounded-xl border-2 border-amber-500 font-bold hover:bg-amber-500 hover:text-white text-amber-600 transition-all text-base tracking-tight"
        >
          مشاهده جزئیات
        </button>
      </motion.div>
    ))}
  </div>
</section>

<section className="py-20 bg-white" dir="rtl">
  <div className="max-w-4xl mx-auto px-8">
    <h2 className="text-3xl font-black text-center mb-12 text-blue-950">مدیران درباره سیستم‌ها چه می‌گویند؟</h2>
    
    <div className="space-y-8">
      {/* کارت اول */}
      <div className="bg-slate-50 p-8 rounded-3xl border-r-8 border-amber-500 shadow-xl">
        <p className="text-lg  text-slate-700 leading-relaxed mb-6">
          "قبلاً حساب‌ و کتابِ رستوران رو دستی انجام می‌دادیم و کلی ضررِ پنهان داشتیم. سیستمِ هوشمندی که پیاده‌سازی شد، نه تنها اشتباهات رو به صفر رسوند، بلکه مدیریتِ سرویس دهی به مشتری  و ارسال غذا رو هم سریع‌تر کرد."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-white font-black">غ</div>
          <div>
            <h4 className="font-bold text-blue-950">غفور پور عباس</h4>
            <p className="text-sm text-blue">مدیر رستوران‌ اصیل</p>
          </div>
        </div>
      </div>

      {/* کارت دوم */}
      <div className="bg-slate-50 p-8 rounded-3xl border-r-8 border-amber-500 shadow-xl">
        <p className="text-lg  text-blue leading-relaxed mb-6">
          "پروژه نرم افزار BPMRS. پروژه جمع‌آوری کلیه فرایندها و یکپارچه سازی آن جهت بهره‌برداری و مانیتور فرآیندهای کاری بسیار موفق و کاربردی توسط ایشان انجام شد."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-white font-black">ش</div>
          <div>
            <h4 className="font-bold text-blue-950">مهندس شاهین حسین‌نژاد</h4>
            <p className="text-sm text-blue">مدیر تیم اداره بهبود فرایندها و روشهای  شرکت مخابرات ایران- منطقه تهران </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* بخش فراخوان برای اقدام (CTA) - موتورِ جذب مشتری */}
<section id="consulat" className="scroll-mt-20 py-34 bg-blue-950 text-white text-center px-8 relative overflow-hidden">
  {/* افکت نوری بسیار ملایم برای درخشش بخش */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent pointer-events-none"></div>

  <div className="relative z-6 max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-3xl gap-5   font-black mb-4 leading-tight">
      وقتشه هزینه‌های اضافی رو حذف کنی و <span className="text-amber-500">سودت رو افزایش بدی!</span>
    </h2>
    <p className="text-slate-300 mb-8 text-lg md:text-xl">
      من سیستم‌هایی می‌سازم که کار رو برای تو راحت‌تر و دقیق‌تر می‌کنه. بیا یه گپ ۱۵ دقیقه‌ای بزنیم؛ اگه راهکاری داشتم در خدمتت هستم.
    </p>

    <a 
    href="https://wa.me/989194077618" 
      target="_blank"
      className="inline-flex items-center gap-5 bg-amber-500 text-blue-950 px-8 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]"
    >
      <MessageCircle size={25} />
      شروع مشاوره رایگان در واتس‌اپ
    </a>
    
    <div className="mt-6 flex justify-center items-center gap-4 text-slate-400 font-medium">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      <p className="text-sm italic">پاسخ‌گویی سریع در ساعات اداری</p>
    </div>
  </div>
</section>



{/* بخش اعدادِ فارسیِ متحرک */}
<section id="result"    className="py-34 bg-slate-70">
  <div className="max-w-6xl mx-auto px-8">
    <h2 className="text-3xl font-black text-center mb-12 text-blue-950">نتایجِ ملموس برای کسب‌ وکار شما</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Counter from={0} to={15} title="کاهش هزینه‌های جاری" showPercent={true} />
      <Counter from={0} to={40} title="صرفه‌جویی در زمان مدیریت" showPercent={true} />
      <Counter from={0} to={100} title="دقت در گزارش‌گیری" showPercent={true} />
    </div>
  <p className="text-center text-blue-900 text-sm md:text-base mt-8 leading-relaxed">
    * ارقام فوق بر اساس میانگین عملکرد سیستم‌های اتوماسیون پیاده‌سازی شده است.
</p>
  </div>
</section>

{/* ماشین حساب زمان ه */}
{isTimeModalOpen && (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md">
    <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl">
      <h3 className="text-2xl font-black text-blue-950 mb-6 text-center">ماشین‌حسابِ رایگان وقت</h3>
      
      {/* فیلدِ ورودی که قبلاً گم شده بود */}
      <label className="block text-sm font-bold text-amber-600 mb-2">روزانه چند ساعت کارِ تکراری داری؟ عدد در باکس زیر وارد کنید </label>
      <input 
        type="number" 
        className="w-full p-4 border-2 border-blue-200 rounded-xl mb-6 text-xl font-bold text-center"
        placeholder="مثلاً: 2"
        onChange={(e) => setDailyHours(Number(e.target.value))}
      />
      {/* نمایشِ هوشمندِ نتیجه */}
{dailyHours > 0 && (
<div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 mt-4">
  <p className="text-gray-700 text-smtext-center ">شما ماهانه حدود:</p>
  
  <div className="text-4xl font-black text-blue-600 my-4 text-center">
    {(dailyHours * 30) + 24} ساعت
  </div>
  
  <p className="text-blue-950 font-bold border-t border-blue-200 pt-2 text-center">
    از عمرتان را صرفِ کارهای کاغذی و دستی می‌کنید!
  </p>
  
  <div className="mt-4 p-2 bg-white rounded-xl border border-blue-100 text-center">
    <p className="text-sm text-gray-600 font-bold">
      ضررِ مالیِ پنهان: 
      <span className="text-blue-700 mx-1">
        {((dailyHours * 30) + 24) * 200000} تومان
      </span>
    </p>
  </div>
<p className="text-sm md:text-base text-black mt-4  leading-relaxed text-center font-medium">
  «هر ساعتی که صرفِ حساب‌وکتابِ دستی می‌کنید، یعنی فرصتِ جذبِ یک مشتریِ جدید را سوزانده‌اید.»
</p>
</div>
)}
      <button 
        onClick={() => setIsTimeModalOpen(false)}
        className="w-full mt-6 bg-blue-950 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
      >
        بستن و بازگشت
      </button>
    </div>
  </div>
)}
{/* دکمه شناور رفتن به بالا و پایین */}
<div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2" dir='right'>
  <button
    onClick={() => {
      // اگر در بالای صفحه هستیم به پایین برو، در غیر این صورت به بالا برو
      if (window.scrollY === 0) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }}
    className="bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-all animate-bounce"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
    </svg>
  </button>

<div 
  className="fixed bottom-8 left-8 z-[9999] flex flex-col items-center gap-4"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
{/* دکمه‌های بازشونده */}
{isOpen && (
  <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-10 fade-in zoom-in duration-300">
    
    {/* واتس‌اپ */}
    <a href="https://wa.me/989194077618" target="_blank" className="group relative flex items-center justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط واتس‌اپ</span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <IoLogoWhatsapp size={30} color="white" />
      </div>
    </a>

    {/* تلگرام */}
    <a href="https://telegram.me/@myproweb56" target="_blank" className="group relative flex items-center justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط تلگرام</span>
      <div className="w-14 h-14 bg-[#3E99D8] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <SiTelegram size={30} color="white" />
      </div>
    </a>

    {/* روبیکا */}
    <a href="https://rubika.ir/@gloriiia" target="_blank" className="group relative flex items-center  justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط روبیکا</span>
      <div className="w-14 h-14 !bg-[#A92078] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </div>
    </a>
    
{/* لینکدین */}
    <a href="www.linkedin.com/in/azam-heshmati-b6604b141" target="_blank" className="group relative flex items-center justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط در لینکدین</span>
      <div className="w-14 h-14 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <FaLinkedin size={30} color="white" />
      </div>
    </a>
  </div>
)}

  {/* دکمه اصلی */}
{/* دکمه اصلی - بنفش اختصاصی با اولویت بالا */}
<button 
  onClick={() => setIsOpen(!isOpen)}
  className="group relative w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all  text-white font-black text-2xl"
>
  {/* شرط isOpen && برای اینکه وقتی منو بسته شد، متن هم حتماً مخفی شود */}
  {isOpen && (
    <span className="absolute -right-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
      بستن
    </span>
  )}
  
  {/* آیکون ضربدر یا مثبت */}
  {isOpen ? "✕" : "+"}
</button>
</div>
</div>
{selectedProject && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
    {/* تغییرات اصلی: استفاده از max-h-[90vh] و max-w-2xl */}
    <div className="bg-white p-6 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
      
      {/* هدر مودال */}
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h2 className="text-xl font-black truncate">{selectedProject.title}</h2>
        <button onClick={() => setSelectedProject(null)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">✕</button>
      </div>
      
      {/* کانتینر ویدیو - کمی کوچک‌تر */}
      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-4 bg-black flex-shrink-0">
        <video 
          src={selectedProject.video} 
          controls 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* توضیحات با اسکرول داخلی که از کادر بیرون نزند */}
      <div className="overflow-y-auto flex-grow pr-2">
        <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
          {selectedProject.fullDetail}
        </p>
      </div>

    </div>
  </div>
)}
  <Footer setIsTimeModalOpen={setIsTimeModalOpen} />  
  {/* ماشین حساب زمان ه */}
{isTimeModalOpen && (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md">
    <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl">
      <h3 className="text-2xl font-black text-blue-950 mb-6 text-center">ماشین‌حسابِ رایگان وقت</h3>
      
      {/* فیلدِ ورودی که قبلاً گم شده بود */}
      <label className="block text-sm font-bold text-amber-600 mb-2">روزانه چند ساعت کارِ تکراری داری؟ عدد در باکس زیر وارد کنید </label>
      <input 
        type="number" 
        className="w-full p-4 border-2 border-blue-200 rounded-xl mb-6 text-xl font-bold text-center"
        placeholder="مثلاً: 2"
        onChange={(e) => setDailyHours(Number(e.target.value))}
      />

      {/* نمایشِ هوشمندِ نتیجه */}
{dailyHours > 0 && (
<div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 mt-4">
  <p className="text-gray-700 text-smtext-center ">شما ماهانه حدود:</p>
  
  <div className="text-4xl font-black text-blue-600 my-4 text-center">
    {(dailyHours * 30) + 24} ساعت
  </div>
  
  <p className="text-blue-950 font-bold border-t border-blue-200 pt-2 text-center">
    از عمرتان را صرفِ کارهای کاغذی و دستی می‌کنید!
  </p>
  
  <div className="mt-4 p-2 bg-white rounded-xl border border-blue-100 text-center">
    <p className="text-sm text-gray-600 font-bold">
      ضررِ مالیِ پنهان: 
      <span className="text-blue-700 mx-1">
        {((dailyHours * 30) + 24) * 200000} تومان
      </span>
    </p>
  </div>
<p className="text-sm md:text-base text-black mt-4  leading-relaxed text-center font-medium">
  «هر ساعتی که صرفِ حساب‌وکتابِ دستی می‌کنید، یعنی فرصتِ جذبِ یک مشتریِ جدید را سوزانده‌اید.»
</p>
</div>
)}
      <button 
        onClick={() => setIsTimeModalOpen(false)}
        className="w-full mt-6 bg-blue-950 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
      >
        بستن و بازگشت
      </button>
    </div>
  </div>
)}  
   
 
   </main>
  );
}


