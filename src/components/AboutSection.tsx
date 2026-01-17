import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import berlinGate from '@/assets/berlin-brandenburg-gate.jpg';
import aboutIntensity from '@/assets/about-intensity.jpg';
import aboutTeachers from '@/assets/about-teachers.jpg';
import aboutVisaHelp from '@/assets/about-visa-help.jpg';
import aboutGoethe from '@/assets/about-goethe-classroom.jpg';
import aboutGoetheStatus from '@/assets/goethe-exam-status.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const whyBerlinerCards = [
    {
      image: aboutIntensity,
      titleKey: 'about.card.intensity',
      textKey: 'about.card.intensity.text',
      alt: 'Intensive German courses - 5 days a week'
    },
    {
      image: aboutGoetheStatus,
      wide: true,
      titleKey: 'about.card.goethe.status',
      textKey: 'about.card.goethe.status.text',
      alt: 'Official Goethe Exam Center Status'
    },
    {
      image: aboutGoethe,
      titleKey: 'about.card.global',
      textKey: 'about.card.global.text',
      alt: 'Global Standard - Goethe Institut'
    },
    {
      image: aboutTeachers,
      titleKey: 'about.card.teachers',
      textKey: 'about.card.teachers.text',
      alt: 'Experienced Teachers'
    },
    {
      image: aboutVisaHelp,
      titleKey: 'about.card.help',
      textKey: 'about.card.help.text',
      alt: 'Real Help with Visa'
    }
  ];

  return (
    <section className="py-20 md:py-32 scroll-mt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HERO: The Vision (Big & Bold) */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-[120px] font-black tracking-tighter leading-[0.85] mb-12">
              {t('about.hero.line1')} <br />
              <span className="text-primary italic">{t('about.hero.line2')}</span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-medium text-muted-foreground leading-tight max-w-4xl italic">
              "{t('about.hero.quote')}"
            </p>
          </div>
        </div>

        {/* WHY BERLINER: Carousel with Image Cards */}
        <div className="mb-32 md:mb-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-12 md:mb-16">
            {t('about.why.title')}
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-4 md:-ml-6 overflow-visible pb-20 md:pb-24">
              {whyBerlinerCards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className={`pl-4 md:pl-6 overflow-visible ${'wide' in card && card.wide
                    ? "basis-[95%] sm:basis-[85%] md:basis-[75%] lg:basis-[65%]"
                    : "basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-[45%]"
                  }`}
                >
                  <div className="relative group">
                    <div className={`rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl ${'wide' in card && card.wide ? "aspect-[3/4] bg-gradient-to-br from-muted to-muted/80" : "aspect-[3/4] bg-muted"}`}>
                      {'wide' in card && card.wide ? (
                        <div className="w-full h-full flex items-center justify-center p-8 md:p-12">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    {/* Orange Label Overlay - like original */}
                    <div className="absolute -bottom-10 md:-bottom-12 left-4 right-4 md:left-6 md:right-6 bg-primary text-primary-foreground p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl">
                      <h3 className="text-xl md:text-2xl font-black mb-2 italic">
                        {t(card.titleKey)}
                      </h3>
                      <p className="font-bold opacity-90 leading-tight text-sm md:text-base">
                        {t(card.textKey)}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 border-2 border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 h-12 w-12 md:h-14 md:w-14 border-2 border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </div>

        {/* VALUES: Minimalistic List */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-32 md:mb-40 px-0 md:px-6">
          <div className="lg:col-span-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter lg:sticky lg:top-32">
              {t('about.values.title.line1')} <br className="hidden lg:block" />{t('about.values.title.line2')}
            </h3>
          </div>
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-primary font-black text-5xl md:text-6xl block mb-4 md:mb-6">01</span>
                <h5 className="text-xl md:text-2xl font-black mb-3 md:mb-4 italic">{t('about.values.1.title')}</h5>
                <p className="text-muted-foreground font-medium leading-relaxed">{t('about.values.1.text')}</p>
              </div>
              <div>
                <span className="text-primary font-black text-5xl md:text-6xl block mb-4 md:mb-6">02</span>
                <h5 className="text-xl md:text-2xl font-black mb-3 md:mb-4 italic">{t('about.values.2.title')}</h5>
                <p className="text-muted-foreground font-medium leading-relaxed">{t('about.values.2.text')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ATMOSPHERE: Full-Width Callout */}
        <div className="bg-foreground text-background rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-32 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter leading-tight mb-8 md:mb-10">
              {t('about.callout.line1')} <br />
              {t('about.callout.line2')} <span className="text-primary italic">{t('about.callout.accent')}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-10 border-t border-background/10">
              <div>
                <Sparkles className="text-primary mb-4" size={32} />
                <p className="text-lg md:text-xl text-muted italic">
                  "{t('about.callout.quote')}"
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 md:px-10 py-5 md:py-6 font-black text-lg md:text-xl shadow-2xl hover:scale-105 transition-transform"
                >
                  <Link to="/contact" className="flex items-center gap-4">
                    {t('about.callout.cta')} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
