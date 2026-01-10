import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, BookOpen, History, Trophy, User } from 'lucide-react';
import berlinGate from '@/assets/berlin-brandenburg-gate.jpg';
import berlinSkyline from '@/assets/berlin-skyline.jpg';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, text: 'about.students', value: '500+' },
    { icon: Award, text: 'about.experience', value: '15+' },
    { icon: BookOpen, text: 'about.teachers', value: '20+' },
  ];

  const teamMembers = [
    { name: 'about.team.member1.name', role: 'about.team.member1.role' },
    { name: 'about.team.member2.name', role: 'about.team.member2.role' },
    { name: 'about.team.member3.name', role: 'about.team.member3.role' },
    { name: 'about.team.member4.name', role: 'about.team.member4.role' },
  ];

  const achievements = [
    { icon: Trophy, key: 'about.achievement1' },
    { icon: Award, key: 'about.achievement2' },
    { icon: Users, key: 'about.achievement3' },
    { icon: BookOpen, key: 'about.achievement4' },
  ];

  const historyEvents = [
    { year: '2010', key: 'about.history.2010' },
    { year: '2015', key: 'about.history.2015' },
    { year: '2018', key: 'about.history.2018' },
    { year: '2023', key: 'about.history.2023' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
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
              {['about.feature1', 'about.feature2', 'about.feature3', 'about.feature4'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{t(item)}</span>
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

        {/* Geschichte Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <History className="h-3 w-3 mr-1" />
              {t('about.history.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.history.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.history.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {historyEvents.map((event, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                        <p className="text-muted-foreground">{t(event.key)}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <Users className="h-3 w-3 mr-1" />
              {t('about.team.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  {/* Placeholder Avatar */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border border-border/50">
                    <User className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t(member.name)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(member.role)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Erfolge Section */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <Trophy className="h-3 w-3 mr-1" />
              {t('about.achievements.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.achievements.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.achievements.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <achievement.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(`${achievement.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${achievement.key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
