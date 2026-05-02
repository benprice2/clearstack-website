import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://clearstack.co.nz/sitemap.xml',
    host: 'https://clearstack.co.nz',
  };
}
