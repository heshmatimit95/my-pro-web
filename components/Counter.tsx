"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function Counter({ from, to, title, showPercent = false }: { from: number; to: number; title: string; showPercent?: boolean }) {
  const count = useMotionValue(from);
  
  const rounded = useTransform(count, (latest) => {
    const formattedNumber = Math.round(latest).toLocaleString('fa-IR');
    return showPercent ? `٪${formattedNumber}` : formattedNumber;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      count.set(from);
      animate(count, to, { duration: 2.5 });
    }
  }, [isInView, count, to, from]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
      <motion.h3 className="text-4xl md:text-5xl font-black text-amber-500 mb-2" dir="ltr">
        {rounded}
      </motion.h3>
      <p className="font-bold text-slate-700">{title}</p>
    </div>
  );
}