<template>
  <v-app class="pa-6">      
    <v-main class="content fondo">    
      <Header />  
      <router-view ref="data" class="marginWithFooter principal" />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./Layout.scss";

  // async function borrarReciente() {
  //   await localStorage.removeItem('reciente');
  // }
export default {
  name: "Layout",
  components: { Footer, Header },
  // mounted() {
  //   borrarReciente();
  // }
  // created() {
  //   this.element = document.getElementById("theme");
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     this.CambiarTheme(theme);
  //   }
  // },
  // data() {
  //   return {
  //     element: null,
  //     iconoA: true,
  //     iconoB: false,
  //   };
  // },
  // methods: {
  //   CambiarTheme(theme) {
  //     this.$store.dispatch("CambiarTheme", { theme, element: this.element });
  //     if (this.iconoA === true) {
  //       this.iconoA = false;
  //       this.iconoB = true;
  //       this.$refs.data.$refs.chart.cambiarDark();
  //     } else {
  //       this.iconoA = true;
  //       this.iconoB = false;
  //       this.$refs.data.$refs.chart.cambiarLight();
  //     }
  //   },
  // },
};
</script>

<style src="./Layout.scss" lang="scss" />
