import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    drawer: false,
    flag: require("@/assets/banderas/USA.png"),
    baseURL: process.env.BASE_URL,
    theme: "dark",
  },
  mutations: {
    CambiarTheme(state, theme) {
      state.theme = theme
    },
    drawer(state) {
      state.drawer = true
    },
    flagSelected(state, item) {
      console.log(item)
      state.flag = item.country
    }
  },
  actions: {
    CambiarTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit( "CambiarTheme", theme)
    },
  },
});
