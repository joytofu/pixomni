import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Add Background Shapes to Photos - Free & Online',
  description: 'Transform your photos with Pixomni! Easily add stylish background shapes (circles, squares, etc.) online for free. Perfect after using our background remover.',
  keywords: 'background shapes for photos, shapes behind image, geometric patterns, image background shapes, photo pattern maker, geometric background designer',
  openGraph: {
    title: 'Pixomni: Creative Photo Background Shapes | Online Editor',
    description: 'Get creative with Pixomni! Design unique photos by adding custom background shapes. Our free online image editor makes it simple. Enhance & add text too!',
    images: ['/personafter.jpg'],
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}