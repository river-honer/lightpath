import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#00A991',
        secondary: '#005C4E',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
