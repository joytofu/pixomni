'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function OverlayImagePage() {
  return (
    <TransformationPage
      title="Image Overlay Transform: Create Striking Images in Minutes"
      description="Unlock your creativity with Image Overlay Transform. Seamlessly add beautiful overlays, compelling text, and dynamic effects to your photos and images. Design professional-looking visuals effortlessly with our user-friendly online editor. Start transforming your pictures today and make your content stand out!"
      beforeImage="/personbefore.jpg"
      afterImage="/personafter.jpg"
      beforeAlt="Original image without overlay"
      afterAlt="Image with overlay effects"
    />
  );
}
