import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import logo from '@/public/logo.svg'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </Link>
          </li>
          {/* <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li> */}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
