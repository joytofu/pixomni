import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixomni: Free Tool to Overlay Text on Image & More',
  description: 'Easily overlay text on images with Pixomni, your free online tool! Customize fonts & colors, then enhance, remove backgrounds, or add logos. Try it now!',
  keywords: 'overlay text on image, text behind image, put text behind picture, text behind photo editor, image text effects, text background effects',
  openGraph: {
    title: 'Free Text Overlay Tool & Online Image Editor | Pixomni',
    description: 'Pixomni is your free text overlay tool! Add beautiful text to any image online. Plus, enjoy powerful features like image enhancer & background remover.',
    images: ['/povafter.jpg'],
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
