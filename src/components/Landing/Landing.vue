<template>
  <v-app class="landing pa-6">
    <div class="filtro1" />
    <div class="filtro2" />

    <v-main class="content">
      <!-- content -->
      <!-- <aside class="left">
        <h1>EXSWAP</h1>
        <h2>tHE DEFI HUB OF EVMOS</h2>
        <a href="#/swap" class="contbtn">
          <v-btn id="launchButton">LAUNCH APP</v-btn>
        </a>
        <div class="conticons eliminarMobile3">
          <v-btn
            v-for="icon in dataIcons"
            :key="icon.icon"
            :href="icon.link"
            target="_blank"
            class="icons"
            color="#FFFFFF"
            icon
          >
            <v-icon size="clamp(4.6em, 3vw, 5em)">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
      </aside> -->

      <!-- <aside class="right">
        <div class="conticonsMobile verMobile">
          <v-btn
            v-for="icon in dataIcons"
            :key="icon.icon"
            :href="icon.link"
            target="_blank"
            class="icons"
            color="#FFFFFF"
            icon
          >
            <v-icon size="clamp(4.6em, 3vw, 5em)">{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
        <img src="@/assets/femaleEX.png" alt="EXSWAP Image">
      </aside> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      dataIcons: [
        {icon: 'mdi-alpha-m-circle', link: 'https://medium.com/@exswap.xyz'},
        {icon: 'mdi-twitter', link: 'https://twitter.com'},
        {icon: 'discord', link: 'https://discord.com'},
        {icon: 'telegram', link: 'https://web.telegram.org'},
      ]
    }
  }
};
</script>

<style src="./Landing.scss" lang="scss" />
