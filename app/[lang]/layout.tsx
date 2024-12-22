import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/header'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'Darius International',
  description: 'Darius International Enterprises'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} dir={params.lang === 'arabic' ? 'rtl' : 'ltr'}>
      <body className={`${params.lang === 'arabic' ? notoSansArabic.className : inter.className} ${params.lang === 'arabic' ? 'rtl' : 'ltr'}`}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}
