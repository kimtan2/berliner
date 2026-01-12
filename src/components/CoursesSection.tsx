import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CoursesSection() {
  const { t } = useLanguage();

  const courses = [
    {
      id: 'germanA1C2',
      badge: 'A1-C2',
      number: '01',
      bgClass: 'bg-primary',
      link: '/contact?course=a1c2',
      hasCta: false,
    },
    {
      id: 'ausbildung',
      badge: 'STUDIUM & AUSBILDUNG',
      number: '02',
      bgClass: 'bg-[hsl(var(--chart-1))]',
      link: '/studium',
      hasCta: true,
    },
    {
      id: 'testdaf',
      badge: 'TESTDAF',
      number: '03',
      bgClass: 'bg-[hsl(var(--chart-2))]',
      link: '/contact?course=testdaf',
      hasCta: false,
    },
    {
      id: 'kids',
      badge: 'KINDER',
      number: '04',
      bgClass: 'bg-[hsl(var(--chart-4))]',
      link: '/contact?course=kids',
      hasCta: false,
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
              className={`group relative overflow-hidden rounded-3xl ${course.bgClass} p-8 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Background number */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[180px] font-black text-white/10 leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
                {course.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Badge & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-wider">
                    {course.badge}
                  </span>
                  <Link 
                    to={course.link}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 hover:bg-white/20"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:translate-x-1 transition-transform">
                  {t(`courses.${course.id}`)}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {t(`courses.${course.id}.desc`)}
                </p>
              </div>

              {/* Bottom section with info and CTA */}
              <div className="relative z-10 space-y-4 mt-6">
                {/* Info badges */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    <span>{t('courses.duration')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Users className="h-4 w-4" />
                    <span>{t('courses.level')}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={course.link} className="block">
                  <Button 
                    variant="secondary" 
                    className="w-full group/btn bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    {course.hasCta ? t('courses.cta.learn') : t('courses.cta.contact')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

