import { Commit } from 'vuex'

export type TCategory = {
    id: number,
    parent?: number | null,
    title: string
}

type CategoryState = {
    categories: TCategory[]
}

const state: CategoryState = {
    categories: []
}

const getters = {
    getCategories: (state: CategoryState): TCategory[] => {
        return state.categories
    }
}

const mutations = {
    getCategories (state:CategoryState, categories: TCategory[]): void {
        state.categories = categories
    },
    createCategory (state: CategoryState, category: TCategory): void {
        state.categories.push(category)
    },
    removeCategory (state: CategoryState, category: TCategory): void {
        state.categories = state.categories.filter((item: TCategory) => item.id !== category.id)
    },
    removeCategories (state: CategoryState): void {
        state.categories = []
    }
}

const actions = {
    createCategory ({ commit }: { commit: Commit }, category: TCategory) {
        commit('createCategory', category)
    },
    removeCategory ({ commit }: { commit: Commit }, category: TCategory) {
        commit('removeCategory', category)
    },
    removeCategories ({ commit }: { commit: Commit }) {
        commit('removeCategories')
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
