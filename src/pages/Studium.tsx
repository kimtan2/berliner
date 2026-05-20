import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Plane, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Clock,
  Euro,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import berlinImage from '@/assets/berlin-brandenburg-gate.jpg';
import skylineImage from '@/assets/berlin-skyline.jpg';

const Studium = () => {
  const { t } = useLanguage();

  const pathways = [
    {
      id: 'studium',
      icon: GraduationCap,
      color: 'bg-primary',
      features: ['studium.pathway.studium.feature1', 'studium.pathway.studium.feature2', 'studium.pathway.studium.feature3'],
    },
    {
      id: 'ausbildung',
      icon: Briefcase,
      color: 'bg-[hsl(var(--chart-1))]',
      features: ['studium.pathway.ausbildung.feature1', 'studium.pathway.ausbildung.feature2', 'studium.pathway.ausbildung.feature3'],
    },
    {
      id: 'arbeit',
      icon: Building2,
      color: 'bg-[hsl(var(--chart-2))]',
      features: ['studium.pathway.arbeit.feature1', 'studium.pathway.arbeit.feature2', 'studium.pathway.arbeit.feature3'],
    },
  ];

  const steps = [
    { icon: BookOpen, step: 1 },
    { icon: FileText, step: 2 },
    { icon: Users, step: 3 },
    { icon: Plane, step: 4 },
  ];

  const benefits = [
    { icon: Euro, id: 'benefit1' },
    { icon: GraduationCap, id: 'benefit2' },
    { icon: Clock, id: 'benefit3' },
    { icon: Heart, id: 'benefit4' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={berlinImage} 
              alt="Brandenburg Gate Berlin" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-background/80 backdrop-blur-sm">
                <GraduationCap className="h-3 w-3 mr-1" />
                {t('studium.badge')}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {t('studium.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold italic mb-6">
                {t('studium.hero.accent')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                {t('studium.hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?course=studium">
                  <Button size="lg" className="group">
                    {t('studium.hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('studium.pathways.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('studium.pathways.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pathways.map((pathway) => (
                <Card key={pathway.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`${pathway.color} p-6`}>
                    <pathway.icon className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white">
                      {t(`studium.pathway.${pathway.id}.title`)}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {t(`studium.pathway.${pathway.id}.desc`)}
                    </p>
                    <ul className="space-y-3">
                      {pathway.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('studium.process.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('studium.process.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30" />
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center relative">
                      <step.icon className="h-10 w-10 text-primary" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t(`studium.step${step.step}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`studium.step${step.step}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Image */}
        <section className="py-20 md:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={skylineImage} 
                    alt="Berlin Skyline" 
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                </div>
              </div>

              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {t('studium.benefits.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('studium.benefits.subtitle')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.id} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {t(`studium.${benefit.id}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`studium.${benefit.id}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link to="/contact?course=studium">
                    <Button size="lg" className="group">
                      {t('studium.benefits.cta')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1),_transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {t('studium.cta.title')}
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {t('studium.cta.subtitle')}
              </p>
              <Link to="/contact?course=studium">
                <Button size="lg" variant="secondary" className="group">
                  {t('studium.cta.button')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Studium;
