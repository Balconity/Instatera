export default defineNuxtConfig({
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  nitro: {
    preset: 'aws-amplify'
  },
  app: {
    head: {
      script: [
        {
          src: 'https://app.enzuzo.com/scripts/cookiebar/75ae19c4-47f0-11f1-907d-ff98ea9e8cf9',
          defer: true
        }
      ]
    }
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