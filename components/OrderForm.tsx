'use client';
import { useState } from 'react';

export default function OrderForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

const handleSubmit = async (e: any) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    phone: e.target.phone.value,
  };

// کدِ اصلاح شده باید این‌گونه باشد:
await fetch('https://myproweb.app.n8n.cloud/webhook/OrderForm.tsx', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

    setStatus('درخواستت رسید! به‌زودی باهات تماس می‌گیرم.');
    setTimeout(() => setIsOpen(false), 2000);
  };
  return (
    <>
<button 
  onClick={() => setIsOpen(true)} 
  className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold hover:bg-amber-700 transition gap-10"
>
  ثبت درخواست هوشمندسازی
</button>

      {/* خودِ مودال */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-100  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500">✕</button>
            <h2 className="text-2xl font-bold mb-4">اطلاعات برای افزایش سود</h2>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="نام" className="w-full p-2 mb-4 border rounded" required />
              <input name="restaurant" placeholder="نام رستوران" className="w-full p-2 mb-4 border rounded" required />
              <input name="phone" placeholder="شماره تماس" className="w-full p-2 mb-4 border rounded" required />
              <button className="w-full bg-blue-600 text-white p-2 rounded">ارسال</button>
            </form>
            <p className="mt-4 text-center text-blue-600 font-bold">{status}</p>
          </div>
        </div>
      )}
    </>
  );
}