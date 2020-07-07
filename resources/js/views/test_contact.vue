<template>
    <div>
        <h1>Test contact form</h1>
        <v-btn class="primary" @click.prevent="sendData">Send data</v-btn>

        <hr />

        <v-btn @click="showAlert">Hello world</v-btn>

        <ring-loader></ring-loader>
    </div>
</template>

<script>
import axios from 'axios';
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default{
    components: {
    RingLoader
  },
    data(){
        return{
            name: 'example_name',
            email: 'example@email.com',
            message: 'Hello World!'
        }
    },
    methods:{
            sendData(){
                const formData = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                axios.post('http://localhost:8000/api/contact', formData)
                .then(data =>{
                    console.log(data)
                })
            },
            showAlert() {
                // Use sweetalert2
                this.$swal({
                    icon: 'success',
                    title: 'Uspješno poslan upit!',
                    text: 'Odgovor na upit će uskoro biti poslan na vašu e-mail adresu.'
                })
                }
        }
}
</script>