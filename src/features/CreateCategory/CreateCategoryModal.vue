<script lang="ts">
import Vue from 'vue'
import { SInput, SButton, SSelect } from '@/shared'
import { TArticle } from '@/entities/Article/models'
import { TCategory } from '@/entities/Category/models'

export default Vue.extend({
    name: 'CreateCategoryModal',
    components: { SInput, SButton, SSelect },
    data: () => ({
        title: '',
        parent: 0,
        articles: [] as TArticle[]
    }),
    computed: {
        articleList () {
            return this.$store.getters.getArticles
        },
        categoryList () {
            return this.$store.getters.getCategories
        }
    },
    methods: {
        selectArticle (article: TArticle) {
            this.articles.push(article)
        },
        selectParent (category: TCategory) {
            this.parent = category.id
        },
        deselectParent () {
            this.parent = 0
        },
        deselectArticle (article: TArticle) {
            this.articles = this.articles.filter((item: TArticle) => item.id !== article.id)
        },
        create () {
            const category: TCategory = {
                id: Date.now(),
                title: this.title,
                parent: this.parent !== 0 ? this.parent : null,
                articles: this.articles
            }
            this.$emit('create', category)
            this.$emit('closeModal')
        }
    }
})
</script>

<template>
    <div class="CreateCategoryModal" @click.self="$emit('closeModal')">
        <div class="create-category__form">
            <div class="close-modal">
                <s-button :border="false" @click="$emit('closeModal')">x</s-button>
            </div>
            <div class="form-group">
                <s-input
                    v-model="title"
                    label="Заголовок категории"
                    placeholder="Заголовок категории"
                />
            </div>
            <div class="form-group">
                <s-select
                    label="Родительская категория"
                    :options="categoryList"
                    value="id"
                    text="title"
                    @selected="selectParent($event)"
                    @deselected="deselectParent()"
                />
            </div>
            <div class="form-group">
                <s-select
                    label="Статьи"
                    :options="articleList"
                    :multiple="true"
                    value="id"
                    text="title"
                    @selected="selectArticle($event)"
                    @deselected="deselectArticle($event)"
                />
            </div>
            <div class="form-group">
                <s-button :disabled="title.length < 1" @click="create()">Добавить категорию</s-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.CreateCategoryModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    .create-category__form {
        position: relative;
        top: 64px;
        left: 0;
        right: 0;
        margin: auto;
        min-width: 320px;
        max-width: 640px;
        background: #fff;
        border: 2px solid #333333;
        padding: 16px;
        .close-modal {
            position: absolute;
            top: 0;
            right: 8px;
        }
    }
}
.form-group {
    margin-bottom: 16px;
}
</style>
