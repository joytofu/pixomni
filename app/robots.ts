import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pixomni.com/sitemap.xml',
    host: 'https://pixomni.com',
  };
}