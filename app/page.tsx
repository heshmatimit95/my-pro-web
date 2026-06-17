"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, MessageCircle, Home as HomeIcon, FolderKanban, TrendingUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CommentList from '../CommentList';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';

// اتصال به Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export default function ContactHeader() {
  // هوک‌ها (Hooks) حتماً در ابتدای تابع
  const [loading, setLoading] = useState(false);
  const [dailyHours, setDailyHours] = useState<number>(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [orders, setOrders] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isprojectModalOpen, setIsprojectModalOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { title: "توسعه وب‌سایت‌های داینامیک", desc: "طراحی پنل‌های مدیریت رستوران و سامانه‌های اختصاصی.", icon: "🌐" },
    { title: "هوشمندسازی فایل‌های اکسل", desc: "طراحی ماکروهای VBA و داشبوردهای مدیریتی خودکار.", icon: "📊" },
    { title: "سئو و بهینه‌سازی", desc: "افزایش سرعت و رتبه سایت شما در گوگل.", icon: "🚀" }
  ];

  // توابع منطقی
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    const name = e.target.name.value;
    const message = e.target.message.value;

    const { error } = await supabase.from('comments').insert([{ name, message }]);
    
    if (error) {
      alert("خطا در ثبت: " + error.message);
    } else {
      alert("سپاس ! نظرت ثبت شد. ");
      e.target.reset();
    }
    setLoading(false);
  };


const handleContactSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  // ۱. اول عملیات ذخیره در Supabase
  const { error: dbError } = await supabase
    .from('contacts')
    .insert([
      { 
        name: restaurantName, 
        phone: userPhone, 
        email: userEmail, 
        orders: orders,
        calc_result: result 
      }
    ]);

  if (dbError) {
    alert("خطا در ذخیره دیتابیس: " + dbError.message);
  } else {
    // ۲. اگر ذخیره شد، حالا ایمیل را بفرست
    alert("با موفقیت ثبت شد!");
    // اینجا کد emailjs را قرار بده
  }
  
  setLoading(false);
};

  const calculateTimeSaved = () => {
    return (dailyHours * 30) + (3 * 8);
  };

  const handleSupportClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 10000);
  };

  useEffect(() => {
    if (!isTimeModalOpen) {
      setDailyHours(0);
    }
  }, [isTimeModalOpen]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-20" dir="rtl">


               {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
             onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}  
          {/* هدر شیک و مدرن */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-950">
            My<span className="text-amber-500">Pro</span>Web
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-blue-950">
     <a href="/" className="hover:text-amber-500 transition-colors">خانه</a>
   <a href="#top" className="hover:text-amber-500 transition-colors">پروژه‌ها شاخص</a>
  <a href="#calculator" className="hover:text-amber-500 transition-colors">محاسبه رایگان سودِ غذا و هزینه‌ها</a>
     <a href="#aboutus" className="hover:text-amber-500 transition-colors">درباره ما</a>
 <a href="#QR" className="hover:text-amber-500 transition-colors">پرسش و پاسخ</a>
   <a href="/portfolio" className="hover:text-amber-500 transition-colors">مشاهده نمونه کارها</a>       
          </div>
          <button 
 onClick={() => setIsprojectModalOpen(true)}
  className= "   bg-blue-950 text-white px-6 py-2.5 rounded-full font-black hover:bg-amber-500 transition-all shadow-lg"
>
 مشاوره رایگان
</button>
        </nav>
      </header>

<section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white w-full flex flex-col justify-center items-center pt-25 pb-25">



  <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center">

    My<span className="text-amber-500">Pro</span>Web

  </h1>

  {/* متن توضیحات با فاصله استاندارد از عنوان */}

  <p className="mt-8  text-3xl md:text-2xl font-black tracking-tighter text-center">

 «دخلت رو دقیق کن، سودت رو دو برابر کن!»

  </p>

  <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-2xl text-center leading-relaxed px-4">

   تبدیل ایده‌های پیچیده به ابزارهای هوشمند وب وداشبوردهای مدیریتی  حرفه ای اکسل

  </p>
  {/* دکمه با فاصله استاندارد از متن */}

  <div className="mt-8">
<a
  href="/portfolio"  className="inline-block px-8 py-4 bg-white text-blue-950 font-black rounded-xl hover:scale-105 transition-transform shadow-lg border-2 "
>
  مشاهده نمونه‌کارها
</a>
  </div>

</section>
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

<section className="py-25 px-8 bg-slate-50">
  <h2 className="text-4xl font-black text-center mb-25 text-blue-950">
    چگونه از ایده تا <span className="text-amber-500">تحویل نهایی</span> همراه شما هستیم؟
  </h2>
  
  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
    {[
      { step: "۰۱", title: "مشاوره", desc: "نیازسنجی و تحلیل فنی پروژه" },
      { step: "۰۲", title: "طراحی", desc: "ارائه پیش‌نمایشِ اختصاصی" },
      { step: "۰۳", title: "توسعه", desc: "کدنویسی بهینه و هوشمند" },
      { step: "۰۴", title: "تحویل", desc: "آموزش و پشتیبانی دائم" }
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center text-center">
        
        {/* دایره چرخان */}
        <div className="relative w-24 h-24 mb-8 animate-spin">
          <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
            {/* فونت عدد استپ بسیار بلد */}
            <div className="text-white text-3xl font-black tracking-tighter">
              {item.step}
            </div>
          </div>
        </div>

        {/* عنوان و توضیحات همگی با فونت بلک (ضخیم) */}
        <h3 className="text-xl font-black text-blue-950 mb-3">{item.title}</h3>
        <p className="text-slate-900 text-sm font-black leading-relaxed max-w-[200px]">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

<section id="aboutus" className="py-25 bg-gradient-to-t from-blue-950 to-slate-900 text-white px-8">
  {/* اینجا gap-12 را به gap-6 تغییر دادم تا فاصله دو ستون کم شود */}
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-center">
    
    {/* ستون عکس - متمایل به چپِ کامل */}
    <div className="flex justify-center md:justify-start md:pl-16 items-center">
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-amber-500 overflow-hidden shadow-2xl">
        <img 
            src="/proweb.jpeg" 
            alt="متخصص هوشمندسازی و وب" 
            className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* ستون متن */}
    <div>
      <h3 className="text-2xl text-amber-500 font-bold uppercase tracking-widest mb-2">درباره ما</h3>
      <h2 className="text-4xl font-extrabold text-white mb-6">داستان ما؛ فراتر از اعداد</h2>
      <div className="w-25 h-1.5 bg-amber-500 rounded-full mb-6"></div>
<p className="text-lg text-white leading-relaxed mb-6">
  من متخصصِ مدیریت و تحلیل داده در اکسل هستم و حالا با همین نگاهِ دقیق و داده‌محور، وارد دنیای طراحی وب شده‌ام. 
  رویکردِ من در پروژه‌ها این است: 
  <span className="block mt-4 font-semibold text-white">• تبدیلِ داده‌های پیچیده به داشبوردهای مدیریتیِ ساده</span>
  <span className="block font-semibold text-white">• ساختِ وب‌ سایت‌های کاربردی با تمرکز بر نظم و کارایی</span>
  <span className="block font-semibold text-white">• یادگیری و پیاده‌سازی جدیدترین راهکارها برای رشد کسب‌وکارهای کوچک</span>
</p>
    </div>
  </div>
</section>



{/* بخش فراخوان  */}
<section className="flex flex-col items-center justify-center py-25 bg-white-950">
     {/* عنوان - فاصله از پایین (mb-10) بیشتر شد تا از آیکون فاصله بگیرد */}
  <h3 className="text-3xl md:text-4xl font-black text-blue text-center px-10 mb-12">
    آیا می‌دانید چقدر وقت و پول شما هدر می‌رود؟
  </h3>
 
  {/* آیکون - mb-4 مقدار کمی است تا فلش به دکمه نزدیک بماند */}
  <div className="animate-bounce mb-6 text-cyan-400">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
      </div>
  {/* باکس نارنجی */}
  <a 
  href="#calculator"
      className="bg-amber-500 hover:bg-amber-400 text-blue-950 px-10 py-4 rounded-full text-lg font-black shadow-lg shadow-amber-500/30 transition-all hover:scale-105 cursor-pointer"
  >
    🚀 همین حالا با یک کلیک سود خود را رایگان محاسبه کنید
  </a>
</section>

{/*  بدون محاسبه مودالِ شروع پروژه */}
{isprojectModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" dir="rtl">
    {/* بک‌دراپ */}
    <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm" onClick={() => setIsprojectModalOpen(false)}></div>
    
    <div className="relative bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl">
      <h3 className="text-2xl font-black text-blue-950 mb-4 text-right">دریافت مشاوره رایگان</h3>
      
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="نام کسب وکار.." 
          value={restaurantName} 
          onChange={(e) => setRestaurantName(e.target.value)} 
          className="w-full p-4 bg-slate-100 rounded-xl border border-slate-200 text-right" 
        />
        <input 
          type="tel" 
          placeholder="شماره تماس..." 
          dir="ltr" 
          value={userPhone} 
          onChange={(e) => setUserPhone(e.target.value)} 
          className="w-full p-4 bg-slate-100 rounded-xl border border-slate-200 text-right" 
        />
        
        <button 
  onClick={() => {
    emailjs.send(
      'service_4404k4a', 
      'template_an9us09', 
      { restaurant_name: restaurantName, phone: userPhone }, 
      'iU4RrJwUhH5MO3M7X'
    )
    .then(() => { 
      alert("با موفقیت ارسال شد."); 
      // فقط فیلدها را پاک می‌کنیم، مودال را نمی‌بندیم:
      setRestaurantName("");
      setUserPhone("");
    })
    .catch(() => alert("خطا در ارسال اطلاعات"));
  }}
  className="w-full py-4 bg-cyan-500 text-white font-black rounded-xl hover:bg-cyan-600 transition-all"
>
  ثبت درخواست
</button>
      </div>

      {/* دکمه ضربدر */}
      <button 
        onClick={() => setIsprojectModalOpen(false)} // اصلاح شد
        className="absolute top-6 left-6 text-slate-400 hover:text-blue-950 transition-colors"
      >
        ✕
      </button>
    </div>
  </div>
)}

{/* بخش پروژه‌ها */}
<section id="top" className="py-24 bg-gradient-to-t from-blue-950 to-slate-900 text-white px-8">
  <h2 className="text-4xl font-extrabold text-center mb-20">پروژه‌های شاخص</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
{/* کارت ۱: رستوران اصیل + کارت‌های تعاملی */}
<div className="bg-amber-500 rounded-3xl overflow-hidden shadow-sm border border-blue-100 h-fit">
  <img src="/asil.jpeg" alt="پروژه رستوران" className="w-full h-48 object-cover" />
  <div className="p-4 text-blue-950 text-center font-bold">پروژه رستوران اصیل</div>
 
<div className="grid grid-cols-3 gap-2 px-2 pb-4">
  {[
    { icon: "⚡", title: "تحویل سریع", desc: "۷ روزه", color: "text-amber-500" },
    { icon: "🛡️", title: "پشتیبانی", desc: "کلیک کن!", isSupport: true, color: "font-bold text-blue-600" },
    { icon: "🎯", title: "مدیریت", desc: "آسان", color: "text-green-500" }
  ].map((item, index) => (
    <div 
      key={index}
      onClick={() => item.isSupport ? handleSupportClick() : null}
      className={`relative p-3 rounded-2xl border-2 border-blue-400/30 bg-white 
                 hover:border-blue-500 hover:shadow-blue-200 hover:scale-[1.03] 
                 transition-all duration-300 cursor-pointer 
                 flex flex-col items-center justify-center text-center shadow-sm group`}
    >
      <div className={`text-2xl mb-1 group-hover:scale-110 transition-transform ${item.icon === "🛡️" ? "font-bold text-blue-600" : item.color}`}>
        {item.icon}
      </div>
      
      <h4 className="text-xs font-black text-blue-950 mb-0.5 truncate w-full">{item.title}</h4>
      {/* متن‌های desc بولد شدند با کلاس font-bold */}
      <p className="text-[11px] font-bold text-slate-800">{item.desc}</p>

      {item.isSupport && showMessage && (
        <div className="absolute -top-16 left-0 right-0 bg-blue-600 text-white font-bold p-2 rounded-xl shadow-2xl z-50 animate-pulse text-[20px] text-center">
          «همکارِ ۲۴ ساعته تو، همیشه بیداریم!»
        </div>
      )}
    </div>
  ))}
</div>
 </div>
    {/* کارت ۲: ویدیوی آپارات */}
    <div className="bg-black rounded-3xl overflow-hidden shadow-xl border border-white/10">
      <iframe 
        className="w-full h-48" 
        src="https://www.aparat.com/video/video/embed/videohash/atqvi67/vt/frame"  
        allowFullScreen
      ></iframe>
      <div className="p-4 text-white text-center font-bold">دموی ویدیویی</div>
    </div>

    {/* کارت ۳: پروژه بزودی */}
    <div className="h-full bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center hover:bg-blue-800 transition-all cursor-pointer">
      <span className="text-xl font-bold mb-2">پروژه ۳</span>
      <span className="text-sm opacity-70">بزودی...</span>
    </div>

  </div>
</section>

{/* سکشنِ بعدی سوالات */}

<section id="QR" className="py-24 px-8 bg-slate-50">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-16 text-blue-950">
      پاسخ به <span className="text-amber-500">سوالات شما</span>
    </h2>
    
    <div className="space-y-4">
      {[
        { q: "آیا وب‌سایت‌های شما امنیت کافی دارند؟", a: "بله، من در طراحی وب‌سایت‌ها از استانداردهای امنیتی پایه استفاده می‌کنم تا داده‌های کسب‌وکار شما و اطلاعات مشتریانتان کاملاً محافظت‌شده باقی بماند." },
        { q: "آیا وب‌ سایت ما می‌تواند به فایل‌های اکسل متصل شود؟",a:"تخصص ما در کنار طراحی وب، یکپارچه‌سازی سیستم‌های داده‌محور است. می‌توانم وب‌ سایت شما را به گونه‌ای طراحی کنم که داده‌های خروجیِ اکسل‌تان را به راحتی در پنل مدیریتی‌تان تحلیل و مشاهده کنید." 
},
        { q: "آیا سیستم با نرم‌افزارهای موجود سازگار است؟", a: "بله، راهکارهای من از طریق روش‌های استاندارد، با نرم‌افزارهای مالی و ERPهای داخلی هماهنگ می‌شوند." },
        { q: "زمان تحویل پروژه هوشمندسازی چقدر است؟", a: "با توجه به تحلیل نیازهای شما، زمان‌بندی دقیق در جلسه مشاوره مشخص می‌شود اما به طور معمول پروژه‌ها بین ۷ تا ۱۵ روز کاری نهایی می‌شوند." },
        { q: "آیا پس از تحویل، پشتیبانی فنی ارائه می‌دهید؟", a: "قطعا! تمامی پروژه‌ها دارای یک ماه پشتیبانی رایگان به همراه فیلم آموزشی و امکان تمدید قرارداد برای نگهداری و توسعه هستند." },
        { q: "امنیت داده‌های حساس در اکسل چگونه تضمین می‌شود؟", a: "من از روش‌های محافظت از فایل و محدودسازی دسترسی در سطوح مختلف استفاده می‌کنم تا امنیت اطلاعات شما حفظ شود." }
      ].map((faq, i) => (
        <details 
          key={i} 
          name="faq-accordion" 
          className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <summary className="p-6 font-black text-blue-950 text-lg list-none flex justify-between items-center cursor-pointer">
            {faq.q}
            <span className="bg-slate-100 p-2 rounded-full group-open:bg-amber-500 group-open:text-white transition-colors">
              <svg 
                className="w-5 h-5 transition-transform group-open:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </summary>
          <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t-0">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

     {/* بخش محاسبه‌گر هوشمند */}
      <section id="calculator"   className="py-20 px-8 bg-blue-950 text-blue-950 text-center">
     <div className="flex flex-col items-center mb-6">
  <div className="p-4 bg-white/10 rounded-full text-amber-400 mb-4 animate-pulse">
    <TrendingUp size={48} strokeWidth={2.5} />
  </div>
  <h2 className="text-3xl font-black text-white"> چقدر در زمان و هزینه صرفه‌جویی  می‌کنید؟</h2>
</div>
      
        <div className="max-w-xl mx-auto bg-white/5 p-10 rounded-[2rem] backdrop-blur-md border border-white/20">
          <p className="mb-6 text-white text-lg font-medium">میانگین سفارشات روزانه خود را وارد کنید:</p>
          <div className="relative w-full">
            <input 
              type="number" 
              value={orders}
              placeholder="مثال: ۵۰" 
              onChange={(e) => { setOrders(e.target.value); setResult(null); }}
              style={{ MozAppearance: 'textfield' }}
              className="w-full p-4 rounded-xl bg-white text-blue-950 placeholder-blue-400 text-center font-bold text-xl outline-none border-2 border-blue-400 focus:border-cyan-400 pr-4 pl-12" 
            />
            {orders && (
              <button onClick={() => { setOrders(""); setResult(null); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-red-500 transition-colors font-black text-2xl">×</button>
            )}
          </div>
          <button 
            onClick={() => {
              const avgDailyOrders = parseInt(orders || "0");
              if (avgDailyOrders > 0) {
                const hours = (avgDailyOrders * 1.5 * 30) / 60;
                const rials = hours * 100000;
                setResult(`⏳ صرفه‌جویی ماهانه: ${hours.toFixed(0)} ساعت وقت مفید پرسنل\n💰 صرفه‌جویی اقتصادی: ${rials.toLocaleString()} تومان در ماه\n✅ نتیجه: سیستم ما معادلِ یک نیروی تمام‌وقت برای شما کار می‌کند!`);
              } else {
                setResult("لطفاً یک عدد معتبر وارد کنید.");
              }
            }}
            className="mt-6 w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            محاسبه سودآوری
          </button>
          {result && (
            <div className="mt-8 p-6 bg-cyan-900/40 border border-cyan-400/30 rounded-2xl text-right animate-in fade-in zoom-in duration-500">
              <h4 className="font-bold text-cyan-300 mb-3 border-b border-cyan-400/20 pb-2">گزارش اختصاصی شما:</h4>
              <p className="whitespace-pre-line text-sm md:text-base leading-8 text-white/90">{result}</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-6 w-full py-4 bg-white text-blue-950 font-black rounded-xl hover:bg-cyan-100 transition-all shadow-xl"
              >
                دریافت مشاوره رایگان برای پیاده‌سازی
              </button>
            </div>
          )}
       <p className="mt-8 text-xs text-blue-300 opacity-100">
      * بر اساسِ میانگین ۱.۵ دقیقه صرفه‌جویی در ثبت و پردازشِ هر سفارش.*
    </p>
        </div>
        
      </section>
 

{/* مودال تماس با فیلد محاسبات - اصلاح شده با اعتبارسنجی دقیق */}
{isModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" dir="rtl">
    <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
    <div className="relative bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl">
      
      <button onClick={() => setIsModalOpen(false)} className="absolute top-6 left-6 text-slate-400 hover:text-blue-950 transition-colors">✕</button>

      <h3 className="text-2xl font-black text-blue-950 mb-4">دریافت مشاوره رایگان</h3>

      <form 
        className="space-y-4"
       onSubmit={async (e) => {
  e.preventDefault();
  try {
    // ۱. ارسال ایمیل
    await emailjs.send(
      'service_4404k4a', 
      'template_ei26ocg', 
      { restaurant_name: restaurantName, phone: userPhone, email: userEmail,  calc_result:result , orders: orders   }, 
      'iU4RrJwUhH5MO3M7X'
    );

    // ۲. ذخیره در Supabase
    // حتماً مطمئن شوید supabase قبلاً در این فایل تعریف شده است
// ۲. ذخیره در Supabase
    // حتماً مطمئن شوید supabase قبلاً در این فایل تعریف شده است
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        { 
          name: restaurantName, 
          phone: userPhone, 
          email: userEmail, 
          orders: orders,
          calc_result: result 
        }
      ]);

    if (dbError) throw dbError; // اگر خطایی در دیتابیس بود به catch برود

    alert("درخواست شما با موفقیت ثبت و ارسال شد.");
    setIsModalOpen(false);
  } catch (err) {
    console.error("Error details:", err); // جزئیات خطا را در کنسول ببینید
    alert("خطا در ارسال. لطفاً دوباره تلاش کنید.");
  }
}}
      >
        <div className="space-y-4">
          <input 
            required 
            type="text" 
            placeholder="* نام کسب و کار"
            value={restaurantName} 
            onChange={(e) => setRestaurantName(e.target.value)} 
            className="w-full p-4 bg-slate-100 rounded-xl border border-slate-200 text-right" 
          />
          
          <input 
            required 
            type="email" 
            placeholder="ایمیل شما *" 
            dir="ltr" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
            className="w-full p-4 bg-slate-100 rounded-xl border border-slate-200 text-right" 
          />
          
          <input 
            required 
            type="tel" 
            placeholder="شماره تماس (مثال: 09121234567) *" 
            dir="ltr" 
            value={userPhone} 
            pattern="[0-9]{10,11}"
            title="لطفاً شماره تماس معتبر (فقط اعداد) وارد کنید"
            onChange={(e) => setUserPhone(e.target.value)} 
            className="w-full p-4 bg-slate-100 rounded-xl border border-slate-200 text-right" 
          />
        </div>

        {result && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-blue-950">
            <strong>خلاصه محاسبه:</strong> {result.split('\n')[0]}
          </div>
        )}

        <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl transition-all">
          ثبت درخواست
        </button>
      </form>
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

{/* بخش نظرات*/}

<section className="py-20 px-8 bg-slate-850">
  <div className="max-w-xl mx-auto">
    {/* کارت اصلی با بُردِر آبی */}
    <div className="bg-slate-850 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-blue-900 relative overflow-hidden">
      
      {/* دکوراسیون پشتِ فرم */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <h3 className="text-2xl font-black text-blue-950 mb-2 text-center">
        نظرشما برای ما طلاییه! 🌟
      </h3>
      <p className="text-center text-slate-800 mb-12 text-sm font-bold"> 
        تجربه‌ت رو با بقیه در میون بذار
      </p>

<form onSubmit={handleSubmit} className="space-y-4 relative">
  <input 
    name="name"
    type="text" 
    placeholder="نامِ شما" 
    required
    className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-blue-100  focus:bg-white  focus:border-blue-100 outline-none transition-all duration-300 placeholder:text-slate-700"
  />
  <textarea 
    name="message"
    placeholder="هر چی دوست داری بنویس..." 
    required
    className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-blue-100 focus:bg-white focus:border-blue-100 outline-none transition-all duration-300 h-32 placeholder:text-slate-700 resize-none"
  ></textarea>
    <button 
    type="submit" 
    className="w-full bg-blue-950 text-white font-black py-4 rounded-2xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-200"
  >
    {loading ? "در حال ثبت..." : "ثبت نظرِ درخشان 🚀"}
  </button>
</form>
 <CommentList />
 
    </div>
  </div>
  
</section>

<footer className= "bg-blue-950 text-white py-16 px-8">
  <div id="servises"    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-15">
        {/* ستون اول: درباره ما */}
    <div className="space-y-4">
      <h3 className="text-2xl font-black text-amber-500">هوشمندسازی</h3>
      <p className="text-slate-300 text-sm leading-relaxed">
       
        «MyProWeb ؛ جایی که اعدادِ رستورانِ شما، به زبانِ سود صحبت می‌کنند.» . ما با ترکیب هوش مصنوعی و اتوماسیون اکسل، فرآیندهای کسب‌کار شما را سریع‌تر، دقیق‌تر و هوشمندتر می‌کنیم. با یک کلیک بر روی دکمه زیر رایگان زمان هدر رفته را  محاسبه کنید .
      </p>
              <button 
  onClick={() => setIsTimeModalOpen(true)}
 className="bg-amber-500 text-white px-3 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
>
 ماشین‌حسابِ زمان از دست رفته
</button>
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


</main>
);
}
