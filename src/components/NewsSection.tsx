import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: {
    de: string;
    ru: string;
    uz: string;
  };
  excerpt: {
    de: string;
    ru: string;
    uz: string;
  };
  fullText: {
    de: string;
    ru: string;
    uz: string;
  };
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    date: "15.12.2025",
    title: {
      de: "Neue Vitamin de Ausgabe",
      ru: "Новый выпуск журнала Vitamin de",
      uz: "Yangi Vitamin de nashri"
    },
    excerpt: {
      de: "Vitamin de ist eine Zeitschrift des Goethe-Instituts für Jugendliche...",
      ru: "Vitamin de – это журнал, издаваемый Гёте-Институтом для подростков и молодёжи...",
      uz: "Vitamin de – bu Goethe instituti tomonidan yoshlar uchun nashr etiladigan jurnal..."
    },
    fullText: {
      de: "Vitamin de ist eine Zeitschrift des Goethe-Instituts für Jugendliche und junge Erwachsene, die Deutsch lernen. Die neue Ausgabe enthält spannende Artikel über das Leben in Deutschland, Interviews mit interessanten Persönlichkeiten und praktische Tipps zum Deutschlernen. Unsere Schüler haben die Möglichkeit, diese Zeitschrift kostenlos zu lesen und ihr Leseverständnis zu verbessern.",
      ru: "Vitamin de – это журнал, издаваемый Гёте-Институтом для подростков и молодёжи, изучающих немецкий язык. Новый выпуск содержит увлекательные статьи о жизни в Германии, интервью с интересными личностями и практические советы по изучению немецкого языка. Наши ученики имеют возможность бесплатно читать этот журнал и улучшать свои навыки чтения.",
      uz: "Vitamin de – bu Goethe instituti tomonidan nemis tilini o'rganayotgan yoshlar va o'smirlar uchun nashr etiladigan jurnal. Yangi nashri Germaniyada hayot haqida qiziqarli maqolalar, qiziqarli shaxslar bilan intervyular va nemis tilini o'rganish bo'yicha amaliy maslahatlarni o'z ichiga oladi. Bizning o'quvchilarimiz ushbu jurnalni bepul o'qish va o'qish ko'nikmalarini yaxshilash imkoniyatiga ega."
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    date: "10.12.2025",
    title: {
      de: "Fortbildungskurs in Fergana",
      ru: "Курс повышения квалификации в Фергане",
      uz: "Farg'onada malaka oshirish kursi"
    },
    excerpt: {
      de: "Offline-Seminar in Zusammenarbeit mit dem Goethe-Institut...",
      ru: "Оффлайн-этап семинара-тренинга, организованного совместно с Гёте-Институтом...",
      uz: "Goethe instituti bilan hamkorlikda tashkil etilgan seminar-trenining oflayn bosqichi..."
    },
    fullText: {
      de: "Unsere Lehrer haben am Offline-Seminar teilgenommen, das in Zusammenarbeit mit dem Goethe-Institut organisiert wurde. Der Kurs konzentrierte sich auf moderne Lehrmethoden und den Einsatz digitaler Medien im Deutschunterricht. Die Teilnehmer erhielten wertvolle Einblicke in aktuelle pädagogische Ansätze und konnten ihr Wissen mit Kollegen aus anderen Schulen teilen.",
      ru: "Наши преподаватели приняли участие в офлайн-семинаре, организованном совместно с Гёте-Институтом. Курс был посвящен современным методам преподавания и использованию цифровых средств на уроках немецкого языка. Участники получили ценные знания о современных педагогических подходах и смогли обменяться опытом с коллегами из других школ.",
      uz: "Bizning o'qituvchilarimiz Goethe instituti bilan hamkorlikda tashkil etilgan oflayn seminarda qatnashdilar. Kurs zamonaviy o'qitish usullari va nemis tili darslarida raqamli vositalardan foydalanishga bag'ishlandi. Ishtirokchilar zamonaviy pedagogik yondashuvlar haqida qimmatli bilimlar oldilar va boshqa maktablardan kelgan hamkasblari bilan tajriba almashish imkoniyatiga ega bo'ldilar."
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
    date: "05.12.2025",
    title: {
      de: "Erlebnisse von Azubis",
      ru: "Впечатления учеников Ausbildung",
      uz: "Ausbildung o'quvchilarining taassurotlari"
    },
    excerpt: {
      de: "Unsere ehemaligen Schüler berichten über ihre Erfahrungen in Deutschland...",
      ru: "Наши выпускники делятся впечатлениями о жизни и обучении в Германии...",
      uz: "Bitiruvchilarimiz Germaniyada hayot va o'qish taassurotlari bilan bo'lishmoqdalar..."
    },
    fullText: {
      de: "Liebe Schüler unseres Zentrums, für euch wurde eine Veranstaltung unter dem Namen 'Erlebnisse von Azubis' organisiert. Unsere ehemaligen Schüler, die jetzt eine Ausbildung in Deutschland machen, haben ihre Erfahrungen geteilt. Sie erzählten über das Leben in Deutschland, die Arbeit und die Herausforderungen, die sie bewältigen mussten. Diese Veranstaltung war eine große Inspiration für unsere aktuellen Schüler.",
      ru: "Уважаемые слушатели нашего центра, для вас была организована встреча под названием 'Erlebnisse von Azubis'. Наши выпускники, которые сейчас проходят Ausbildung в Германии, поделились своим опытом. Они рассказали о жизни в Германии, работе и трудностях, с которыми им пришлось столкнуться. Это мероприятие стало большим вдохновением для наших нынешних учеников.",
      uz: "Hurmatli markazimiz tinglovchilari, sizlar uchun 'Erlebnisse von Azubis' nomli uchrashuv tashkil etildi. Hozirda Germaniyada Ausbildung o'tayotgan bitiruvchilarimiz o'z tajribalari bilan bo'lishdilar. Ular Germaniyada hayot, ish va duch kelgan qiyinchiliklar haqida gapirib berdilar. Bu tadbir hozirgi o'quvchilarimiz uchun katta ilhom manbai bo'ldi."
    }
  }
];

export function NewsSection() {
  const { t, language } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('news.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card 
              key={item.id} 
              className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedNews(item)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-2">
                  {item.title[language]}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt[language]}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <Button variant="default" size="sm" className="gap-1">
                    {t('news.readMore')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* News Modal */}
      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedNews && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {selectedNews.title[language]}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title[language]}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedNews.date}</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  {selectedNews.fullText[language]}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
