import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Best Way to Remove Background From Image & Free Online Img Editor',
  description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
  keywords: [
    'best way to remove background from image',
    'image duplicator',
    'img editor pc',
    'remove.bg alternative',
    'outline image',
    'outline an image',
    
  ].join(', '),
  openGraph: {
    title: 'Pixomni: Best Way to Remove Background From Image & Free Online Img Editor',
    description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
    url: 'https://pixomni.com/custom-editor',
    siteName: 'Pixomni',
    images: [
      {
        url: 'https://pixomni.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pixomni'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixomni: Best Way to Remove Background From Image & Free Online Img Editor',
    description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
    images: ['https://pixomni.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
