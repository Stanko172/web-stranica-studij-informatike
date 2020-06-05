import Vue from 'vue';
import router from './router';
import App from './App.vue'
import Vuetify from '../plugins/vuetify'

new Vue({
    vuetify: Vuetify,
    router,
    render: h => h(App),
}).$mount('#app');