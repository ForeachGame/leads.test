<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'
import { TCategory } from '@/entities/Category/models'
import { TArticle } from '@/entities/Article/models'
import CategoryRemoveModal from '@/entities/Category/CategoryRemoveModal.vue'

export default Vue.extend({
    name: 'ECategory',
    components: {
        CategoryRemoveModal,
        SButton
    },
    data: () => ({
        arrArticles: [] as number[],
        showChild: false,
        showModal: false
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
            return this.$store.getters.getArticlesCount(this.id)
        },
        activeCategory (): number {
            return this.$store.getters.getActiveCategory
        }
    },
    methods: {
        removeCategory () {
            this.toggleModal()
            if (this.activeCategory === this.$props.id) {
                this.$store.dispatch('setActiveCategory', null)
                this.$store.dispatch('setActiveCategoryArticles', null)
            }
            this.$store.dispatch('removeCategory', this.$props.id)
            this.$store.commit('resetCategoryArticlesCount')
        },
        setActiveCategory () {
            this.$store.dispatch('setActiveCategory', this.id)
            let arrArticlesIDs: number[] = []
            if (this.articles.length > 0) {
                arrArticlesIDs = (this.articles as TArticle[]).map((item: TArticle) => item.id)
            }
            this.$store.dispatch('setActiveCategoryArticles', arrArticlesIDs)
            if (Object.prototype.hasOwnProperty.call(this.$route.query, 'page')) {
                this.$router.push({ path: '/' })
            }
        },
        toggleShowChild () {
            this.showChild = !this.showChild
        },
        toggleModal () {
            this.showModal = !this.showModal
        }
    }
})
</script>

<template>
    <div class="ECategory">
        <div class="category">
            <div class="category__title" @click.self="activeCategory !== id && setActiveCategory()" :class="[activeCategory === id && 'active']">
                {{ title }} ({{ getClearArticlesCount }})
                <span class="category__title__child-button"
                      v-if="childrenCategories.length > 0"
                      :class="[showChild && 'show']"
                >
                    <s-button :border="false" :no-padding="true" @click="toggleShowChild">^</s-button>
                </span>
            </div>
            <div><s-button :border="false" :no-padding="true" @click="toggleModal">x</s-button></div>
        </div>
        <div class="child" v-if="childrenCategories.length > 0" v-show="showChild">
            <e-category
                v-for="child in childrenCategories"
                :key="child.id"
                :id="child.id"
                :parent="child.parent"
                :title="child.title"
                :articles="child.articles"
            />
        </div>
        <transition name="bounce">
            <category-remove-modal
                v-if="showModal"
                @remove="removeCategory"
                @closeModal="toggleModal"
            />
        </transition>
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
        &.active {
            font-weight: 700;
        }
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
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
