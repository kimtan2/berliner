import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      text: t('hero.feature1'),
      sublabel: t('hero.feature1.sub'),
    },
    {
      icon: Sparkles,
      text: t('hero.feature2'),
      sublabel: t('hero.feature2.sub'),
    },
    {
      icon: GraduationCap,
      text: t('hero.feature3'),
      sublabel: t('hero.feature3.sub'),
    },
    {
      icon: Users,
      text: t('hero.feature4'),
      sublabel: t('hero.feature4.sub'),
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden"
    >
      {/* Background with Creative Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Language classroom"
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />

        {/* Diagonal Accent Shape */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 50%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl pt-8">

          {/* Title with Creative Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.title')}
            <span className="block mt-3 text-primary relative inline-block">
              {t('hero.passion')}
              <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 400 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14C80 4 160 4 240 8C320 12 360 6 398 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/30" />
                <path d="M2 12C100 2 200 6 300 4C350 3 380 8 398 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/50" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 max-w-2xl">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
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

          {/* Enhanced Feature Cards */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                >
                  {/* Warm Glassmorphism Card */}
                  <div className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group/card"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 237, 213, 0.25) 0%, rgba(254, 215, 170, 0.15) 50%, rgba(251, 191, 36, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(251, 191, 36, 0.2)',
                      boxShadow: '0 8px 32px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {/* Warm Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)'
                      }}
                    />

                    {/* Subtle Inner Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3"
                        style={{
                          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.2) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(251, 191, 36, 0.3)',
                          boxShadow: '0 4px 16px rgba(245, 158, 11, 0.2)'
                        }}
                      >
                        <feature.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>

                    {/* Feature Text */}
                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {feature.text}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.sublabel}
                      </p>
                    </div>

                    {/* Warm Corner Glow */}
                    <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover/card:opacity-30 transition-opacity duration-500 blur-2xl"
                      style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, transparent 70%)' }}
                    />
                  </div>

                  {/* Connector Line (visible between cards on desktop) */}
                  {idx < features.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 md:-right-3 w-6 h-px bg-gradient-to-r from-border to-transparent z-0" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}