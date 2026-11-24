import type { MetadataRoute } from 'next';

// فایل: app/robots.ts  →  آدرس نهایی: https://myproweb.ir/robots.txt
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://myproweb.ir/sitemap.xml',
  };
}