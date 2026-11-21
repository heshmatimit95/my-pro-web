"use client";
import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';

export default function ContactList() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      const { data, error } = await getSupabase()
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setContacts(data || []);
      setLoading(false);
    }
    fetchContacts();
  }, []);

  return (
    <div className="mt-8 px-4" dir="rtl">
      <h2 className="text-2xl font-bold mb-6 text-blue-950 text-center">لیست درخواست‌های مشاوره</h2>
      <div className="w-full overflow-x-auto mx-auto max-w-3xl border rounded-xl shadow-lg bg-white">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="w-full bg-blue-600 text-white">
              <th className="p-4 font-semibold text-center">نام</th>
              <th className="p-4 font-semibold text-center">شماره تماس</th>
              <th className="p-4 font-semibold text-center">ایمیل</th>
              <th className="p-4 font-semibold text-center">تعداد سفارش</th>
              <th className="p-4 font-semibold text-center">خلاصه محاسبه</th>
              <th className="p-4 font-semibold text-center">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-slate-400">در حال بارگذاری...</td>
              </tr>
            ) : contacts.length > 0 ? (
              contacts.map((c) => (
                <tr key={c.id} className="border-b hover:bg-blue-50 text-center">
                  <td className="p-4">{c.name}</td>
                  <td className="p-4" dir="ltr">{c.phone}</td>
                  <td className="p-4">{c.email}</td>
                  <td className="p-4">{c.orders}</td>
                  <td className="p-4">{c.calc_result}</td>
                  <td className="p-4 text-xs">
                    {c.created_at ? new Date(c.created_at).toLocaleDateString('fa-IR') : '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-6 text-center text-slate-400">هنوز درخواستی ثبت نشده است.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}