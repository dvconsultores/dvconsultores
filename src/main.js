
import * as VueGoogleMaps from 'vue2-google-maps'
import "vue-toastification/dist/index.css"

import App from './App.vue'
import axios from "axios";
// import Moralis from './plugins/moralis'
//import initI18n from '@/plugins/i18n'
import { i18n } from '@/plugins/i18n'
import router from './Routes'
import store from './store/index'
import Toast from "vue-toastification"
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import VueMask from 'v-mask'
import vuetify from './plugins/vuetify'
// Prefered: as a plugin (directive + filter) + custom placeholders support





Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(VueMask);
//const i18n = initI18n("ES", "US");

Vue.use(axios);

Vue.use(Toast);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  // Moralis,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')
