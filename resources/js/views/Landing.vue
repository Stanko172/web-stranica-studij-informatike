<template>
  <div>
    <Heading />

    <v-container>
      <v-divider style="margin: 50px 0 50px 0"></v-divider>

      <v-hover v-slot:default="{ hover }" close-delay="80">
        <v-card shaped :elevation="hover ? 8 : 2">
          <v-row align="center">
            <v-col cols="md-7 pl-8">
              <v-img src="/studij_inf.jpg"></v-img>
            </v-col>
            <v-col cols="md-5">
              <v-card-text>
                <p class="display-1 primary--text font-weight-medium">Studij Informatike</p>
                <div class="justify-text">
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
                <v-dialog scrollable>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" style="margin-right: 1em" rounded class="mb-5">
                      <v-icon left class="white--text">mdi-play</v-icon>
                      <span class="button-text">Što kažu studenti</span>
                    </v-btn>
                  </template>
                  <v-card height="78vh">
                    <iframe
                      height="100%"
                      src="https://www.youtube.com/embed/yQNdD3f0tSc"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-card>
                </v-dialog>

                <v-dialog scrollable>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" style="margin-right: 1em" rounded class="mb-5">
                      <v-icon left class="white--text">mdi-play</v-icon>
                      <span class="button-text">Što kažu profesori</span>
                    </v-btn>
                  </template>
                  <v-card height="78vh">
                    <iframe
                      height="100%"
                      src="https://www.youtube.com/embed/GWFE0PqTQic"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>

      <v-divider style="margin: 50px 0 50px 0"></v-divider>

      <v-hover v-slot:default="{ hover }" close-delay="80">
        <v-card shaped :elevation="hover ? 8 : 2" class="mb-12">
          <v-row align="center">
            <v-col cols="md-5">
              <v-card-text>
                <p class="display-1 primary--text font-weight-medium">Studij Matematike-Informatike</p>
                <div class="justify-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam, corporis rerum nam consectetur tenetur aliquid eaque, qui minus atque minima commodi provident? Voluptatibus earum, quas dicta quam quisquam quidem?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos harum placeat quis, nihil enim totam? Vero deleniti sequi officia nostrum, aut aliquam quia assumenda, nesciunt repellat sint fugit. Laudantium?
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="md-7">
              <v-img src="/matematika.png"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>

      <v-divider style="margin: 50px 0 50px 0"></v-divider>

      <!--Switch info section-->

      <SwitchInfo />
    
    </v-container>

      <!--Switch parallax section-->

      <SwitchParallax />

    <v-container>

      <v-divider style="margin: 50px 0 50px 0"></v-divider>

      <v-hover v-slot:default="{ hover }" close-delay="80">
        <v-card shaped :elevation="hover ? 8 : 2">
          <v-row align="center">
            <v-col cols="md-5">
              <v-card-text>
                <p class="display-1 primary--text font-weight-medium">Upis na Studij informatike</p>
                <div class="justify-text">
                  Cilj preddiplomskog Studija informatike je razvoj stručnih računalnih znanstvenika i programera.
                  Od akademske 2019./2020. godine studij će se izvoditi s naglaskom na praktično rješavanje problema.
                  Nastavni plan i program se bazira na praktičnom riješavanju problema uz pomoć programskih jezika kao
                  što je Python, Java i C/C++ s naglaskom na otvorene tehnologije. Upoznajte se s programskim okvirima
                  za razvoj igrica kao što su PyGame i Phaser.io, naučite kako napraviti web stranicu te istu postaviti
                  na poslužitelj. Naučite se programskim jezicima za upravljenje podacima kao što je SQL.
                  Kako razmišljati kao računalni znanstvenik i postati programer.
                </div>
              </v-card-text>

              <div class="text-center mb-6 mt-4">
                <v-btn color="primary" rounded :href="mathFileUrl" target="_blank">
                  <v-icon left class="white--text">mdi-file-document</v-icon>
                  <span class="button-text white--text">Pregledaj letak studija</span>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="md-7 pr-8">
              <v-img src="/informatika1.png"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </v-container>

    <!--Sekcija o procelniku studija informatike-->

    <HeadInfo />

    <!--Footer-->

    <Footer />
  </div>
</template>

<script>
import SwitchInfo from "../components/Switch-info";
import SwitchParallax from "../components/Switch-parallax";
import Heading from "../components/Heading.vue";
import HeadInfo from "../components/Head-info.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    SwitchInfo,
    SwitchParallax,
    Heading,
    HeadInfo,
    Footer
  },
  data: () => ({
    mathFileUrl:
      "https://drive.google.com/file/d/0B8wtFjOJCVHtNFB4SFRENnZnMWZuZzQ1dlUzaVFtN2pSYm1J/view"
  })
};
</script>

<style>
.justify-text {
  text-align: justify;
}

#app .row.align-center div.col.col-md-7 .v-responsive.v-image {
  margin-left: 3px;
}

#app .area-around {
  padding: 7em 0 7em 0;
}
</style>