import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home"), hideOnHome: true },
    { href: "/#courses", label: t("nav.courses") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const filteredLinks = navLinks.filter(link => !(link.hideOnHome && pathname === "/"));

  const languages = [
    { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
    { code: "ru" as const, label: "Русский", flag: "🇷🇺" },
    { code: "uz" as const, label: "O'zbekcha", flag: "🇺🇿" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50'
        : 'bg-transparent'
      }`}>
      {/* Top Utility Bar */}
      <div className={`border-b transition-all duration-300 ${isScrolled ? 'border-border/30' : 'border-white/20'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-1 h-10">
            {/* Search */}
            <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal hover:bg-primary/10 rounded-full"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Suche</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 bg-background/95 backdrop-blur-lg border border-border/50">
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Suche..."
                    className="w-full px-4 py-2.5 text-sm border border-border/50 rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    autoFocus
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal hover:bg-primary/10 rounded-full"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Mein Berliner</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-lg border border-border/50">
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10">Anmelden</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10">Registrieren</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal hover:bg-primary/10 rounded-full"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-lg border border-border/50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer gap-2 hover:bg-primary/10 focus:bg-primary/10 ${language === lang.code ? "bg-primary/20 font-semibold" : ""}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Berliner Sprachschule Logo"
                  className="h-14 w-14 md:h-16 md:w-16 rounded-2xl object-cover group-hover:scale-105 transition-transform shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                    BERLINER
                  </span>
                  <span className="text-base md:text-lg font-bold text-primary tracking-wide">
                    SPRACHSCHULE
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-3">
                  <div className="h-10 w-px bg-border/60" />
                  <span className="text-xl md:text-2xl font-light text-muted-foreground/80 tracking-tight">
                    {t('city.name')}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {filteredLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-base tracking-wide group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="relative px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-base tracking-wide group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background/98 backdrop-blur-xl border-t border-border/30 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-1">
            {filteredLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}