<template>
  <v-app-bar class="pt-md-13 pr-md-16 mr-md-6" color="transparent" absolute>
    <WalletAlert ref="walletAlert"></WalletAlert>

    <v-row align="center">
      <!-- mobile -->
      <v-col cols="2" sm="3" class="pt-16 d-flex d-md-none">
          <img
            width="100%"
            id=""
            :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`"
            alt="logo"
          />
      </v-col>

      <v-col class="pt-16 d-flex d-md-none end" cols="10" sm="9">
        <v-btn class="botonMenu" @click.stop="drawer = !drawer">
          <v-icon medium>mdi-menu</v-icon>
        </v-btn>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        height="900"
        temporary
        right
        style="z-index:99"
        >
        <v-list>
          <v-list-item v-for="(item, index) in $t('items')" :key="index" :href="item.to">             
            <v-list-item-title v-bind:key="index">
              {{item.name}}
            </v-list-item-title>
          </v-list-item>          
                    
          <v-list-group offset-y>
            <template v-slot:activator="">
              <v-list-item-content>
                <v-list-item-title>{{$t('idioma')}}</v-list-item-title>
              </v-list-item-content>
            </template>         
            <v-list-item v-for="i in $t('languaje')" :key="i" link
                    >   
                    <v-list-item-title
                      @click="flagSelected(i.value)" class="center" 
                      v-text="i.name"               
                    >
                    </v-list-item-title>                     
            </v-list-item>         
          </v-list-group>
                    
        </v-list>       
      </v-navigation-drawer>
      </v-col>
            
      <!-- desktop -->
      <v-row class="d-none d-md-flex">
        <v-col cols="2">
          <img
            id="logoPrincipal"
            :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`"
            alt="logo"
          />
        </v-col>

        <v-col style="margin-left: 44%" cols="4" class="spacea center">
          <template v-for="(item, index) in $t('items')">
            <div v-bind:key="index" id="ajustarHeader">
              <a
                :href="item.to"
                id="texts"
                class="h7-em"
                :class="{ openMenuBridge: item.open }"
              >
                {{ item.name }}
              </a>
            </div>
          </template>

          <v-btn class="boton eliminarMobile3 openMenuBanderas">
            <img class="bandera" :src="idiomaA" alt="bandera" />
          </v-btn>
        </v-col>

        <v-row align="center" justify="end">
          <v-col class="padd2">
            <div style="display: flex; justify-content: end">
              <v-tooltip color="transparent" bottom open-delay="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-if="!IconoTheme"
                    v-bind="attrs"
                    v-on="on"
                    @click="CambiarTheme('dark')"
                    class="pa-0"
                    height="0px"
                  >
                    <img src="../../assets/images/botonTema1.png" alt="" />
                  </v-btn>
                  <v-btn
                    v-else
                    v-bind="attrs"
                    v-on="on"
                    @click="CambiarTheme('light')"
                    class="pa-0"
                    height="0px"
                  >
                    <img src="../../assets/images/botonTema2.png" alt="" />
                  </v-btn>
                </template>
                <!-- <div id="tooltip">
                    <span>{{ $t("theme") }}</span>
                  </div> -->
              </v-tooltip>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
    <MenuHeader></MenuHeader>
  </v-app-bar>
</template>

<script>
import { ethers } from "ethers";
import MenuHeader from "./MenuHeader.vue";
import WalletAlert from "@/components/Header/WalletAlert.vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "38b8c05faaa6499990c3af539358ae4e",
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions,
});

export default {
  name: "Header",
  i18n: require("./i18n"),
  components: {
    WalletAlert,
    MenuHeader,
  },
  data() {
    return {
      element: null,
      IconoTheme: true,
      drawer: false,
      idioma: "US",
      chainId: null,
      instance: null,
      account: null,
      signer: null,
      provider: null,
      idiomaA: require("@/assets/banderas/USA.png"),
    };
  },
  created() {
    this.element = document.getElementById("theme");
    const theme = localStorage.getItem("theme");
    if (theme) {
      this.CambiarTheme(theme);
    }
    if (theme == "dark") {
      this.IconoTheme = true;
    }
    if (theme == "light") {
      this.IconoTheme = false;
    }
  },
  mounted() {
    this.data = this.$t("dataDrawer");
  },
  computed: {
    computedItems() {
      return this.data.map(this.mapItem);
    },
  },
  methods: {
    async logOut() {
      await web3Modal.clearCachedProvider();
      this.account = null;
      this.instance = null;
      this.provider = null;
      this.chainId = null;
    },
    async connectWallet() {
      this.instance = await web3Modal.connect();

      this.provider = new ethers.providers.Web3Provider(this.instance);
      this.signer = this.provider.getSigner();
      this.chainId = this.instance.chainId;
      this.account = this.instance.selectedAddress;
      // Subscribe to accounts change
      this.instance.on("accountsChanged", (accounts) => {
        this.account = accounts[0];
      });

      // Subscribe to chainId change
      this.instance.on("chainChanged", (chainId) => {
        this.chainId = chainId;
      });

      // Subscribe to provider connection
      this.instance.on("connect", (info) => {
        this.chainId = info.chainId;
      });

      // Subscribe to provider disconnection
      this.instance.on("disconnect", (error) => {
        console.log(error);
      });
    },
    async switchNetwork() {
      try {
        const ethereum = this.instance;
        const data = [
          {
            chainId: "0x2329",
            chainName: "Evmos",
            nativeCurrency: {
              name: "EVMOS",
              symbol: "EVMOS",
              decimals: 18,
            },
            rpcUrls: ["https://eth.bd.evmos.org:8545"],
          },
        ];

        const tx = await ethereum
          .request({ method: "wallet_addEthereumChain", params: data })
          .catch();

        if (tx) {
          // console.log(tx);
        }
      } catch (error) {
        console.error(error);
      }
    },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.IconoTheme = !this.IconoTheme;
    },
    changeArrow(item) {
      item.open = !item.open;
    },
    changeArrowFocusOut(item) {
      if (item.open === false) {
        item.open = !item.open;
      }
    },
    flagSelected(item) {
      this.idiomaA = item.country;
      this.dataDrawerB[1].title = item.name;
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
<style scoped>
.menuLogOut {
  cursor: pointer;
}
.dialogLogIn {
  cursor: pointer;
}
.openMenuBridgeMobile {
  cursor: pointer;
}
.openMenuBridge {
  cursor: pointer;
}
.openMenuBanderasMobile {
  cursor: pointer;
}
.openMenuBanderas {
  cursor: pointer;
}
</style>
