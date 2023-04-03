<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'

export default Vue.extend({
    name: 'ArticleRemoveModal',
    components: { SButton }
})
</script>

<template>
    <div class="ArticleRemoveModal">
        <div class="articles-modal">
            <div class="close-modal">
                <s-button :border="false" @click="$emit('closeModal')">x</s-button>
            </div>
            <div class="title">
                Вы действительно хотите удалить статью из категории?
            </div>
            <div class="buttons">
                <s-button @click="$emit('remove')">Удалить</s-button>
                <s-button @click="$emit('closeModal')">Отмена</s-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ArticleRemoveModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 100;
    .articles-modal {
        position: relative;
        top: 64px;
        left: 0;
        right: 0;
        margin: auto;
        min-width: 320px;
        max-width: 320px;
        background: #fff;
        border: 2px solid #333333;
        padding: 16px;
        .close-modal {
            position: absolute;
            top: 0;
            right: 8px;
        }
        .title {
            font-size: 18px;
            text-align: center;
        }
        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
        }
    }
}
</style>
