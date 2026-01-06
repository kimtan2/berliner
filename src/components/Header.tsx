import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#courses', label: t('nav.courses') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      {/* Top Row - Logo and Language Switcher */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo Section */}
            <a href="#home" className="flex items-center gap-4 group">
              <img 
                src={logo} 
                alt="Berliner Sprachschule Logo" 
                className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover group-hover:scale-105 transition-transform shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
                  BERLINER
                </span>
                <span className="text-lg md:text-xl font-semibold text-primary">
                  SPRACHSCHULE
                </span>
              </div>
            </a>

            {/* Right side - Language Switcher */}
            <div className="hidden md:flex items-center gap-6">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation (Desktop) */}
      <div className="hidden md:block bg-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-end gap-8 h-14">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-base tracking-wide relative py-4 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t border-border/30 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-border/30">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
