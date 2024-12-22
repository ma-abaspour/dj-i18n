import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Footer from '@/components/Footer'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white">
      <section className='py-20'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h1 className={`text-5xl font-bold mb-6 text-gray-900 ${lang === 'arabic' ? 'leading-relaxed' : ''}`}>
            {page.home.title}
          </h1>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl ${lang === 'arabic' ? 'leading-relaxed' : ''}`}>
            {page.home.description}
          </p>
          <p className={`text-lg text-gray-600 mb-6 ${lang === 'arabic' ? 'leading-relaxed' : ''}`}>
            {page.home.subtitle}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            {page.home.features.map((feature, index) => (
              <div key={index} className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                lang === 'arabic' ? 'text-right' : ''
              }`}>
                <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  )
}
