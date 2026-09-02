import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/common.json';
import svTranslations from './locales/sv/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sv: { translation: svTranslations },
  },
  // Återställ sparat språk; falla tillbaka till engelska
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React escapar redan värden
  },
});

export default i18n;
