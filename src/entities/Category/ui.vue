<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'
import { TCategory } from '@/entities/Category/models'
import { TArticle } from '@/entities/Article/models'

export default Vue.extend({
    name: 'ECategory',
    components: {
        SButton
    },
    data: () => ({
        arrArticles: [] as number[]
    }),
    props: {
        id: {
            type: Number,
            required: true,
            default: 0
        },
        parent: Number,
        title: String,
        articles: Array
    },
    computed: {
        childrenCategories ():TCategory {
            return this.$store.getters.getCategories.filter((item: TCategory) => item.parent === this.id)
        }
    },
    methods: {
        removeCategory () {
            this.$store.dispatch('removeCategory', this.$props.id)
        },
        countArticles (arr: number[]) {
            arr.forEach((e: number) => {
                this.arrArticles.push(e)
            })
        },
        getClearArticlesCount (): number {
            return [...new Set(this.arrArticles)].length
        }
    },
    mounted () {
        (this.articles as TArticle[]).forEach((e: TArticle) => {
            this.arrArticles.push(e.id)
        })
        if (this.parent) {
            this.$emit('articlesCount', this.arrArticles)
        }
    }
})
</script>

<template>
    <div class="ECategory">
        <div class="category">
            <div>{{ title }} ({{ getClearArticlesCount() }})</div>
            <div><s-button :border="false" :no-padding="true" @click="removeCategory">x</s-button></div>
        </div>
        <div class="child" v-if="childrenCategories.length > 0">
            <e-category
                v-for="child in childrenCategories"
                :key="child.id"
                :id="child.id"
                :parent="child.parent"
                :title="child.title"
                :articles="child.articles"
                @articlesCount="countArticles($event)"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.child {
    padding-left: 15px;
}
</style>
