import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-classroom.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-paper pt-32 md:pt-36 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 border-b border-ink pb-16">
          {/* Lead column */}
          <div className="md:col-span-8 md:border-r md:border-ink/10 md:pr-12">
            <span className="inline-block px-3 py-1 bg-flag-gold text-ink text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              The Lead Story · {t('hero.badge')}
            </span>

            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-tight text-ink mb-10">
              {t('hero.title')} <br />
              <span className="italic text-primary">{t('hero.passion')}.</span>
            </h1>

            <div className="aspect-[16/8] w-full bg-ink/10 mb-10 overflow-hidden relative">
              <img
                src={heroImage}
                alt="Berliner Sprachschule Klassenzimmer in Urgench"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-paper text-[10px] font-bold uppercase tracking-[0.3em]">
                Campus · Urgench
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <p className="font-serif text-2xl leading-snug text-ink">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col items-start gap-6">
                <p className="text-sm opacity-70 leading-relaxed">
                  {t('hero.feature1.sub')} · {t('hero.feature3.sub')}.
                </p>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-ink transition-colors group"
                >
                  {t('hero.cta')}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar features */}
          <aside className="md:col-span-4 space-y-10">
            {[
              { title: t('hero.feature1'), sub: t('hero.feature1.sub') },
              { title: t('hero.feature2'), sub: t('hero.feature2.sub') },
              { title: t('hero.feature3'), sub: t('hero.feature3.sub') },
            ].map((f, i) => (
              <div key={i} className="border-b border-ink pb-6">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">
                  Feature 0{i + 1}
                </span>
                <h3 className="font-serif text-3xl italic mt-2 mb-3 text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{f.sub}</p>
              </div>
            ))}

            <div className="p-6 bg-flag-red text-paper">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">
                Aktuell
              </span>
              <h3 className="font-serif text-3xl mt-2 mb-3">{t('hero.feature4')}</h3>
              <p className="text-sm opacity-90 mb-5 leading-relaxed">{t('hero.feature4.sub')}</p>
              <Link
                to="/contact"
                className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] border-b border-paper pb-1 hover:opacity-70"
              >
                {t('hero.contactBtn')} →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}