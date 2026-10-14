import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // اگر مشکلی در بیلد داشتی، این خط را کامنت کن یا بردار
  // output: 'export', 
  
  // تنظیم برای بهینه‌سازی تصاویر در لیارا
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;