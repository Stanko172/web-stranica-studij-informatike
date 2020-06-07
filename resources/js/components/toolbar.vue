<template>
  <div>
    <v-toolbar dark prominent src="/toolbar_bg.png" class="d-none d-sm-block d-print-block">
      <span>
        <v-app-bar-nav-icon @click="sidebar = !sidebar" x-large></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="display-2 font-weight-medium">INFORMATIKA</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs>
          <v-tab to="/">Naslovnica</v-tab>
          <v-tab to="/obavijesti">Obavijesti</v-tab>
          <v-tab to="/vremenska-crta">Vremenska crta</v-tab>
          <v-tab to="/kontakt">Kontakt</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-btn text icon :href="link_fb" target="_blank">
        <v-icon>fab fa-facebook-square</v-icon>
      </v-btn>

      <v-btn icon :href="link_insta" target="_blank">
        <v-icon>fab fa-instagram</v-icon>
      </v-btn>

      <v-btn icon :href="link_yt" target="_blank">
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="sidebar" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>fa-graduation-cap</v-icon>
            {{ menu_title}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <hr />

      <v-list shaped nav dense>
        <v-list-item-group color="blue darken-4">
          <v-list-item v-for="item in menu" :key="item.title">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- razmak -->

    <v-toolbar dark prominent src="/toolbar_bg.png" class="hidden-sm-and-up">
      <span>
        <v-app-bar-nav-icon @click="sidebar = !sidebar" x-large></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="font-weight-medium" style="font-size: 25px">INFORMATIKA</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs>
          <v-tab to="/">Naslovnica</v-tab>
          <v-tab to="/obavijesti">Obavijesti</v-tab>
          <v-tab to="/vremenska-crta">Vremenska crta</v-tab>
          <v-tab to="/kontakt">Kontakt</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-btn text icon :href="link_fb" target="_blank">
        <v-icon>fab fa-facebook-square</v-icon>
      </v-btn>

      <v-btn icon :href="link_insta" target="_blank">
        <v-icon>fab fa-instagram</v-icon>
      </v-btn>

      <v-btn icon :href="link_yt" target="_blank">
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    sidebar: false,
    menu_title: "Izbornik",
    link_yt: "https://www.youtube.com/channel/UCAxy1ltx_vV3sCPjmvVaWHQ",
    link_fb: "https://www.facebook.com/fpmoz.ba/",
    link_insta: "https://www.instagram.com/fpmoz.mostar/?hl=hr",
    menu: [
      { title: "NOVOSTI", path: "/", icon: "fas fa-angle-right" },
      { title: "ISS", path: "/", icon: "fas fa-angle-right" },
      { title: "SUMARUM", path: "/", icon: "fas fa-angle-right" },
      { title: "Odaberi znanje!", path: "/", icon: "fas fa-angle-right" },
      { title: "Udruga '<Switch>'", path: "/", icon: "fas fa-angle-right" },
      { title: "Akademski kalendar", path: "/", icon: "fas fa-angle-right" },
      { title: "Troskovi studija", path: "/", icon: "fas fa-angle-right" },
      { title: "O studiju", path: "/", icon: "fas fa-angle-right" }
    ]
  })
};
</script>

<style>
</style>