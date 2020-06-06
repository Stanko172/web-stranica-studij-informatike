<template>
  <v-app>
    <div class="">
    <!-- Komponenta za toolbar -->
    <toolbar />

     
    <v-container style="margin-top: 52px">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-container>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import toolbar from "./components/toolbar";
export default {
  components: {
    Navbar, 
    toolbar,
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
.bg{
  background-image: url("/bg1.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  height: auto;
}
</style>