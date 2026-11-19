import { useCallback, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { CostCalculator } from './components/CostCalculator';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InteractiveBrief } from './components/InteractiveBrief';
import { Navbar } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustStrip } from './components/TrustStrip';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import type { ProjectItem } from './types';

const servicePackageMap: Record<string, string> = {
  'wordpress-landing-pages': 'wp-single',
  'laravel-landing-commerce': 'wp-multi',
  'laravel-web-apps': 'laravel-pos',
  'performance-audit': 'wp-single',
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState('wp-single');

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleExploreWork = useCallback(() => scrollToSection('portfolio'), [scrollToSection]);

  const handleSelectService = useCallback(
    (serviceId: string) => {
      setSelectedPackageId(servicePackageMap[serviceId] ?? 'wp-single');
      scrollToSection('calculator');
    },
    [scrollToSection],
  );

  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="min-h-screen bg-[#07090b] text-zinc-200">
      <Navbar />

      <main>
        <HeroSection onExploreWork={handleExploreWork} />
        <TrustStrip />
        <PortfolioSection onSelectProject={setSelectedProject} />
        <ServicesSection onSelectService={handleSelectService} />
        <ProcessSection />
        <CostCalculator initialPackageId={selectedPackageId} />
        <WhyChooseMeSection />
        <TechStackSection />
        <TestimonialsSection />
        <InteractiveBrief />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ProjectDetailModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}
