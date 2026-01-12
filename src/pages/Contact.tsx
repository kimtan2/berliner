import { Header } from '@/components/Header';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Baby, FileText } from 'lucide-react';

const courseIcons: Record<string, React.ElementType> = {
  a1c2: BookOpen,
  testdaf: FileText,
  kids: Baby,
  studium: GraduationCap,
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const course = searchParams.get('course');
  
  const CourseIcon = course ? courseIcons[course] || BookOpen : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Course-specific header */}
        {course && (
          <section className="bg-primary/5 border-b border-primary/10 py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                  {CourseIcon && <CourseIcon className="h-3 w-3 mr-1" />}
                  {t(`contact.course.${course}.badge`)}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {t(`contact.course.${course}.title`)}
                </h2>
                <p className="text-muted-foreground">
                  {t(`contact.course.${course}.desc`)}
                </p>
              </div>
            </div>
          </section>
        )}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
