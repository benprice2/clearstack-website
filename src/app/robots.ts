import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://clearstack.nz/sitemap.xml',
    host: 'https://clearstack.nz',
  };
}
