import Script from 'next/script';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "هوشمندسازی کسب‌وکار و اتوماسیون جامع | MyProWeb",
  description: "افزایش بهره‌وری و کاهش هزینه‌های عملیاتی با راهکارهای اتوماسیون هوشمند. طراحی سیستم‌های مدیریت سفارشات، داشبوردهای مدیریتی و موتورهای تحلیل مالی ویژه کسب‌وکارهای مدرن.",
  keywords: [
    "هوشمندسازی کسب‌وکار",
     "طراحی نرم افزار هوشمند با اکسل ",
      "طراحی نرم افزار داینامیک با اکسل ",
        "طراحی نرم افزار حرفه ای با اکسل ",
    "اتوماسیون هوشمند فرآیندها",
    "راهکارهای افزایش سود",
    "طراحی داشبورد مدیریتی",
    "سیستم مدیریت سفارشات آنلاین",
    "اتوماسیون تخصصی رستوران",
    "تحلیل‌گر هوشمند بازار و مالی",
    "هوشمندسازی پرو وب",
    "بهینه‌سازی عملیات کسب‌وکار",
    "طراحی وب سایت شرکتی",
    "طراحی وب سایت فروشگاهی",
    "طراحی وب سایت رستوران",
    "طراحی وب سایت اختصاصی"
  ],
  alternates: {
    canonical: 'https://myproweb.ir',
  },
  openGraph: {
    title: "هوشمندسازی کسب‌وکار و اتوماسیون جامع | MyProWeb",
    description: "بهترین راهکارهای اتوماسیون برای افزایش سود و مدیریت هوشمند کسب‌وکار در ایران.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa" // تغییر از en به fa برای زبان فارسی سایت
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      dir="rtl" // اضافه کردن جهت راست‌چین برای سایت فارسی
    >
      <body className="min-h-full flex flex-col">
        {/* گوگل آنالیتیکس */}
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-BGEESV5FVM`} 
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BGEESV5FVM');
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  );
}