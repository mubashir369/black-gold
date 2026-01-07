import Hero from '@/components/Hero';
import FeaturesStrip from '@/components/FeaturesStrip';
import ProductSection from '@/components/ProductSection';
import StorySection from '@/components/StorySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <FeaturesStrip />
      <ProductSection />
      <StorySection />
    </main>
  );
}
