'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function DrawBehindImagePage() {
  return (
    <TransformationPage
      title="Draw & Layer Behind Images: Unleash Creative Effects"
      description="Transform your images with our unique tool. Add custom drawings, artistic effects, or new backgrounds behind your photos for eye-catching, professional results."
      beforeImage="/drawbefore.jpg"
      afterImage="/drawafter.jpeg"
      beforeAlt="Original image without drawings"
      afterAlt="Image with custom drawings behind"
    />
  );
}
