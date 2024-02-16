// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import 'vuetify/dist/vuetify.min.css'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
  // components,
  // directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'dark'
  }
})

console.log('MDI Icons:', mdi);
console.log('Aliases:', aliases);

export default vuetify
