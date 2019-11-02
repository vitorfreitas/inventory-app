import { Platform, NativeModules } from 'react-native'
import I18n from 'i18n-js'

import pt from './pt/translate.json'
import en from './en/translate.json'

const normalizeTranslate = {
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
  en_US: 'en_US',
  en: 'en_US'
}

const getDeviceLanguage = () => {
  return Platform.OS === 'android'
    ? NativeModules.I18nManager.localeIdentifier
    : NativeModules.SettingsManager.settings.AppleLocale
}

I18n.translations = {
  en_US: en,
  pt_BR: pt
}

const setLanguageToI18n = () => {
  try {
    const language = getDeviceLanguage()
    const normalizedLanguage = normalizeTranslate[language]

    I18n.locale = normalizedLanguage
  } catch (err) {
    I18n.locale = 'pt_BR'
  }
}

setLanguageToI18n()

export const t = (key: string): string => I18n.t(key)
