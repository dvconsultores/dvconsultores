<template>
  <section id="home">
    <Modales ref="modales"></Modales>
    <!-- seccion 1 -->
    <aside id="hero" class="mt-16 mt-sm-16 mt-md-14 mt-lg-0 mt-xl-0">
      <section class="center">
        <img id="hero-img" src="../../assets/images/Group 38.png" alt="cubo principal" />
        
        <div id="right" class="divcol center">
          <h1 class="mb-0" v-html="$t('title')"></h1>
          
          <div id="container-cubitos">
            <img class="cubitoPequeño1" src="../../assets/images/Group 44.png" alt="cubo secundario" />
            <img class="cubitoPequeño2" src="../../assets/images/Group 45.png" alt="cubo secundario" />
          </div>
        </div>
      </section>

      <aside id="container-tools" class="divcol">
        <span class="subtitles">{{ $t("subtitleHerramientas") }}</span>

        <v-slide-group multiple show-arrows>
          <v-slide-item>
            <div class="herramientas center">
              <a href="https://near.org/">
                <img :src="`${$store.state.baseURL}themes/${$store.state.theme}/near.png`" alt="Logo de Near" />
              </a>
            </div>
          </v-slide-item>
          
          <v-slide-item v-for="(item, index) in herramientas" :key="index">
            <div v-bind:key="index" class="herramientas center">
              <a :href= "item.to">
                <v-img :src="item.img" />
              </a>
            </div>
          </v-slide-item>
        </v-slide-group>
      </aside>
    </aside>

    <!-- seccion 2 -->
    <section id="servicios" class="pt-16 pb-16">
      <span class="subtitles">{{ $t("subtitleServicios") }}</span>

      <aside class="Servicios1 divcol">
        <img src="../../assets/images/ELEMENTOS 1 (2).png" alt="Servicios" style="width:100%" />
        <span class="titleServices" v-html="$t('subtitleservicio1')"></span>
        <span class="parrafoServices">{{ $t("parrafoServicios1") }}</span>
      </aside>

      <aside class="Servicios2 burbujas divcol">
        <img class="imgservice2" src="../../assets/images/ELEMENTOS 4 (2).png" alt="Servicios" style="width:100%" />
        <span class="titleServices">DAPPS</span>
        <span class="parrafoServices">{{$t("parrafoServicios2")}}</span>
      </aside>

      <aside class="Servicios3 divcol">
        <img src="../../assets/images/ELEMENTOS 5 (2).png" alt="" style="width:100%" />
        <span class="titleServices">{{ $t("subtitleservicio3") }}</span>
        <span class="parrafoServices">{{$t("parrafoServicios3")}}</span>
      </aside>
      
      <!-- <div class="verMas">
        <a @click="$refs.modales.dialog = true">
          <span>{{ $t("verMas") }} <v-icon>mdi-arrow-right</v-icon></span>
        </a>
      </div> -->
    </section>

    <!-- seccion 3 -->
    <aside id="proyectos" style="margin-block: 10%">
      <v-row>
        <v-col class="center pb-10">
          <span class="subtitles">{{ $t("proyectosExi") }}</span>
        </v-col>
      </v-row>

      <section id="content" class="divcol center">
        <!-- Proyecto P2P -->
        <v-card color="var(--bg-card)">
          <img :src="`${$store.state.baseURL}themes/${$store.state.theme}/logonear (2).png`" alt="Logo Near" />

          <div class="div2">
            <span class="titleProyectos">NEAR P2P DEX</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto1") }}</p>
            <div class="div3 center">
              <a href="https://nearp2p.com/"><v-icon>mdi-arrow-right</v-icon></a>              
            </div>
          </div>
        </v-card>

        <!-- Proyecto DEFIX3 -->
        <v-card color="var(--bg-card)">
          <img :src="`${$store.state.baseURL}themes/${$store.state.theme}/generic-logo.png`" alt="Logo Generico" />

          <div class="div2">
            <span class="titleProyectos">DEFIX3</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto2") }}</p>
            <div class="div3 center">
              <a href="https://defix3.com/#/"><v-icon>mdi-arrow-right</v-icon></a>
            </div>
          </div>
        </v-card>

        <!-- Proyecto FREE HORSES -->
        <v-card color="var(--bg-card)">
          <img :src="`${$store.state.baseURL}themes/${$store.state.theme}/generic-logo.png`" alt="Logo Generico" />

          <div class="div2">
            <span class="titleProyectos">FREE HORSES</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto3") }}</p>
            <div class="div3 center">
              <a href="https://freehorses.io/#/"><v-icon>mdi-arrow-right</v-icon></a>
            </div>
          </div>
        </v-card>
      </section>

      <v-row>
        <v-col class="verMasProyectos end">
          <a @click="funProyectos()">
            <span
              >{{ $t("verMasProyectos") }} <v-icon>mdi-arrow-right</v-icon>
            </span>
          </a>
        </v-col>
      </v-row>
    </aside>

    <!-- seccion 4 -->
    <section id="equipo" style="margin-top: 5%; margin-bottom: 6%" class="divcol">
      <div id="container-head">
        <span class="subtitles">{{ $t("team") }}</span>
      </div>

      <section class="wrapper">
        <v-card v-for="(item, index) in $t('equipo')" :key="index" color="transparent" class="divcol">
          <aside class="top">
            <span class="nameEquipo" v-bind:key="index">{{item.name}}</span>
            <v-tooltip right color="transparent">
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="tamañoFoto" :src="item.imgEquipo" alt="Foto de equipo" @mouseover="mouseOver(item)" />
              </template>

              <div class="card1">
                <v-card-title class="space pl-0 pb-0">
                  <div class="col-lg-5">
                    <img class="tamañoFotoPopup" :src="equipoTool.img" alt="foto de equipo"/>
                  </div>
                  <div class="col-lg-6 pl-0">
                    <span class="namePopup">
                      {{ equipoTool.nombre }} </span
                    ><br />
                    <span class="namePopup">
                      {{ equipoTool.apellido }}
                    </span>
                    <p class="pt-3 color">
                      {{ equipoTool.cargo }}
                    </p>
                  </div>
                </v-card-title>

                <p class="textoDialog1">{{ item.descripcion }}</p>
                <v-row>
                  <v-col class="center">
                    <img :src="item.twitter" alt="twitter">
                    <img class="tamLinkedin" :src="item.linkedin" alt="linkedin">
                  </v-col>
                </v-row>
              </div>
            </v-tooltip>
          </aside>
          <v-row>
            <v-col>
              <a href=""><img class="tamTwitter" :src="item.twitter" alt="Logo twitter" /></a>
              <a href=""><img class="tamLinkedin" :src="item.linkedin" alt="Logo linkedin" /></a>                  
            </v-col>
          </v-row>
        </v-card>
      </section>

      <!-- dialogo 2 -->
        <v-dialog v-model="dialog1" width="800">
          <template v-slot:activator="{ on, attrs }">
            <div class="verMasFotos col-lg-11 end aquino" style="display:none !important">
              <a v-bind="attrs" v-on="on">
                <span>{{ $t("verMas") }} <v-icon>mdi-arrow-right</v-icon></span>
              </a>
            </div>
          </template>
          <div class="card">
            <v-card-title class="center pt-8">
              <span class="subtitles">{{ $t("team") }}</span>
            </v-card-title>
            <v-row>
              <v-col cols="12" class="end">
                <img
                  @click="dialog1 = false"
                  class="botonCerrar1"
                  src="../../assets/images/Group 142.png"
                  alt="boton de cerrar"
                />
              </v-col>
            </v-row>

            <section id="container-moreTeam" class="center">
              <aside v-for="(item, index) in $t('equipoDialog')" v-bind:key="index">
                <v-tooltip right color="transparent">
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      v-bind="attrs"
                      v-on="on"
                      class="tamañoFoto2"
                      :src="item.imgEquipo"
                      alt="Foto de equipo"
                      @mouseover="mouseOver(item)"
                    />
                  </template>

                  <div class="card1">
                    <v-card-title class="space pl-0 pb-0">
                      <div class="col-lg-5">
                        <img
                          class="tamañoFotoPopup"
                          :src="equipoTool.img"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-6 pl-0">
                        <span class="namePopup">
                          {{ equipoTool.nombre }} </span
                        ><br />
                        <span class="namePopup">
                          {{ equipoTool.apellido }}
                        </span>
                        <p class="pt-3 color">
                          {{ equipoTool.cargo }}
                        </p>
                      </div>
                    </v-card-title>

                    <p class="textoDialog1">
                      {{ item.descripcion }}
                    </p>
                  </div>
                </v-tooltip>

                <div class="divcol">
                  <span class="nameEquipo" v-bind:key="index">{{item.name}}</span>
                  <img class="tamLinkedin" style="margin-left:0" :src="item.linkedin" alt="Logo linkedin" />
                </div>
              </aside>
            </section>
          </div>
        </v-dialog>
    </section>
  </section>
