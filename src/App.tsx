import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { DataSection } from './components/DataSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeatureCards />
      <DataSection />
      <TestimonialsSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
