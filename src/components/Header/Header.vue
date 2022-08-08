<template>
  <v-app-bar id="header" color="transparent" absolute>
  <!-- mobile -->
    <img id="logo-header" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`" alt="logo" class="vermobile" />

    <v-btn color="transparent" class="botonMenu vermobile" @click.stop="$store.commit('drawer')">
      <v-icon medium>mdi-menu</v-icon>
    </v-btn>
        
  <!-- desktop -->
    <img class="deletemobile" id="logoPrincipal" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`" alt="logo" />

    <aside class="end deletemobile" style="gap:1em">
      <div v-for="(item, index) in $t('items')" v-bind:key="index" id="ajustarHeader">
        <a :href="item.to" id="texts" class="h7-em" :class="{ openMenuBridge: item.open }" >
          {{ item.name }}
        </a>
      </div>

      <v-btn class="boton eliminarMobile3 openMenuBanderas">
        <img class="bandera" :src="$store.state.flag" alt="bandera" />
      </v-btn>
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
    </aside>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  i18n: require("./i18n"),
  data() {
    return {
      element: null,
      IconoTheme: true,
      idioma: "US",
      chainId: null,
      instance: null,
      account: null,
      signer: null,
      provider: null,
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
