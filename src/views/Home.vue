<template>
  <v-row
    no-gutters
    justify="center"
    class="home"
  >
    <v-col
      lg="4"
      md="12"
      class="column-cards"
    >
      <v-card
        class="pa-0"
        elevation="0"
        tile
      >
        <v-card-title class="card-title">
          Assista a filmes. Fácil e simples!
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
          As melhores funcionalidades para você assistir filmes sem estresse.
        </v-card-subtitle>
        <v-card-text>
          <v-btn
            class="ma-2 create-account buttons"
            color="#ff0000"
            @click="goTo('register')"
          >
            Criar conta
          </v-btn>
          <v-btn
            class="ma-2 buttons"
            outlined
            color="#ff0000"
            @click="goTo('login')"
          >
            Já possuo uma conta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      lg="4"
      md="12"
      class="pl-10"
    >
      <v-card
        class="pa-0"
        elevation="0"
        tile
      >
        <v-img
          src="@/assets/images/movie-image.png"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        goTo(route) {
            this.$router.push({ name: route })
        }
    }
}
</script>

<style lang="scss">
.home {
  .column-cards {
    height: 100%;
    .card-title {
      font-family: 'Ubuntu-Bold';
      font-size: 40px;
      margin-bottom: 10px;
      line-height: 40px;
      word-break: break-word;
    }
    .card-subtitle {
      font-family: 'Ubuntu-Regular';
      font-size: 16px;
      margin-bottom: 80px;
      word-break: break-word;
    }
  
    .buttons {
      text-transform: none;
      font-family: 'Ubuntu-Bold';
      height: 48px;
    }
    .create-account {
      color: #000;
    }
  }
}
</style>