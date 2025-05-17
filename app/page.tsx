"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Pricing } from "@/components/Pricing";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import {
  ImageOff,
  Layers,
  Settings as Adjustments,
  Layout as Overlay,
  Type,
  Star as Sticker,
  Square as Shapes,
  Copy,
  Wand2 as Wand,
  SlidersHorizontal as Filter,
  Download,
  Eye,
  Image as ImageIcon,
  PaintBucket as Paint,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const tools = [
  { Icon: ImageOff, name: "Remove Background" },
  { Icon: Layers, name: "Customize Background" },
  { Icon: Adjustments, name: "Tune Image" },
  { Icon: Overlay, name: "Overlay Images" },
  { Icon: Type, name: "Add Text Behind" },
  { Icon: Sticker, name: "Add Logo Behind" },
  { Icon: Shapes, name: "Add Shapes" },
  { Icon: Copy, name: "Image Duplicator" },
  { Icon: Wand, name: "AI Detection" },
  { Icon: Filter, name: "Apply Effects" },
  { Icon: Download, name: "Export HD" },
  { Icon: Eye, name: "Toggle Overlays" },
  { Icon: Paint, name: "Object Outline" },
  { Icon: ImageIcon, name: "Image Enhance" },
];

// Key benefits of the app
const benefits = [
  {
    title: "Professional Results in Seconds",
    description:
      "Create studio-quality edits with just a few clicks, no design experience needed.",
    icon: Sparkles,
  },
  {
    title: "All-in-One Solution",
    description:
      "50+ powerful tools in one place - no need to switch between different apps.",
    icon: Layers,
  },
  {
    title: "Unique Behind-Object Technology",
    description:
      "Place text, logos, and shapes behind objects in your images with AI precision.",
    icon: Type,
  },
  {
    title: "High-Resolution Exports",
    description:
      "Download your creations in high quality for professional use.",
    icon: Download,
  },
];

// Common use cases
const useCases = [
  {
    title: "Social Media Content",
    description: "Create eye-catching posts that stand out in crowded feeds",
    image: "/social-media-example.jpg",
  },
  {
    title: "Product Photography",
    description:
      "Enhance product images with professional backgrounds and effects",
    image: "/product-example.jpg",
  },
  {
    title: "YouTube Thumbnails",
    description: "Design clickable thumbnails that boost your video views",
    image: "/youtube-example.jpg",
  },
];

