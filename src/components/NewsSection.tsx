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
import goetheExamsImage from '@/assets/goethe-exams.png';

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: {
    de: string;
    ru: string;
    uz: string;
    en: string;
  };
  excerpt: {
    de: string;
    ru: string;
    uz: string;
    en: string;
  };
  fullText: {
    de: string;
    ru: string;
    uz: string;
    en: string;
  };
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: goetheExamsImage,
    date: "24.10.2025",
    title: {
      uz: "Urganchda Goethe imtihonlari",
      ru: "Экзамены Goethe в Ургенче",
      de: "Goethe-Prüfungen in Urgentsch",
      en: "Goethe Exams in Urgench"
    },
    excerpt: {
      uz: "Noyabr oyida Urganchda o'tkaziladigan Goethe imtihonlari sanalarini e'lon qilamiz...",
      ru: "Объявляем даты экзаменов Goethe, которые пройдут в Ургенче в ноябре...",
      de: "Wir geben die Termine der Goethe-Prüfungen in Urgentsch im November bekannt...",
      en: "We announce the dates of Goethe exams to be held in Urgench in November..."
    },
    fullText: {
      uz: "Assalomu alaykum, qadrli kuzatuvchilar!\n\nQuyida noyabr oyida Urganchda o'tkaziladigan Goethe imtihonlari bilan tanishishingiz mumkin:\n\n🟢 Goethe-Zertifikat A2 - 14.11.2025\n🟢 Goethe-Zertifikat B1 - 14.11.2025\n🟢 Goethe-Zertifikat B2 - 15.11.2025\n\n💛 Ro'yxatdan o'tishga ulgurmasangiz: vaqti-vaqti bilan saytni tekshirib turishingiz kerak. Bekor qilingan joylar avtomatik ravishda saytda paydo bo'ladi.\n\n❗ Imtihon kuni shaxsni tasdiqlovchi hujjatni o'zingiz bilan olib kelishingiz shart. Pasportsiz imtihonga kirishga ruxsat etilmaydi.\n\n❗ To'lov kechiktirilgan taqdirda: To'lov imtihon band qilingandan boshlab 24 soat ichida amalga oshirishingiz kerak, aks holda joyingiz bekor qilinadi.",
      ru: "Здравствуйте, дорогие подписчики!\n\nНиже вы можете ознакомиться с датами экзаменов Goethe, которые пройдут в Ургенче в ноябре:\n\n🟢 Goethe-Zertifikat A2 - 14.11.2025\n🟢 Goethe-Zertifikat B1 - 14.11.2025\n🟢 Goethe-Zertifikat B2 - 15.11.2025\n\n💛 Если не успели зарегистрироваться: периодически проверяйте сайт. Отмененные места автоматически появляются на сайте.\n\n❗ В день экзамена обязательно возьмите с собой удостоверение личности. Без паспорта на экзамен не допускают.\n\n❗ При задержке оплаты: Оплата должна быть произведена в течение 24 часов после бронирования экзамена, иначе ваше место будет аннулировано.",
      de: "Hallo liebe Follower!\n\nHier sind die Termine der Goethe-Prüfungen, die im November in Urgentsch stattfinden:\n\n🟢 Goethe-Zertifikat A2 - 14.11.2025\n🟢 Goethe-Zertifikat B1 - 14.11.2025\n🟢 Goethe-Zertifikat B2 - 15.11.2025\n\n💛 Falls Sie sich nicht rechtzeitig anmelden konnten: Überprüfen Sie regelmäßig die Website. Stornierte Plätze werden automatisch auf der Website angezeigt.\n\n❗ Am Prüfungstag müssen Sie unbedingt Ihren Ausweis mitbringen. Ohne Reisepass ist der Zutritt zur Prüfung nicht gestattet.\n\n❗ Bei verspäteter Zahlung: Die Zahlung muss innerhalb von 24 Stunden nach der Prüfungsbuchung erfolgen, andernfalls wird Ihr Platz storniert.",
      en: "Hello dear followers!\n\nBelow you can find the Goethe exam dates to be held in Urgench in November:\n\n🟢 Goethe-Zertifikat A2 - 14.11.2025\n🟢 Goethe-Zertifikat B1 - 14.11.2025\n🟢 Goethe-Zertifikat B2 - 15.11.2025\n\n💛 If you missed registration: Check the website periodically. Cancelled spots automatically appear on the website.\n\n❗ On exam day, you must bring your ID with you. Without a passport, admission to the exam is not allowed.\n\n❗ In case of delayed payment: Payment must be made within 24 hours of booking the exam, otherwise your spot will be cancelled."
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    date: "15.12.2025",
    title: {
      uz: "Yangi Vitamin de nashri",
      ru: "Новый выпуск журнала Vitamin de",
      de: "Neue Vitamin de Ausgabe",
      en: "New Vitamin de Issue"
    },
    excerpt: {
      uz: "Vitamin de – bu Goethe instituti tomonidan yoshlar uchun nashr etiladigan jurnal...",
      ru: "Vitamin de – это журнал, издаваемый Гёте-Институтом для подростков и молодёжи...",
      de: "Vitamin de ist eine Zeitschrift des Goethe-Instituts für Jugendliche...",
      en: "Vitamin de is a magazine published by the Goethe Institute for young people..."
    },
    fullText: {
      uz: "Vitamin de – bu Goethe instituti tomonidan nemis tilini o'rganayotgan yoshlar va o'smirlar uchun nashr etiladigan jurnal. Yangi nashri Germaniyada hayot haqida qiziqarli maqolalar, qiziqarli shaxslar bilan intervyular va nemis tilini o'rganish bo'yicha amaliy maslahatlarni o'z ichiga oladi. Bizning o'quvchilarimiz ushbu jurnalni bepul o'qish va o'qish ko'nikmalarini yaxshilash imkoniyatiga ega.",
      ru: "Vitamin de – это журнал, издаваемый Гёте-Институтом для подростков и молодёжи, изучающих немецкий язык. Новый выпуск содержит увлекательные статьи о жизни в Германии, интервью с интересными личностями и практические советы по изучению немецкого языка. Наши ученики имеют возможность бесплатно читать этот журнал и улучшать свои навыки чтения.",
      de: "Vitamin de ist eine Zeitschrift des Goethe-Instituts für Jugendliche und junge Erwachsene, die Deutsch lernen. Die neue Ausgabe enthält spannende Artikel über das Leben in Deutschland, Interviews mit interessanten Persönlichkeiten und praktische Tipps zum Deutschlernen. Unsere Schüler haben die Möglichkeit, diese Zeitschrift kostenlos zu lesen und ihr Leseverständnis zu verbessern.",
      en: "Vitamin de is a magazine published by the Goethe Institute for teenagers and young adults learning German. The new issue contains exciting articles about life in Germany, interviews with interesting personalities and practical tips for learning German. Our students have the opportunity to read this magazine for free and improve their reading skills."
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    date: "10.12.2025",
    title: {
      uz: "Farg'onada malaka oshirish kursi",
      ru: "Курс повышения квалификации в Фергане",
      de: "Fortbildungskurs in Fergana",
      en: "Training Course in Fergana"
    },
    excerpt: {
      uz: "Goethe instituti bilan hamkorlikda tashkil etilgan seminar-trenining oflayn bosqichi...",
      ru: "Оффлайн-этап семинара-тренинга, организованного совместно с Гёте-Институтом...",
      de: "Offline-Seminar in Zusammenarbeit mit dem Goethe-Institut...",
      en: "Offline seminar organized in cooperation with the Goethe Institute..."
    },
    fullText: {
      uz: "Bizning o'qituvchilarimiz Goethe instituti bilan hamkorlikda tashkil etilgan oflayn seminarda qatnashdilar. Kurs zamonaviy o'qitish usullari va nemis tili darslarida raqamli vositalardan foydalanishga bag'ishlandi. Ishtirokchilar zamonaviy pedagogik yondashuvlar haqida qimmatli bilimlar oldilar va boshqa maktablardan kelgan hamkasblari bilan tajriba almashish imkoniyatiga ega bo'ldilar.",
      ru: "Наши преподаватели приняли участие в офлайн-семинаре, организованном совместно с Гёте-Институтом. Курс был посвящен современным методам преподавания и использованию цифровых средств на уроках немецкого языка. Участники получили ценные знания о современных педагогических подходах и смогли обменяться опытом с коллегами из других школ.",
      de: "Unsere Lehrer haben am Offline-Seminar teilgenommen, das in Zusammenarbeit mit dem Goethe-Institut organisiert wurde. Der Kurs konzentrierte sich auf moderne Lehrmethoden und den Einsatz digitaler Medien im Deutschunterricht. Die Teilnehmer erhielten wertvolle Einblicke in aktuelle pädagogische Ansätze und konnten ihr Wissen mit Kollegen aus anderen Schulen teilen.",
      en: "Our teachers participated in an offline seminar organized in cooperation with the Goethe Institute. The course focused on modern teaching methods and the use of digital media in German language classes. Participants gained valuable insights into current pedagogical approaches and were able to share their knowledge with colleagues from other schools."
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
    date: "05.12.2025",
    title: {
      uz: "Ausbildung o'quvchilarining taassurotlari",
      ru: "Впечатления учеников Ausbildung",
      de: "Erlebnisse von Azubis",
      en: "Experiences of Apprentices"
    },
    excerpt: {
      uz: "Bitiruvchilarimiz Germaniyada hayot va o'qish taassurotlari bilan bo'lishmoqdalar...",
      ru: "Наши выпускники делятся впечатлениями о жизни и обучении в Германии...",
      de: "Unsere ehemaligen Schüler berichten über ihre Erfahrungen in Deutschland...",
      en: "Our graduates share their experiences of life and training in Germany..."
    },
    fullText: {
      uz: "Hurmatli markazimiz tinglovchilari, sizlar uchun 'Erlebnisse von Azubis' nomli uchrashuv tashkil etildi. Hozirda Germaniyada Ausbildung o'tayotgan bitiruvchilarimiz o'z tajribalari bilan bo'lishdilar. Ular Germaniyada hayot, ish va duch kelgan qiyinchiliklar haqida gapirib berdilar. Bu tadbir hozirgi o'quvchilarimiz uchun katta ilhom manbai bo'ldi.",
      ru: "Уважаемые слушатели нашего центра, для вас была организована встреча под названием 'Erlebnisse von Azubis'. Наши выпускники, которые сейчас проходят Ausbildung в Германии, поделились своим опытом. Они рассказали о жизни в Германии, работе и трудностях, с которыми им пришлось столкнуться. Это мероприятие стало большим вдохновением для наших нынешних учеников.",
      de: "Liebe Schüler unseres Zentrums, für euch wurde eine Veranstaltung unter dem Namen 'Erlebnisse von Azubis' organisiert. Unsere ehemaligen Schüler, die jetzt eine Ausbildung in Deutschland machen, haben ihre Erfahrungen geteilt. Sie erzählten über das Leben in Deutschland, die Arbeit und die Herausforderungen, die sie bewältigen mussten. Diese Veranstaltung war eine große Inspiration für unsere aktuellen Schüler.",
      en: "Dear students of our center, an event called 'Erlebnisse von Azubis' was organized for you. Our graduates who are currently doing Ausbildung in Germany shared their experiences. They talked about life in Germany, work and the challenges they had to overcome. This event was a great inspiration for our current students."
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
