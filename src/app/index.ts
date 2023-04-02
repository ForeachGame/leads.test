import Vue from 'vue'
import { store } from '@/app/providers'
import App from '@/app/App.vue'

export const app = new Vue({
    store,
    render: h => h(App)
})