const FeatureCard = ({ tool: { Icon, name } }) => (
  <div
    className="flex flex-col items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-xl backdrop-blur-sm 
      transform transition-all duration-200 
      hover:bg-gray-50 dark:hover:bg-gray-900/70 hover:scale-105 
      hover:shadow-lg hover:shadow-green-500/20
      border border-gray-200 dark:border-white/10
      group"
  >
    <Icon
      className="w-5 h-5 mb-2 text-green-700 dark:text-green-600 
      transition-transform duration-200 
      group-hover:scale-110 
      group-hover:text-green-800 dark:group-hover:text-green-500"
    />
    <span
      className="text-xs text-gray-600 dark:text-gray-300 text-center
      transition-colors duration-200
      group-hover:text-gray-900 dark:group-hover:text-white"
    >
      {name}
    </span>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { user } = useAuth();

  useEffect(() => {
    if (section === "pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div
      className="min-h-screen relative flex flex-col"
      role="region"
      aria-label="Home page content"
    >
      {/* Background with subtle pattern */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-white dark:bg-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10">
        <Navbar />
      </div>

      {/* Content Container */}
      <div ref={scrollRef} className="relative z-10 flex-grow">
        <main className="w-full" role="main" aria-label="Main content">
          <section className="relative overflow-hidden border-b border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent dark:from-green-500/20" />

            <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-20">
              {/* Top Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-4"
              >
                {/* <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                  50+ Powerful Image Editing Tools in One App
                </span> */}
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                The Best Way to Remove Background From Image & All-in-One Online Editor & {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-900 dark:from-green-500 dark:to-green-600">
                  All-in-One Online Editor
                  </span>
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
                Your free remove.bg alternative! Change image background color, outline images, duplicate photos, and more with our easy online img editor for PC & mobile.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-16"
              >
                {/* inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-pink-600 hover:from-green-700 hover:to-pink-700 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 */}
                <Link
                  href="/custom-editor"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-700 to-green-900 hover:from-green-800 hover:to-green-950 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
                >
                  Start Editing 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              {/* Feature Grid - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:grid grid-cols-2 lg:grid-cols-7 gap-3 max-w-6xl mx-auto"
              >
                {tools.map((tool, index) => (
                  <FeatureCard key={index} tool={tool} />
                ))}
              </motion.div>

              {/* Feature Carousel - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:hidden"
              >
                <div className="flex overflow-x-auto gap-3 pb-6 scrollbar-hide">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex-none w-32">
                      <FeatureCard tool={tool} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Feature Showcase Section with Before/After Sliders */}
          <section
            id="examples"
            className="w-full px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Witness the {" "}
                  <span className="text-green-800 dark:text-green-600">
                    Magic
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Slide to reveal stunning image enhancements and see the difference Pixomni makes
                </p>
              </div>

              <FeatureShowcase />

              <div className="text-center mt-12">
                <Link
                  href="/custom-editor"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg text-lg font-semibold transition-all"
                >
                  Give It a Try
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How Pixomni Works Magic
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Create standout visuals easily: Upload, Edit, Download – Done!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Upload Your Image
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  Just choose the photo you want to make amazing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Edit & Enhance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  Easily remove backgrounds, add text, perfect details, and explore creative effects.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Download & Share
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                  Save your stunning creation in high resolution and share your work proudly.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/custom-editor"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg text-lg font-semibold transition-all"
                >
                  Launch Free Editor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* Combined Features, Use Cases, and SEO Content Section */}
          <section className="w-full px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pixomni: Your {" "}
                  <span className="text-green-600 dark:text-green-400">
                    All-in-One
                  </span>{" "}
                  Editor for Standout Visuals
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Unlock professional-grade editing and discover the magic of behind-object design
                </p>
              </div>

              {/* Feature Tabs */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-12 items-center">
                  <div className="bg-gradient-to-r from-green-50 to-indigo-50 dark:from-green-900/10 dark:to-indigo-900/10 rounded-2xl p-8 border border-green-100 dark:border-green-800/20 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left side with title and description */}
                      <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                          <span className="text-xs font-medium text-green-800 dark:text-green-300">
                            Exclusive Feature
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Exclusive: Advanced Behind-Object Magic
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                        Effortlessly tuck text, logos, or shapes behind any object in your image for a sophisticated, layered effect. Our precision technology ensures a flawless, natural look that elevates every design.
                        </p>
                        <Link
                          href="/custom-editor"
                          className="inline-flex items-center justify-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-base font-semibold transition-all"
                        >
                          Unlock This Power
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right side with interactive cards */}
                      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-green-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              ✍️
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Text Behind Images
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                              Create eye-catching depth by layering text behind objects for impactful social media posts.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-green-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🔷
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Shapes Behind Images
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                              Add dynamic geometric elements behind subjects for enhanced style and visual interest.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-green-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🎯
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Logos Behind Objects
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                              Seamlessly integrate logos behind subjects for polished, professional marketing materials.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md hover:shadow-green-500/10 transition-all group">
                          <div className="flex items-start gap-3">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              🔄
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Clone Objects
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                              Precisely duplicate elements within your image for unique and creative compositions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Editing Section */}
              <div className="mb-24">
                <div className="grid grid-cols-1 gap-12 items-center">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/20 shadow-sm">
                    <div className="flex flex-col md:flex-row-reverse gap-8">
                      {/* Left side with interactive elements */}
                      <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                          <span className="text-xs font-medium text-blue-800 dark:text-blue-300">
                            AI-Powered
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Perfect Backgrounds, Powered by AI
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                        Whether you need instant removal, a new scene, or pixel-perfect edges, our AI background tools deliver clean, professional results every time.
                        </p>
                        <Link
                          href="/remove-background"
                          className="inline-flex items-center justify-center px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg text-base font-semibold transition-all"
                        >
                          Start Your Background Edit
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>

                      {/* Right side with interactive demo */}
                      <div className="md:w-1/2">
                        <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                            Your Complete Background Solution
                            </h4>
                            <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                              AI-powered
                            </div>
                          </div>

                          <div className="space-y-6 sm:space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-red-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">✂️</span>
                              </div>
                              <div>
                                {/* font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors */}
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-800 transition-colors">
                                AI Background Remover
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                Instantly delete backgrounds with one click
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">🎨</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                New Scene
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                Swap in any color, gradient, or custom image
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">🔍</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Edge Refiner
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                Achieve perfect cutouts for a pro look
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 cursor-pointer transition-colors group">
                              <div className="w-10 h-10 bg-yellow-500 rounded-md flex items-center justify-center text-white">
                                <span className="text-xl">💾</span>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Clear Cutout
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                Download transparent PNGs for any project
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perfect for Every Creator Section */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Your Go-To Editor for Professional Results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Pixomni equips Content Creators, Marketers, and Photographers with the tools to shine.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-4xl">🎥</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Stand Out on Social Media
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                      Create eye-catching YouTube thumbnails and Instagram visuals. Easily apply behind-object effects and text to make your content unmissable.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center">
                      <span className="text-4xl">📈</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Drive Conversions & Engagement
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                      Design professional ads, banners, and marketing assets that convert. Use our intuitive tools to build brand consistency and engage your target audience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 relative bg-gradient-to-r from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Perfect Your Vision
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                      From flawless background removal to artistic effects and precise retouching, transform your photos into polished masterpieces quickly and easily.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/custom-editor"
                    className="inline-flex items-center justify-center px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg text-lg font-semibold transition-all"
                  >
                    Start Creating Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
