export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'fantasy', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  devtools: {
    enabled: false,
  },
  components: {
    dirs: [{
      path: '~/components/icons',
    }, '~/components'],
  },
  css: ['~/assets/css/global.css'],
})
