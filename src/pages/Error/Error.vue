<template>
  <v-app style="background-color: #20232C">
    <v-container fluid class="error-page">/exswap/
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="12" id="containerNotFound">
          <span id="text404" class="text404">404</span>
          <v-col style="display: flex; justify-content: center; padding-top: 0">
            <span id="textNotFound" class="textNotFound">{{$t('titleError')}}</span>
          </v-col>
          <v-col style="display: flex; justify-content: center">
            <v-btn href="#/Home" id="buttonNotFound">{{$t('b1')}}</v-btn>
          </v-col>
        </v-col>
      </v-row>
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Error',
  i18n: require("./i18n"),
};
</script>

<style src="./Error.scss" lang="scss"></style>

<style scoped>
  @media (min-width: 2000px) {
    .text404 {
      font-size: 35rem !important;
    }
    .textNotFound {
      font-size: 5rem !important;
    }
    #buttonNotFound {
      font-size: 3rem !important;
      width: auto !important;
      height: 6rem;
    }
  }
  @media (max-width: 900px) {
    .text404 {
      font-size: 25rem !important;
    }
    .textNotFound {
      font-size: 3.8rem !important;
    }
    #buttonNotFound {
      font-size: 1.8rem !important;
      width: 20rem;
      height: 4.75rem;
    }
  }
  @media (max-width: 880px) {
    .error-page {
      background-image: url("../../assets/backgroundNotFoundMobile.png") !important;
      background-size: cover !important;
    }
  }
  @media (max-width: 780px) and (min-width: 740px) {
    .text404 {
      font-size: 30rem !important;
    }
    .textNotFound {
      font-size: 4rem !important;
    }
    #buttonNotFound {
      font-size: 2rem !important;
      width: 20rem;
      height: 4.75rem;
    }
  }

  @media (max-width: 470px) {
    .text404 {
      font-size: 20.2066875rem !important;
    }
    .textNotFound {
      font-size: 3.58951875rem !important;
    }
    #buttonNotFound {
      font-size: 2rem !important;
    }
    @media (max-width: 400px) {
      .text404 {
        font-size: 16.8066875rem !important;
      }
      .textNotFound {
        font-size: 3.08951875rem !important;
      }
    }
  }
</style>
