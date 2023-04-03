import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Category from '@/entities/Category/models'
import Article from '@/entities/Article/models'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Category,
        Article
    },
    plugins: [createPersistedState()]
})

export default store
