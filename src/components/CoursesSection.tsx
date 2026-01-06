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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.lucideIcon;
            return (
              <Card
                key={course.id}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/80 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative gradient orb */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${course.color} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative pt-8 pb-4">
                  {/* Icon container with glow effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                      <span className="text-3xl">{course.icon}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(`courses.${course.id}`)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
                    {t(`courses.${course.id}.desc`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative pb-8">
                  {/* Info badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Users className="h-3 w-3" />
                      {t('courses.level')}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs font-medium">
                      <Clock className="h-3 w-3" />
                      {t('courses.duration')}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300"
                  >
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
