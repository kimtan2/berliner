import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CoursesSection } from '@/components/CoursesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';
import { Seo } from '@/components/Seo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Berliner Sprachschule — Deutsch lernen in Urganch"
        description="Deutschkurse A1–C2, TestDaF-Vorbereitung, Ausbildung und Studium in Deutschland — Berliner Sprachschule in Urganch."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
