<template>
  <v-app>
    <toolbar />
    <v-main>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',

  components: {
    Toolbar,
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
  },
  watch: {
    currentUser(currentUser) {
      if (currentUser) {
        this.$router.push('/dashboard');
      }
    },
  },
};
</script>
