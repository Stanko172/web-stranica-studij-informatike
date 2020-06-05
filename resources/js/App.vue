<template>
  <v-app>
    <!-- Komponenta za toolbar -->
    <toolbar />
    <!--pozadina sadrzaja <Landing /> -->

    <router-view></router-view>

    <!--Ovaj kod ispod je samo za demonstraciju, prilikom izrade početne stranice izbrisati (izmedu v-app)-->

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
</template>

<script>
import Navbar from "./components/Navbar";
import toolbar from "./components/toolbar";
import Landing from "./components/Landing";
export default {
  components: {
    Navbar, 
    toolbar,
    Landing
  }
};
</script>

<style>
</style>