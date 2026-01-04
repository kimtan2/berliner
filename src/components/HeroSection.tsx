import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Language classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Sprachschule Berliner</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-card/50 backdrop-blur-sm hover:bg-card border-border"
              asChild
            >
              <a href="#courses">{t('hero.secondary')}</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">{t('about.students')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">{t('about.teachers')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
