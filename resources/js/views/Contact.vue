<template>
  <v-app>
    <v-container class="container-margin">
      <v-stepper v-model="e6" vertical>
        <v-stepper-step complete step="1" complete-icon="mdi-account">
          Unesite svoje podatke
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="username"
                  label="Ime i prezime"
                  append-icon="mdi-account"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="home_address"
                  label="Mjesto prebivališta"
                  append-icon="mdi-home"
                  outlined
                  required
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
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="phone_number"
                  label="Broj telefona"
                  append-icon="mdi-phone"
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>

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
              ></v-textarea>
            </v-col>
          </v-row>

          <v-btn class="float-right" color="primary" @click="sendMessage()" rounded>
            <span class="button-text white--text">Pošalji</span>
            <v-icon right class="white--text">mdi-upload</v-icon>
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
  </v-app>
</template>


<script>
export default {
	name: 'Contact',

	data: () => ({
		e6: 1,
		username: '',
		home_address: '',
		email: '',
		message: '',
		phone_number: '',
	}),

	methods: {
		sendMessage() {
			console.log(this.home_address);
			console.log(this.email);
			console.log(this.message);
			console.log(this.phone_number);
		},
	},
};
</script>