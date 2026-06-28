"use client";
import { useState } from 'react';
import ProjectEstimator from '@/components/ProjectEstimator';

export default function Header({ setIsProjectModalOpen }: any) {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <>
      {/* هدر اصلی */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-950">
            My<span className="text-amber-500">Pro</span>Web
          </div>

          <div className="hidden md:flex gap-8 font-bold text-blue-950">
            <a href="/" className="hover:text-amber-500 transition-colors">خانه</a>
            <a href="#top" className="hover:text-amber-500 transition-colors">پروژه‌ها شاخص</a>
            <a href="#calculator" className="hover:text-amber-500 transition-colors">محاسبه رایگان هزینه و زمان</a>
              <a href="/portfolio" className="hover:text-amber-500 transition-colors">مشاهده نمونه کارها</a>
            <a href="/terms" className="hover:text-amber-500 transition-colors">مسیر همکاری</a>
           <a href="#aboutus" className="hover:text-amber-500 transition-colors">درباره ما</a>
          
          </div>

          <div className="flex gap-3">
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
    </>
  );
}