'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function RemoveBackgroundPage() {
  return (
    <TransformationPage
      title="AI Background Remover: Free & Instant Cutouts"
      description="Say goodbye to manual editing! Our AI tool automatically removes image backgrounds with incredible accuracy. Perfect for e-commerce, social media, presentations, and personal projects."
      beforeImage="/background-before.webp"
      afterImage="/background-after.png"
      beforeAlt="Original image with background"
      afterAlt="Image with background removed"
    />
  );
}
