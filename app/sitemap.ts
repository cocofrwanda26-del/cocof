import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cocof.org.rw';
  
  const locales = ['en', 'fr'];
  const routes = [
    '',
    '/about',
    '/approaches',
    '/contact',
    '/donate',
    '/get-involved',
    '/impact',
    '/industry',
    '/news',
    '/partners',
    '/programs',
    '/publications',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
