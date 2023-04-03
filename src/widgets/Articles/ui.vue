<script lang="ts">
import Vue from 'vue'
import { EArticle } from '@/entities'
import { SLoader } from '@/shared'
import { TArticle } from '@/entities/Article/models'

export default Vue.extend({
    name: 'WArticles',
    components: { EArticle, SLoader },
    props: {
        limit: {
            type: Number,
            default: 8
        }
    },
    computed: {
        articles (): TArticle {
            const start = ((Number(this.$route.query.page || '1')) - 1) * this.limit
            const end = start + this.limit
            return this.$store.getters.getArticles.slice(start, end)
        },
        allArticles (): number {
            return this.$store.getters.getAllArticlesCount
        }
    }
})
</script>

<template>
    <div class="WArticles">
        <div class="articles-list">
            <e-article
                v-for="article in articles"
                :key="article.id"
                class="articles-list__item"
                :id="article.id"
                :title="article.title"
                :image="article.image"
                :description="article.description"
                :likes="article.likes"
            />
        </div>
        <s-loader v-if="allArticles < 1"/>
    </div>
</template>

<style lang="scss" scoped>
.WArticles {
    .articles-list {
        display: grid;
        gap: 16px;
        grid-template-columns: 320px 320px 320px 320px;
        @media (max-width: 1700px) {
            grid-template-columns: 320px 320px 320px;
        }
        @media (max-width: 1360px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
            grid-template-columns: auto;
        }
    }
}
</style>
