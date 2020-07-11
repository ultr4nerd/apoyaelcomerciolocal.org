export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: '¡Apoya el Comercio Local!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Somos una iniciativa que busca ayudar a algunos comercios locales en México que han sido afectados por la pandemia. 🇲🇽',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '¡Apoya el Comercio Local!',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Somos una iniciativa que busca ayudar a algunos comercios locales en México que han sido afectados por la pandemia. 🇲🇽',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/business-seo/apoyaelcomerciolocal.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://apoyaelcomerciolocal.org',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '¡Apoya el Comercio Local!',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Somos una iniciativa que busca ayudar a algunos comercios locales en México que han sido afectados por la pandemia. 🇲🇽',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/business-seo/apoyaelcomerciolocal.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/css/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['nuxt-buefy', '@nuxtjs/pwa', '@nuxt/content'],
  content: {},
  build: {},
  generate: {
    fallback: true,
  },
}
