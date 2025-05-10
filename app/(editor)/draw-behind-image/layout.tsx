import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Free Image Editor with Overlay Drawing & Text Tools',
  description: 'Pixomni: Free online image editor. Create stunning overlay drawings, add text to images, enhance photos, remove backgrounds & more. All in your browser!',
  keywords: 'draw behind image, custom photo background, image drawing tool, photo art creator, background drawing editor',
  openGraph: {
    title: 'Creative Overlay Drawing Tool & Image Enhancer | Pixomni',
    description: 'Unleash your creativity with Pixomni! Draw overlays, sketch on photos, add text, use our image enhancer & free background remover. Online & easy!',
    images: ['/drawafter.jpeg'],
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}