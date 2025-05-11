import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Pixomni and what can it do?",
      answer: "Pixomni is a free online image editor designed for creative photo editing directly in your browser. It empowers you to perform advanced tasks like cloning images, seamlessly adding text and shapes behind objects, fully customizing image backgrounds, and downloading high-quality, high-resolution edits. Pixomni is your go-to tool for making your images stand out."
    },
    {
      question: "Is a Pixomni account required to use its features?",
      answer: "Yes, to access the full suite of Pixomni's powerful image editing features, you'll need to sign up using your Google account. This quick sign-up unlocks all functionalities and ensures a personalized experience."
    },
    {
      question: "How does Pixomni handle my images and personal data for privacy?",
      answer: "Your privacy is paramount. Pixomni operates fully client-side, meaning your images and any edits you make are processed locally on your device. We do not upload or store your images or personal data on our servers, ensuring your creations remain private and secure."
    },
    {
      question: "Is Pixomni completely free to use?",
      answer: "Yes, Pixomni offers a robust set of free image editing tools. We are committed to providing significant value at no cost. In the future, we plan to introduce optional premium features for users seeking even more advanced functionality and professional capabilities."
    },
    {
      question: "What are the key features of Pixomni's image editor?",
      answer: <span>Pixomni provides a range of powerful and intuitive image editing tools. Key features include: 
        <ul>
          <li>1. Image Cloning: Easily duplicate objects or remove unwanted elements.</li>
          <li>2. Background Customization: Change, blur, or remove image backgrounds.</li>
          <li>3. Text & Shapes Behind Objects: Creatively place text or shapes behind elements in your photo for a unique depth effect.</li>
          <li>4. High-Resolution Downloads: Export your edited images in high quality, suitable for print or digital use.</li>
          <li>5. Browser-Based Editing: No software installation required; edit directly online.</li>
        </ul>
      </span>
    },
    {
      question: "How can I easily place text behind an image using Pixomni?",
      answer: <span>Placing text behind an image (or behind an object within an image) is a standout feature of Pixomni, and it's designed to be effortless. Simply upload your image, use our intuitive tools to define the foreground object, and then add your text. For a step-by-step guide, please visit our <Link href="/text-behind-image" className="text-blue-400 hover:underline" target='_blank'>Text Behind Image</Link>.</span>
    },
    {
      question: "How can I place shapes behind objects in a photo?",
      answer: <span>To creatively add depth or design elements by placing shapes behind specific objects in your image, Pixomni makes it easy. Visit our <Link href="/shape-behind-image" className="text-blue-400 hover:underline" target='_blank'>Shape Behind Image</Link> feature to learn how.</span>
    },
    {
      question: "What's the best way to remove the background from an image?",
      answer: <span>Removing the background from any image to make your subject stand out is simple with Pixomni. Whether you need a transparent background or want to isolate an object, visit our <Link href="/remove-background" className="text-blue-400 hover:underline" target='_blank'>Remove Background</Link> tool for a quick solution..</span>
    },
    {
      question: "How do I change the background of a photo online?",
      answer: <span>Changing the background of an image is quick and easy. Visit <Link href="/change-background" className="text-blue-400 hover:underline" target='_blank'>Change Background</Link> tool to get started..</span>
    },
    {
      question: "How can I clone or duplicate parts of an image with Pixomni?",
      answer: <span>Cloning parts of an image, whether to remove unwanted elements or duplicate objects, is straightforward with Pixomni. Our <Link href="/clone-image" className="text-blue-400 hover:underline" target='_blank'>Clone Image</Link> tool helps you achieve seamless edits. Just visit the feature to see how.</span>
    },
    {
      question: "Can I fully customize image backgrounds using Pixomni?",
      answer: "Yes, absolutely! With Pixomni, you have complete control to customize image backgrounds. You can easily remove, change, add new elements, or fine-tune existing backgrounds to perfectly fit your creative vision and project needs."
    },
    {
      question: "Does Pixomni allow high-resolution image downloads?",
      answer: "Definitely! Pixomni supports high-resolution downloads for all your edited images. We ensure that your final creations can be downloaded in the best possible quality, perfect for print or professional digital use."
    },
    {
      question: "Is Pixomni easy to use for beginners, or do I need design experience?",
      answer: "Not at all! Pixomni is user-friendly and designed for everyone, from beginners to professionals."
    },
    {
      question: "What is the image editing limit in Pixomni? Can I edit unlimited images?",
      answer: "Yes, you can! There are no restrictions on the number of images you can edit with Pixomni. Feel free to edit as many photos as you need, without any limits."
    },
    {
      question: "What devices and browsers are compatible with Pixomni?",
      answer: "Pixomni is a web-based tool accessible on any device (desktop, laptop, tablet, smartphone) with an internet connection and a modern web browser (like Chrome, Firefox, Safari, Edge). This ensures you can edit your images wherever you are."
    },
    {
      question: "How can I report a bug or suggest a new feature for Pixomni?",
      answer: "We'd love to hear from you! You can report bugs or request features by contacting our support team at support@pixomni.com. Your feedback helps us make Pixomni better."
    },
    {
      question: "Can I use Pixomni offline, or do I need an internet connection?",
      answer: "Pixomni is a web-based photo editing tool and requires an active internet connection to function. This ensures you always have access to the latest features, updates."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-3">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
