
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
