<template>
  <div>
      <br>
      <v-container class="white">
        <v-row dense>
          <v-col dense cols="md-7">
            <span class="primary--text"><h1>Studij inforamtike</h1></span>
            <br>
            <p>
              U novije vrijeme razvoj informatičkih tehnologija sve više 
              utječe na društvo u cjelini, npr. ekonomiju, medicinu i druge znanosti. 
              U studiju informatike se stručni sadržaji realiziraju kroz obvezne i izborne 
              kolegije. Dopunjuju se metodičkim i pedagoško-psihološkim sadržajima. 
              Cilj ovog studija je osposobljavanje studenata za uspješno i društveno 
              odgovorno prenošenje informatičkog znanja na mlade naraštaje, 
              uz samostalno korištenje najnovije računalne tehnologije u pripadajućim i 
              raznolikim informatičkim primjenama. Studij završava izradom diplomskog rada 
              koji je samostalna obrada nekog znanstvenog ili stručnog problema.
            </p>
            <v-btn rounded color="primary" dark href="https://www.youtube.com/watch?v=Bvbmw7ckJS0">
              <v-icon size="10" class="ma-2">fas fa-play</v-icon>
              Promo video
            </v-btn>
          </v-col>
          <v-col dense cols="md-5" style="padding: 50px 0px 0px 0px">
            <img src="/studij_inf.jpg" alt="" height="200px" width="320px">
          </v-col >
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
.bg{
  background-image: url("/bg1.png");
  background-size: cover;
  background-position: center center;
  height: 600px;
  position: relative;
}

</style>