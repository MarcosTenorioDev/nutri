import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt-br.json';
import ENUS from './locales/en.us.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: ENUS
      },
      pt: {
        translation: PTBR
      },
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;