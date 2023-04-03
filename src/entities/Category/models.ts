import { Commit } from 'vuex'
import { TArticle } from '@/entities/Article/models'

export type TCategory = {
    id: number,
    parent?: number | null,
    title: string,
    articles: TArticle[],
    articlesCount?: number
}

type CategoryState = {
    categories: TCategory[],
    activeCategory: number | null
}

const state: CategoryState = {
    categories: [],
    activeCategory: null
}

const getters = {
    getCategories: (state: CategoryState): TCategory[] => {
        return state.categories
    },
    getActiveCategory: (state: CategoryState): number | null => {
        return state.activeCategory
    }
}

const mutations = {
    createCategory (state: CategoryState, category: TCategory): void {
        state.categories.push(category)
    },
    removeCategory (state: CategoryState, id: number): void {
        state.categories = state.categories.filter((item: TCategory) => item.id !== id)
    },
    removeCategories (state: CategoryState): void {
        state.categories = []
    },
    setActiveCategory (state: CategoryState, id: number | null): void {
        state.activeCategory = id
    },
    removeCategoryArticle (state: CategoryState, id: number): void {
        const index = state.categories.findIndex(category => category.id === state.activeCategory)
        console.log(index)
        state.categories[index].articles = state.categories[index].articles.filter((article) => article.id !== id)
    }
}

const actions = {
    createCategory ({ commit }: { commit: Commit }, category: TCategory) {
        commit('createCategory', category)
    },
    removeCategory ({ commit }: { commit: Commit }, id: number) {
        commit('removeCategory', id)
    },
    removeCategories ({ commit }: { commit: Commit }) {
        commit('removeCategories')
    },
    setActiveCategory ({ commit }: { commit: Commit }, id: number | null) {
        commit('setActiveCategory', id)
    },
    removeCategoryArticle ({ commit }: { commit: Commit }, id: number) {
        commit('removeCategoryArticle', id)
        commit('removeActiveCategoryArticle', id)
    }
}

const Category = {
    namespace: 'Category',
    state,
    getters,
    mutations,
    actions
}

export default Category
