<template>
  <section>
    <!-- seccion 1 -->
    <aside id="home">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <img
            class="ajustarCubo"
            src="../../assets/images/Group 38.png"
            alt="cubo principal"
          />
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="4" >
          <div class="ajustarTitlePrincipal">
            <h1 class="mb-0">{{ $t("titleTecnologia") }}</h1>
            <h1 class="titleOrientada">
              {{ $t("titleOrientada") }}
              <div class="futuro center">{{ $t("titleFuturo") }}</div>
            </h1>
          </div>
          <div class="d-none d-md-flex">
            <img
              class="cubitoPequeño1"
              src="../../assets/images/Group 44.png"
              alt="cubo secundario"
            />
            <img
              class="cubitoPequeño2"
              src="../../assets/images/Group 45.png"
              alt="cubo secundario"
            />
          </div>
        </v-col>
      </v-row>

      <aside>
        <v-row class="center">
          <span class="subtitles">{{ $t("subtitleHerramientas") }}</span>
        </v-row>
        <v-row class="center pt-8 pb-8">
          <v-col class="center d-flex justify-space-around" cols="10">
            <div class="herramientas center">
              <a href="">
                <img
                  :src="`${$store.state.baseURL}themes/${$store.state.theme}/near.png`"
                  alt="Logo de Near"
                />
              </a>
            </div>

            <template v-for="(item, index) in herramientas">
              <div v-bind:key="index" class="herramientas center">
                <a href="#">
                  <v-img :src="item.img" />
                </a>
              </div>
            </template>
          </v-col>
        </v-row>
      </aside>
    </aside>

    <!-- seccion 2 -->
    <v-row id="servicios" class="pt-16 pb-16">
      <v-col cols="6">
        <v-col class="end titleServicios">
          <span class="subtitles">{{ $t("subtitleServicios") }}</span>
        </v-col>
        <v-row class="end" style="margin-top: 40%">
          <div class="Servicios1">
            <img src="../../assets/images/ELEMENTOS 1.png" alt="Servicios" />
            <div class="movTitle col-7 col-sm-12 col-md-8 col-lg-7">
              <span class="titleServices">{{ $t("subtitleservicio1") }}</span>
            </div>
            <div style="margin-top: -15px; margin-left: 20px" class="col-11">
              <span class="parrafoServices">{{ $t("parrafoServicios1") }}</span>
            </div>
          </div>
        </v-row>

        <!-- Inicio de Dialogo 1 -->
        <section>
          <v-dialog v-model="dialog" width="800">
            <template v-slot:activator="{ on, attrs }">
              <div class="verMas">
                <a v-bind="attrs" v-on="on">
                  <span
                    >{{ $t("verMas") }} <v-icon>mdi-arrow-right</v-icon></span
                  >
                </a>
              </div>
            </template>
            <div class="card">
              <section class="image2">
                <v-card-title class="ajusteHead">
                  <v-row class="center">
                    <v-col class="divTitle divcol pl-14 pt-7" cols="">
                      <span class="title1">SERVICES</span>
                      <span class="title2">LOREM IPSUM</span>
                    </v-col>
                    <v-col cols="2">
                      <v-row>
                        <v-col>
                          <img
                            class="cubo1"
                            src="../../assets/images/CUBO DV SOLO 1.png"
                            alt="cubo"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <img
                            class="cubo2"
                            src="../../assets/images/CUBO DV SOLO 1.png"
                            alt="cubo"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-row>
                  <v-col cols="12" class="end">
                    <img
                      @click="dialog = false"
                      class="botonCerrar"
                      src="../../assets/images/Group 142.png"
                      alt="boton de cerrar"
                    />
                  </v-col>
                </v-row>

                <div class="center" style="padding-top: 160px">
                  <img
                    class="image"
                    src="../../assets/images/Mask group (4).png"
                    alt="imagen"
                  />
                </div>
              </section>
              <p class="textoDialog pt-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </v-dialog>
        </section>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col style="margin-left: -12px; padding-top: 80px">
            <div class="Servicios2 burbujas">
              <img
                class="imgservice2"
                src="../../assets/images/ELEMENTOS 4.png"
                alt="Servicios"
              />
              <div class="titleServ2 col-7">
                <span class="titleServices">DAPPS</span>
              </div>
              <div style="margin-top: -15px; margin-left: 20px" class="col-11">
                <span class="parrafoServices">{{
                  $t("parrafoServicios2")
                }}</span>
              </div>
            </div>
            <div class="Servicios3" style="margin-top: 386px">
              <img src="../../assets/images/ELEMENTOS 5.png" alt="" />
              <div class="titleServ3 col-7">
                <span class="titleServices">{{ $t("subtitleservicio3") }}</span>
              </div>
              <div style="margin-top: -15px; margin-left: 20px" class="col-11">
                <span class="parrafoServices">{{
                  $t("parrafoServicios3")
                }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- seccion 3 -->
    <aside id="proyectos" style="margin-top: 10%">
      <v-row>
        <v-col class="center pb-10">
          <span class="subtitles">{{ $t("proyectosExi") }}</span>
        </v-col>
      </v-row>

      <!-- Proyecto P2P -->
      <v-row class="center">
        <v-col class="proyectos divrow pa-0" cols="9" sm="9" md="8" lg="7">
          <div class="div1 col-sm-4 col-md-4 col-lg-4 center">
            <img
              class="logoNear"
              :src="`${$store.state.baseURL}themes/${$store.state.theme}/logonear.png`"
              alt="Logo Near"
            />
          </div>
          <div class="div2 col-md-7 col-lg-7 pl-6 pt-6">
            <span class="titleProyectos">NEAR P2P DEX</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto1") }}</p>
          </div>
          <div class="div3 col-1 center">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </v-col>
      </v-row>

      <!-- Proyecto DEFIX3 -->
      <v-row class="center">
        <v-col class="proyectos divrow pa-0" cols="9" sm="9" md="8" lg="7">
          <div class="div1 col-sm-4 col-md-4 col-lg-4 center">
            <img
              class=""
              :src="`${$store.state.baseURL}themes/${$store.state.theme}/generic-logo.png`"
              alt="Logo Generico"
            />
          </div>
          <div class="div2 col-md-7 col-lg-7 pl-6 pt-6">
            <span class="titleProyectos">DEFIX3</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto2") }}</p>
          </div>
          <div class="div3 col-1 center">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </v-col>
      </v-row>

      <!-- Proyecto BOOKSHOP -->
      <v-row class="center">
        <v-col class="proyectos divrow pa-0" cols="9" sm="9" md="8" lg="7">
          <div class="div1 col-sm-4 col-md-4 col-lg-4 center">
            <img
              class=""
              :src="`${$store.state.baseURL}themes/${$store.state.theme}/generic-logo.png`"
              alt="Logo Generico"
            />
          </div>
          <div class="div2 col-md-7 col-lg-7 pl-6 pt-6">
            <span class="titleProyectos">BOOKSHOP</span>
            <p class="parrafoProyectos">{{ $t("parrafoProyecto3") }}</p>
          </div>
          <div class="div3 col-1 center">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </v-col>
      </v-row>

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
    <section id="equipo">
      <aside style="margin-top: 5%; margin-bottom: 6%">
        <v-row>
          <v-col class="offset-2" style="margin-bottom: 30px">
            <span class="subtitles">{{ $t("team") }}</span>
          </v-col>
        </v-row>

        <aside class="center">
          <v-col cols="10" md="9" lg="10">
            <v-row>
              <v-col
                cols="3" sm="2" md="2" lg="2"
                class="space divcol"
                v-for="(item, index) in $t('equipo')"
                v-bind:key="index"
              >
                <section>
                  <v-tooltip right color="transparent">
                    <template v-slot:activator="{ on, attrs }">
                      <div>
                        <img
                          v-bind="attrs"
                          v-on="on"
                          class="tamañoFoto"
                          :src="item.imgEquipo"
                          alt="Foto de equipo"
                          @mouseover="mouseOver(item)"
                        />
                      </div>
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
                </section>

                <div>
                  <span class="nameEquipo" v-bind:key="index">{{
                    item.name
                  }}</span>
                </div>
                <div>
                  <img
                    class="tamLinkedin"
                    :src="item.linkedin"
                    alt="Logo linkedin"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </aside>
      </aside>

      <!-- dialogo 2 -->
      <section>
        <v-dialog v-model="dialog1" width="800">
          <template v-slot:activator="{ on, attrs }">
            <div class="verMasFotos col-lg-11 end">
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

            <aside class="center">
              <v-col cols="10">
                <v-row class="center">
                  <v-col
                    cols="3"
                    class="space divcol"
                    v-for="(item, index) in $t('equipoDialog')"
                    v-bind:key="index"
                  >
                    <section>
                      <v-tooltip right color="transparent">
                        <template v-slot:activator="{ on, attrs }">
                          <div>
                            <img
                              v-bind="attrs"
                              v-on="on"
                              class="tamañoFoto"
                              :src="item.imgEquipo"
                              alt="Foto de equipo"
                              @mouseover="mouseOver(item)"
                            />
                          </div>
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
                    </section>

                    <div>
                      <span class="nameEquipo" v-bind:key="index">{{
                        item.name
                      }}</span>
                    </div>
                    <div>
                      <img
                        class="tamLinkedin"
                        :src="item.linkedin"
                        alt="Logo linkedin"
                      />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </aside>
          </div>
        </v-dialog>
      </section>
    </section>

    <aside class="pb-md-12" style="margin-bottom: 8%">
      <v-row class="center">
        <v-col class="dudas divrow" cols="8">
          <v-col class="center pl-6" cols="6" sm="6" md="7" lg="7">
            <span class="subtitles">{{ $t("dudas") }}</span>
          </v-col>

          <v-col class="center" cols="6" sm="6" md="5" lg="5">
            <span class="nameEquipo pr-3">DISCORD</span>
            <img src="../../assets/images/SM 1.png" alt="" />
            <span class="nameEquipo pl-6 pr-3">TELEGRAM</span>
            <img src="../../assets/images/SM 2.png" alt="" />
          </v-col>
        </v-col>
      </v-row>
    </aside>
  </section>
</template>

<script>
import Alert from "@/pages/Alert/Alert.vue";
export default {
  name: "Home",
  i18n: require("./i18n"),
  components: {
    // Alert,
  },
  mounted() {},
  data() {
    return {
      dialog: false,
      dialog1: false,
      equipoTool: [],     

      herramientas: [
        {
          value: 1,
          img: require("@/assets/images/LOGOS HERRAMIENTAS 2.png"),
        },
        {
          value: 2,
          img: require("@/assets/images/LOGOS HERRAMIENTAS 3.png"),
        },
        {
          value: 3,
          img: require("@/assets/images/2048px-Python-logo-notext 1.png"),
        },
        {
          value: 4,
          img: require("@/assets/images/nodejs-logo 1.png"),
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
    },
    funProyectos() {
      this.$router.push("/proyectos");
    },
  },
};
</script>

<style src="./Home.scss" lang="scss"></style>
