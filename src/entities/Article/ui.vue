<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'EArticle'
})
</script>

<template>
    <div class="EArticle">
        <div class="image">
            <img src="/assets/images/default-image.jpg" alt="Заголовок" />
        </div>
        <div class="title">Заголовок</div>
        <div class="description">Описание</div>
        <div class="buttons">
            <div class="like">Лайк</div>
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
        max-width: 280px;
        display: flex;
        img {
            display: block;
            max-width: 100%;
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
