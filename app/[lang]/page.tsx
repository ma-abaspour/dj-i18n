import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Footer from '@/components/Footer'

import { Icon } from '@iconify/react';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page, form } = await getDictionary(lang)

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


    <section className='py-16 bg-white'>
      <div className='container max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>Explore Our Categories</h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {/* Electronics */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="icon-park-outline:heavy-metal" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Electronics</h3>
            <p className='text-gray-600'>Find the latest gadgets and devices.</p>
          </div>

          {/* Fashion */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="cbi:soil-moisture" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Fashion</h3>
            <p className='text-gray-600'>Stylish clothing and accessories.</p>
          </div>

          {/* Home & Living */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="icon-park-outline:floor-tile" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Home & Living</h3>
            <p className='text-gray-600'>Furniture, decor, and more.</p>
          </div>

          {/* Sports */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="emojione-v1:building-construction" className='w-16 h-16' />
            </div>
            <h3 className='text-lg font-semibold'>Sports</h3>
            <p className='text-gray-600'>Gear and equipment for all sports.</p>
          </div>

          {/* Beauty */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="mdi:lipstick" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Beauty</h3>
            <p className='text-gray-600'>Cosmetics and personal care.</p>
          </div>

          {/* Books */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="mdi:book-open-variant" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Books</h3>
            <p className='text-gray-600'>Discover your next great read.</p>
          </div>

          {/* Toys */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="mdi:puzzle" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Toys</h3>
            <p className='text-gray-600'>Fun for kids of all ages.</p>
          </div>

          {/* Groceries */}
          <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4'>
              <Icon icon="mdi:cart" className='w-8 h-8' />
            </div>
            <h3 className='text-lg font-semibold'>Groceries</h3>
            <p className='text-gray-600'>Fresh food and daily essentials.</p>
          </div>
        </div>
      </div>
    </section>





      {/* Products & Services */}
      <section className='py-16 bg-gray-50'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            {page.home.products?.title || 'Products & Services'}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {page.home.products?.items?.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg shadow-lg border ${
                  index % 2 === 0 ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'
                } ${lang === 'arabic' ? 'text-right' : ''}`}
              >
                <h3 
                  className='text-xl font-semibold mb-3' 
                  style={{ color: index % 2 === 0 ? '#1E40AF' : '#065F46' }}
                >
                  {item.title}
                </h3>
                <ul className='space-y-2'>
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className='text-gray-700'>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className='py-16 bg-gray-100'>
        <div className='container max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-gray-800'>
            {page.home.advantages?.title || 'Our Advantages'}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {page.home.advantages?.items?.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-6 rounded-lg shadow-lg border ${
                  index % 2 === 0 ? 'bg-slate-50 border-slate-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div 
                  className='text-gray-800'
                  style={{ color: index % 2 === 0 ? '#334155' : '#1F2937' }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






      {/* Other Sections */}
      {/* Add this form section here */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{form.title}</h2>
          <form
            action="https://formspree.io/f/xyzzzjnn"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                {form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={form.name_placeholder}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                {form.message}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={form.message_placeholder}
                required
                rows={4}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Contact Field */}
            <div>
              <label htmlFor="contact" className="block text-lg font-medium text-gray-700">
                {form.contact}
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder={form.contact_placeholder}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              >
                {form.submit}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      <Footer lang={lang} />
    </main>
  )
}
