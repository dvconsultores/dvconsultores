import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  ES: {},
  US: {},
  CH: {}
}

export const i18n = new VueI18n({
  locale: 'US',
  fallbackLocale: 'US',
  messages
})