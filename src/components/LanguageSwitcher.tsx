import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'uz', label: 'UZ', flag: '🇺🇿' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-card/50 backdrop-blur-sm p-1 border border-border/50">
      <Globe className="h-4 w-4 text-muted-foreground ml-2" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === lang.code
              ? 'shadow-md'
              : 'hover:bg-accent'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
