import { NextResponse } from 'next/server';
import { z } from 'zod';

// ۱. تعریفِ ساختار ورودی برای جلوگیری از داده‌های مخرب
const orderSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ حرف باشد"),
  phone: z.string().regex(/^09[0-9]{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
  message: z.string().max(500, "پیام خیلی طولانی است").optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ۲. اعتبارسنجی داده‌ها
    const validation = orderSchema.safeParse(body);
    
    if (!validation.success) {
      // تبدیل خطاهای zod به یک فرمتِ خواناتر برای کلاینت
      const formattedErrors = validation.error.flatten().fieldErrors;
      return NextResponse.json({ error: formattedErrors as any }, { status: 400 });
    }

    const { name, phone, message } = validation.data;

    // ۳. اینجا منطقِ ارسال ایمیل یا ثبت در دیتابیس را قرار بده
    console.log("دریافت سفارش از:", name, phone);

    return NextResponse.json({ message: "سفارش شما با موفقیت ثبت شد!" }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}