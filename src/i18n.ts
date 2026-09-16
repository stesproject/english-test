import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import itTranslations from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: itTranslations,
      },
    },
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
