import Vue from 'vue'
import { router, store } from '@/app/providers'
import App from '@/app/App.vue'

export const app = new Vue({
    router,
    store,
    render: h => h(App)
})
