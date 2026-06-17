"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// اتصال به دیتابیس
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CommentList() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    async function fetchComments() {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('is_approved', true) 
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error("خطای دریافت نظرات:", error);
      } else {
        setComments(data || []);
      }
    }
    fetchComments();
  }, []);

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-bold text-center text-blue-950">نظرات بقیه دوستان:</h3>
      {comments.length > 0 ? (
        comments.map((c: any) => (
          <div key={c.id} className="p-4 border border-slate-100 rounded-2xl shadow-sm bg-white">
            <p className="font-bold text-blue-900">{c.name}</p>
            <p className="text-slate-600 mt-2">{c.message}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-400">هنوز نظری تایید نشده است.</p>
      )}
    </div>
  );
}