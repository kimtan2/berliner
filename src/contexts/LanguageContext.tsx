import { createContext, useContext, useState, ReactNode } from 'react';

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
    'nav.courses': 'Kurse',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Lernen Sie Sprachen mit Leidenschaft',
    'hero.subtitle': 'Entdecken Sie neue Welten durch Sprache. Professionelle Kurse in Deutsch, Englisch und mehr.',
    'hero.cta': 'Jetzt anmelden',
    'hero.secondary': 'Unsere Kurse',
    
    // Courses
    'courses.title': 'Unsere Sprachkurse',
    'courses.subtitle': 'Wählen Sie aus unserem vielfältigen Angebot',
    'courses.german': 'Deutsch',
    'courses.german.desc': 'Von A1 bis C2 – alle Niveaus für Anfänger und Fortgeschrittene',
    'courses.english': 'Englisch',
    'courses.english.desc': 'Business Englisch und Konversationskurse',
    'courses.russian': 'Russisch',
    'courses.russian.desc': 'Grundkurse und Intensivprogramme',
    'courses.uzbek': 'Usbekisch',
    'courses.uzbek.desc': 'Lernen Sie die Sprache Zentralasiens',
    'courses.level': 'Alle Niveaus',
    'courses.duration': 'Wöchentlich',
    
    // About
    'about.title': 'Über Sprachschule Berliner',
    'about.text1': 'Seit über 15 Jahren sind wir Ihr Partner für erstklassigen Sprachunterricht in Berlin. Unsere erfahrenen Muttersprachler bringen Ihnen nicht nur die Sprache bei, sondern auch die Kultur.',
    'about.text2': 'Wir bieten kleine Gruppen, flexible Kurszeiten und moderne Lehrmethoden für Ihren optimalen Lernerfolg.',
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
    'footer.tagline': 'Ihre Sprachschule in Berlin',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.courses': 'Курсы',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Изучайте языки с увлечением',
    'hero.subtitle': 'Откройте новые миры через язык. Профессиональные курсы немецкого, английского и других языков.',
    'hero.cta': 'Записаться сейчас',
    'hero.secondary': 'Наши курсы',
    
    // Courses
    'courses.title': 'Наши языковые курсы',
    'courses.subtitle': 'Выберите из нашего разнообразного предложения',
    'courses.german': 'Немецкий',
    'courses.german.desc': 'От A1 до C2 – все уровни для начинающих и продвинутых',
    'courses.english': 'Английский',
    'courses.english.desc': 'Деловой английский и разговорные курсы',
    'courses.russian': 'Русский',
    'courses.russian.desc': 'Базовые и интенсивные программы',
    'courses.uzbek': 'Узбекский',
    'courses.uzbek.desc': 'Изучите язык Центральной Азии',
    'courses.level': 'Все уровни',
    'courses.duration': 'Еженедельно',
    
    // About
    'about.title': 'О школе Sprachschule Berliner',
    'about.text1': 'Более 15 лет мы являемся вашим партнером в области первоклассного языкового обучения в Берлине. Наши опытные носители языка обучат вас не только языку, но и культуре.',
    'about.text2': 'Мы предлагаем небольшие группы, гибкое расписание и современные методы обучения для вашего оптимального успеха.',
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
    'footer.tagline': 'Ваша языковая школа в Берлине',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.courses': 'Kurslar',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.title': "Tillarni ishtiyoq bilan o'rganing",
    'hero.subtitle': "Til orqali yangi dunyolarni kashf eting. Nemis, ingliz va boshqa tillardan professional kurslar.",
    'hero.cta': "Hozir ro'yxatdan o'ting",
    'hero.secondary': 'Bizning kurslar',
    
    // Courses
    'courses.title': 'Bizning til kurslari',
    'courses.subtitle': 'Turli xil takliflarimizdan tanlang',
    'courses.german': 'Nemis tili',
    'courses.german.desc': "A1 dan C2 gacha – boshlang'ich va ilg'or darajalar uchun",
    'courses.english': 'Ingliz tili',
    'courses.english.desc': 'Biznes ingliz tili va suhbat kurslari',
    'courses.russian': 'Rus tili',
    'courses.russian.desc': 'Asosiy va intensiv dasturlar',
    'courses.uzbek': "O'zbek tili",
    'courses.uzbek.desc': "Markaziy Osiyo tilini o'rganing",
    'courses.level': 'Barcha darajalar',
    'courses.duration': 'Haftalik',
    
    // About
    'about.title': 'Sprachschule Berliner haqida',
    'about.text1': "15 yildan ortiq davomida biz Berlinda yuqori sifatli til ta'limi bo'yicha hamkoringizmiz. Tajribali ona tili egalarimiz sizga nafaqat tilni, balki madaniyatni ham o'rgatadi.",
    'about.text2': "Biz kichik guruhlar, moslashuvchan dars jadvali va optimal muvaffaqiyatingiz uchun zamonaviy o'qitish usullarini taklif etamiz.",
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
    'footer.tagline': 'Berlindagi til maktabingiz',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

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
