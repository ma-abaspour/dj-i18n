import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'

export default async function Hero({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang)

  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6">{dict.hero.title}</h1>
        <p className="text-xl mb-8">{dict.hero.subtitle}</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          {dict.hero.cta}
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
