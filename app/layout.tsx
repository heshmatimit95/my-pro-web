import type { Metadata } from "next";
import "./globals.css";

// تعریف متادیتا
export const metadata: Metadata = {
  metadataBase: new URL("https://myproweb.ir"),
  title: "هوشمندسازی کسب‌وکار | طراحی سایت وردپرس و وب اپلیکیشن | MyProWeb",
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
    "وب اپلیکیشن ",
    "Business Automation",
    "WordPress E-commerce Development",
    "Custom Web Design",
    "Intelligent Excel Solutions",
    "MyProWeb",
    "PWA"
  ],
  // نکته: canonical عمومی (برای همه صفحات) حذف شد؛ هر صفحه canonical خودش را در متادیتای خودش دارد.
  openGraph: {
    title: "طراحی سایت وردپرس و وب اپلیکیشن و هوشمندسازی | MyProWeb",
    description: "ارائه خدمات طراحی سایت وردپرسی و وب‌سایت‌های اختصاصی همراه با اتوماسیون هوشمند کسب‌وکار.",
    type: "website"
  }
};
// داده‌ی ساختاریافته‌ی کسب‌وکار (برای همه صفحات)
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "هوشمندسازی مای پرو وب",
  alternateName: "MyProWeb",
  url: "https://myproweb.ir",
  description: "طراحی سایت اختصاصی، اتوماسیون کسب‌وکار و داشبوردهای مدیریتی اکسل",
  areaServed: "IR",
  email: "myproweb56@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/azam-heshmati-b6604b141",
    "https://rubika.ir/@gloriiia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
