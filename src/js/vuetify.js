import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi
  //   }
  // },
  theme: {
    defaultTheme: 'nfDark',
    themes: {
      nfDark: {
        dark: true,
        colors: {
          primary: '#9900ff',
        }
      }
    }
  }
})

export default vuetify