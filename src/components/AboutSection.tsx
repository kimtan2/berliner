import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, BookOpen, History, Heart, Target } from 'lucide-react';
import berlinGate from '@/assets/berlin-brandenburg-gate.jpg';
import berlinSkyline from '@/assets/berlin-skyline.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, text: 'about.students', value: '500+' },
    { icon: Award, text: 'about.experience', value: '15+' },
    { icon: BookOpen, text: 'about.teachers', value: '20+' },
  ];

  const team = [
    { name: 'Dilshodbek', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena', role: 'Head of German Department', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Aziz', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img src={berlinGate} alt="Berlin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium">Berlin 🇩🇪</span>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img src={berlinSkyline} alt="Berlin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-white/80 font-medium">Deutschland 🇩🇪</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-3xl bg-card border border-border/50 flex flex-col items-center lg:flex-row lg:gap-6 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 lg:mb-0">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{t(stat.text)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <History className="absolute -right-10 -top-10 h-64 w-64 text-primary/5 rotate-12" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <History className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold">{t('about.history.title')}</h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('about.history.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('about.team.title')}</h3>
            <p className="text-lg text-muted-foreground">{t('about.team.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 overflow-hidden rounded-[32px] aspect-[4/5]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('about.success.title')}</h3>
            <p className="text-lg text-muted-foreground">{t('about.success.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[40px] bg-card border border-border flex gap-8 items-start hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">98% Kundenzufriedenheit</h4>
                <p className="text-muted-foreground leading-relaxed">Unsere Schüler schätzen die persönliche Betreuung und die familiäre Atmosphäre in unserer Schule.</p>
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-card border border-border flex gap-8 items-start hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Target className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Über 500 Visa-Erfolge</h4>
                <p className="text-muted-foreground leading-relaxed">Wir haben bereits über 500 Schülern erfolgreich bei ihrem Visumsprozess für Deutschland geholfen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

