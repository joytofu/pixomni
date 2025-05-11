'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function TextBehindImagePage() {
  return (
    <TransformationPage
      title="Free Text Behind Image Editor: Create Stunning Effects Online"
      description="Effortlessly place text behind objects in your photos with our easy-to-use, web-based tool. No downloads required!"
      beforeImage="/povbefore.jpg"
      afterImage="/povafter.jpg"
      beforeAlt="Original image without text behind"
      afterAlt="Image with text effect behind"
    />
  );
}
