<template>
  <v-app>
    <TheNavbar />
    <!-- <Login /> -->
    <v-main id="scrolling-techniques-7">
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TheNavbar from './components/layout/TheNavbar';
// import Login from './views/Login';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    TheNavbar,
    // Login
  },

  data: () => ({
    //
  }),
};
</script>
