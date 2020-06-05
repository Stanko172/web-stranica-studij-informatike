import Vue from 'vue'
import VueRouter from 'vue-router'
import Raspored from '../views/Raspored.vue'
import Nastavnici from '../views/Nastavnici.vue'
import Nastavni_plan from '../views/Nastavni_plan.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Raspored',
        component: Raspored,
    },
    {
        path: '/obavijesti',
        name: 'Nastavnici',
        component: Nastavnici,
    },
    {
        path: '/nastavni_plan',
        name: 'Nastavni_plan',
        component: Nastavni_plan,
    }
]

const router = new VueRouter({
    routes
})

export default router