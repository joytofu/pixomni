import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Overlay Images Online Free | How to Overlay 2 Images Easily',
  description: 'Overlay 2 images online free with our easy tool. Discover how to overlay images, add text, and apply dynamic effects to make your photos pop. Create pro visuals!',
  keywords: 'how to overlay images, overlay 2 images, how to overlay 2 images in preview, overlay images online free',
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
