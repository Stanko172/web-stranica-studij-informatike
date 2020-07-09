<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary">
        <strong class="subheading footer-heading">SWITCH</strong>

        <v-spacer></v-spacer>

        
        <v-btn class="mx-2" icon color="white" :href="link_yt" target="_blank">
          <i class="fab fa-youtube"></i>
        </v-btn>

        <v-btn class="mx-2" icon color="white" :href="link_insta" target="_blank">
          <i class="fab fa-instagram"></i>
        </v-btn>

        <v-btn class="mx-2" icon color="white" :href="link_fb" target="_blank">
          <i class="fab fa-facebook"></i>
        </v-btn>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center primary">
        <strong class="footer-text">Copyright © {{ new Date().getFullYear() }} Informatičko-tehnička udruga SWITCH. Sva prava pridržana.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      link_yt: "https://www.youtube.com/channel/UCxaAFKZCOMqXRUtBsfbgaCQ",
      link_fb: "https://www.facebook.com/switchmostar/",
      link_insta: "https://www.instagram.com/udrugaswitch/?hl=hr",
    }),
  }
</script>

<style scoped>
  @media only screen and (max-width: 530px) {
  .footer-text{
    font-size: 12px;
  }

  .footer-heading{
    font-size: 16px;
  }
}
</style>

