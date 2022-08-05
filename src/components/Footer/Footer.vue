<template>
  <v-footer id="footerColor" class="px-0 d-none d-md-flex" absolute>
    <v-row no-gutters class="center pb-8 pt-5">
      <v-col id="contenedorFooter" class="center" cols="12">
        <span>Consultores C.A. | 2022</span>
        <!-- <v-col class="contenedorFooterLeft" cols="10" sm="4" md="4">
          <span class="footerText">
            {{$t('text')}}
          </span>
          <div class="contenedorIconosFooter">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              :href="icon.link"
              target="_blank"
              class="iconosFooter"
              style="background: linear-gradient(90.11deg, #D64059 -9.74%, #5E489D 111.08%)"
              icon
            >
              <v-icon id="colorIconosFooter" size="1.5rem">{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="contenedorFooterRight" cols="10" sm="4" md="4">
          <img
            id="logoFooter"
            :src="`${$store.state.baseURL}themes/${$store.state.theme}/logoEx.png`"
            alt="LogoExswap"
          >
        </v-col> -->
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  i18n: require("./i18n"),


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

