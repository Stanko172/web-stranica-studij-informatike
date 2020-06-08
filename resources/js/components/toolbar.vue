<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="/toolbar_bg.png"
      class="d-none d-sm-block d-print-block"
      color="#667fcc"
    >
      <span>
        <v-app-bar-nav-icon @click="sidebar = !sidebar" x-large></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="display-2 font-weight-medium">Informatika</v-toolbar-title>

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
        <v-list-item-group value="true">
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-action>
              <v-icon>fas fa-angle-right</v-icon>
            </v-list-item-action>
              <v-list-item-title>ISS</v-list-item-title>
            </template>

            <v-list-item v-for="(item, i) in iss_menu" :key="i" :href="item.link" target="blank">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-for="(item, i) in menu" :key="i" :href="item.link" target="blank">
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

    <v-toolbar dark prominent src="/toolbar_bg.png" class="hidden-sm-and-up" color="#667fcc">
      <span>
        <v-app-bar-nav-icon @click="sidebar = !sidebar" x-large></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="font-weight-medium" style="font-size: 25px">Informatika</v-toolbar-title>

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
    iss_menu: [
      { title: "Studenti", link: "https://studomat.sum.ba/" }, 
      { title: "Profesori", link: "https://is.sum.ba/" }
      ],

    sidebar: false,
    menu_title: "Izbornik",
    link_yt: "https://www.youtube.com/channel/UCAxy1ltx_vV3sCPjmvVaWHQ",
    link_fb: "https://www.facebook.com/fpmoz.ba/",
    link_insta: "https://www.instagram.com/fpmoz.mostar/?hl=hr",
    menu: [
      { title: "SUMARUM", path: "/", icon: "fas fa-angle-right", link: "https://eucenje.sum.ba/moodle/" },
      { title: "Odaberi znanje!", path: "/", icon: "fas fa-angle-right", link: "https://upisi.fpmoz.sum.ba/" },
      { title: "Akademski kalendar", path: "/", icon: "fas fa-angle-right", link: "https://www.sum.ba/kalendar-nastave" },
      { title: "Troskovi studija", path: "/", icon: "fas fa-angle-right", link: "https://www.fpmoz.sum.ba/images/Trokovi-studija.pdf" },
    ]
  })
};
</script>

<style>
</style>