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
        arrArticles: [] as number[],
        showChild: false
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
        },
        getClearArticlesCount (): number {
            return [...new Set(this.arrArticles)].length
        }
    },
    methods: {
        removeCategory () {
            this.$emit('articlesCount', [])
            this.$store.dispatch('removeCategory', this.$props.id)
        },
        countArticles (arr: number[]) {
            arr.forEach((e: number) => {
                this.arrArticles.push(e)
            })
            this.$emit('articlesCount', this.arrArticles)
        },
        setActiveCategory () {
            this.$store.dispatch('setActiveCategory', this.id)
            let arrArticlesIDs: number[] = []
            if (this.articles.length > 0) {
                arrArticlesIDs = (this.articles as TArticle[]).map((item: TArticle) => item.id)
            }
            this.$store.dispatch('setActiveCategoryArticles', arrArticlesIDs)
        },
        toggleShowChild () {
            this.showChild = !this.showChild
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
            <div class="category__title" @click.self="setActiveCategory()">
                {{ title }} ({{ getClearArticlesCount }})
                <span class="category__title__child-button"
                      v-if="childrenCategories.length > 0"
                      :class="[showChild && 'show']"
                >
                    <s-button :border="false" :no-padding="true" @click="toggleShowChild">^</s-button>
                </span>
            </div>
            <div><s-button :border="false" :no-padding="true" @click="removeCategory">x</s-button></div>
        </div>
        <div class="child" v-if="childrenCategories.length > 0" v-show="showChild">
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
    .category__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        cursor: pointer;
        .category__title__child-button {
            position: absolute;
            transform: rotate(180deg);
            right: -10px;
            top: -1px;
            &.show {
                transform: rotate(0deg);
                top: 2px;
            }
        }
    }
}
.child {
    padding-left: 15px;
}
</style>
