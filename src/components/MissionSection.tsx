import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Globe, Lightbulb, Users, GraduationCap } from 'lucide-react';

export function MissionSection() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, key: 'mission.value1' },
    { icon: Globe, key: 'mission.value2' },
    { icon: Lightbulb, key: 'mission.value3' },
    { icon: Users, key: 'mission.value4' },
    { icon: GraduationCap, key: 'mission.value5' },
    { icon: Target, key: 'mission.value6' },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Target className="h-3 w-3 mr-1" />
            {t('mission.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('mission.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-primary/5 border-primary/20 mb-16">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Target className="h-8 w-8" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic leading-relaxed">
              "{t('mission.statement')}"
            </blockquote>
          </CardContent>
        </Card>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('mission.vision.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('mission.vision.text1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('mission.vision.text2')}
            </p>
          </div>
          
          {/* Placeholder for future image */}
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center border border-border/50">
            <div className="text-center p-8">
              <Globe className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Vision Image Placeholder</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('mission.values.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('mission.values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`${value.key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`${value.key}.desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
