import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "@/assets/logo/lil-green-logo.png";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: t.nav.home },
// Menü vorerst ausgeblendet:  
//  { href: '/menu', label: t.nav.menu },
    { href: '/locations', label: t.nav.locations },
    { href: '/story', label: t.nav.story },
    { href: '/catering', label: t.nav.catering },
 { label: "Karriere", href: "/karriere" },
    { href: '/contact', label: t.nav.contact },
  ];

  const isHome = location === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         {/* Logo */}
{/* Logo + Brandname */}
<Link
  href="/"
  data-testid="link-home"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="Lil Green Kitchen Logo"
    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain transition-all duration-300 ${
      isScrolled || !isHome ? 'drop-shadow-md' : 'brightness-110 drop-shadow'
    }`}
  />
  <span
    className={`font-serif text-2xl font-bold transition-colors duration-300 ${
      isScrolled || !isHome ? 'text-primary' : 'text-white'
    }`}
  >
    Lil Green Kitchen
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-accent cursor-pointer ${
                    location === link.href
                      ? isScrolled || !isHome
                        ? 'text-primary'
                        : 'text-white'
                      : isScrolled || !isHome
                      ? 'text-foreground'
                      : 'text-white/90'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <a
              href="https://www.instagram.com/lil_green_kitchen"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram"
              className={`transition-colors duration-300 hover:text-accent ${
                isScrolled || !isHome ? 'text-foreground' : 'text-white'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              data-testid="button-language-toggle"
              className={`min-h-8 ${
                isScrolled || !isHome
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-white'
              }`}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="https://www.instagram.com/lil_green_kitchen"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram-mobile"
              className={`transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-foreground' : 'text-white'
              }`}
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              data-testid="button-language-toggle-mobile"
              className={`min-h-8 ${
                isScrolled || !isHome
                  ? 'text-foreground'
                  : 'text-white'
              }`}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              className={isScrolled || !isHome ? 'text-foreground' : 'text-white'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    data-testid={`link-nav-mobile-${link.label.toLowerCase()}`}
                    className={`block py-2 text-base font-medium cursor-pointer ${
                      location === link.href ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
