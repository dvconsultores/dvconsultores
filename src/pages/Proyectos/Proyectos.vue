<template>
  <section id="moreProjects" class="margenTop">
    <v-row>
        <v-col class="center">          
           <span class="subtitles">{{ $t("proyectosExi") }}</span>          
        </v-col>
    </v-row>

    <aside id="container-controls" class="space">
      <!-- <v-btn v-for="(item,i) in dataControls" :key="i" class="botones" small  @click="dataControls.forEach(e=>{e.active=false});item.active=true"
          :class="{active:item.active}">
        {{ $t(item.name) }}
      </v-btn> -->
      <v-btn class="botones" small @click="verEstatus('all')">{{$t('all')}}</v-btn>       
      <v-btn class="botones" small @click="verEstatus('culminado')">{{$t('concluidos')}}</v-btn>
      <v-btn class="botones" small @click="verEstatus('en proceso')">{{$t('enProceso')}}</v-btn>
    </aside>

    <section class="wrapper divcol">
      <v-sheet v-for="(item, index) in proyectosEspejo" v-bind:key="index" color="transparent">
        <img class="logo" :src="item.logo" alt="Logo Generico">
        
        <v-card>
          <aside id="content" class="divcol col-lg-8">
            <div id="social" class="center" style="gap:1em">
              <a class="center" :href="item.urlRedSocial1">
                <img class="center" :src="item.redSocial1" alt="logo redes sociales">
              </a>               
              <!-- <a class="center" :href="item.urlRedSocial2">
                <img :src="item.redSocial2" alt="logo redes sociales">                
              </a>   -->
              <a class="center" :href="item.urlRedSocial2">
                <v-icon dark>{{item.redSocial2}}</v-icon>
              </a>            
            </div>

            <div class="divcol mt-6" style="gap:.2em">
              <h3>{{item.title}}</h3>
              <p class="parrafoProyectos pt-2 pb-4">{{item.parrafo}}</p>
            </div>
            
            <div id="tools" class="space" style="gap:1em">
              <span class="herramientasUsadas">{{ $t("herramientasUsadas") }}</span>

              <div class="center" style="gap:1em">
                <img class="logos mr-2" :src="item.herUsadas1" alt="logos">
                <img class="logos" :src="item.herUsadas2" alt="logos">
              </div>
            </div>

            <div class="linkDeAcceso end">
              <a :href="item.to"><span>{{ $t("linkAcceso") }} <v-icon>mdi-arrow-right</v-icon></span></a>
            </div>
          </aside>
          
          <img class="refimage" :src="item.img1" alt="imagen 3">
        </v-card>
      </v-sheet>
    </section>
  </section>
</template>

<script>
 export default {
  name: "Proyectos",
  i18n: require("./i18n"),
  data() {    
    return {
      proyectosEspejo: [],
      dataControls: [
        { name: "all", active: true },
        { name: "concluidos", active: false },
        { name: "enProceso", active: false },
      ]
    };
  },
  mounted() {
    this.proyectosEspejo= this.$t('proyectos');
  },  
  methods: {   
  verEstatus(estatus) {
    this.proyectosEspejo = []
    this.$t('proyectos').forEach(item => {
        if(item.status === estatus) {
          this.proyectosEspejo.push(item)
        } else if(estatus === 'all') {
          this.proyectosEspejo = this.$t('proyectos')
        }
    })
   }, 
  },  
};
  

</script>

<style src="./Proyectos.scss" lang="scss"></style>