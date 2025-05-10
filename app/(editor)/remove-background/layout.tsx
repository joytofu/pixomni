import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: The Ultimate Free Background Remover & Editor',
  description: 'Need to remove a background for free? Pixomni is your ultimate online tool! Get clean cutouts, then add text, logos, or use our image enhancer.',
  keywords: 'remove background, background remover, transparent background, remove image background, photo background remover',
  openGraph: {
    title: 'Remove Background Free & Easy Online | Pixomni Editor',
    description: 'Easily remove background from images for free with Pixomni! Our simple online editor makes it fast. Also add text, enhance photos, and more. Try it now!',
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
