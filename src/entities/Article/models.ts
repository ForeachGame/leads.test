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
    search: string
}

const state: ArticleState = {
    articles: [],
    search: ''
}

const getters = {
    getArticles: (state: ArticleState): TArticle[] => {
        return state.articles.filter(item => item.title.indexOf(state.search) !== -1)
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
