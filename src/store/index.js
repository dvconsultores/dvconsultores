import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "dark",
    tokensBridge: [
      {
        name: "OSMO",
        desc: "Osmosis",
        logo: require("@/assets/logo/OSMO.png"),
        disabled: false
      },
      {
        name: "Evmos",
        desc: "Evmos",
        logo: require("@/assets/logo/logo.png"),
        disabled: false,
        filter: true
      },
      {
        name: "Ethereum",
        desc: "Ethereum",
        logo: require("@/assets/logo/ethereum.png"),
        disabled: false
      },
    ],
    tokens: [
      {
        name: "OSMO",
        desc: "Osmosis",
        logo: require("@/assets/logo/OSMO.png"),
        balance: 100,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
      {
        name: 'EXS',
        desc: 'Exswap',
        logo: require("@/assets/logo/logo.png"),
        balance: 50,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false,
        filter: true
      },
      {
        name: "Ethereum",
        desc: "Ethereum",
        logo: require("@/assets/logo/ethereum.png"),
        balance: 10,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
      {
        name: "Astronaut",
        desc: "Astronaut",
        logo: require("@/assets/astronauta.png"),
        balance: 9999,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
    ],
    tokensAssets: [
      {
        name: "OSMO",
        desc: "Osmosis",
        logo: require("@/assets/logo/farm/osmo.png"),
        balance: 100,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
      {
        name: 'EXS',
        desc: 'Exswap',
        logo: require("@/assets/logo/farm/ex.png"),
        balance: 50,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false,
      },
      {
        name: "Ethereum",
        desc: "Ethereum",
        logo: require("@/assets/logo/ethereum.png"),
        balance: 10,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
      {
        name: "Astronaut",
        desc: "Astronaut",
        logo: require("@/assets/astronauta.png"),
        balance: 9999,
        ibcDeposit: "Deposit",
        ibcWithdraw: "Withdraw",
        to: "#",
        disabled: false
      },
    ],
  },
  mutations: {
    CambiarTheme(state, theme) {
      state.theme = theme
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
