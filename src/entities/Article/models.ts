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
    articles: TArticle[]
}

const state: ArticleState = {
    articles: []
}

const getters = {
    getArticles: (state: ArticleState): TArticle[] => {
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
