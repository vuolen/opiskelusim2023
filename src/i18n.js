import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fi from "./locales/fi/translation.json";
import sv from "./locales/sv/translation.json";
import en from "./locales/en/translation.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fi: { translation: fi },
            sv: { translation: sv },
            en: { translation: en },
        },
        lng: "fi",
        fallbackLng: "fi",
        debug: true,
        load: "languageOnly",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
