import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  theme: {
    defaultTheme: 'dark'
  }
})

export default vuetify
