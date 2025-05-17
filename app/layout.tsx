import './globals.css';
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { PricingProvider } from '@/contexts/PricingContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pixomni: Best Way to Remove Background From Image & Free Online Img Editor',
  description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
  metadataBase: new URL('https://pixomni.com'),
  openGraph: {
    type: 'website',
    url: 'https://pixomni.com',
    title: 'Pixomni: Best Way to Remove Background From Image & Free Online Img Editor',
    description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixomni | Free Background Remover & Online Image Editor',
    description: 'Effortlessly remove backgrounds, perfect photos, & change image background color with our free online editor. The best remove.bg alternative & image duplicator!',
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
        </PricingProvider>
        <GoogleAnalytics gaId="G-5Z6STD516W" />
      </body>
    </html>
  );
}
