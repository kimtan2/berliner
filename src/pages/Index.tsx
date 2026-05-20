import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CoursesSection } from '@/components/CoursesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { NewsSection } from '@/components/NewsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
