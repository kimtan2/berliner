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
    'nav.ausbildung': 'Ausbildung & Arbeit',

    // Hero
    'hero.badge': 'Sprachschule Berliner',
    'hero.title': 'Lernen Sie Deutsch',
    'hero.passion': 'mit Leidenschaft',
    'hero.subtitle': 'Ihr Weg nach Deutschland beginnt hier in Urganch. Professionelle Deutschkurse von A1 bis C2.',
    'hero.cta': 'Angebote entdecken',
    'hero.feature1': 'Goethe Prüfungszentrum',
    'hero.feature1.sub': 'Offizielle Prüfungen direkt bei uns',
    'hero.feature2': 'Moderne Ausstattung',
    'hero.feature2.sub': 'Technik, Materialien & moderne Räume',
    'hero.feature3': 'Qualifizierte Lehrer',
    'hero.feature3.sub': 'Modernste Methoden nach Goethe-Standards',
    'hero.feature4': 'Intensivkurse',
    'hero.feature4.sub': '5 Tage die Woche für maximalen Erfolg',

    // Courses
    'courses.title': 'Unsere Angebote',
    'courses.subtitle': 'Ihr Weg nach Deutschland beginnt hier',
    'courses.germanA1C2': 'Deutsch A1-C2',
    'courses.germanA1C2.desc': 'Alle Niveaustufen von A1 bis C2. Unterricht 5 Tage die Woche – Intensität für Ihren maximalen Erfolg.',
    'courses.ausbildung': 'Studium und Ausbildung',
    'courses.ausbildung.desc': 'Vorbereitung und Vermittlung für Studium, Ausbildung und Arbeit in Deutschland',
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
    'about.history.title': 'Geschichte von Berliner',
    'about.history.text': 'Die Berliner Sprachschule wurde mit der Vision gegründet, eine Brücke zwischen Usbekistan und Deutschland zu schlagen. Seit unserer Gründung haben wir uns zum Ziel gesetzt, nicht nur die deutsche Sprache zu vermitteln, sondern auch Türen für die berufliche und akademische Zukunft unserer Schüler zu öffnen.',
    'about.team.title': 'Unser Team',
    'about.team.desc': 'Lernen Sie die Menschen kennen, die Ihren Erfolg möglich machen.',
    'about.success.title': 'Unsere Erfolge',
    'about.success.desc': 'Hunderte von Schülern haben bereits ihren Weg nach Deutschland gefunden.',

    // Ausbildung Page
    'ausbildung.title': 'Studium, Ausbildung und Arbeit in Deutschland',
    'ausbildung.subtitle': 'Ihr kompletter Wegweiser von Urganch nach Deutschland',
    'ausbildung.process.title': 'Wie alles abläuft',
    'ausbildung.process.step1.title': 'Sprachliche Vorbereitung',
    'ausbildung.process.step1.desc': 'Intensive Deutschkurse von A1 bis B2/C1, um die sprachlichen Voraussetzungen zu erfüllen.',
    'ausbildung.process.step2.title': 'Beratung & Orientierung',
    'ausbildung.process.step2.desc': 'Wir helfen Ihnen, das passende Studium oder die richtige Ausbildung in Deutschland zu finden.',
    'ausbildung.process.step3.title': 'Bewerbungsservice',
    'ausbildung.process.step3.desc': 'Professionelle Unterstützung bei der Erstellung von Lebensläufen und Motivationsschreiben.',
    'ausbildung.process.step4.title': 'Visum & Integration',
    'ausbildung.process.step4.desc': 'Begleitung beim Visumsprozess und Vorbereitung auf das Leben in Deutschland.',
    'ausbildung.help.title': 'Beratung und Hilfe bei Bewerbung',
    'ausbildung.help.desc': 'Abgesehen von den sprachlichen Elementen unterstützen wir Sie bei der gesamten Bürokratie und den Bewerbungsprozessen bei deutschen Arbeitgebern und Universitäten.',

    // Contact
    'contact.hero.title': 'Ihre Fragen',
    'contact.hero.accent': 'beantworten wir gerne',
    'contact.hero.subtitle': 'Erfahren Sie mehr über unsere Kurse, Preise und Möglichkeiten nach Deutschland zu gehen. Schreiben Sie uns einfach oder besuchen Sie uns.',
    'contact.phone.label': 'Rufen Sie uns an',
    'contact.telegram.label': 'Schnelle Antwort',
    'contact.telegram.title': 'Schreiben Sie uns auf Telegram',
    'contact.instagram.label': 'Unser Alltag',
    'contact.address': 'Adresse',
    'contact.hours.label': 'Öffnungszeiten',
    'contact.hours.days': 'Montag — Samstag',

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
    'nav.ausbildung': 'Аусбильдунг и работа',

    // Hero
    'hero.badge': 'Sprachschule Berliner',
    'hero.title': 'Изучайте немецкий',
    'hero.passion': 'с увлечением',
    'hero.subtitle': 'Ваш путь в Германию начинается здесь, в Ургенче. Профессиональные курсы немецкого от A1 до C2.',
    'hero.cta': 'Наши предложения',
    'hero.feature1': 'Центр экзаменов Goethe',
    'hero.feature1.sub': 'Официальные экзамены проводятся у нас',
    'hero.feature2': 'Современное оснащение',
    'hero.feature2.sub': 'Техника, материалы и современные классы',
    'hero.feature3': 'Квалифицированные преподаватели',
    'hero.feature3.sub': 'Современные методы по стандартам Goethe',
    'hero.feature4': 'Интенсивные курсы',
    'hero.feature4.sub': '5 дней в неделю для максимального успеха',

    // Courses
    'courses.title': 'Наши предложения',
    'courses.subtitle': 'Ваш путь в Германию начинается здесь',
    'courses.germanA1C2': 'Немецкий A1-C2',
    'courses.germanA1C2.desc': 'Все уровни от A1 до C2. Занятия 5 дней в неделю — интенсивность для вашего максимального успеха.',
    'courses.ausbildung': 'Учёба и Аусбильдунг',
    'courses.ausbildung.desc': 'Подготовка и помощь в поиске учёбы, профессионального обучения и работы в Германии',
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
    'about.history.title': 'История Berliner',
    'about.history.text': 'Языковая школа Berliner была основана с видением создания моста между Узбекистаном и Германией. С момента нашего основания мы поставили перед собой цель не только обучать немецкому языку, но и открывать двери для профессионального и академического будущего наших учеников.',
    'about.team.title': 'Наша команда',
    'about.team.desc': 'Познакомьтесь с людьми, которые делают ваш успех возможным.',
    'about.success.title': 'Наши успехи',
    'about.success.desc': 'Сотни студентов уже нашли свой путь в Германию.',

    // Ausbildung Page
    'ausbildung.title': 'Учёба, Аусбильдунг и работа в Германии',
    'ausbildung.subtitle': 'Ваш полный путеводитель из Ургенча в Германию',
    'ausbildung.process.title': 'Как всё проходит',
    'ausbildung.process.step1.title': 'Языковая подготовка',
    'ausbildung.process.step1.desc': 'Интенсивные курсы немецкого языка от A1 до B2/C1 для соответствия языковым требованиям.',
    'ausbildung.process.step2.title': 'Консультация и ориентация',
    'ausbildung.process.step2.desc': 'Мы помогаем вам найти подходящую учебу или профессиональное обучение в Германии.',
    'ausbildung.process.step3.title': 'Сервис по подаче заявок',
    'ausbildung.process.step3.desc': 'Профессиональная поддержка в составлении резюме и мотивационных писем.',
    'ausbildung.process.step4.title': 'Виза и интеграция',
    'ausbildung.process.step4.desc': 'Сопровождение в процессе получения визы и подготовка к жизни в Германии.',
    'ausbildung.help.title': 'Консультация и помощь в подаче заявки',
    'ausbildung.help.desc': 'Помимо языковых аспектов, мы поддерживаем вас во всей бюрократии и процессах подачи заявок немецким работодателям и университетам.',

    // Contact
    'contact.hero.title': 'На ваши вопросы',
    'contact.hero.accent': 'мы ответим с удовольствием',
    'contact.hero.subtitle': 'Узнайте больше о наших курсах, ценах и возможностях поехать в Германию. Просто напишите нам или посетите нас.',
    'contact.phone.label': 'Позвоните нам',
    'contact.telegram.label': 'Быстрый ответ',
    'contact.telegram.title': 'Напишите нам в Telegram',
    'contact.instagram.label': 'Наши будни',
    'contact.address': 'Адрес',
    'contact.hours.label': 'Часы работы',
    'contact.hours.days': 'Понедельник — Суббота',

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
    'nav.ausbildung': 'Ausbildung va ish',

    // Hero
    'hero.badge': 'Sprachschule Berliner',
    'hero.title': "Nemis tilini o'rganing",
    'hero.passion': 'ishtiyoq bilan',
    'hero.subtitle': "Germaniyaga yo'lingiz shu yerda, Urganchda boshlanadi. A1 dan C2 gacha professional nemis tili kurslari.",
    'hero.cta': 'Xizmatlarimiz bilan tanishing',
    'hero.feature1': 'Goethe imtihon markazi',
    'hero.feature1.sub': "Rasmiy imtihonlar bizda o'tkaziladi",
    'hero.feature2': 'Zamonaviy jihozlar',
    'hero.feature2.sub': "Texnika, materiallar va zamonaviy xonalar",
    'hero.feature3': "Yuqori malakali o'qituvchilar",
    'hero.feature3.sub': "Goethe standartlari bo'yicha zamonaviy usullar",
    'hero.feature4': 'Intensiv kurslar',
    'hero.feature4.sub': "Maksimal muvaffaqiyat uchun haftada 5 kun",

    // Courses
    'courses.title': 'Bizning xizmatlar',
    'courses.subtitle': "Germaniyaga yo'lingiz shu yerdan boshlanadi",
    'courses.germanA1C2': 'Nemis tili A1-C2',
    'courses.germanA1C2.desc': "A1 dan C2 gacha barcha darajalar. Haftada 5 kun darslar — maksimal natija uchun intensiv ta'lim.",
    'courses.ausbildung': "O'qish va Ausbildung",
    'courses.ausbildung.desc': "Germaniyada o'qish, ta'lim va ish topishga tayyorgarlik va yordam",
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
    'about.history.title': 'Berliner tarixi',
    'about.history.text': "Berliner til maktabi O'zbekiston va Germaniya o'rtasida ko'prik yaratish maqsadida tashkil etilgan. Tashkil etilganimizdan buyon biz nafaqat nemis tilini o'rgatishni, balki o'quvchilarimizning professional va akademik kelajagi uchun eshiklarni ochishni maqsad qilganmiz.",
    'about.team.title': 'Bizning jamoa',
    'about.team.desc': 'Sizning muvaffaqiyatingizni ta\'minlaydigan insonlar bilan tanishing.',
    'about.success.title': 'Muvaffaqiyatlarimiz',
    'about.success.desc': "Yuzlab o'quvchilarimiz allaqachon Germaniyaga yo'l topishgan.",

    // Ausbildung Page
    'ausbildung.title': "Germaniyada o'qish, Ausbildung va ish",
    'ausbildung.subtitle': "Urganchdan Germaniyagacha bo'lgan to'liq yo'riqnomangiz",
    'ausbildung.process.title': 'Jarayon qanday kechadi',
    'ausbildung.process.step1.title': 'Til tayyorgarligi',
    'ausbildung.process.step1.desc': "Til talablariga javob berish uchun A1 dan B2/C1 gacha intensiv nemis tili kurslari.",
    'ausbildung.process.step2.title': "Maslahat va yo'naltirish",
    'ausbildung.process.step2.desc': "Biz sizga Germaniyada mos keladigan o'qish yoki Ausbildungni topishda yordam beramiz.",
    'ausbildung.process.step3.title': 'Hujjat topshirish xizmati',
    'ausbildung.process.step3.desc': "Rezyume va motivatsiya xatlarini tayyorlashda professional yordam.",
    'ausbildung.process.step4.title': 'Viza va integratsiya',
    'ausbildung.process.step4.desc': "Viza olish jarayonida hamrohlik va Germaniyadagi hayotga tayyorgarlik.",
    'ausbildung.help.title': 'Hujjat topshirishda maslahat va yordam',
    'ausbildung.help.desc': "Til o'rganishdan tashqari, biz sizga barcha byurokratiya va Germaniya ish beruvchilari hamda universitetlariga hujjat topshirish jarayonlarida yordam beramiz.",

    // Contact
    'contact.hero.title': 'Savollaringizga',
    'contact.hero.accent': 'javob beramiz',
    'contact.hero.subtitle': "Kurslarimiz, narxlar va Germaniyaga ketish imkoniyatlari haqida bepul ma'lumot oling. Shunchaki yozing yoki markazimizga keling.",
    'contact.phone.label': 'Bizga qo\'ng\'iroq qiling',
    'contact.telegram.label': 'Tezkor javob',
    'contact.telegram.title': 'Telegram orqali yozish',
    'contact.instagram.label': 'Kundalik hayotimiz',
    'contact.address': 'Manzil',
    'contact.hours.label': 'Ish vaqti',
    'contact.hours.days': 'Dushanba — Shanba',

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
