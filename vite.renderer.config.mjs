import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    base: './'
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify(
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
      {
        autoImport: true
      }
    )
  ]
})
