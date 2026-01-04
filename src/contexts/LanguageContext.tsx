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
