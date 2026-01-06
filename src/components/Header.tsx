import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#courses", label: t("nav.courses") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const languages = [
    { code: "de" as const, label: "Deutsch" },
    { code: "ru" as const, label: "Русский" },
    { code: "uz" as const, label: "O'zbekcha" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      {/* Top Row - Utility Navigation */}
      <div className="border-b border-border/30 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-1 h-10">
            {/* Suche Dropdown */}
            <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Suche</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-background border border-border">
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Suche..."
                    className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mein Berliner Zugang Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Mein Berliner</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border">
                <DropdownMenuItem className="cursor-pointer">Anmelden</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Registrieren</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sprachen Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary gap-1.5 text-sm font-normal"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? "bg-muted" : ""}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Row - Logo and Navigation */}
      <div className="bg-background">
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
                <span className="text-xl md:text-2xl font-bold text-foreground tracking-wide">BERLINER</span>
                <span className="text-lg md:text-xl font-semibold text-primary">SPRACHSCHULE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
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

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
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
        </div>
      )}
    </header>
  );
}
