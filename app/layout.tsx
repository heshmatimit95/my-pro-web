import type { Metadata } from "next";
import "./globals.css";

// تعریف متادیتا
export const metadata: Metadata = {
  title: "هوشمندسازی کسب‌وکار | طراحی سایت وردپرس و اختصاصی | MyProWeb",
  description: "راهکارهای هوشمندسازی کسب‌وکار، طراحی وب‌سایت وردپرسی فروشگاهی و توسعه سایت‌های اختصاصی. Business Automation, WordPress Development, and Custom Web Solutions.",
  keywords: [
    "هوشمندسازی کسب‌وکار",
    "طراحی نرم افزار هوشمند با اکسل",
    "اتوماسیون هوشمند فرآیندها",
    "طراحی داشبورد مدیریتی",
    "سیستم مدیریت سفارشات آنلاین",
    "طراحی سایت وردپرس فروشگاهی",
    "طراحی سایت فروشگاهی با وردپرس",
    "طراحی وب سایت اختصاصی",
    "توسعه وب سایت اختصاصی",
    "Business Automation",
    "WordPress E-commerce Development",
    "Custom Web Design",
    "Intelligent Excel Solutions",
    "MyProWeb"
  ],
  alternates: {
    canonical: 'https://myproweb.ir'
  },
  openGraph: {
    title: "طراحی سایت وردپرس و هوشمندسازی | MyProWeb",
    description: "ارائه خدمات طراحی سایت وردپرسی و وب‌سایت‌های اختصاصی همراه با اتوماسیون هوشمند کسب‌وکار.",
    type: "website"
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}