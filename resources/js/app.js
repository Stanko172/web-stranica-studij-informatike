import Vue from 'vue';
import router from './router';
import App from './App.vue'
import Vuetify from '../plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

new Vue({
    vuetify: Vuetify,
    router,
    render: h => h(App),
}).$mount('#app');
