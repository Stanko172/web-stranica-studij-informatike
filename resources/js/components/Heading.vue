<template> 
  <div id="bg" style="padding-top: 100px;">
    <v-container class="landing-container">
      <p class="primary--text text-center welcome__text">Dobrodošli na studij Informatike</p>
      
      <v-row class="justify-center area-around">
        <v-dialog scrollable>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on"  rounded class="mb-5">
              <v-icon left class="white--text">mdi-play</v-icon>
              <span class="button-text">Promo Video</span>
            </v-btn>
          </template>
          <v-card height="78vh">
            <iframe
              height="100%"
              src="https://www.youtube.com/embed/Bvbmw7ckJS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-dialog>
        <v-dialog scrollable>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on" style="margin-left: 1em" rounded class="mb-10">
              <v-icon left class="white--text">mdi-play</v-icon>
              <span class="button-text">Eureka Video</span>
            </v-btn>
          </template>
          <v-card height="78vh">
            <iframe
              height="100%"
              src="https://www.youtube.com/embed/r6MPUWNKSvQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>

</template>

<script>
  data: () => ({
  });
</script>
<style>
.landing-container{
  animation: drop 2.5s ease;
}

#bg {
  background-image: url("/background-resized.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.welcome__text{
    font-size: 3.5em;
    font-weight: bold;
  }

.justify-text {
  text-align: justify;
}


#app .area-around {
  padding: 7em 0 7em 0;
}

@media only screen and (max-width: 600px) {
  .welcome__text{
    font-size: 2em;
  }
}

@keyframes drop{
  0% {
    opacity: 0;
    transform: translateY( -80px );
  }
  100%{
    opacity: 1;
    transform: translateY( 0 );
  }
}
</style>