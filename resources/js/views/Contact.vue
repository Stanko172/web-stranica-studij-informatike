<template>
  <v-app>
    <v-container class="container-margin">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step complete step="1" complete-icon="mdi-account">
          Unesite svoje podatke
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-form v-model="formValid">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="username"
                  label="Ime i prezime"
                  append-icon="mdi-account"
                  outlined
                  required
                  :rules="nameRule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="home_address"
                  label="Mjesto prebivališta"
                  append-icon="mdi-home"
                  outlined
                  required
                  :rules="addressRule"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  append-icon="mdi-email"
                  outlined
                  required
                  :rules="emailRule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="phone_number"
                  label="Broj telefona"
                  append-icon="mdi-phone"
                  outlined
                  required
                  :rules="phoneRule"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="8" mx-auto>
                <v-textarea
                  label="Unesite svoju poruku"
                  v-model="message"
                  auto-grow
                  outlined
                  rows="3"
                  row-height="25"
                  append-icon="mdi-message-text"
                  :rules="messageRule"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>

          <v-btn class="float-right" color="primary" :disabled="!formValid" @click="sendMessage()" rounded>
            <span class="button-text white--text">Pošalji</span>
            <v-icon right class="white--text">mdi-upload</v-icon>
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </v-app>
</template>


<script>
import axios from 'axios'
export default {
	name: 'Contact',
	data: () => ({
    e6: 1,
    formValid: false,
		username: '',
		home_address: '',
		email: '',
		message: '',
    phone_number: '',
    loader: '',
    nameRule: [
      value => !!value || 'Ime i prezime je obvezno polje!',
    ],
    addressRule: [
      value => !!value || 'Mjesto prebivališta je obvezno polje!',
    ],
    emailRule: [
      value => !!value || 'Email je obvezno polje!',
      value => /.+@.+\..+/.test(value) || 'Neispravan e-mail format',
    ],
    phoneRule: [
      value => !!value || 'Broj telefona je obvezno polje!',
    ],
    messageRule: [
      value => !!value || 'Poruka je obvezno polje!',
    ],
  }),
	methods: {
		sendMessage() {
      
      const MessageData = {
        name: this.username,
        email: this.email,
        message: this.message,
        home_address: this.home_address,
        phone_number: this.phone_number
      }

      //Aktiviranje loader-a
      this.setLoader()

      axios.post(`https://${window.location.host}/api/contact`, MessageData)
      .then(response => {
        //console.log(response)
        if(response.statusText == "OK"){
          
          //Zaustavljanje loader-a
          this.loader.hide()

          //Aktivacija alert-a o uspješno poslanom upitu
          this.$swal({
            icon: 'success',
            title: 'Uspješno poslan upit!',
            timer: 4000,
            text: 'Odgovor na upit će uskoro biti poslan na vašu e-mail adresu.'
          })
        }
      })
      .catch(err => {
        this.loader.hide()

        this.$swal({
            icon: 'error',
            title: 'Dogodila se greška!',
            timer: 4000,
            text: 'Molimo pokušajte kasnije.'
          })
      })
    },
    setLoader(){
       this.loader = this.$loading.show({
        container: this.$refs.loadingContainer,
        canCancel: true,
        color: '#000000',
        loader: 'spinner',
        width: 64,
        height: 64,
        backgroundColor: '#ffffff',
        opacity: 0.5,
        zIndex: 999,
        });
    }
	},
};
</script>