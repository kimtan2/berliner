import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Mail, MapPin, Phone, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      {/* Social Media Section */}
      <div className="py-12 border-b border-paper/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 mb-3">{t('footer.social')}</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-8 italic">Follow the Despatch</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://t.me/berliner_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-paper/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <Send className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/berliner_uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-paper/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@sprachschuleberliner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-paper/30 flex items-center justify-center hover:bg-flag-red hover:border-flag-red transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Berliner Deutschzentrum Logo"
                className="h-10 w-10 object-cover border border-paper/40"
              />
              <span className="font-serif text-2xl leading-none">
                Berliner <span className="text-primary italic">Sprachschule</span>
              </span>
            </div>
            <p className="text-sm opacity-60 max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-6">Links</h4>
            <ul className="space-y-3 font-serif text-xl">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#courses" className="hover:text-primary transition-colors">
                  {t('nav.courses')}
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="h-4 w-4 text-flag-gold mt-0.5" />
                <span>Hamid Olimjon ko'chasi 2b uy, Urgench</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4 text-flag-gold" />
                <span className="font-bold tabular-nums">+998 99 132 55 21</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4 text-flag-gold" />
                <span>berlineruz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
          <p>© {currentYear} Berliner Sprachschule · {t('footer.rights')}</p>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-ink border border-paper/40" />
            <span className="w-2 h-2 bg-flag-red" />
            <span className="w-2 h-2 bg-flag-gold" />
            <span className="ml-2">Redaktionell Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
