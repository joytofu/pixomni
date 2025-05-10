import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Instant Free Background Remover Online',
  description: 'Effortlessly remove image backgrounds for free with Pixomni! Get clean, transparent cutouts in seconds. Our online editor also lets you enhance, add text & more.',
  keywords: 'free background remover, online image editor, add text to image, image enhancer',
  openGraph: {
    title: 'Free Background Remover Tool - Erase BG with Pixomni',
    description: 'Pixomni is your go-to free background remover! Easily erase backgrounds from any image. Plus, use our online tools to add text, logos, or enhance your photos.',
    images: ['/shirtafter.jpg'],
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
