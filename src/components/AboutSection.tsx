import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, BookOpen } from 'lucide-react';
import berlinGate from '@/assets/berlin-brandenburg-gate.jpg';
import berlinSkyline from '@/assets/berlin-skyline.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, text: 'about.students', value: '500+' },
    { icon: Award, text: 'about.experience', value: '15+' },
    { icon: BookOpen, text: 'about.teachers', value: '20+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <Users className="h-3 w-3 mr-1" />
              {t('nav.about')}
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.text1')}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.text2')}
            </p>

            {/* Berlin Images */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={berlinGate}
                  alt="Brandenburg Gate, Berlin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium">Berlin, Deutschland 🇩🇪</span>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={berlinSkyline}
                  alt="Berlin Skyline"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium">Deutschland 🇩🇪</span>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="space-y-4">
              {['Professional native speakers', 'Small group classes', 'Flexible scheduling', 'Modern teaching methods'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{feature.value}</div>
                <div className="text-sm text-muted-foreground">{t(feature.text)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
