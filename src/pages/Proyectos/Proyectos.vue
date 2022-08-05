<template>
  <section class="margenTop">
    <v-row>
        <v-col class="center">          
           <span class="subtitles">{{ $t("proyectosExi") }}</span>          
        </v-col>
    </v-row>
    
    <v-row>
      <v-col class="spacea offset-1 pt-8" cols="3">          
        <v-btn class="botones" small>{{ $t("all") }}</v-btn>
        <v-btn class="botones" small>{{ $t("concluidos") }}</v-btn>
        <v-btn class="botones" small>{{ $t("enProceso") }}</v-btn>         
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        class="container mb-10 mt-8" 
        cols="7"
        v-for="(item, index) in $t('proyectos')"
        v-bind:key="index"
      >
        <v-row>
          <v-col class="moverLogo center col-lg-3">
            <img :src="item.logo" alt="Logo Generico">
          </v-col>

          <div class="divrow offset-4" style="padding-top: 30px;">
            <v-col class="divNaranja mr-3  center" lg="1">
              <img src="../../assets/images/twitter.png" alt="logo twitter">
            </v-col>
            
            <v-col class="divNaranja center" lg="1">
              <img src="../../assets/images/discord.png" alt="logo discord">
            </v-col> 
          </div>

          <v-col lg="3">
            <img class="image3" :src="item.img1" alt="imagen 3">
          </v-col> 
        </v-row>

        <v-row class="mt-0">
          <v-col lg="7" class="pl-7 pb-0 moverTexto">
            <span class="subtitles">{{item.title}}</span>
            <p class="parrafoProyectos pt-2 pb-4">{{item.parrafo}}</p>
            <span class="herramientasUsadas">{{ $t("herramientasUsadas") }}  
            </span>
            <div class="moverLogos">
              <img class="logos mr-2" :src="item.herUsadas1" alt="logos">
              <img class="logos" :src="item.herUsadas2" alt="logos">
            </div>
            <div class="linkDeAcceso col-lg-12 end">
              <a href=""><span>{{ $t("linkAcceso") }} <v-icon>mdi-arrow-right</v-icon></span></a>
            </div>
          </v-col>
        </v-row>  
      </v-col>      
    </v-row> 

    <aside class="mt-16" style="margin-bottom: 3%">
      <v-row class="center">
        <v-col class="dudas divrow" cols="8">
          <v-col class="pl-6">
            <span class="subtitles">{{ $t("dudas") }}</span>
          </v-col>

          <v-col class="center" cols="5">
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
 export default {
  name: "Proyectos",
  i18n: require("./i18n"),
  components: {    
  
  },
  mounted() {},
  data() {
    return {      
    
    };
  },
  methods: {
    
  },
};
</script>

<style src="./Proyectos.scss" lang="scss"></style>