import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, ArrowRight, GraduationCap, FileCheck, Baby } from 'lucide-react';

export function CoursesSection() {
  const { t } = useLanguage();

  const courses = [
    { id: 'germanA1C2', icon: '🇩🇪', color: 'from-yellow-500/20 to-red-500/20', lucideIcon: BookOpen },
    { id: 'ausbildung', icon: '💼', color: 'from-blue-500/20 to-primary/20', lucideIcon: GraduationCap },
    { id: 'testdaf', icon: '📝', color: 'from-primary/20 to-accent/20', lucideIcon: FileCheck },
    { id: 'kids', icon: '👶', color: 'from-green-500/20 to-blue-500/20', lucideIcon: Baby },
  ];

  return (
    <section id="courses" className="py-20 md:py-32 bg-card/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <BookOpen className="h-3 w-3 mr-1" />
            {t('nav.courses')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('courses.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={course.id}
              className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

              <CardHeader className="relative p-8 pb-4">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="text-3xl drop-shadow-md filter">{course.icon}</span>
                </div>

                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t(`courses.${course.id}`)}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground/80 leading-relaxed mt-2">
                  {t(`courses.${course.id}.desc`)}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative p-8 pt-4">
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Users className="h-4 w-4" />
                    </div>
                    {t('courses.level')}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Clock className="h-4 w-4" />
                    </div>
                    {t('courses.duration')}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-300 h-12 rounded-xl"
                >
                  <span className="font-semibold">{t('hero.cta')}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
