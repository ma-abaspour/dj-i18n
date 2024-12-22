import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

  return (
    <footer className={`bg-white text-gray-900 py-12 ${lang === 'arabic' ? 'rtl' : 'ltr'}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.company}</h3>
            <p>{footer.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.links.title}</h3>
            <ul>
              {footer.links.items.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.href} className="hover:text-gray-300">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.contact.title}</h3>
            <p>{footer.contact.address}</p>
            <p>{footer.contact.email}</p>
            <p>{footer.contact.phone}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
