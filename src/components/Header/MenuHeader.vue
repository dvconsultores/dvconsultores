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

    <v-navigation-drawer
    id="drawer"
    v-model="$store.state.drawer"
    fixed
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
    
      <div class="center" style="margin-top:2em">
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
      </div>
  </v-navigation-drawer>
</section>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "Header",
  i18n: require("./i18n"),
  data() {
    return {
      IconoTheme: true,
    };
  },
  created() {
    this.element = document.getElementById("theme");
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      this.IconoTheme = true;
    }
    if (theme == "light") {
      this.IconoTheme = false;
    }
  },
  methods: {
     flagSelected(item) {
         if (item.value === "US") {
         localStorage.language = item.value;
         i18n.locale = item.value;
       }
         else if (item.value === "ES") {
         localStorage.language = item.value;
        i18n.locale = item.value;
      }
      this.$store.commit('flagSelected', item);
     },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.IconoTheme = !this.IconoTheme;
    },
  },
};
</script>
