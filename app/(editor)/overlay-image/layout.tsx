import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Free Background Remover - Clean Cutouts, Zero Cost',
  description: 'Get precise, clean cutouts with Pixomni`s free background remover. Remove backgrounds automatically online, then refine with our image editor. Try it free!',
  keywords: 'image overlay, photo overlay effects, picture overlay maker, overlay generator, photo effects editor',
  openGraph: {
    title: 'Free Background Remover & Image Enhancer Online | Pixomni',
    description: 'Pixomni is your go-to free background remover! Easily erase backgrounds from any image. Plus, use our online tools to add text, logos, or enhance your photos.',
    images: ['/personafter.jpg'],
  }
};

export default function OverlayImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
