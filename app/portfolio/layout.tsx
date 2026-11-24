import type { Metadata } from 'next';

// فایل: app/portfolio/layout.tsx
// صفحه‌ی portfolio از نوع "use client" است و نمی‌تواند metadata بدهد؛ این layout سروری آن را می‌دهد.
export const metadata: Metadata = {
  title: 'نمونه‌کارها | هوشمندسازی مای پرو وب',
  description:
    'نمونه پروژه‌های طراحی سایت و سیستم‌های هوشمند: مدیریت رستوران، پلتفرم تورلیدر، و داشبوردهای مدیریتی اکسل برای کسب‌وکارها و سازمان‌ها.',
  alternates: { canonical: 'https://myproweb.ir/portfolio' },
  openGraph: {
    title: 'نمونه‌کارها | هوشمندسازی مای پرو وب',
    description: 'نمونه پروژه‌های طراحی سایت، اتوماسیون و داشبوردهای مدیریتی اکسل.',
    url: 'https://myproweb.ir/portfolio',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}