import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-stone-900 text-stone-200 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Better Bites.
            </h3>
            <p className="text-stone-400 mb-6 max-w-xs">
              {t('contact.brandDescription')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('contact.quickLinks')}</h4>
            <ul className="space-y-4 text-stone-400">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-primary transition-colors">
                  {t('nav.ourProducts')}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  {t('nav.aboutUs')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('contact.getInTouch')}</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hellobetterbites@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+84) 038-2319-704</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hanoi, Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>{t('contact.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              {t('contact.privacyPolicy')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t('contact.termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
