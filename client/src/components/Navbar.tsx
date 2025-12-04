import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrderModal } from "@/components/OrderModal";
import { useTranslation } from "react-i18next";

const linkKeys = [
  { key: 'nav.home', href: "/" },
  { key: 'nav.ourProducts', href: "/#products" },
  { key: 'nav.aboutUs', href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-3xl font-serif font-bold tracking-tighter text-primary">
          Better Bites.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {linkKeys.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-base font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/50"
            data-testid="button-language-toggle"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'en' ? 'VI' : 'EN'}
          </button>
          <OrderModal>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-base font-medium hover:bg-primary/90 transition-colors shadow-sm cursor-pointer">
              {t('nav.orderNow')}
            </button>
          </OrderModal>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {linkKeys.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/90"
                >
                  {t(link.key)}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-lg font-medium text-foreground/90"
                data-testid="button-language-toggle-mobile"
              >
                <Globe className="w-5 h-5" />
                {i18n.language === 'en' ? 'Tiếng Việt' : 'English'}
              </button>
              <OrderModal>
                <button className="bg-primary text-primary-foreground w-full py-3 rounded-full font-medium mt-2 cursor-pointer">
                  {t('nav.orderNow')}
                </button>
              </OrderModal>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
