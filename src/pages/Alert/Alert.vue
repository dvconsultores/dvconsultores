<template>
  <section>
    <v-alert
      v-for="(item, index) in $t('dataAlert')"
      v-bind:key="index"
      :value="item.open"
      elevation="3"
      transition="scale-transition"
      id="alerta"
    >
      <aside id="contenedorCloseAlert">
        <v-btn class="iconoCloseAlert" icon @click="alertClose(item)">
          <v-icon id="colorCloseAlert" size="1.5rem">mdi-close</v-icon>
        </v-btn>
      </aside>

      <v-col cols="11" style="padding: 0 !important">
        <div class="contenedorAlertPosition">
          <v-icon :style="item.color" size="2.5rem"
            >{{ item.icon }}</v-icon
          >
          <span id="titleAlert">{{ item.title }}</span>
        </div>

        <p class="textAlertUp">{{ item.desc }}</p>

        <div class="contenedorAlertPosition">
          <a :href="item.link" class="textAlertDown" 
            >{{$t('text')}}
            <sup style="top: -3px !important">
              <v-icon x-small class="flechitaAlert"> mdi-arrow-top-right </v-icon>
            </sup>
          </a>
        </div>
      </v-col>
    </v-alert>
  </section>
</template>

<script>
/*

<Alert ref="alerta"></Alert>


import Alert from "@/pages/Alert/Alert.vue";


components: {
  Alert
},


this.$refs.alerta.AlertSuccess();

*/
export default {
  name: "Alert",
  i18n: require("./i18n"),
  data() {
    return {
      // dataAlert: [
      //   {
      //     open: false,
      //     color: 'color: #00ffbb !important',
      //     icon: 'mdi-check-circle',
      //     title: 'Approved',
      //     desc: 'Transaction Approved',
      //     link: '#'
      //   },
      //   {
      //     open: false,
      //     color: 'color: #f6943c !important',
      //     icon: 'mdi-check-circle',
      //     title: 'Pending',
      //     desc: 'Transaction Pending',
      //     link: '#'
      //   },
      //   {
      //     open: false,
      //     color: 'color: #ea1717 !important',
      //     icon: 'mdi-close-circle',
      //     title: 'Cancelled',
      //     desc: 'Transaction Pending',
      //     link: '#'
      //   }
      // ],
    };
  },
  methods: {
    alertClose(item){
      if (item === this.$t('dataAlert')[0]) {
        this.$t('dataAlert')[0].open = false;
      }
      if (item === this.$t('dataAlert')[1]) {
        this.$t('dataAlert')[1].open = false;
      }
      if (item === this.$t('dataAlert')[2]) {
        this.$t('dataAlert')[2].open = false;
      }
    },
    AlertSuccess() {
      this.$t('dataAlert')[0].open = true;
    },
    AlertPending() {
      this.$t('dataAlert')[1].open = true;
    },
    AlertCancelled() {
      this.$t('dataAlert')[2].open = true;
    }

    /* LLAMADO DE METODOS

     AlertaSuccess() {
       this.$refs.alerta.AlertSuccess();
     },
     AlertaPending() {
       this.$refs.alerta.AlertPending();
     },
     AlertaCanceled() {
       this.$refs.alerta.AlertCanclled();
     }
     
    */
  }
};
</script>

<style src="./Alert.scss" lang="scss"></style>
