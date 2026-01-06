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
              className="group relative overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <CardHeader className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {t(`courses.${course.id}`)}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t(`courses.${course.id}.desc`)}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {t('courses.level')}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {t('courses.duration')}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
