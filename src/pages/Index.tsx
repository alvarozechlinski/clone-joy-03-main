import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import AboutSection from "@/components/AboutSection";
import SolarCoverSection from "@/components/SolarCoverSection";
import CTABoxes from "@/components/CTABoxes";
import MercadoLivreSection from "@/components/MercadoLivreSection";
import ConsultingSection from "@/components/ConsultingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ScrollReveal>
      <ClientsBar />
    </ScrollReveal>
    <ScrollReveal>
      <AboutSection />
    </ScrollReveal>
    <ScrollReveal>
      <SolarCoverSection />
    </ScrollReveal>
    <ScrollReveal>
      <CTABoxes />
    </ScrollReveal>
    <ScrollReveal>
      <MercadoLivreSection />
    </ScrollReveal>
    <ScrollReveal>
      <ConsultingSection />
    </ScrollReveal>
    <ScrollReveal>
      <TestimonialsSection />
    </ScrollReveal>
    <ScrollReveal>
      <GallerySection />
    </ScrollReveal>
    <Footer />
  </div>
);

export default Index;
