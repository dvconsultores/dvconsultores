<template>
  <section>
    <v-dialog v-model="dialog" max-width="800" content-class="dialog-services">
      <v-sheet id="modalServices" color="transparent">
        <img @click="dialog = false" class="close" src="../../assets/images/Group 142.png" alt="boton de cerrar" />

        <v-card id="container-services">
          <v-card id="container-title">
            <span class="title-1">SERVICES</span>
            <span class="title-2">LOREM IPSUM</span>

            <img id="decoration" src="@/assets/images/decoration-services.png" alt="decoration">
          </v-card>

          <img class="refimage" src="../../assets/images/Mask group (4).png" alt="imagen" />
          <p class="textoDialog" style="margin: 0">
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
