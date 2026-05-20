import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';
import { Seo } from '@/components/Seo';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course');

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Kontakt — Berliner Sprachschule"
        description="Kontaktieren Sie die Berliner Sprachschule in Urganch: Telefon, E-Mail, Instagram und Standort für Deutschkurse und Beratung."
        path="/contact"
      />
      <Header />
      <main className="pt-24">
        <ContactSection course={course} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
