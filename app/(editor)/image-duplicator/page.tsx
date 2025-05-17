'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function CloneImagePage() {
  return (
    <TransformationPage
      title="Online Clone Stamp Tool: Free Image Duplication & Retouching"
      description="Seamlessly copy parts of your image to duplicate elements, remove distractions, or create flawless patterns. Our free online clone tool makes image editing easy and fast. No registration needed!"
      beforeImage="/applebefore.jpg"
      afterImage="/appleafter.jpeg"
      beforeAlt="Original image before cloning"
      afterAlt="Image with cloned elements"
    />
  );
}
