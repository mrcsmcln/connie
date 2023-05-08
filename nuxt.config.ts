import defaultTheme from 'tailwindcss/defaultTheme'

export default defineNuxtConfig({
  build: { transpile: ['luxon', '@heroicons'] },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter var"', ...defaultTheme.fontFamily.sans]
          }
        }
      }
    }
  }
})
