import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './translations/en.json'
import ukr from './translations/ukr.json'
import sk from './translations/sk.json'

const resources = {
    en,
    ukr,
    sk,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'en',
})
