// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Drix'sEnergyField Rust — Official Website",
      meta: [
        {
          name: "description",
          content: "Welcome to Drix'sEnergyField Rust official website. Get all Drix's servers connection information here."
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg"
        }
      ]
    }
  }
})