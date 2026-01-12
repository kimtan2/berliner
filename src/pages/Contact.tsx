import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const course = searchParams.get('course');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <ContactSection course={course} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
