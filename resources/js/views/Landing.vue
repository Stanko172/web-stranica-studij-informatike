<template>
  <div>
    <Heading />

    <v-container>

    <v-divider style="margin: 50px 0 50px 0"></v-divider>

    <v-hover v-slot:default="{ hover }" close-delay="80">
      <v-card shaped :elevation="hover ? 8 : 2">
        <v-row align="center">
          <v-col cols="md-7 pl-11">
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
          <v-col cols="md-7">
            <v-img src="/matematika.png"></v-img>
          </v-col>
          <v-col cols="md-5">
            <v-card-text>
              <p
                class="display-1 primary--text font-weight-medium"
              >Studij Matematike-Informatike</p>
              <div class="justify-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam, corporis rerum nam consectetur tenetur aliquid eaque, qui minus atque minima commodi provident? Voluptatibus earum, quas dicta quam quisquam quidem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos harum placeat quis, nihil enim totam? Vero deleniti sequi officia nostrum, aut aliquam quia assumenda, nesciunt repellat sint fugit. Laudantium?
              </div>
            </v-card-text>
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

    <!--Testni <br />, izbrisati kasnije-->
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

  </div>
</template>

<script>
import SwitchInfo from '../components/Switch-info'
import SwitchParallax from '../components/Switch-parallax'
import Heading from '../components/Heading.vue';

export default {
  components: {
    SwitchInfo,
    SwitchParallax,
    Heading,
  },
  data: () => ({
    mathFileUrl: 'https://drive.google.com/file/d/0B8wtFjOJCVHtNFB4SFRENnZnMWZuZzQ1dlUzaVFtN2pSYm1J/view',
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