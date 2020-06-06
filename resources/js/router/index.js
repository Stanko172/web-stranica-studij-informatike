import Vue from 'vue'
import VueRouter from 'vue-router'
import Raspored from '../views/Raspored.vue'
import Nastavni_plan from '../views/Nastavni_plan.vue'

import Timeline from '../views/Timeline.vue';
import Notifications from '../views/Notifications.vue';
// import Contact from '../views/Contact.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Raspored',
        component: Raspored,
    },
    {
        path: '/nastavni_plan',
        name: 'Nastavni_plan',
        component: Nastavni_plan,
    },
    {
        path: '/vremenska-crta',
        name: 'Vremenska crta',
        component: Timeline,
    },
    {
        path: '/obavijesti',
        name: 'Obavijesti',
        component: Notifications,
    },
]

const router = new VueRouter({
    routes
})

export default router