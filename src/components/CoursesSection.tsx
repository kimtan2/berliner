import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users } from 'lucide-react';

export function CoursesSection() {
  const { t } = useLanguage();

  const courses = [
    { 
      id: 'germanA1C2', 
      badge: 'A1-C2',
      number: '01',
      bgClass: 'bg-primary',
    },
    { 
      id: 'ausbildung', 
      badge: 'AUSBILDUNG',
      number: '02',
      bgClass: 'bg-orange-500',
    },
    { 
      id: 'testdaf', 
      badge: 'TESTDAF',
      number: '03',
      bgClass: 'bg-emerald-500',
    },
    { 
      id: 'kids', 
      badge: 'KIDS',
      number: '04',
      bgClass: 'bg-violet-500',
    },
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
          {courses.map((course) => (
            <div
              key={course.id}
              className={`group relative overflow-hidden rounded-3xl ${course.bgClass} p-8 min-h-[320px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Background number */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[180px] font-black text-white/10 leading-none select-none pointer-events-none">
                {course.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider mb-6">
                  {course.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {t(`courses.${course.id}`)}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {t(`courses.${course.id}.desc`)}
                </p>
              </div>

              {/* Bottom info badges */}
              <div className="relative z-10 flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  <span>{t('courses.duration')}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <Users className="h-4 w-4" />
                  <span>{t('courses.level')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
