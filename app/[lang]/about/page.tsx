import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  // Add error handling
  if (!page?.about) {
    return <div>Loading...</div>
  }

  return (
    <div className='py-16'>
      <div className='container max-w-6xl mx-auto px-4'>
        <h1 className={`text-4xl font-bold mb-8 ${lang === 'arabic' ? 'text-right' : ''}`}>
          {page.about.title}
        </h1>
        
        {/* Vision & Mission */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>{page.about.vision}</h2>
          <p className='text-gray-600 mb-6'>{page.about.vision_text}</p>
          
          <h2 className='text-2xl font-semibold mb-4'>{page.about.mission}</h2>
          <ul className='list-disc pl-6'>
            {page.about.mission_points.map((point, index) => (
              <li key={index} className='text-gray-600 mb-2'>{point}</li>
            ))}
          </ul>
        </section>

        {/* Competitive Advantages */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Competitive Advantages</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {page.about.competitive_advantages.map((advantage, index) => (
              <div key={index} className='p-4 bg-gray-50 rounded-lg'>
                {advantage}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
