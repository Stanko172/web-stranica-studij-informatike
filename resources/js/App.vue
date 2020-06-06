<template>
  <v-app>
    <!-- Komponenta za toolbar -->
    <toolbar />
    <!--pozadina sadrzaja <Landing /> -->
    <v-container style="margin-top: 52px">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>