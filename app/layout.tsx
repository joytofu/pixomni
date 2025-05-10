import './globals.css';
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { PricingProvider } from '@/contexts/PricingContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixomni: Free Background Remover & Online Image Editor',
  description: 'Instantly remove backgrounds for free with Pixomni! A powerful online image editor to add text, enhance photos, clone objects & much more. Try it now!',
  metadataBase: new URL('https://pixomni.com'),
  openGraph: {
    type: 'website',
    url: 'https://pixomni.com',
    title: 'Pixomni: Free Background Remover & Online Image Editor',
    description: 'Instantly remove backgrounds for free with Pixomni! A powerful online image editor to add text, enhance photos, clone objects & much more. Try Pixomni now!',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixomni | Free Background Remover & Online Image Editor',
    description: 'Instantly remove backgrounds for free with Pixomni! A powerful online image editor to add text, enhance photos, clone objects & much more. Try it now!',
    creator: '@kcswag077',
    images: ['/og-image.png'],
    site: '',
  },
  keywords: 'free background remover, online image editor, add text to image, image enhancer',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
        <PricingProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
          <Analytics />
        </PricingProvider>
        <GoogleAnalytics gaId="G-LWYW0Q03ZL" />
      </body>
    </html>
  );
}
