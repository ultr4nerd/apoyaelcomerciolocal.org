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
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['nuxt-buefy', '@nuxtjs/pwa', '@nuxt/content'],
  content: {},
  build: {},
}
