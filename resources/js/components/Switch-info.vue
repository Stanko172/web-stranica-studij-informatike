<template>
  <div class="switch__card">
    <v-container class="my-5 test">
      <v-layout row wrap>
        <v-flex xs12 md6 class="test">
          <v-card class="mx-auto" max-width="430px">
            <v-img class="white--text align-end" height="206px" src="/logo_switch.jpg"></v-img>

            <v-card-subtitle class="pb-3">Udruga Switch</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Informatičko - tehnička udruga Fakulteta prirodoslovno - matematičkih i odgojnih znanosti Sveučilišta u Mostaru</div>
            </v-card-text>

            <v-row align="center" justify="start" class="mx-5">
              <v-col>
                <p class="card-switch-text">
                  <i class="far fa-check-circle"></i> programiranje
                </p>
              </v-col>

              <v-col>
                <p class="card-switch-text">
                  <i class="far fa-check-circle"></i> tehnička podrška
                </p>
              </v-col>
            </v-row>
          </v-card>
          <!--Drugi dio prve kolone-->
          <div class="text-center switch-info-icons">
            <v-btn class="mx-2" fab dark color="indigo" :href="link_yt" target="_blank">
              <i class="fab fa-youtube"></i>
            </v-btn>

            <v-btn class="mx-2" fab dark color="indigo" :href="link_insta" target="_blank">
              <i class="fab fa-instagram"></i>
            </v-btn>

            <v-btn class="mx-2" fab dark color="indigo" :href="link_fb" target="_blank">
              <i class="fab fa-facebook"></i>
            </v-btn>
          </div>
        </v-flex>

        <v-flex xs12 md6>
          <div
            class="mx-5 text-justify mb-5"
          >Switch je udruga studenata koji nastoje poboljšati znanje i vještine studenata na području informatike i tehnike. Studentima se pruža prilika da se uključe u zajedničko učenje, međusobno razmjenjuju materijale i sudjeluju u događajima koje udruga organizira. U nastojanju povezivanja studenata Sveučilišta udruga pokušava omogućiti otvorenu razmjenu ideja, iskustava znanja. Cilj udruge je promicati nove tehnologije i cjeloživotno učenje kroz različite radionice i projekte. Želimo podijeliti znanje i entuzijazam koji imamo velikom broju ljudi, motivirati zainteresirane studente da samostalno nastave istraživati i učiti. Udruga organizira brojne događaje od kojih je najpoznatiji dan matematike informatike. Studenti matematike, informatike i tehnike u suranji sa profesorima i asistenima organiziraju i smišljaju sadržaj koji se predstavlja učenicima srednjih škola kako bi se probudio interes prema studijima i mogućnostima. Učenicima su predstavljeni roboti, uređaji i tehnologije koji su dostupni na fakultetu I koji podižu razinu i kvalitetu obrazovanja kroz konkretnu primjenu. Udruga Switch organizira besplatne cikluse predavanja o osnovama programiranja, razvoju za web, robotiku, dizajn, ali i različita natjecanja i projekte. Također, udruga Switch se posobno ponosi svojim članovima Tehničke podrške udruge Switch koja samostalno održava i servisira računalne učionice FPMOZ-a. Članovi udruge se trude posjećivati šo više događaja vezanih za IT nauke, na području Mostara ali i šire. Kroz članstvo u udruzi studenti grade vještine komunikacije, prezentiranja, osjećaj odgovornosti i obzirnosti jedni prema drugima. Biti Switcher podrazumijeva snažnu volju i sposobnost učenja, rad u timu i izrazitu komunikaciju i sigurnu zabavu.</div>
          <div class="mx-5">
            <v-dialog scrollable>
              <template v-slot:activator="{ on }">
                <v-btn block color="primary" dark v-on="on">Virtualni dan MI</v-btn>
              </template>
              <v-card height="80vh">
                <iframe
                  height="100%"
                  src="https://www.youtube.com/embed/20t4XDAyWso"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card>
            </v-dialog>
          </div>
          <div class="mx-5 mt-3">
            <v-dialog scrollable>
              <template v-slot:activator="{ on }">
                <v-btn block color="primary" dark v-on="on">SPARK Hackathon</v-btn>
              </template>
              <v-card height="80vh">
                <iframe
                  height="100%"
                  src="https://www.youtube.com/embed/uuTPr22kWH4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link_yt: "https://www.youtube.com/channel/UCxaAFKZCOMqXRUtBsfbgaCQ",
      link_fb: "https://www.facebook.com/switchmostar/",
      link_insta: "https://www.instagram.com/udrugaswitch/?hl=hr",
      item: {
        color: "red"
      }
    };
  }
};
</script>

<style>
.switch__card {
  background: white;
  box-shadow: 2px 8px 15px 0.2px #888888;
}

.switch-info-icons {
  margin-top: 5em;
}

.card-switch-text {
  color: #1f4386;
  font-size: 1em;
}

.fa-youtube,
.fa-facebook,
.fa-instagram {
  font-size: 2em;
}

.switch-info-icons {
  margin-bottom: 5em;
}

@media only screen and (min-width: 960px) {
  .card-switch-text {
    font-size: 1em;
  }

  .switch__card {
    border-radius: 15px 50px 30px;
    padding: 2em;
  }
}
</style>