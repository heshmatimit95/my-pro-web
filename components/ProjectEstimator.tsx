"use client";
import { useState } from 'react';
import { services } from './pricingData';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [selectedMainService, setSelectedMainService] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  
  const [phone, setPhone] = useState("");
  const [clientName, setClientName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isPhoneValid = /^09\d{9}$/.test(phone);

const handleSubmitRequest = (e: React.FormEvent) => {
  e.preventDefault();
  
  // ۱. بلافاصله وضعیت را به موفقیت تغییر می‌دهیم تا مشتری حس کند ثبت شد
  setIsSuccess(true); 

  // ۲. آماده‌سازی اطلاعات
  const now = new Date();
  const dateString = now.toLocaleDateString('fa-IR');
  const timeString = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });

// استفاده از \u200F برای تضمین راست‌چین بودن در تمام گوشی‌ها
const message = `\u200F🚨  myproweb سفارش جدید
تاریخ: ${dateString} - ساعت: ${timeString}

نام: ${clientName}
موبایل: ${phone}
سرویس: ${selectedMainService?.name}
پلن: ${selectedPlan?.name}
مبلغ: ${selectedPlan?.price?.toLocaleString()} تومان`;
  // ۳. باز کردن واتس‌اپ در یک پنجره جدید (پشت صحنه)
  // کاربر در سایت پیام موفقیت را می‌بیند و همزمان واتس‌اپ باز می‌شود
  const phoneNumber = "989194077618"; 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
};

  const handleClose = () => window.location.reload();

return (
  <div className="w-full h-full overflow-hidden flex flex-col bg-white" dir="rtl">
    <div className="flex-1 overflow-y-auto p-6">
      {isSuccess ? (
        <div className="text-center py-10">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-xl font-black text-blue-950 mb-5">درخواست شما با موفقیت ثبت شد. " برای هماهنگیِ جزئیات و مشاوره رایگان، در واتس‌اپ به شما پیام می‌دهم." با سپاس !</h2>
          <button onClick={handleClose} className="w-32 bg-orange-500 text-white py-2 rounded-3xl font-bold">بستن</button>
        </div>
      ) : (
        <div>
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-black text-blue-900 mb-6">چه سیستمی نیاز داری؟</h2>
              {services.map((s: any) => (
                <button 
                  key={s.name} 
                  onClick={() => { setSelectedMainService(s); setStep(2); }} 
                  className="w-full p-5 mb-4 bg-white border-2 border-slate-100 rounded-2xl font-bold hover:border-orange-500 transition-all text-right shadow-sm"
                >
                  {s.name}
                </button>
              ))}
              <button onClick={handleClose} className="w-full mt-4 p-4 bg-orange-500 text-white rounded-2xl font-bold">بستن</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-black text-blue-900 mb-4">پلن‌های {selectedMainService?.name}</h2>
              {selectedMainService?.plans.map((p: any) => (
                <div 
                  key={p.name} 
                  onClick={() => { setSelectedPlan(p); setStep(3); }} 
                  className="mb-4 p-5 bg-white border-2 border-slate-100 rounded-3xl cursor-pointer hover:border-orange-500 transition-all shadow-sm"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-black text-blue-900 text-lg">{p.name}</span>
                    <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full font-black text-sm">{p.price.toLocaleString()} تومان</span>
                  </div>
                  <ul className="text-sm text-slate-500 space-y-1">
                    {p.features?.map((f: string, i: number) => <li key={i}>✓ {f}</li>)}
                  </ul>
                </div>
              ))}
              <div className="flex gap-2 mt-4">
                <button onClick={() => setStep(1)} className="flex-1 p-3 bg-orange-500 rounded-2xl font-bold text-white">تغییر سرویس</button>
                <button onClick={handleClose} className="flex-1 p-3 bg-blue-950 text-white rounded-2xl font-bold">بستن</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmitRequest} className="space-y-4">
              <div className="bg-blue-950 text-white p-6 rounded-3xl text-center">
                <h3 className="font-black text-lg">{selectedPlan?.name}</h3>
                <p className="text-orange-400 font-black text-xl">{selectedPlan?.price.toLocaleString()} تومان</p>
              </div>
              <input required placeholder="نام و نام خانوادگی..." className="w-full p-4 border-2 border-slate-100 rounded-2xl outline-none font-bold text-right" onChange={(e) => setClientName(e.target.value)} />
              <input required type="tel" maxLength={11} placeholder="موبایل: 09120000000" className="w-full p-4 border-2 border-slate-100 rounded-2xl outline-none font-bold text-right" onChange={(e) => setPhone(e.target.value)} />
              
              <button 
                disabled={isSubmitting || !isPhoneValid} 
                type="submit" 
                className={`w-full py-4 rounded-2xl font-black transition-all ${isPhoneValid ? 'bg-green-500 text-white' : 'bg-slate-300'}`}
              >
                {isSubmitting ? "در حال ثبت..." : "ثبت نهایی درخواست "}
              </button>
              <button type="button" onClick={() => setStep(2)} className="w-full text-blue-400 font-bold">بازگشت به پلن‌ها</button>
            </form>
          )}
        </div>
      )}
    </div>
  </div>
);
}