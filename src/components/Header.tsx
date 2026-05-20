import { useState, useEffect } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const searchablePages = [
    { href: "/", label: t("nav.home"), keywords: ["home", "главная", "bosh sahifa", "startseite"] },
    { href: "/#courses", label: t("nav.courses"), keywords: ["courses", "kurse", "kurslar", "курсы", "german", "deutsch", "nemis"] },
    { href: "/studium", label: t("nav.studium"), keywords: ["studium", "study", "university", "учеба", "ta'lim", "высшее образование"] },
    { href: "/about", label: t("nav.about"), keywords: ["about", "über uns", "biz haqimizda", "о нас"] },
    { href: "/contact", label: t("nav.contact"), keywords: ["contact", "kontakt", "aloqa", "контакт"] },
    { href: "/ausbildung", label: "Ausbildung", keywords: ["ausbildung", "training", "kasb", "обучение"] },
  ];

  const filteredResults = searchQuery.trim()
    ? searchablePages.filter(page =>
        page.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

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
    { href: "/studium", label: t("nav.studium") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const filteredLinks = navLinks.filter(link => !(link.hideOnHome && pathname === "/"));

  const languages = [
    { code: "uz" as const, label: "O'zbekcha", flag: "🇺🇿" },
    { code: "ru" as const, label: "Русский", flag: "🇷🇺" },
    { code: "de" as const, label: "Deutsch", flag: "🇩🇪" },
    { code: "en" as const, label: "English", flag: "🇬🇧" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-paper ${
        isScrolled ? 'shadow-[0_1px_0_hsl(var(--ink))]' : ''
      }`}>
      {/* Top utility ribbon — ink bar */}
      <div className="bg-ink text-paper">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 h-9">
            <div className="hidden md:flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase">
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-ink border border-paper/40" />
                <span className="w-2 h-2 bg-flag-red" />
                <span className="w-2 h-2 bg-flag-gold" />
              </span>
              <span className="opacity-70">Language Excellence · Urgench · Est. 2018</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
            {/* Search */}
            <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-paper hover:text-flag-gold hover:bg-transparent gap-1.5 text-[11px] font-bold uppercase tracking-widest rounded-none h-7 px-2"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Suche</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 bg-paper border border-ink rounded-none">
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Suche..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-ink bg-paper text-ink focus:outline-none focus:ring-0 focus:border-primary"
                    autoFocus
                  />
                </div>
                {searchQuery.trim() && (
                  <div className="px-2 pb-2">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result) => (
                        result.href.startsWith("/#") ? (
                          <a
                            key={result.href}
                            href={result.href}
                            className="block px-3 py-2 text-sm hover:bg-flag-gold text-ink transition-colors"
                            onClick={() => {
                              setSearchQuery("");
                              setIsSearchOpen(false);
                            }}
                          >
                            {result.label}
                          </a>
                        ) : (
                          <Link
                            key={result.href}
                            to={result.href}
                            className="block px-3 py-2 text-sm hover:bg-flag-gold text-ink transition-colors"
                            onClick={() => {
                              setSearchQuery("");
                              setIsSearchOpen(false);
                            }}
                          >
                            {result.label}
                          </Link>
                        )
                      ))
                    ) : (
                      <p className="px-3 py-2 text-sm text-muted-foreground">Keine Ergebnisse</p>
                    )}
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-paper hover:text-flag-gold hover:bg-transparent gap-1.5 text-[11px] font-bold uppercase tracking-widest rounded-none h-7 px-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Mein Berliner</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-paper border border-ink rounded-none">
                <DropdownMenuItem className="cursor-pointer rounded-none focus:bg-flag-gold">Anmelden</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer rounded-none focus:bg-flag-gold">Registrieren</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-paper hover:text-flag-gold hover:bg-transparent gap-1.5 text-[11px] font-bold uppercase tracking-widest rounded-none h-7 px-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-paper border border-ink rounded-none">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer rounded-none gap-2 focus:bg-flag-gold ${language === lang.code ? "bg-primary text-primary-foreground font-bold" : ""}`}
                  >
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-ink">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8 h-20 md:h-24">
            {/* Logo wordmark */}
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src={logo}
                alt="Berliner Sprachschule Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-cover border border-ink"
              />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-3xl md:text-4xl tracking-tight text-ink">
                  Berliner <span className="text-primary italic">Sprachschule</span>
                </span>
                <span className="hidden sm:inline text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 mt-1.5">
                  {t('city.name')} · No. 01
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {filteredLinks.map((link) => {
                const isActive = link.href === pathname || (link.href === "/" && pathname === "/");
                return link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink hover:text-primary border-b border-transparent hover:border-ink pb-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] pb-1 border-b transition-colors ${
                      isActive
                        ? 'text-primary border-primary'
                        : 'text-ink hover:text-primary border-transparent hover:border-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-none border border-ink"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-paper border-b border-ink animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-1">
            {filteredLinks.map((link) => {
              const isActive = link.href === pathname;
              return link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ink hover:text-primary border-b border-ink/10 transition-all font-bold uppercase tracking-widest text-sm py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-all font-bold uppercase tracking-widest text-sm py-3 border-b border-ink/10 ${
                    isActive ? 'text-primary' : 'text-ink hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}