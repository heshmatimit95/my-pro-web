"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ContactList() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("رمز عبور اشتباه است!");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      async function fetchContacts() {
        const { data, error } = await supabase
          .from('contacts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) console.error(error);
        else setContacts(data || []);
      }
      fetchContacts();
    }
  }, [isAuthenticated]);

  if (!isMounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-gray-50 px-4" dir="rtl">
        <form onSubmit={handleLogin} className=" max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-right">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-extrabold text-gray-800">پنل مدیریت</h3>
            <p className="text-gray-500 text-sm mt-2">برای مشاهده درخواست‌ها وارد شوید</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور را وارد کنید"
            className=" p-4 border border-gray-200 rounded-2xl mb-4 text-right focus:ring-4 focus:ring-blue-100 outline-none transition"
          />
          <button type="submit" className=" bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-bold transition shadow-lg shadow-blue-200">
            ورود به پنل
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mt-8 px-4" dir="rtl">
      <h2 className="text-2xl font-bold mb-6 text-blue-950 text-center">لیست درخواست‌های مشاوره</h2>
      <div className=" w-full overflow-x-auto mx-auto max-w-3xl border rounded-xl shadow-lg bg-white">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className=" w-full bg-blue-600 text-white">
              <th className="p-4 font-semibold text-center">نام</th>
              <th className="p-4 font-semibold text-center">شماره تماس</th>
              <th className="p-4 font-semibold text-center">ایمیل</th>
               <th className="p-4 font-semibold text-center">تعدادسفارش</th>
              <th className="p-4 font-semibold text-center">خلاصه محاسبه</th>
              <th className="p-4 font-semibold text-center">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((c) => (
            <tr key={c.id} className="border-b hover:bg-blue-50 text-center">
    <td className="p-4">{c.name}</td>
    <td className="p-4" dir="ltr">{c.phone}</td>
    <td className="p-4">{c.email}</td>
    <td className="p-4">{c.orders}</td>
    <td className="p-4 ">{c.calc_result}</td>
    <td className="p-4 text-xs">
      {c.created_at ? new Date(c.created_at).toLocaleDateString('fa-IR') : '-'}
    </td>
  </tr>

              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-6 text-center text-slate-400">هنوز درخواستی ثبت نشده است.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}



