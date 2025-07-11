import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import taTranslation from './locales/ta.json';

const en = enTranslation;
const es = esTranslation;
const ta = taTranslation;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      ta: {
        translation: ta,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
