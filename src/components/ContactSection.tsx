import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Send, ArrowRight, Phone, BookOpen, GraduationCap, Baby, FileText } from 'lucide-react';

const courseIcons: Record<string, React.ElementType> = {
  a1c2: BookOpen,
  testdaf: FileText,
  kids: Baby,
  studium: GraduationCap,
};

interface ContactSectionProps {
  course?: string | null;
}

export function ContactSection({ course }: ContactSectionProps) {
  const { t } = useLanguage();
  
  const CourseIcon = course ? courseIcons[course] || BookOpen : null;

  return (
    <section id="contact" className="py-20 md:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Hero Header - Course-specific or default */}
        <div className="max-w-3xl mb-16">
          {course ? (
            <>
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                {CourseIcon && <CourseIcon className="h-3 w-3 mr-1" />}
                {t(`contact.course.${course}.badge`)}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {t(`contact.course.${course}.title`)}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {t(`contact.course.${course}.desc`)}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                {t('contact.hero.title')}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-primary mb-8">
                {t('contact.hero.accent')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {t('contact.hero.subtitle')}
              </p>
            </>
          )}
        </div>

        <div className="space-y-6 max-w-3xl">
          {/* Phone Card - Primary CTA */}
          <a
            href="tel:+998991325521"
            className="block"
          >
            <Card className="bg-primary hover:bg-primary/90 transition-all duration-300 p-6 md:p-8 group cursor-pointer border-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Phone className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-1">
                      {t('contact.phone.label')}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-primary-foreground">
                      +998 99 132 55 21
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/sprachschule_berliner"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-card hover:bg-accent/50 transition-all duration-300 p-6 md:p-8 group cursor-pointer border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0088cc] flex items-center justify-center">
                    <Send className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {t('contact.telegram.label')}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                      {t('contact.telegram.title')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all" />
              </div>
            </Card>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/sprachschule_berliner?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-card hover:bg-accent/50 transition-all duration-300 p-6 md:p-8 group cursor-pointer border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <svg className="h-6 w-6 md:h-7 md:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {t('contact.instagram.label')}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                      Instagram
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground transition-all" />
              </div>
            </Card>
          </a>

          {/* Address and Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* Address */}
            <div>
              <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider mb-3">
                {t('contact.address')}
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Hamid Olimjon ko'chasi 2b uy,
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Urgench
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <p className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider mb-3">
                {t('contact.hours.label')}
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground">
                {t('contact.hours.days')}
              </p>
              <p className="text-lg md:text-xl font-semibold text-foreground">
                08:00 — 20:00
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-[350px] rounded-2xl bg-muted/30 border border-border/50 overflow-hidden shadow-inner mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24758.98647307247!2d60.61!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41df19ef35e7f4d5%3A0x7e8b7e6e0e8b7e6e!2sUrganch%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1704380000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
