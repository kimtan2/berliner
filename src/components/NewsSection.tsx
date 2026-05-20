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
import goetheLogoImage from '@/assets/goethe-logo.png';
import a1CourseImage from '@/assets/a1-course-news.png';
import newYearImage from '@/assets/new-year-2026.jpg';

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
    image: goetheLogoImage,
    date: "07.01.2026",
    title: {
      uz: "Fevral oyida Goethe imtihonlari! 📋",
      ru: "Экзамены Goethe в феврале! 📋",
      de: "Goethe-Prüfungen im Februar! 📋",
      en: "Goethe Exams in February! 📋"
    },
    excerpt: {
      uz: "Fevral oyida Urganchda o'tkaziladigan Goethe imtihonlari sanalarini e'lon qilamiz...",
      ru: "Объявляем даты экзаменов Goethe в Ургенче в феврале...",
      de: "Wir geben die Termine der Goethe-Prüfungen in Urgentsch im Februar bekannt...",
      en: "We announce the dates of Goethe exams in Urgench in February..."
    },
    fullText: {
      uz: "⚡️Assalomu alaykum, qadrli kuzatuvchilar!\n\nQuyida fevral oyida Urganchda o'tkaziladigan Gyote imtihonlari bilan tanishishingiz mumkin:\n\n🟢Goethe-Zertifikat A2 - 02.02.2026\n\n🟢Goethe-Zertifikat B1 - 02.02.2026\n\n🟢Goethe-Zertifikat B2 - 03.02.2026\n\n🤝Ro'yxatdan o'tishga ulgurmasangiz:\nvaqti-vaqti bilan saytni tekshirib turishingiz kerak. Bekor qilingan joylar avtomatik ravishda saytda paydo bo'ladi.\n\n❗️Iimtihon kuni shaxsni tasdiqlovchi hujjatni o'zingiz bilan olib kelishingiz shart. Pasportsiz imtihonga kirishga ruxsat etilmaydi. Agar sizda xorijiy pasport mavjud bo'lsa, ichki ID karta o'rniga aynan shu hujjatni taqdim etishingiz tavsiya etiladi.\n\n❗️To'lov kechiktirilgan taqdirda:\nTo'lov imtihon band qilingandan boshlab 24 soat ichida amalga oshirishingiz kerak, aks holda joyingiz bekor qilinadi.\nTo'lovni faqat imtihonni band qilgandan keyin amalga oshiring.\n\n❗️Agar xato yoki ortiqcha to'lov amalga oshirilsa (bir imtihon uchun ikki marta to'lov qilinishi, imtihonga oldindan ro'yxatdan o'tmasdan to'lov amalga oshirilishi, to'lov miqdoridan ko'proq pul o'tkazish), o'tkazilgan mablag' to'lov summasidan 5% miqdorda ma'muriy to'lov undirilgan holda qaytariladi.\n\n▶️ Imtihonni band qilish",
      ru: "⚡️Здравствуйте, дорогие подписчики!\n\nНиже вы можете ознакомиться с датами экзаменов Goethe, которые пройдут в Ургенче в феврале:\n\n🟢Goethe-Zertifikat A2 - 02.02.2026\n\n🟢Goethe-Zertifikat B1 - 02.02.2026\n\n🟢Goethe-Zertifikat B2 - 03.02.2026\n\n🤝Если не успели зарегистрироваться:\nпериодически проверяйте сайт. Отмененные места автоматически появляются на сайте.\n\n❗️В день экзамена обязательно возьмите с собой удостоверение личности. Без паспорта на экзамен не допускают. Если у вас есть заграничный паспорт, рекомендуется предоставить именно его вместо внутреннего ID.\n\n❗️При задержке оплаты:\nОплата должна быть произведена в течение 24 часов после бронирования экзамена, иначе ваше место будет аннулировано.\nОплачивайте только после бронирования экзамена.\n\n❗️В случае ошибочного или излишнего платежа (двойная оплата за один экзамен, оплата без предварительной регистрации, перевод суммы больше требуемой), переведенная сумма будет возвращена с удержанием административного сбора в размере 5% от суммы платежа.\n\n▶️ Забронировать экзамен",
      de: "⚡️Hallo liebe Follower!\n\nHier sind die Termine der Goethe-Prüfungen, die im Februar in Urgentsch stattfinden:\n\n🟢Goethe-Zertifikat A2 - 02.02.2026\n\n🟢Goethe-Zertifikat B1 - 02.02.2026\n\n🟢Goethe-Zertifikat B2 - 03.02.2026\n\n🤝Falls Sie sich nicht rechtzeitig anmelden konnten:\nÜberprüfen Sie regelmäßig die Website. Stornierte Plätze werden automatisch auf der Website angezeigt.\n\n❗️Am Prüfungstag müssen Sie unbedingt Ihren Ausweis mitbringen. Ohne Reisepass ist der Zutritt zur Prüfung nicht gestattet. Wenn Sie einen Reisepass haben, wird empfohlen, diesen anstelle des internen Ausweises vorzulegen.\n\n❗️Bei verspäteter Zahlung:\nDie Zahlung muss innerhalb von 24 Stunden nach der Prüfungsbuchung erfolgen, andernfalls wird Ihr Platz storniert.\nZahlen Sie erst nach der Buchung der Prüfung.\n\n❗️Bei fehlerhafter oder überschüssiger Zahlung (doppelte Zahlung für eine Prüfung, Zahlung ohne Voranmeldung, Überweisung eines höheren Betrags), wird der überwiesene Betrag unter Abzug einer Verwaltungsgebühr von 5% des Zahlungsbetrags zurückerstattet.\n\n▶️ Prüfung buchen",
      en: "⚡️Hello dear followers!\n\nBelow you can find the Goethe exam dates to be held in Urgench in February:\n\n🟢Goethe-Zertifikat A2 - 02.02.2026\n\n🟢Goethe-Zertifikat B1 - 02.02.2026\n\n🟢Goethe-Zertifikat B2 - 03.02.2026\n\n🤝If you missed registration:\nCheck the website periodically. Cancelled spots automatically appear on the website.\n\n❗️On exam day, you must bring your ID with you. Without a passport, admission to the exam is not allowed. If you have a foreign passport, it is recommended to present it instead of an internal ID card.\n\n❗️In case of delayed payment:\nPayment must be made within 24 hours of booking the exam, otherwise your spot will be cancelled.\nOnly pay after booking the exam.\n\n❗️In case of erroneous or excess payment (double payment for one exam, payment without prior registration, transfer of an amount greater than required), the transferred amount will be refunded with a 5% administrative fee deducted from the payment amount.\n\n▶️ Book exam"
    }
  },
  {
    id: 2,
    image: a1CourseImage,
    date: "03.01.2026",
    title: {
      uz: "Yangi A1.1 guruhlari ochildi!",
      ru: "Новые группы A1.1 открыты!",
      de: "Neue A1.1 Gruppen gestartet!",
      en: "New A1.1 Groups Started!"
    },
    excerpt: {
      uz: "2026-yilni nemis tili bilan boshlashga tayyormisiz? Yangi guruhlarga qabul davom etmoqda...",
      ru: "Готовы начать 2026 год с немецкого языка? Набор в новые группы продолжается...",
      de: "Bereit, 2026 mit Deutsch zu beginnen? Die Anmeldung für neue Gruppen läuft...",
      en: "Ready to start 2026 with German? Registration for new groups is ongoing..."
    },
    fullText: {
      uz: "🔥BUGUN QAROR QILING — ERTAGA NATIJA! 🎁\n🌟 Yangi yil — yangi imkoniyatlar!\n\n⏩2026-yilni nemis tili bilan boshlashga tayyormisiz?\nUnda hozir ayni payt!\n\n🎁SPRACHSCHULE BERLINER\n🌟YANGI GURUHLARGA QABUL DAVOM ETMOQDA!\n\n◡̈ \"Keyin boshlayman\" degan bahona endi ishlamaydi.\n\n📆Boshlanish sanasi: 5-yanvar, 2026-yil\n⏰Dars vaqtlari:\n09:00\n14:00\n17:00\n\n🚀BERLINER — bu oddiy kurs emas!\nBu — sifat, natija va kelajak.\n\n🔥SIZ UCHUN MAXSUS DASTUR:\n✨ Nemis tilini 0 dan tez va oson o'zlashtirish\n✨ Har bir dars — jonli muloqot va interaktiv tajriba\n✨ Professional va shijoatli o'qituvchilar jamoasi\n✨ \"TIRILTIRUVCHI DARSLAR\" — gapirshni majbur o'rganasiz",
      ru: "🔥РЕШАЙТЕ СЕГОДНЯ — РЕЗУЛЬТАТ ЗАВТРА! 🎁\n🌟 Новый год — новые возможности!\n\n⏩Готовы начать 2026 год с немецкого языка?\nСейчас самое время!\n\n🎁SPRACHSCHULE BERLINER\n🌟НАБОР В НОВЫЕ ГРУППЫ ПРОДОЛЖАЕТСЯ!\n\n◡̈ Отговорка \"начну потом\" больше не работает.\n\n📆Дата начала: 5 января 2026 года\n⏰Время занятий:\n09:00\n14:00\n17:00\n\n🚀BERLINER — это не просто курсы!\nЭто — качество, результат и будущее.\n\n🔥СПЕЦИАЛЬНАЯ ПРОГРАММА ДЛЯ ВАС:\n✨ Быстрое и легкое освоение немецкого с нуля\n✨ Каждый урок — живое общение и интерактивный опыт\n✨ Команда профессиональных и увлеченных преподавателей\n✨ \"ОЖИВЛЯЮЩИЕ УРОКИ\" — вы обязательно научитесь говорить",
      de: "🔥ENTSCHEIDEN SIE HEUTE — ERGEBNIS MORGEN! 🎁\n🌟 Neues Jahr — neue Möglichkeiten!\n\n⏩Bereit, 2026 mit Deutsch zu beginnen?\nJetzt ist der perfekte Zeitpunkt!\n\n🎁SPRACHSCHULE BERLINER\n🌟ANMELDUNG FÜR NEUE GRUPPEN LÄUFT!\n\n◡̈ Die Ausrede \"Ich fange später an\" funktioniert nicht mehr.\n\n📆Startdatum: 5. Januar 2026\n⏰Unterrichtszeiten:\n09:00\n14:00\n17:00\n\n🚀BERLINER — das ist nicht nur ein Kurs!\nDas ist — Qualität, Ergebnis und Zukunft.\n\n🔥SPEZIELLES PROGRAMM FÜR SIE:\n✨ Schnelles und einfaches Deutschlernen von Null\n✨ Jede Stunde — lebendige Kommunikation und interaktive Erfahrung\n✨ Team aus professionellen und engagierten Lehrern\n✨ \"BELEBENDE LEKTIONEN\" — Sie werden garantiert sprechen lernen",
      en: "🔥DECIDE TODAY — RESULTS TOMORROW! 🎁\n🌟 New year — new opportunities!\n\n⏩Ready to start 2026 with German?\nNow is the perfect time!\n\n🎁SPRACHSCHULE BERLINER\n🌟REGISTRATION FOR NEW GROUPS IS ONGOING!\n\n◡̈ The excuse \"I'll start later\" no longer works.\n\n📆Start date: January 5, 2026\n⏰Class times:\n09:00\n14:00\n17:00\n\n🚀BERLINER — this is not just a course!\nThis is — quality, results and future.\n\n🔥SPECIAL PROGRAM FOR YOU:\n✨ Fast and easy German learning from zero\n✨ Every lesson — live communication and interactive experience\n✨ Team of professional and passionate teachers\n✨ \"REVIVING LESSONS\" — you will definitely learn to speak"
    }
  },
  {
    id: 3,
    image: newYearImage,
    date: "31.12.2025",
    title: {
      uz: "Yangi yil tabriklari! 🎉",
      ru: "Новогодние поздравления! 🎉",
      de: "Neujahrsgrüße! 🎉",
      en: "New Year Greetings! 🎉"
    },
    excerpt: {
      uz: "Barcha nemis tili ishqibozlariga eng iliq tilaklarimizni yo'llaymiz...",
      ru: "Шлём самые тёплые пожелания всем любителям немецкого языка...",
      de: "Wir senden die wärmsten Wünsche an alle Deutschliebhaber...",
      en: "We send our warmest wishes to all German language enthusiasts..."
    },
    fullText: {
      uz: "Barcha nemis tili ishqibozlariga eng iliq tilaklarimizni yo'llaymiz. 💛 Siz bilan o'tgan yil biz uchun unutilmas bo'ldi: kulish, o'rganish, yangi mahoratlarni kashf etish va har bir lahzadan zavqlanish — bularning barchasi siz bilan bo'ldi.\n\nKelgusi yil ham shunday quvonch, motivatsiya va yangi sarguzashtlarga to'lsin. Har bir kunimiz birga o'rganish, rivojlanish va yangi cho'qqilarga erishish bilan boyitilsin. ⭐️\n\nBiz siz bilan bo'lganimizdan doimo ilhomlanamiz va har biringiz bizning jamoamizning ajralmas qismisiz. Yangi yil barcha uchun yangi imkoniyatlar va yangi yutuqlar olib kelsin! 💫\n\nBerliner til maktabi jamoasi",
      ru: "Шлём самые тёплые пожелания всем любителям немецкого языка. 💛 Прошедший год с вами стал для нас незабываемым: смех, учёба, открытие новых навыков и наслаждение каждым моментом — всё это было вместе с вами.\n\nПусть наступающий год будет таким же полным радости, мотивации и новых приключений. Пусть каждый наш день обогащается совместным обучением, развитием и достижением новых вершин. ⭐️\n\nМы всегда вдохновляемся тем, что мы вместе с вами, и каждый из вас — неотъемлемая часть нашей команды. Пусть Новый год принесёт всем новые возможности и новые победы! 💫\n\nКоманда языковой школы Berliner",
      de: "Wir senden die wärmsten Wünsche an alle Deutschliebhaber. 💛 Das vergangene Jahr mit Ihnen war für uns unvergesslich: Lachen, Lernen, neue Fähigkeiten entdecken und jeden Moment genießen — all das haben wir gemeinsam erlebt.\n\nMöge das kommende Jahr genauso voller Freude, Motivation und neuer Abenteuer sein. Möge jeder Tag durch gemeinsames Lernen, Entwicklung und das Erreichen neuer Höhen bereichert werden. ⭐️\n\nWir sind immer inspiriert, dass wir mit Ihnen zusammen sind, und jeder von Ihnen ist ein untrennbarer Teil unseres Teams. Möge das neue Jahr allen neue Möglichkeiten und neue Erfolge bringen! 💫\n\nDas Team der Sprachschule Berliner",
      en: "We send our warmest wishes to all German language enthusiasts. 💛 The past year with you has been unforgettable for us: laughter, learning, discovering new skills, and enjoying every moment — all of this was shared with you.\n\nMay the coming year be just as full of joy, motivation, and new adventures. May each day be enriched by learning together, growing, and reaching new heights. ⭐️\n\nWe are always inspired by being with you, and each of you is an inseparable part of our team. May the New Year bring new opportunities and new achievements for everyone! 💫\n\nThe Berliner Language School Team"
    }
  },
  {
    id: 4,
    image: goetheLogoImage,
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
  }
];

export function NewsSection() {
  const { t, language } = useLanguage();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between border-b-2 border-ink pb-4 mb-12">
          <h2 className="font-serif text-5xl md:text-6xl text-ink leading-none">
            {t('news.title')}
          </h2>
          <p className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
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
              <div className={`aspect-video overflow-hidden ${item.id === 1 || item.id === 4 ? 'bg-[#8DC04B]' : ''}`}>
                <img 
                  src={item.image} 
                  alt={item.title[language]}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${item.id === 1 || item.id === 4 ? 'object-contain p-4' : 'object-cover'}`}
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
                <div className="text-foreground leading-relaxed whitespace-pre-line space-y-2">
                  {selectedNews.fullText[language].split('\n').map((line, index) => (
                    <p key={index} className={`${line.startsWith('🟢') ? 'font-semibold text-green-600 dark:text-green-400' : ''} ${line.startsWith('💛') ? 'text-amber-600 dark:text-amber-400' : ''} ${line.startsWith('❗') ? 'text-red-600 dark:text-red-400 font-medium' : ''}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
