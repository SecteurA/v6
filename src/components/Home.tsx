import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import WhatsAppWidget from './WhatsAppWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Pricing />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <WhatsAppWidget />
    </div>
  );
}
