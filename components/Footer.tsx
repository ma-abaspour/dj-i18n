import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container max-w-6xl mx-auto px-4'>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${lang === 'arabic' ? 'rtl' : ''}`}>
          <div>
            <h3 className='text-xl font-bold mb-4'>{footer.contact.title}</h3>
            <p className='mb-2'>{footer.contact.address}</p>
            <p>info@dariushtejarat.com</p>
            <p>salesmanager@dariushtejarat.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
