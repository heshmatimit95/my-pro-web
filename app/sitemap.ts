import { MetadataRoute } from 'next'; // این خط را حتماً اضافه کن

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myproweb.ir', // آدرس سایتت
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://myproweb.ir/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}