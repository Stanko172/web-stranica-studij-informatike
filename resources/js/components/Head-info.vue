<template>
  <div class="head-section">
    <!--Sekcija o pročelniku-->

    <hr class="style-hr"/>

    <v-layout row wrap>
      <v-flex xs12 md6 class="image-container">
        <v-avatar size="200">
          <img
            src="https://nastavnici.fpmoz.sum.ba/uploads/emil.jpg"
            alt="Emil Brajković"
          >
        </v-avatar>
      </v-flex>
      <v-flex xs12 md6 class="info-container">
        <h2 class="primary--text">Pročelnik studija</h2>

        <a href="https://nastavnici.fpmoz.sum.ba/index.php/profile/index/16" title="Pogledaj profil">Emil Brajković</a>
        <p>Viši asistent</p>

        <div class="person-info">
          <p class="primary--text"><i class="fas fa-phone"></i>Tel. 063 18 10 14; 355-456</p>
          <p class="primary--text"><i class="fas fa-briefcase"></i>Ured 110</p>
          <p class="primary--text"><i class="fas fa-envelope"></i> emil.brajkovic@fpmoz.sum.ba</p>
        </div>
      </v-flex>
    </v-layout>

    <hr class="style-hr"/>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.head-section{
    margin-top: 2em;
}

.image-container, .info-container{
  display: flex;           
  flex-direction: column;  
  justify-content: center; 
  align-items: center;     
  height: 300px;
}

.info-container h2{
  color:#1f4386;
}

.info-container a {
  font-size: 1.5em;
  position: relative;
  margin-top: 1em;
  text-decoration: none;
}

.info-container a:hover {
  color: #1f4386;
}

.info-container a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #1f4386;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.info-container a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.info-container p{
  font-size: 1.1em;
}

.person-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.person-info i{
  margin-right: 0.7em;
  font-size: 1.2em;
}

/*<hr /> styles */

hr.style-hr {
    height: 12px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
}

</style>