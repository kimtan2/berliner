import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import berlinGate from '@/assets/berlin-brandenburg-gate.jpg';
import aboutClassroom from '@/assets/about-classroom.jpg';
import aboutTeachers from '@/assets/about-teachers.jpg';
import aboutVisaHelp from '@/assets/about-visa-help.jpg';
import aboutGoethe from '@/assets/about-goethe-standard.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const whyBerlinerCards = [
    {
      image: berlinGate,
      labelKey: 'about.card.urganchda',
      alt: 'Urganchda - Berlin Brandenburg Gate'
    },
    {
      image: aboutGoethe,
      labelKey: 'about.card.global',
      alt: 'Global Standard - Goethe Institut'
    },
    {
      image: aboutTeachers,
      labelKey: 'about.card.teachers',
      alt: 'Experienced Teachers'
    },
    {
      image: aboutVisaHelp,
      labelKey: 'about.card.help',
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

        {/* WHY BERLINER: 4 Image Cards with Labels */}
        <div className="mb-32 md:mb-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-12 md:mb-16">
            {t('about.why.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyBerlinerCards.map((card, index) => (
              <div key={index} className="relative group">
                <div className="aspect-[3/4] rounded-[32px] md:rounded-[40px] bg-muted overflow-hidden shadow-2xl">
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Orange Label Overlay */}
                <div className="absolute -bottom-4 left-4 right-4 md:-bottom-6 md:left-6 md:right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-[20px] md:rounded-[24px] shadow-2xl">
                  <h3 className="text-base md:text-lg lg:text-xl font-black italic leading-tight text-center">
                    {t(card.labelKey)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
