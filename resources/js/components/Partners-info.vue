<template>
<div class="partners-container">

  <!--Cards section-->

  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src="/onr.jpg"
    >
    </v-img>

    <v-card-subtitle class="pb-0">ITS</v-card-subtitle>

    <v-card-text class="text--primary">

      <div>Izgradnja ITS-a</div>
      <div>
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" block>Pogledaj više</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Izgradnja ITS-a za učenje i poučavanje za potrebe Američke mornarice</span>
            </v-card-title>
            <v-card-text>Djelatnici studija informatike fakulteta prirodoslovno-matematičkih i odgojnih znanosti Sveučilišta u Mostaru u suradnji s profesorima iz Splita prof.dr.sc. Slavomirom Stankovom, doc. dr.sc. Brankom Žitkom, doc. dr.sc. Ani Grubišić i ostalim suradnicima sudjeluju u izgradnji inteligentanog sustava za e-učenje (Adaptive Courseware based on Natural Language Processing - AC & NL Tutor), koji financira znanstveni ured Američke mornarice "Office of Naval Rersearch" - grant N00014-15-1-2789. Ishod projekta uključuje razvoj gotovo potpuno automatiziranog inteligentnog tutorskog sustava za učenje i poučavanje u proizvoljnom deklarativnom područnom znanju uz komunikaciju na prirodnom jeziku. Automatizacija će se odraziti u generiranju i prilagodbi znanja o učeniku, kao i znanja o metodama poučavanja. Oblikovanje područnog znanja u modulu stručnjaka će također biti automatizirano (računalni stručnjak koristi ekstrakciju računalog znanja), umjesto ručne (živi stručnjaci oblikuju područno znanje). Štoviše, stvaranje, odabir, sekvenciranje i prezentacija elemenata računalom oblikovanih nastavnih sadržaja će biti u potpunosti automatiziran. Obrada prirodnog jezika će se primjenjivati tijekom dvosmjerne komunikacije u svim fazama učenja, poučavanja i testiranja znanja. Oblikovanje nastave u ovom sustavu će ponuditi nekoliko scenarija učenja, podučavanja i testiranja učenikova znanja. Projekt traje od 1. rujna 2015 do 31 kolovoza 2018.
              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Zatvori</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-text>
  </v-card>
    </v-flex>

    <!--Drugi card-->

    <v-flex xs12 md4>
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src="oracle.png"
    >
    </v-img>

    <v-card-subtitle class="pb-0">Oracle</v-card-subtitle>

    <v-card-text class="text--primary">

      <div>Oracle akademija</div>
      <div>
        <v-dialog v-model="dialog2" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" block>Pogledaj više</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Oracle akademija</span>
            </v-card-title>
            <v-card-text>ORACLE je vodeća tvrtka koja pruža razne usluge od baza podataka i informacijskih sustava, do Java programskih rješenja. Ova tvrtka također ostvaruje i suradnju s edukacijskim ustanovama u svijetu, pružajući pri tome vlastite resurse i usluge, a sve u cilju obrazovanja mladih stručnjaka iz područja ICT-a. Akademske 2015/2016 godine Fakultet prirodoslovno matematičkih i odgojnih znanosti ostvario je suradnju s ovom vodećom tvrtkom te postao institucionalni član ove akademije. Fakultet prirodoslovno matematičkih i odgojnih znanosti kao član ovog programa u ponudi pruža razne resurse u pogledu programske podrške (koja je besplatna za sve naše članove akademije), te naravno tečajeva koji se izvode u sklopu raznih kolegija. Svi studenti na studiju "Informatike" mogu besplatno slušati program "Oracle Database Design and Programming with SQL" unutar predmeta Baze podataka, te "Java fundamentals" na diplomskom studiju iz kolegija "Programiranje u Javi".
              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog2 = false">Zatvori</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-text>
  </v-card>
    </v-flex>

    <!--Treci card-->

  <v-flex xs12 md4>
      <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      src="/nvidia_gpu.png"
    >
    </v-img>

    <v-card-subtitle class="pb-0">Nvidia</v-card-subtitle>

    <v-card-text class="text--primary">

      <div>Nvidia Education Center</div>
      <div>
        <v-dialog v-model="dialog3" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" block>Pogledaj više</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Nvidia Education Center</span>
            </v-card-title>
            <v-card-text>Nvidia Education Center je centar za obrazovanje zamišljen kao potpora u edukaciji studenata, profesora i drugih sudionika u nastavnom procesu kroz korištenje modernih tehnologija i trendova u razvoju više-jezgrenih grafičkih i općenamjenskih procesora te programiranje istih kroz kolegij ”Paralelno programiranje” koji je uveden akademske 2014./15. godine na studiju Informatike na Fakultetu prirodoslovno-matematičkih i odgojnih znanosti. S obzirom na veliko priznanje Fakultetu za dosadašnji rad u promoviranju CUDA tehnologije, od Nvidia korporacije Fakultet je dobio donaciju računalne opreme u iznosu od $4000 - grafički akcelerator naziva Tesla k40 – koji je namijenjen za najzahtjevniju obradu podataka i numeričke proračune te dvije grafičke kartice naziva Geforce GTX 980 koje će služiti za obradu slike, videa i za manje zahtjevnu obradu obradu podataka i numeričkih proračuna. Osim donacije u vidu opreme Fakultet je dobio pristup Cloud Training platformi s nastavnim sadržajima, pristup webinarima koje vode eksperti iz različitih područja, dodatne nastavne materijale, kao i pristup tehničkoj službi.
              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog3 = false">Zatvori</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-text>
  </v-card>
    </v-flex>

    
  </v-layout>


  </div>

</template>


<script>
 export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false
      }
    },
  }
</script>

<style scoped>
    .partners-container{
        margin: 1.5em 0;
    }
</style>

