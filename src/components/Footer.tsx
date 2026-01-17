import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Mail, MapPin, Phone, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      {/* Social Media Section */}
      <div className="py-12 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">{t('footer.social')}</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://t.me/sprachschule_berliner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Send className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.instagram.com/sprachschule_berliner?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.youtube.com/@sprachschuleberliner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Youtube className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Berliner Deutschzentrum Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">
                Berliner <span className="text-primary">Sprachschule</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a href="/#courses" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.courses')}
                </a>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hamid Olimjon ko'chasi 2b uy, Urgench</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+998 99 132 55 21</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@berliner.uz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {currentYear} Berliner Sprachschule. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
