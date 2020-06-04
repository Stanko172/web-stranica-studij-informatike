<template>
  <div class="app">
      <h1>Studij informatike</h1>
        <p>
            <router-link to="/first_route">First route</router-link>
            <router-link to="/second_route">Second route</router-link>
        </p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>