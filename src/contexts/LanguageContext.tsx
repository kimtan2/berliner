import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'de' | 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.courses': 'Angebote',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Lernen Sie Deutsch mit Leidenschaft',
    'hero.subtitle': 'Ihr Weg nach Deutschland beginnt hier in Urganch. Professionelle Deutschkurse von A1 bis C2.',
    'hero.cta': 'Angebote entdecken',

    // Courses
    'courses.title': 'Unsere Angebote',
    'courses.subtitle': 'Ihr Weg nach Deutschland beginnt hier',
    'courses.germanA1C2': 'Deutsch A1-C2',
    'courses.germanA1C2.desc': 'Alle Niveaustufen von Anfänger bis Experte',
    'courses.ausbildung': 'Ausbildung & Arbeit',
    'courses.ausbildung.desc': 'Vorbereitung und Vermittlung für Ausbildung und Arbeit in Deutschland',
    'courses.testdaf': 'TestDaF Vorbereitung',
    'courses.testdaf.desc': 'Intensive Vorbereitung fürs Studium in Deutschland',
    'courses.kids': 'Kinderkurse',
    'courses.kids.desc': 'Spielerisch Deutsch lernen für Kinder',
    'courses.level': 'Alle Niveaus',
    'courses.duration': 'Wöchentlich',

    // About
    'about.title': 'Über Sprachschule Berliner',
    'about.text1': 'In Urganch sind wir Ihr Partner für erstklassigen Deutschunterricht. Unsere erfahrenen Lehrer bringen Ihnen nicht nur die Sprache bei, sondern auch die deutsche Kultur.',
    'about.text2': 'Wir bieten kleine Gruppen, flexible Kurszeiten und moderne Lehrmethoden für Ihren optimalen Lernerfolg auf dem Weg nach Deutschland.',
    'about.students': 'Zufriedene Schüler',
    'about.experience': 'Jahre Erfahrung',
    'about.teachers': 'Qualifizierte Lehrer',

    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Wir freuen uns auf Ihre Nachricht',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.tagline': 'Ihre Deutschsprachschule in Urganch',
    'footer.social': 'Soziale Netzwerke',

    // Testimonials
    'testimonials.title': 'Bewertungen unserer Schüler',
    'testimonials.subtitle': 'Erfahren Sie, was unsere Schüler über uns sagen',

    // Header utility
    'header.search': 'Suche',
    'header.search.placeholder': 'Suche...',
    'header.myBerliner': 'Mein Berliner',
    'header.login': 'Anmelden',
    'header.register': 'Registrieren',

    // News
    'news.title': 'Neuigkeiten',
    'news.subtitle': 'Aktuelle Nachrichten aus unserer Sprachschule',
    'news.readMore': 'Weiterlesen',
    'city.name': 'Urgentsch',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.courses': 'Предложения',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'Изучайте немецкий с увлечением',
    'hero.subtitle': 'Ваш путь в Германию начинается здесь, в Ургенче. Профессиональные курсы немецкого от A1 до C2.',
    'hero.cta': 'Наши предложения',

    // Courses
    'courses.title': 'Наши предложения',
    'courses.subtitle': 'Ваш путь в Германию начинается здесь',
    'courses.germanA1C2': 'Немецкий A1-C2',
    'courses.germanA1C2.desc': 'Все уровни от начинающего до эксперта',
    'courses.ausbildung': 'Аусбильдунг и работа',
    'courses.ausbildung.desc': 'Подготовка и помощь в поиске обучения и работы в Германии',
    'courses.testdaf': 'Подготовка к TestDaF',
    'courses.testdaf.desc': 'Интенсивная подготовка к учёбе в Германии',
    'courses.kids': 'Детские курсы',
    'courses.kids.desc': 'Немецкий для детей в игровой форме',
    'courses.level': 'Все уровни',
    'courses.duration': 'Еженедельно',

    // About
    'about.title': 'О школе Sprachschule Berliner',
    'about.text1': 'В Ургенче мы являемся вашим партнером в области первоклассного обучения немецкому языку. Наши опытные преподаватели обучат вас не только языку, но и немецкой культуре.',
    'about.text2': 'Мы предлагаем небольшие группы, гибкое расписание и современные методы обучения для вашего успешного пути в Германию.',
    'about.students': 'Довольных учеников',
    'about.experience': 'Лет опыта',
    'about.teachers': 'Квалифицированных преподавателей',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Мы будем рады вашему сообщению',
    'contact.name': 'Имя',
    'contact.email': 'Эл. почта',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить сообщение',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.tagline': 'Ваша школа немецкого языка в Ургенче',
    'footer.social': 'Социальные сети',

    // Testimonials
    'testimonials.title': 'Отзывы наших учеников',
    'testimonials.subtitle': 'Узнайте, что говорят о нас наши ученики',

    // Header utility
    'header.search': 'Поиск',
    'header.search.placeholder': 'Поиск...',
    'header.myBerliner': 'Мой Берлинер',
    'header.login': 'Войти',
    'header.register': 'Регистрация',

    // News
    'news.title': 'Новости',
    'news.subtitle': 'Актуальные новости из нашей языковой школы',
    'news.readMore': 'Читать далее',
    'city.name': 'Ургенч',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.courses': 'Xizmatlar',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Aloqa',

    // Hero
    'hero.title': "Nemis tilini ishtiyoq bilan o'rganing",
    'hero.subtitle': "Germaniyaga yo'lingiz shu yerda, Urganchda boshlanadi. A1 dan C2 gacha professional nemis tili kurslari.",
    'hero.cta': 'Xizmatlarimiz bilan tanishing',

    // Courses
    'courses.title': 'Bizning xizmatlar',
    'courses.subtitle': "Germaniyaga yo'lingiz shu yerdan boshlanadi",
    'courses.germanA1C2': 'Nemis tili A1-C2',
    'courses.germanA1C2.desc': "Boshlang'ichdan ekspertgacha barcha darajalar",
    'courses.ausbildung': 'Ausbildung va ish',
    'courses.ausbildung.desc': "Germaniyada ta'lim va ish topishga tayyorgarlik va yordam",
    'courses.testdaf': 'TestDaF tayyorgarlik',
    'courses.testdaf.desc': "Germaniyada o'qish uchun intensiv tayyorgarlik",
    'courses.kids': 'Bolalar kurslari',
    'courses.kids.desc': "Bolalar uchun o'yin orqali nemis tili",
    'courses.level': 'Barcha darajalar',
    'courses.duration': 'Haftalik',

    // About
    'about.title': 'Sprachschule Berliner haqida',
    'about.text1': "Urganchda biz sizning nemis tilini o'rganishdagi ishonchli hamkoringizmiz. Tajribali o'qituvchilarimiz sizga nafaqat tilni, balki nemis madaniyatini ham o'rgatadi.",
    'about.text2': "Biz kichik guruhlar, moslashuvchan dars jadvali va Germaniyaga muvaffaqiyatli yo'lingiz uchun zamonaviy o'qitish usullarini taklif etamiz.",
    'about.students': "Mamnun o'quvchilar",
    'about.experience': 'Yillik tajriba',
    'about.teachers': "Malakali o'qituvchilar",

    // Contact
    'contact.title': 'Biz bilan bog\'laning',
    'contact.subtitle': "Xabaringizni kutib qolamiz",
    'contact.name': 'Ism',
    'contact.email': 'Elektron pochta',
    'contact.message': 'Xabar',
    'contact.send': 'Xabar yuborish',
    'contact.address': 'Manzil',
    'contact.phone': 'Telefon',

    // Footer
    'footer.rights': "Barcha huquqlar himoyalangan",
    'footer.tagline': 'Urganchdagi nemis tili maktabingiz',
    'footer.social': 'Ijtimoiy tarmoqlar',

    // Testimonials
    'testimonials.title': "O'quvchilarimiz fikrlari",
    'testimonials.subtitle': "O'quvchilarimiz biz haqimizda nima deyishlarini bilib oling",

    // Header utility
    'header.search': 'Qidiruv',
    'header.search.placeholder': 'Qidirish...',
    'header.myBerliner': 'Mening Berliner',
    'header.login': 'Kirish',
    'header.register': "Ro'yxatdan o'tish",

    // News
    'news.title': 'Yangiliklar',
    'news.subtitle': "Til maktabimizdan so'nggi yangiliklar",
    'news.readMore': "Ko'proq o'qish",
    'city.name': 'Urganch',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
