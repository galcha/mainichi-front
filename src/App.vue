<template>
  <v-app light id="app">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    font-family: "Mplus 1p", "Raleway";
  }

  .application {
    background: linear-gradient(141deg, #ED4264, #FFEDBC) !important;
  }
</style>
