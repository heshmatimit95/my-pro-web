"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// مودال استعلام قیمت فقط هنگام باز شدن بارگذاری می‌شود (صفحه اصلی سبک‌تر بالا می‌آید)
const ProjectEstimator = dynamic(() => import('@/components/ProjectEstimator'), { ssr: false });

export default function Header({ setIsProjectModalOpen }: any) {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // بستن مودال استعلام قیمت با کلید Esc
  useEffect(() => {
    if (!isEstimatorOpen) return;
    const onKey = (ev: KeyboardEvent) => { if (ev.key === "Escape") setIsEstimatorOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isEstimatorOpen]);

  // بستن منوی موبایل بعد از کلیک روی یک گزینه
  const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open");
  };

  return (
    <>
      {/* هدر اصلی */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-950">
            My<span className="text-amber-500">Pro</span>Web
          </div>

          <div className="hidden md:flex gap-8 font-bold text-blue-950">
            <Link href="/" className="hover:text-amber-500 transition-colors">خانه</Link>
            <a href="#top" className="hover:text-amber-500 transition-colors">پروژه‌ها شاخص</a>
            <a href="#calculator" className="hover:text-amber-500 transition-colors">محاسبه رایگان هزینه و زمان</a>
              <Link href="/portfolio" className="hover:text-amber-500 transition-colors">مشاهده نمونه کارها</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">مسیر همکاری</Link>
           <a href="#aboutus" className="hover:text-amber-500 transition-colors">درباره ما</a>
          
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
            >
              مشاوره رایگان
            </button>

           
           
           
            <button 
              onClick={() => setIsEstimatorOpen(true)} 
              className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-black hover:bg-blue-950 transition-all shadow-lg"
            >
              استعلام قیمت
            </button>
          </div>
          {/* منوی موبایل: با details کار می‌کند و برای باز شدن به جاوااسکریپت نیاز ندارد */}
          <details className="md:hidden group">
            <summary
              aria-label="منو"
              className="list-none cursor-pointer p-2 text-blue-950 [&::-webkit-details-marker]:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </summary>
            <div className="absolute top-full left-0 right-0 border-t border-slate-200 bg-white px-8 py-4 flex flex-col gap-4 font-bold text-blue-950 shadow-lg">
            <Link href="/" onClick={closeMenu} className="hover:text-amber-500 transition-colors">خانه</Link>
            <a href="#top" onClick={closeMenu} className="hover:text-amber-500 transition-colors">پروژه‌ها شاخص</a>
            <a href="#calculator" onClick={closeMenu} className="hover:text-amber-500 transition-colors">محاسبه رایگان هزینه و زمان</a>
            <Link href="/portfolio" onClick={closeMenu} className="hover:text-amber-500 transition-colors">مشاهده نمونه کارها</Link>
            <Link href="/terms" onClick={closeMenu} className="hover:text-amber-500 transition-colors">مسیر همکاری</Link>
            <a href="#aboutus" onClick={closeMenu} className="hover:text-amber-500 transition-colors">درباره ما</a>
            <button onClick={(e) => { closeMenu(e); setIsProjectModalOpen(true); }} className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-black">مشاوره رایگان</button>
            <button onClick={(e) => { closeMenu(e); setIsEstimatorOpen(true); }} className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-black">استعلام قیمت</button>
            </div>
          </details>
        </nav>
      </header>
     {/* مودال استعلام قیمت (خارج از هدر و ناف قرار دارد) */}
      {isEstimatorOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsEstimatorOpen(false)}>
          <div className="relative w-full max-w-lg" onClick={(ev) => ev.stopPropagation()}>
            
                        {/* کانتینر سفید مودال */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              <ProjectEstimator onClose={() => setIsEstimatorOpen(false)} />
            

            </div>
          </div>
        </div>
      )}
    </>
  );
}
