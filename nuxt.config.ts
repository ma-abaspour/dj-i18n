// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  i18n: {
  locales: [
    { code: 'en', name: 'English', file: 'en.json' },
    { code: 'ar', name: 'العربية', file: 'ar.json' },
    { code: 'de', name: 'Deutsch',  file: 'de.json' }
  ],
  defaultLocale: 'en',
  langDir: 'locales/',
  strategy: 'prefix_except_default'
},

  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './assets/svg'
      },
    ],
  },

})