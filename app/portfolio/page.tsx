"use client";
import OrderForm from '@/components/OrderForm';
import { motion } from "framer-motion";
import { Send, MessageCircle, Home as HomeIcon, FolderKanban, TrendingUp, X } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';
import Counter from "../../components/Counter";
import { useState } from "react";
export default function Portfolio() {
const projects = [
  { 
    id: 1, 
    title: "سیستم رستوران", 
    desc: "مدیریت سفارشات آنلاین", 
    video: "/restaurant.mp4", 
    fullDetail: "این سیستم یک پنل مدیریتی کامل برای رستوران‌هاست که شامل مدیریت سفارشات، گزارش‌گیری لحظه‌ای و فاکتورهای آنلاین می‌شود.", 
    color: "from-blue-500 to-blue-700" 
  },
 { 
    id: 2, 
    title: "سیستم رستوران", 
    desc: "مدیریت سفارشات آنلاین", 
    video: "/restaurant.mp4", 
    fullDetail: "این سیستم یک پنل مدیریتی کامل برای رستوران‌هاست که شامل مدیریت سفارشات، گزارش‌گیری لحظه‌ای و فاکتورهای آنلاین می‌شود.", 
    color: "from-blue-500 to-blue-700" 
  },

  { 
    id: 3, 
    title: "سیستم رستوران", 
    desc: "مدیریت سفارشات آنلاین", 
    video: "/restaurant.mp4", 
    fullDetail: "این سیستم یک پنل مدیریتی کامل برای رستوران‌هاست که شامل مدیریت سفارشات، گزارش‌گیری لحظه‌ای و فاکتورهای آنلاین می‌شود.", 
    color: "from-blue-500 to-blue-700" 
  },
  
    { 
    id: 4, 
    title: "وب‌سایت اختصاصی", 
    desc: "طراحی مدرن و پرسرعت", 
    video: "/web.mp4", 
    fullDetail: "طراحی و توسعه وب‌سایت‌های مدرن با تکنولوژی Next.js و Tailwind CSS برای تجربه کاربری فوق‌سریع و افزایش نرخ تبدیل مشتری.", 
    color: "from-indigo-500 to-purple-700" 
  },
  
   { 
    id: 5, 
    title: "داشبورد اکسل", 
    desc: "تحلیل هوشمند داده‌ها", 
    video: "/Gold-X.mp4", 
    fullDetail: "داشبورد هوشمند اکسل با قابلیت اتصال به دیتابیس، تحلیل خودکار فروش و نمودارهای پیشرفته برای تصمیم‌گیری مدیران کسب‌وکار.", 
    color: "from-amber-400 to-orange-600" 
  },
{ 
    id: 6, 
    title: "سیستم انبارداری", 
    desc: "کنترل موجودی هوشمند", 
    video: "/warehouse.mp4", // حتما فایل ویدیو را در public داشته باش
    fullDetail: "این سیستم به تو کمک می‌کند موجودی انبار را به صورت لحظه‌ای کنترل کنی و از کسریِ کالا جلوگیری کنی.", 
    color: "from-green-500 to-emerald-700" // رنگ جدید برای تنوع
  },

];
   
const [dailyHours, setDailyHours] = useState<number>(0);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
 

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
 <nav  id="servises"  className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
 <div className="text-2xl font-black text-blue-950">My<span className="text-amber-500">Pro</span>Web</div>
  <div className="hidden md:flex gap-8 font-bold text-blue-950">
 <a href="/" className="hover:text-amber-500 transition-colors">خانه</a>
  <a href="#project" className="hover:text-amber-500 transition-colors">پروژه‌ها</a>
     <a href="#consulat" className="hover:text-amber-500 transition-colors">مشاوره رایگان</a>
     <a href="#result" className="hover:text-amber-500 transition-colors"> نتایج ملموس</a>
    
    </div>
    
    <button 
  onClick={() => setIsTimeModalOpen(true)}
 className="bg-amber-500 text-white px-3 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
>
 ماشین‌حسابِ زمان از دست رفته
</button>
      </nav>
      </header>


{/* این بخشِ آبی‌رنگِ صفحه است */}
<section className="bg-blue-950 py-40 flex flex-col items-center justify-center gap-15">
  <h1 className="text-4xl md:text-5xl font-black text-white">
    پروژه‌های <span className="text-amber-500">سودآور</span>
  </h1>
 {/* <OrderForm />*/}
</section>

      
      
   


{/* بخش کارت‌های انیمیشنی */}
<section id="projects" className="max-w-6xl   mx-auto py-10 px-6">
  <h2 className="text-4xl font-black text-center  mb-16 text-blue-950"></h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((pro) => (
      <motion.div 
        key={pro.id} 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-slate-50 rounded-3xl p-6 shadow-lg border border-slate-300 hover:shadow-3xl transition-all duration-500"
      >
        {/* بخش ویدیو - اگر ویدیو وجود داشت پخش می‌شود، در غیر این صورت گرادینت نمایش داده می‌شود */}
        <div className={`h-40 rounded-2xl mb-6 overflow-hidden ${!pro.video ? `bg-gradient-to-tr ${pro.color}` : ""}`}>
          {pro.video ? (
            <video 
              src={pro.video} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full opacity-90 group-hover:opacity-100 transition-opacity`}></div>
          )}
        </div>

        <h3 className="text-xl font-bold text-blue-950">{pro.title}</h3>
        <p className="text-slate-600 mt-2 mb-6">{pro.desc}</p>
        
        <button 
          onClick={() => setSelectedProject(pro)} 
          className="w-full py-3 rounded-xl border-2 border-amber-500 font-bold hover:bg-amber-500 hover:text-white transition-all"
        >
          مشاهده جزئیات
        </button>
      </motion.div>
    ))}
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-8">
    <h2 className="text-3xl font-black text-center mb-12 text-blue-950">مدیران درباره سیستم‌ها چه می‌گویند؟</h2>
    
    <div className="bg-slate-50 p-8 rounded-3xl border-r-8 border-amber-500 shadow-xl">
      <p className="text-lg italic text-slate-700 leading-relaxed mb-6">
        "قبلاً حساب‌وکتابِ رستوران رو دستی انجام می‌دادیم و کلی ضررِ پنهان داشتیم. سیستمِ هوشمندی که پیاده‌سازی شد، نه تنها اشتباهات رو به صفر رسوند، بلکه مدیریتِ انبارمون رو هم ۳۰٪ سریع‌تر کرد."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-white font-black">م</div>
        <div>
          <h4 className="font-bold text-blue-950">مهندس رضایی</h4>
          <p className="text-sm text-slate-500">مدیر مجموعه رستوران‌های زنجیره‌ای</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* بخش فراخوان برای اقدام (CTA) - موتورِ جذب مشتری */}
<section   id="consulat"  className="py-34 bg-blue-950 text-white text-center px-8 relative overflow-hidden">
  {/* افکت نوری بسیار ملایم برای درخشش بخش */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent pointer-events-none"></div>

  <div className="relative z-8 max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-5xl font-black mb-4 leading-tight">
      وقتشه هزینه‌های اضافی رو حذف کنی و <span className="text-amber-500">سودت رو افزایش بدی!</span>
    </h2>
    <p className="text-slate-300 mb-10 text-lg md:text-xl">
      من سیستم‌هایی می‌سازم که کار رو برای تو راحت‌تر و دقیق‌تر می‌کنه. بیا یه گپ ۱۵ دقیقه‌ای بزنیم؛ اگه راهکاری داشتم در خدمتت هستم.
    </p>

    <a 
    href="https://wa.me/YOUR_PHONE_NUMBER" 
      target="_blank"
      className="inline-flex items-center gap-3 bg-amber-500 text-blue-950 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]"
    >
      <MessageCircle size={28} />
      شروع مشاوره رایگان در واتس‌اپ
    </a>
    
    <div className="mt-6 flex justify-center items-center gap-2 text-slate-400 font-medium">
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
    <a href="https://wa.me/..." target="_blank" className="group relative flex items-center justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط واتس‌اپ</span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <IoLogoWhatsapp size={30} color="white" />
      </div>
    </a>

    {/* تلگرام */}
    <a href="https://telegram.me/..." target="_blank" className="group relative flex items-center justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط تلگرام</span>
      <div className="w-14 h-14 bg-[#3E99D8] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <SiTelegram size={30} color="white" />
      </div>
    </a>

    {/* روبیکا */}
    <a href="https://rubika.ir/..." target="_blank" className="group relative flex items-center  justify-end">
      <span className="absolute left-20 hidden group-hover:block bg-white text-black px-4 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">ارتباط روبیکا</span>
      <div className="w-14 h-14 !bg-[#A92078] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </div>
    </a>
    
{/* لینکدین */}
    <a href="https://linkedin.com/in/your_profile" target="_blank" className="group relative flex items-center justify-end">
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
<footer className= "bg-blue-950 text-white py-16 px-8">
  <div    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-15">
        {/* ستون اول: درباره ما */}
    <div className="space-y-4">
      <h3 className="text-2xl font-black text-amber-500">هوشمندسازی</h3>
      <p className="text-slate-300 text-sm leading-relaxed">
       
        «MyProWeb ؛ جایی که اعدادِ رستورانِ شما، به زبانِ سود صحبت می‌کنند.» . ما با ترکیب هوش مصنوعی و اتوماسیون اکسل، فرآیندهای کسب‌کار شما را سریع‌تر، دقیق‌تر و هوشمندتر می‌کنیم. با یک کلیک بر روی دکمه زیر رایگان زمان هدر رفته را  محاسبه کنید .
      </p>

    </div>

     {/* ستون دوم: لینک‌های سریع */}
    <div className="space-y-4">
      <h4 className="font-bold text-lg">دسترسی سریع</h4>
      <ul className="space-y-2 text-slate-300 text-sm">
        <li><a href="#" className="hover:text-amber-500 transition-colors">مشاوره رایگان</a></li>
        <li><a href="#" className="hover:text-amber-500 transition-colors">نمونه پروژه‌های اکسل</a></li>
        <li><a href="#" className="hover:text-amber-500 transition-colors">سوالات متداول</a></li>
      </ul>
    </div>

    {/* ستون سوم: تماس با ما */}
    <div className="space-y-4">
      <h4 className="font-bold text-lg">تماس با ما</h4>
      <ul className="space-y-2 text-slate-300 text-sm">
        <li>ایمیل: info@yourdomain.com</li>
        <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
        <li className="pt-2 flex gap-4">
          <a href="#" target="_blank" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
            <Send size={16} />
          </a>
          <a href="#" target="_blank" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
            <MessageCircle size={16} />
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* کپی‌رایت */}
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-blue-900 text-center text-slate-500 text-xs">
  
    تمامی حقوق این سایت متعلق به «هوشمندسازی» است. ۱۴۰۵ ©
  </div>
</footer>
{/* مودالِ جدید با قابلیتِ نمایشِ ویدیویِ بزرگ */}
{selectedProject && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
    <div className="bg-white p-6 rounded-3xl max-w-3xl w-full text-black shadow-2xl" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-black">{selectedProject.title}</h2>
        <button onClick={() => setSelectedProject(null)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200">✕</button>
      </div>
      
      {/* پخشِ ویدیوی بزرگ در مودال */}
      <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6 bg-black">
        <video 
          src={selectedProject.video} 
          controls 
          autoPlay 
          className="w-full h-full object-contain"
        />
      </div>
      
      <p className="text-slate-600 text-lg">{selectedProject.fullDetail}</p>
    </div>
  </div>
)}
    </main>
  );
}