</template>

<script>
import Modales from './Modales.vue'
export default {
  name: "Home",
  i18n: require("./i18n"),
  components: { Modales },
  data() {
    return {
      dialog1: false,
      equipoTool: [],     

      herramientas: [
        {
          value: 1,
          img: require("@/assets/images/LOGOS HERRAMIENTAS 2.png"),
          to: 'https://www.rust-lang.org/',
        },
        {
          value: 2,
          img: require("@/assets/images/LOGOS HERRAMIENTAS 3.png"),
          to: 'https://vuejs.org/',
        },
        {
          value: 3,
          img: require("@/assets/images/2048px-Python-logo-notext 1.png"),
          to: 'https://www.python.org/',
        },
        {
          value: 4,
          img: require("@/assets/images/nodejs-logo 1.png"),
          to: 'https://nodejs.org/',
        },
      ],
    };
  },
  methods: {
    mouseOver(item) {
      var nombreComp = item.name.split(" ");
      var nombre = nombreComp[0];
      var apellido = nombreComp[1];

      this.equipoTool = [];
      (this.equipoTool.nombre = nombre),
        (this.equipoTool.apellido = apellido),
        (this.equipoTool.img = item.imgEquipo);
      this.equipoTool.cargo = item.cargo;
      this.equipoTool.descripcion = item.descripcion;
      this.equipoTool.twitter = item.twitter;
      this.equipoTool.linkedin = item.linkedin;
    },
    funProyectos() {
      this.$router.push("/proyectos");
    },
  },
};
</script>

<style src="./Home.scss" lang="scss"></style>
