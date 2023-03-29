// import { initReactI18next } from 'react-i18next'
// import i18n from 'i18next'
// import en from './languages/en.json'
// import pt from './languages/pt.json'
// import { NativeModules, Platform } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const resources = {
//   en: {
//     translation: en,
//   },
//   pt: {
//     translation: pt,
//   },
// }

// const locale =
//   Platform.OS === 'android'
//     ? NativeModules.I18nManager.localeIdentifier.split('_')[0]
//     : NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0]

// export const i18nConfig = {
//   i18n: i18n.use(initReactI18next).init({
//     compatibilityJSON: 'v3',
//     lng: locale,
//     fallbackLng: 'pt',
//     resources,
//     react: {
//       useSuspense: false,
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   }),
// }

// export const changeLanguage = async (lng: string) => {
//   i18n.changeLanguage(lng)
//   await AsyncStorage.setItem('lng', lng)
// }

// export default i18nConfig.i18n
