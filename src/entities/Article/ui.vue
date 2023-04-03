<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'
import ArticleRemoveModal from '@/entities/Article/ArticleRemoveModal.vue'

export default Vue.extend({
    name: 'EArticle',
    components: { ArticleRemoveModal, SButton },
    data: () => ({
        showModal: false
    }),
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            required: true
        }
    },
    computed: {
        activeCategory (): number | null {
            return this.$store.getters.getActiveCategory
        }
    },
    methods: {
        addLike () {
            this.$store.dispatch('addLike', this.$props)
        },
        categoryRemove () {
            this.toggleModal()
            this.$store.dispatch('removeCategoryArticle', this.id)
            this.$store.commit('resetCategoryArticlesCount')
        },
        toggleModal () {
            this.showModal = !this.showModal
        }
    }
})
</script>

<template>
    <div class="EArticle">
        <picture class="image">
            <img loading="lazy" :src="image" alt="Заголовок" />
        </picture>
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <div class="buttons">
            <SButton @click="addLike">Like ({{ likes }})</SButton>
            <SButton @click="toggleModal" :disabled="!(activeCategory > 0)">Remove</SButton>
        </div>
        <transition name="bounce">
            <article-remove-modal
                v-if="showModal"
                @remove="categoryRemove"
                @closeModal="toggleModal"
            />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.EArticle {
    border: 2px solid #333;
    padding: 16px;
    .title {
        font-size: 18px;
        font-weight: 700;
        height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .image {
        display: flex;
        img {
            display: block;
            aspect-ratio: 5 / 3;
            width: 100%;
            object-fit: cover;
        }
    }
    .description {
        font-size: 14px;
        font-weight: 400;
    }
    .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
    }
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
