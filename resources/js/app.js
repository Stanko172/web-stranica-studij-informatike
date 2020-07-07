import Vue from 'vue';
import router from './router';
import App from './App.vue'
import Vuetify from '../plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

 
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(Loading);

new Vue({
    vuetify: Vuetify,
    router,
    render: h => h(App),
}).$mount('#app');
