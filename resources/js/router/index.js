import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

import Timeline from '../views/Timeline.vue';
import Notifications from '../views/Notifications.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
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
    {
        path: '/kontakt',
        name: 'Kontakti',
        component: Contact,
    },
]

const router = new VueRouter({
    routes
})

export default router