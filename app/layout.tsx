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
    "اتوماسیون هوشمند فرآیندها", 
    "راهکارهای افزایش سود", 
    "طراحی داشبورد مدیریتی", 
    "سیستم مدیریت سفارشات آنلاین", 
    "اتوماسیون تخصصی رستوران", 
    "تحلیل‌گر هوشمند بازار و مالی", 
   "هوشمندسازی پرو وب",
    "بهینه‌سازی عملیات کسب‌وکار"
  ],
  alternates: {
    canonical: 'https://myproweb.ir', // آدرس سایت خود را اینجا قرار دهید
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
   
   
   
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
