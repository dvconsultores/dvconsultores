import 'font-awesome/css/font-awesome.css'

import config from '@/config'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: config.light
        }
    }
});
