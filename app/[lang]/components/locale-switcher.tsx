'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const localeNames = {
    en: 'English',
    arabic: 'عربي',
    de: 'Deutsch'
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className='rounded-md border bg-black px-3 py-2 text-white text-sm inline-block w-20 text-center'
            >
              {localeNames[locale]}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
