export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'hr'
      },
      titleTemplate: '%s | In Statera',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#059669' },
      ]
    }
  },
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  nitro: {
    preset: 'aws-amplify'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  site: {
    url: 'https://instatera.hr',
    name: 'In Statera - Centar fizioterapije',
    description: 'Vaše tijelo zaslužuje ravnotežu. Stručnim tretmanima vratite energiju i smanjite bol.',
    defaultLocale: 'hr',
  },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    gmailUser: process.env.SMTP_USER,
    gmailAppPassword: process.env.SMTP_PASS,
    contactEmail: process.env.CONTACT_EMAIL
  },
})