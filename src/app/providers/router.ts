import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
