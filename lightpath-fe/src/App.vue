<template>
  <v-app>
    <!-- Toolbar -->
    <v-app-bar elevation="2" color="primary" app dense hide-on-scroll>
      <v-spacer/>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <v-icon color="white" class="mr-2" large>mdi-gps_fixed</v-icon> -->
        <span class="white--text font-weight-bold">LightPath</span>
      </v-toolbar-title>
      <v-spacer/>
    </v-app-bar>

    <!-- Content -->
    <v-content>
      <home-page/>
    </v-content>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
  data: () => ({
    //
  }),
};
</script>
