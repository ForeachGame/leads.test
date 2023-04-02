import { Commit } from 'vuex'

export type Category = {
    id: number,
    parent?: number | null,
    title: string
}

type CategoryState = {
    categories: Category[]
}

const state: CategoryState = {
    categories: []
}

const getters = {
    getCategories: (state: CategoryState): Category[] => {
        return state.categories
    }
}

const mutations = {
    getCategories (state:CategoryState, categories: Category[]): void {
        state.categories = categories
    },
    createCategory (state: CategoryState, category: Category): void {
        state.categories.push(category)
    },
    removeCategory (state: CategoryState, category: Category): void {
        state.categories = state.categories.filter((item: Category) => item.id !== category.id)
    }
}

const actions = {
    createCategory ({ commit }: { commit: Commit }, category: Category) {
        commit('createCategory', category)
    },
    getCategories ({ commit }: { commit: Commit }, categories: Category[]) {
        commit('getCategories', categories)
    },
    removeCategory ({ commit }: { commit: Commit }, category: Category) {
        commit('removeCategory', category)
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
