<template>
  <div class="app">
      <h1>Studij informatike</h1>
      
        <p>
            <router-link to="/first_route">First route</router-link>
            <router-link to="/second_route">Second route</router-link>
        </p>

      <router-view></router-view>

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
export default {

}
</script>

<style>

</style>