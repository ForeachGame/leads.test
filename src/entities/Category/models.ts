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
    },
    getArticlesCount: (state: CategoryState) => (id: number) => {
        const index = state.categories.findIndex(category => category.id === id)
        return state.categories[index]?.articlesCount ?? 0
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
        state.categories[index].articles = state.categories[index].articles.filter((article) => article.id !== id)
    },
    setArticleCount (state: CategoryState, { id, count }:{ id: number, count: number }) {
        const index = state.categories.findIndex(category => category.id === id)
        state.categories[index].articlesCount = count
    },
    resetCategoryArticlesCount (state: CategoryState) {
        const findChildCategory = (category: TCategory): number[] => {
            const categories = state.categories.filter(item => item.parent === category.id)
            let count: number[] = []
            if (categories.length > 0) {
                categories.forEach(item => {
                    count = findChildCategory(item)
                    item.articles.forEach(article => {
                        count.push(article.id)
                    })
                })
            }
            return count
        }
        state.categories.forEach(category => {
            const count: number[] = findChildCategory(category)
            const index = state.categories.findIndex(item => item.id === category.id)
            category.articles.forEach(article => {
                count.push(article.id)
            })
            state.categories[index].articlesCount = [...new Set(count)].length
        })
    }
}

const actions = {
    createCategory ({ commit }: { commit: Commit }, category: TCategory) {
        commit('createCategory', category)
        commit('resetCategoryArticlesCount')
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
