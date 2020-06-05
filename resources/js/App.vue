<template>
  <div class="app">
      <h1>Studij informatike</h1>
      <!--Komponenta za navigaciju-->
        <Navbar />

      <router-view></router-view>

      <!--Ovaj kod ispod je samo za demonstraciju, prilikom izrade početne stranice izbrisati (izmedu v-app)-->
      <v-app>
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn depressed>Normal</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="primary">Primary</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed color="error">Error</v-btn>
          </div>
          <div class="my-2">
            <v-btn depressed disabled>Disabled</v-btn>
          </div>
        </v-col>
      </v-app>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }

}
</script>

<style>

</style>