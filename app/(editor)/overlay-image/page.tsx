'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function OverlayImagePage() {
  return (
    <TransformationPage
      title="How to Overlay Images & Text Online Free – Fast & Easy"
      description="Want to overlay 2 images or learn how to overlay images with text? Our free online tool makes it simple. Add effects and create professional designs in minutes, a great alternative to trying to figure out how to overlay 2 images in Preview for online use."
      beforeImage="/personbefore.jpg"
      afterImage="/personafter.jpg"
      beforeAlt="Original image without overlay"
      afterAlt="Image with overlay effects"
    />
  );
}
