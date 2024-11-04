import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector';
import translationAr from './Local/ar.json';
import translationEn from './Local/en.json';
const resources = {
    ar: {
        translation: translationAr
    },
    en: {
        translation: translationEn
    }
};

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false 
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;