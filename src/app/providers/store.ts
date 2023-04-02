import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Category from '@/entities/Category/models'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Category
    },
    plugins: [createPersistedState()]
})

export default store
