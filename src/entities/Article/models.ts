import { Commit } from 'vuex'
import dataArticles from '../../../data/data'

export type TArticle = {
    id: number,
    title: string,
    image: string,
    description: string,
    likes: number
}

type ArticleState = {
    articles: TArticle[],
    search: string,
    activeCategoryArticles: number[] | null
}

const state: ArticleState = {
    articles: [],
    search: '',
    activeCategoryArticles: []
}

const getters = {
    getArticles: (state: ArticleState): TArticle[] => {
        return state.articles.filter(item => item.title.indexOf(state.search) !== -1 && (state.activeCategoryArticles?.includes(item.id) || state.activeCategoryArticles === null || state.activeCategoryArticles === []))
    },
    getAllArticlesCount: (state: ArticleState): number => {
        return state.articles.length
    },
    getAllArticles: (state: ArticleState): TArticle[] => {
        return state.articles
    }
}

const mutations = {
    getArticles (state: ArticleState, articles: TArticle[]): void {
        state.articles = articles
    },
    addLike (state: ArticleState, article: TArticle): void {
        const index = state.articles.findIndex(item => item.id === article.id)
        state.articles[index].likes += 1
    },
    searchItems (state: ArticleState, searchText: string): void {
        state.search = searchText
    },
    setActiveCategoryArticles (state: ArticleState, value: number[] | null): void {
        state.activeCategoryArticles = value
    },
    removeActiveCategoryArticle (state: ArticleState, id: number) {
        state.activeCategoryArticles = state.activeCategoryArticles?.filter(item => item !== id) ?? null
    }
}

const actions = {
    async getArticles ({ commit }: { commit: Commit }) {
        await new Promise(() => {
            setTimeout(() => {
                const data = dataArticles as TArticle[]
                commit('getArticles', data)
            }, 1000)
        })
    },
    addLike ({ commit }: { commit: Commit }, article: TArticle) {
        commit('addLike', article)
    },
    searchItems ({ commit }: { commit: Commit }, searchText: string) {
        commit('searchItems', searchText)
    },
    setActiveCategoryArticles ({ commit }: { commit: Commit }, value: number[] | null) {
        commit('setActiveCategoryArticles', value)
    }
}

const Article = {
    namespace: 'Article',
    state,
    getters,
    mutations,
    actions
}

export default Article
