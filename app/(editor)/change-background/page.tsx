'use client';

import { TransformationPage } from '@/components/TransformationPage';

export default function ChangeBackgroundPage() {
  return (
    <TransformationPage
      title="Free Online Image Background Editor"
      description="Transform, Remove & Replace Photo Backgrounds Instantly. Our free web-based tool lets you change your image backgrounds with ease. Replace, remove, or enhance photo backgrounds in seconds, without any downloads or complicated software."
      beforeImage="/shirtbefore.jpg"
      afterImage="/shirtafter.jpg"
      beforeAlt="Original image with default background"
      afterAlt="Image with changed background"
    />
  );
}
