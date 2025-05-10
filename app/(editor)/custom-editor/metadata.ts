import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Free Background Remover & Online Image Editor',
  description: 'Instantly remove backgrounds for free with Pixomni! A powerful online image editor to add text, enhance photos, clone objects & much more. Try it now!',
  keywords: [
    'text behind image',
    'image editor',
    'photo editor',
    'shape behind image',
    'glow effect',
    'YouTube thumbnail maker',
    'social media graphics',
    'image overlay',
    'photo text editor',
    'online image editor'
  ].join(', '),
  openGraph: {
    title: 'Pixomni: Free Background Remover & Online Image Editor',
    description: 'Instantly remove backgrounds for free with Pixomni! A powerful online image editor to add text, enhance photos, clone objects & much more. Try it now!',
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
    title: 'Pixomni - Free Background Remover & Online Image Editor',
    description: 'Looking for a reliable free background remover? Pixomni delivers! Remove backgrounds easily and then explore our online image editor to add text, logos, and much more.',
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
