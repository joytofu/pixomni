'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function ShapeBehindImagePage() {
  return (
    <TransformationPage
      title="Free Online Photo Editor: Add Stunning Shapes & Patterns Behind Images"
      description="Transform your ordinary photos into captivating visuals. Our easy-to-use online tool lets you effortlessly overlay stylish geometric designs and patterns, adding instant depth and professional flair. Perfect for social media, marketing, and creative projects - all free and no downloads required!"
      beforeImage="/personbefore.jpg"
      afterImage="/personafter.jpg"
      beforeAlt="Original image without shapes"
      afterAlt="Image with shapes behind"
    />
  );
}
