<template>
  <section>
    <v-dialog v-model="dialog" max-width="800" content-class="dialog-services">
      <v-sheet id="modalServices" color="transparent">
        <img @click="dialog = false" class="close" src="../../assets/images/Group 142.png" alt="boton de cerrar" />

        <v-card id="container-services">
          <v-card id="container-title">
            <span class="title-1">{{$t('subtitleServicios')}}</span>
            <span class="title-2">{{$t('titleModal')}}</span>

            <img id="decoration" src="@/assets/images/decoration-services.png" alt="decoration">
          </v-card>

          <img class="refimage" src="../../assets/images/Mask group (4).png" alt="imagen" />
          <p class="textoDialog" style="margin: 0">
            {{$t('parrafoModal')}}
          </p>
        </v-card>
      </v-sheet>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "Modales",
  i18n: require("./i18n"),
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
  },
};
</script>

<style src="./Home.scss" lang="scss"></style>
