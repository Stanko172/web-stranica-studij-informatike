import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.use(VueRouter);

const first = {template: '<div>first route</div>'}
const second = {template: '<div>second route</div>'}
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {path: '/first_route', component: first},
        {path: '/second_route', component: second}
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');