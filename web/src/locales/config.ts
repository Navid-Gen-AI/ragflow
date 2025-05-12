import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LanguageAbbreviation } from '@/constants/common';
 
import translation_en from './en';
import translation_ar from './ar';

import { createTranslationTable, flattenObject } from './until';


const resources = {
  [LanguageAbbreviation.En]: translation_en,  
  [LanguageAbbreviation.Ar]: translation_ar,

};
const enFlattened = flattenObject(translation_en);
const arFlattened = flattenObject(translation_ar);

export const translationTable = createTranslationTable(
  [
    enFlattened,
    arFlattened,

  ],
  [
    'English',
    'Arabic',
  ],
);
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      lookupLocalStorage: 'lng',
    },
    supportedLngs: Object.values(LanguageAbbreviation),
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
