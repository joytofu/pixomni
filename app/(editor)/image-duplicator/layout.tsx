import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pixomni: Clone Objects in Images Free - Online Editor",
  description:
    "Easily clone objects in your photos with Pixomni's free online image editor! Duplicate elements, remove distractions, add text, or enhance images. Try it!",
  keywords:
    "AI image cloning, duplicate objects, object replication AI, create multiple images, image duplication tool, pixomni",
  openGraph: {
    title:
      "Pixomni: Duplicate Objects & Edit Photos Online Free",
    description:
      "Want to duplicate objects or seamlessly remove distractions? Pixomni's image clone tool lets you copy parts of an image. Your free online editor for more!",
    images: ["/appleafter.jpeg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
