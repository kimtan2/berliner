import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with Creative Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Language classroom"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />

        {/* Diagonal Accent Shape */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 50%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">

          {/* Title with Creative Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.title')}
            <span className="block mt-3 text-primary relative">
              {t('hero.passion')}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C150 2 250 2 398 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 max-w-2xl">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group relative overflow-hidden"
              asChild
            >
              <a href="#courses" className="relative z-10">
                <span className="relative z-10">{t('hero.cta')}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:scale-105 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-2 backdrop-blur-sm bg-background/80 hover:bg-background/90 hover:scale-105 transition-all group"
              asChild
            >
              <a href="#about">
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Mehr erfahren
              </a>
            </Button>
          </div>

          {/* Reasons to Choose Berliner */}
          <div className="flex flex-wrap gap-6 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {[
              { icon: GraduationCap, text: t('hero.reason1') },
              { icon: Users, text: t('hero.reason2') },
              { icon: Award, text: t('hero.reason3') }
            ].map((reason, idx) => (
              <div key={idx} className="flex items-center gap-3 group cursor-default bg-background/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                <reason.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{reason.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}