<template>
  <section>
    <v-alert
      v-for="(item, index) in dataAlertWallet"
      v-bind:key="index"
      :value="item.open"
      elevation="3"
      transition="scale-transition"
      id="alertaWallet"
    >
      <aside id="contenedorCloseAlert">
        <v-btn class="iconoCloseAlert" icon @click="alertWalletClose(item)">
          <v-icon id="colorCloseAlert" size="1.5rem">mdi-close</v-icon>
        </v-btn>
      </aside>

      <v-col cols="11" id="contenedorAlertWallet" style="padding: 0 !important">
        <div class="contenedorAlertPosition">
          <v-icon style="color: #f6943c !important" size="2.5rem"
            >mdi-minus-circle</v-icon
          >
          <span id="titleAlert">{{ item.title }}</span>
        </div>

        <div class="contenedorAlertPosition">
          <v-icon style="visibility: hidden" size="2.5rem"
            >mdi-minus-circle</v-icon
          >
          <p class="textAlertUp">{{ item.desc}}</p>
        </div>
        <div class="contenedorAlertPosition">
          <v-icon style="visibility: hidden" size="2.5rem"
            >mdi-minus-circle</v-icon
          >
          <a
            :href="item.link"
            target="_blank"
            class="textAlertDown"
          >
            View on explorer
            <sup style="top: -3px !important">
              <v-icon x-small class="flechitaAlert"> mdi-arrow-top-right </v-icon>
            </sup>
          </a>
        </div>
      </v-col>
    </v-alert>
  </section>
</template>

<script>
export default {
  name: "WalletAlert",
  data() {
    return {
      dataAlertWallet: [
        {
          open: false,
          title: 'Keplr not Founded',
          desc: 'Need extension for loggin',
          link: '#'
        },
        {
          open: false,
          title: 'Metamask not Founded',
          desc: 'Need extension for loggin',
          link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es'
        },
        {
          open: false,
          title: 'Connect Keplr not Founded',
          desc: 'Need extension for loggin',
          link: '#'
        }
      ],
    };
  },
  methods: {
    alertWalletClose(item){
      if (item === this.dataAlertWallet[0]) {
        this.dataAlertWallet[0].open = false;
      }
      if (item === this.dataAlertWallet[1]) {
        this.dataAlertWallet[1].open = false;
      }
      if (item === this.dataAlertWallet[2]) {
        this.dataAlertWallet[2].open = false;
      }
    },
    AlertWalletKeplr() {
      this.dataAlertWallet[0].open = true;
    },
    AlertWalletMetamask() {
      this.dataAlertWallet[1].open = true;
    },
    AlertWalletConnectKeplr() {
      this.dataAlertWallet[2].open = true;
    }
  }
};
</script>

<style src="./WalletAlert.scss" lang="scss"></style>
