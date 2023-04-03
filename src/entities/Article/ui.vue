<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'

export default Vue.extend({
    name: 'EArticle',
    components: { SButton },
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
    methods: {
        addLike () {
            this.$store.dispatch('addLike', this.$props)
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
            <div class="delete">Удалить из категории</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.EArticle {
    border: 2px solid #333;
    padding: 16px;
    .title {
        font-size: 18px;
        font-weight: 700;
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
        .like {}
        .delete {}
    }
}
</style>
