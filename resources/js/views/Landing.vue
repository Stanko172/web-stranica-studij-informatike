<template>
  <div>
    <br />
      <v-row dense>
        <v-col dense cols="md-7">
          <span class="primary--text">
            <h1>Studij Informatike</h1>
          </span>
          <br />
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
            <v-icon size="10" class="ma-2">fas fa-play</v-icon>Promo video
          </v-btn>
        </v-col>
        <v-col dense cols="md-5" style="padding: 50px 0px 0px 0px">
          <img src="/studij_inf.jpg" alt height="200px" width="320px" />
        </v-col>
      </v-row>

    <v-hover v-slot:default="{ hover }" close-delay="80">
      <v-card shaped :elevation="hover ? 8 : 2">
        <v-row align="center">
          <v-col cols="md-7">
            <v-img src="/matematika.png"></v-img>
          </v-col>
          <v-col cols="md-5">
            <v-card-text>
              <p class="display-1 indigo--text text--darken-3 font-weight-medium">Studij Informatike</p>
              <div class="justify-text pr-8">
                U studiju informatike se stručni sadržaji realiziraju kroz obvezne i izborne kolegije.
                Dopunjuju se metodičkim i pedagoško-psihološkim sadržajima. Cilj ovog studija je
                osposobljavanje studenata za uspješno i društveno odgovorno prenošenje informatičkog znanja
                na mlade naraštaje, uz samostalno korištenje najnovije računalne tehnologije u pripadajućim i
                raznolikim informatičkim primjenama. Studij završava izradom diplomskog rada koji je
                samostalna obrada nekog znanstvenog ili stručnog problema.
                <br />E-MAIL: informatika@fpmoz.sum.ba
              </div>
            </v-card-text>

            <div class="text-center mb-6 mt-4">
              <a :href="mathFileUrl" target="_blank">
                <v-btn color="primary" rounded>
                  <v-icon left class="white--text">mdi-file-document</v-icon>
                  <span class="button-text white--text">Pregledaj letak studija</span>
                </v-btn>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>

    <v-divider style="margin: 50px 0 50px 0"></v-divider>

    <v-hover v-slot:default="{ hover }" close-delay="80">
      <v-card shaped :elevation="hover ? 8 : 2" class="mb-12">
        <v-row align="center">
          <v-col cols="md-2"></v-col>
          <v-col cols="md-3">
            <v-img src="/matematika-informatika.png"></v-img>
          </v-col>
          <v-col cols="md-5">
            <v-card-text>
              <p
                class="display-1 indigo--text text--darken-3 font-weight-medium"
              >Studij Matematike-Informatike</p>
              <div class="justify-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam, corporis rerum nam consectetur tenetur aliquid eaque, qui minus atque minima commodi provident? Voluptatibus earum, quas dicta quam quisquam quidem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos harum placeat quis, nihil enim totam? Vero deleniti sequi officia nostrum, aut aliquam quia assumenda, nesciunt repellat sint fugit. Laudantium?
              </div>
            </v-card-text>

            <div class="text-center mb-6 mt-4" justify="center" align="end">
              <a
                href="https://drive.google.com/file/d/0B8wtFjOJCVHtNFB4SFRENnZnMWZuZzQ1dlUzaVFtN2pSYm1J/view"
                target="_blank"
              ></a>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>

    <!--Switch info section-->

    <SwitchInfo />
  </div>
</template>

<script>
import SwitchInfo from '../components/Switch-info'
export default {
  components: {
    SwitchInfo
  },
  data: () => ({})
};
</script>

<style>
.bg {
  background-image: url("/bg1.png");
  background-size: cover;
  background-position: center center;
  height: 600px;
  position: relative;
}
</style>