<template>
  <section>
    <!-- menu banderas -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      activator=".openMenuBanderas"
    >
      <v-list id="colorContenedorBanderas" style="border-radius: 10px">
        <v-list-item
          id="quitarHoverBanderas"
          class="v-list-item-b"
          style="height: 2.4rem !important; min-height: auto !important"
          v-for="(item, i) in $t('languaje')"
          :key="i"
          @click="flagSelected(item)"
        >
          <v-list-item-title>
            <aside class="containerBanderaChange">
              <img class="banderaChange" :src="item.country" />
              <a class="tituloBanderaChange text-h6">
                {{ item.name }}
              </a>
            </aside>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- menu banderas mobile -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      z-index="100"
      activator=".openMenuBanderasMobile"
      max-width="244px"
    >
      <v-list id="colorContenedorBanderas" style="border-radius: 10px">
        <v-list-item
          id="quitarHoverBanderas"
          style="height: 3.9rem !important; min-height: auto !important"
          v-for="(item, i) in $t('languaje')"
          :key="i"
          @click="flagSelected(item)"
        >
          <v-list-item-title>
            <aside
              class="containerBanderaChange"
              style="justify-content: center"
            >
              <img
                style="width: 2rem; height: 2rem; margin: 0px 5px"
                :src="item.country"
              />
              <a
                class="tituloBanderaChange"
                style="margin-right: 5px; font-size: 1.25rem !important"
                href="#"
              >
                {{ item.name }}
              </a>
            </aside>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- menu bridge -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      activator=".openMenuBridge"
    >
      <v-list id="colorContainerDialogoBridge" style="border-radius: 10px">
        <!-- <v-list-item
          id="quitarHover"
          style="height: 3.1rem !important; min-height: auto !important"
          v-for="(item, i) in $t('list')"
          :key="i"
          :href="item.to"
        > -->
        <v-list-item
          id="quitarHover"
          style="height: 3.1rem !important; min-height: auto !important"
          v-for="(item, i) in $t('list')"
          :key="i"
          :href="item.to"
        >
          <v-list-item-title>
            <aside class="contenedorBridge">
              <a :href="item.to" id="textoLinkBridge" class="text-h6">
                {{ item.title }}
              </a>
            </aside>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- menu bridge mobile -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      z-index="100"
      activator=".openMenuBridgeMobile"
      max-width="244px"
    >
      <v-list id="colorContainerDialogoBridge" style="border-radius: 10px">
        <v-list-item
          id="quitarHover"
          style="height: 4.3rem !important; min-height: auto !important"
          v-for="(item, i) in $t('list')"
          :key="i"
          :href="item.to"
        >
          <v-list-item-title>
            <aside class="contenedorBridge">
              <a
                :href="item.to"
                id="textoLinkBridge"
                class="text-h6"
                style="font-size: 1.3rem !important"
              >
                {{ item.title }}
              </a>
            </aside>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- menu logout -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      activator=".menuLogOut"
    >
      <v-list id="colorContainerDialogoBridge" style="border-radius: 10px">
        <v-list-item
          id="quitarHover"
          style="height: 4.3rem !important; min-height: auto !important"
        >
          <v-list-item-title @click="logOut">
            <aside style="cursor: pointer" class="contenedorBridge">
              <a
                id="textoLinkBridge"
                class="text-h7"
                style="font-size: 1.3rem !important"
              >
                Log out
              </a>
            </aside>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- dialogo login -->
    <!-- <v-dialog
      id="eliminarDialogo"
      v-model="dialog"
      activator=".dialogLogIng"
      max-width="396"
      overlay-opacity="0.6"
      overlay-color="black"
    >
      <v-card class="connectWallet">
        <v-card-title class="text-h5">
          <span id="tituloContainerWallet" class="text-h4">
            {{$t('tc')}}
          </span>
          <v-btn
            @click="dialog = false"
            icon
            id="colorCloseWallet"
            style="top: 10px; right: 10px; position: absolute"
          >
            <v-icon medium>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-row justify="center">
          <section style="display: flex; justify-content: center">
            <v-col>
              <aside
                v-for="(item, index) in dataWallets"
                v-bind:key="index"
                class="containerChangeWallet"
                style="cursor: pointer"
                @click="walletAcces(item)"
              >
                <img
                  style="margin-right: 0 !important"
                  class="logoChangeWallet"
                  :src="item.logo"
                  alt="logo"
                />
                <v-col>
                  <span id="titleWallet" class="text-h7">{{ item.title }}</span>
                  <p
                    id="textoWallet"
                    class="text-h7"
                    style="margin-bottom: 0 !important"
                  >
                    {{ item.desc }}
                  </p>
                </v-col>
              </aside>
            </v-col>
          </section>
        </v-row>
      </v-card>
    </v-dialog> -->
  </section>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "Header",
   i18n: require("./i18n"),
  data() {
    return {
      languaje: [
        {
          country: "https://flagcdn.com/40x30/us.png",
          name: "English",
          value: "US"
        },
        {
          country: "https://flagcdn.com/40x30/cn.png",
          name: "Chinese",
          value: "CH"
        },
      ],
      list: [
        {
          title: "Nomad Bridge",
          to: "#/bridgeIcon",
        },
        {
          title: "Synapse Bridge",
          to: "#/bridgeColor",
        },
        {
          title: 'Celer Bridge',
          to: "#/bridgeSimple"
        }
      ],
      // dialog: false,
      // dataWallets: [
      //   {
      //     id: 1,
      //     logo: require("@/assets/logo/keplr.png"),
      //     title: "Keplr",
      //     desc: "Keplr Extension",
      //   },
      //   {
      //     id: 2,
      //     logo: require("@/assets/logo/metamask.png"),
      //     title: "Metamask",
      //     desc: "Metamask Extension",
      //   },
      //   {
      //     id: 3,
      //     logo: require("@/assets/logo/keplrMobile.png"),
      //     title: "Wallet Connect",
      //     desc: "Keplr Mobile",
      //   },
      // ],
    };
  },
  methods: {
    async logOut() {
      this.$parent.$parent.logOut();
    },
    // walletAcces(item) {
    //   if (item === this.dataWallets[0]) {
    //     this.$parent.$parent.walletAccessKeplr();
    //   }
    //   if (item === this.dataWallets[1]) {
    //     this.$parent.$parent.walletAccessMetamask();
    //   }
    //   if (item === this.dataWallets[2]) {
    //     this.$parent.$parent.walletAccessConnect();
    //   }
    // },
     flagSelected(item) {
         if (item.value === "US") {
         localStorage.language = item.value;
         i18n.locale = item.value;
       }
         else if (item.value === "ES") {
         localStorage.language = item.value;
        i18n.locale = item.value;
      }
      
      this.$parent.$parent.flagSelected(item);
     },
  },
};
</script>
