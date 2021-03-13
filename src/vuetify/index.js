import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import themePalettes from './theme'
import {
  faHeart,
  faBackward,
  faForward,
  faPlay,
  faPause,
  faBars,
  faUndo,
  faRandom,
  faVolumeDown,
  faVolumeMute,
  faVolumeUp,
  faVolumeOff,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(faPlay, faPause, faHeart, faBackward, faForward, faBars, faUndo, faRandom, faVolumeDown, faVolumeMute, faVolumeUp, faVolumeOff, faThumbsUp, faThumbsDown);

Vue.use(Vuetify)

export function createVuetify (store) {
  const palettes = themePalettes[store.state.settings.palettes]?.palette;
  return new Vuetify({
    icons: {
      iconfont: 'mdiSvg',
    },
    theme: {
      dark: store.state.settings.theme === 'dark',
      options: { customProperties: true },
      themes: {
        light: {
          ...palettes,
        },
        dark: {
          ...palettes,
        },
      },
    },
  });
}
