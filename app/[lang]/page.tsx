import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Footer from '@/components/Footer'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  // Add error handling
  if (!page?.home) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h1 className={`text-5xl font-bold mb-6 text-gray-900 ${lang === 'arabic' ? 'leading-relaxed' : ''}`}>
            {page.home.title}
          </h1>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl ${lang === 'arabic' ? 'leading-relaxed' : ''}`}>
            {page.home.description}
          </p>
        </div>
      </section>

      {/* Products & Services */}
      <section className='py-16'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8'>{page.home.products?.title || 'Products & Services'}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {page.home.products?.items?.map((item, index) => (
              <div key={index} className={`p-6 bg-white rounded-lg shadow-lg ${lang === 'arabic' ? 'text-right' : ''}`}>
                <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                <ul className='space-y-2'>
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className='text-gray-600'>{subItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className='py-16 bg-gray-50'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8'>{page.home.advantages?.title || 'Our Advantages'}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {page.home.advantages?.items?.map((item, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='bg-white p-4 rounded-lg shadow'>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}
