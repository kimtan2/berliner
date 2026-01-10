import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Building,
  Globe,
  HeartHandshake,
  MessageSquare,
  ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AusbildungSection() {
  const { t } = useLanguage();

  const processSteps = [
    { icon: MessageSquare, step: 1, key: 'ausbildung.step1' },
    { icon: ClipboardList, step: 2, key: 'ausbildung.step2' },
    { icon: FileText, step: 3, key: 'ausbildung.step3' },
    { icon: Building, step: 4, key: 'ausbildung.step4' },
    { icon: Globe, step: 5, key: 'ausbildung.step5' },
  ];

  const services = [
    { icon: GraduationCap, key: 'ausbildung.service1' },
    { icon: Briefcase, key: 'ausbildung.service2' },
    { icon: FileText, key: 'ausbildung.service3' },
    { icon: HeartHandshake, key: 'ausbildung.service4' },
  ];

  const benefits = [
    'ausbildung.benefit1',
    'ausbildung.benefit2',
    'ausbildung.benefit3',
    'ausbildung.benefit4',
    'ausbildung.benefit5',
    'ausbildung.benefit6',
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Briefcase className="h-3 w-3 mr-1" />
            {t('ausbildung.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('ausbildung.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {t('ausbildung.subtitle')}
          </p>

          <Button asChild size="lg" className="group">
            <Link to="/contact">
              {t('ausbildung.cta')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* What is Ausbildung */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('ausbildung.what.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('ausbildung.what.text1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('ausbildung.what.text2')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>{t('ausbildung.duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Building className="h-5 w-5 text-primary" />
                <span>{t('ausbildung.salary')}</span>
              </div>
            </div>
          </div>
          
          {/* Placeholder for future image */}
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center border border-border/50">
            <div className="text-center p-8">
              <GraduationCap className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Ausbildung Image Placeholder</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('ausbildung.process.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('ausbildung.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 mt-4">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${step.key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('ausbildung.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('ausbildung.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{t(`${service.key}.title`)}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t(`${service.key}.desc`)}
                  </p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {t(`${service.key}.item${item}`)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('ausbildung.benefits.title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{t(benefit)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <p className="text-lg text-muted-foreground mb-6">
                  {t('ausbildung.benefits.cta.text')}
                </p>
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    {t('ausbildung.benefits.cta.button')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
