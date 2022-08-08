<template>
  <v-footer id="footerColor" absolute>
    <aside id="container-dudas" class="dudas center">
      <span class="subtitles">{{ $t("dudas") }}</span>

      <div class="center">
        <div class="center">
          <span class="nameEquipo pr-3">DISCORD</span>
          <img src="../../assets/images/SM 1.png" alt="" />
        </div>
        <div class="center">
          <span class="nameEquipo pl-6 pr-3">TELEGRAM</span>
          <img src="../../assets/images/SM 2.png" alt="" />
        </div>
      </div>
    </aside>

    <v-row no-gutters class="center pb-8 pt-7">
      <v-col id="contenedorFooter" class="center" cols="12">
        <span>Consultores C.A. | 2022</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  i18n: require("./i18n.js"),


  data: () => ({
    icons: [
      {icon: 'mdi-alpha-m-circle', link: 'https://medium.com/@exswap.xyz'},
      {icon: 'mdi-twitter', link: 'https://twitter.com'},
      {icon: 'discord', link: 'https://discord.com'},
      {icon: 'telegram', link: 'https://web.telegram.org'},
    ]
  }),
}
</script>

<style src="./Footer.scss" lang="scss"/>

