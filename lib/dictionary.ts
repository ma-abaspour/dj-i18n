import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  arabic: () => import('@/dictionaries/arabic.json').then(module => module.default),
  de: () => import('@/dictionaries/de.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`)
  }
  return dictionaries[locale]()
}
