import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: GraduationCap,
      text: t('hero.reason1'),
      highlight: '20+',
      sublabel: 'Experten',
      color: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/20'
    },
    {
      icon: Users,
      text: t('hero.reason2'),
      highlight: '8-12',
      sublabel: 'pro Gruppe',
      color: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      icon: Award,
      text: t('hero.reason3'),
      highlight: '98%',
      sublabel: 'Erfolgsquote',
      color: 'from-violet-500 to-purple-600',
      shadowColor: 'shadow-violet-500/20'
    }
  ];

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
        <div className="max-w-4xl">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Urganchs #1 Sprachschule</span>
          </div>

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                >
                  {/* Card */}
                  <div className={`relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl ${feature.shadowColor} hover:-translate-y-2`}>
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

                    {/* Decorative Top Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Top Row: Icon + Highlight Number */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {feature.highlight}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          {feature.sublabel}
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-border via-border/50 to-transparent mb-4" />

                    {/* Feature Text */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-semibold text-foreground">
                          {feature.text}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Corner Circle */}
                    <div className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  </div>

                  {/* Connector Line (visible between cards on desktop) */}
                  {idx < features.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 md:-right-3 w-6 h-px bg-gradient-to-r from-border to-transparent z-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <div className="flex flex-wrap items-center justify-start gap-8 text-sm text-muted-foreground">
                {/* Student Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[
                      { initial: 'A', bg: 'from-orange-400 to-amber-500' },
                      { initial: 'M', bg: 'from-emerald-400 to-teal-500' },
                      { initial: 'S', bg: 'from-violet-400 to-purple-500' },
                      { initial: 'D', bg: 'from-rose-400 to-pink-500' },
                    ].map((avatar, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatar.bg} border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-lg`}
                      >
                        {avatar.initial}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-xs font-bold text-primary shadow-lg">
                      +96
                    </div>
                  </div>
                  <span className="font-medium">500+ zufriedene Schüler</span>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-border hidden md:block" />

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">4.9/5 Bewertung</span>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-border hidden lg:block" />

                {/* Years */}
                <div className="hidden lg:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">15+</span>
                  </div>
                  <span className="font-medium">Jahre Erfahrung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}