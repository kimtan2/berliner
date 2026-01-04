import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">
                Sprachschule <span className="text-primary">Berliner</span>
              </span>
            </div>
            <p className="text-background/70 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#courses" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.courses')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Friedrichstraße 123, Berlin</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+49 30 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@sprachschule-berliner.de</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          © {currentYear} Sprachschule Berliner. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
