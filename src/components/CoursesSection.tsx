import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export function CoursesSection() {
  const { t } = useLanguage();

  const courses = [
    { id: 'germanA1C2', number: '01', kicker: 'Intensive', link: '/contact?course=a1c2', hover: 'hover:bg-primary hover:text-primary-foreground' },
    { id: 'ausbildung', number: '02', kicker: 'Pathways',  link: '/studium',              hover: 'hover:bg-flag-red hover:text-paper' },
    { id: 'testdaf',    number: '03', kicker: 'Certification', link: '/contact?course=testdaf', hover: 'hover:bg-flag-gold hover:text-ink' },
    { id: 'kids',       number: '04', kicker: 'Juniors',   link: '/contact?course=kids',  hover: 'hover:bg-ink hover:text-paper' },
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-white border-b border-ink scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end border-b-2 border-ink pb-4 mb-12">
          <h2 className="font-serif text-5xl md:text-6xl text-ink leading-none">
            {t('courses.title')}
          </h2>
          <p className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
            Vol. 2026 · Course Catalog
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink border border-ink">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.link}
              className={`bg-paper p-8 md:p-10 min-h-[340px] flex flex-col transition-colors group ${course.hover}`}
            >
              <div className="flex items-center justify-between mb-16">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100">
                  No. {course.number}
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100">
                  {course.kicker}
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl leading-[0.95] mb-6">
                {t(`courses.${course.id}`)}
              </h3>

              <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100 mb-auto">
                {t(`courses.${course.id}.desc`)}
              </p>

              <div className="flex items-center justify-between border-t border-current/30 pt-4 mt-8">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
                  {t('courses.duration')} · {t('courses.level')}
                </span>
                <span className="text-xl">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

