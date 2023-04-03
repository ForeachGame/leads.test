<script lang="ts">
import Vue from 'vue'
import { SButton } from '@/shared'

export default Vue.extend({
    name: 'CategoryRemoveModal',
    components: { SButton }
})
</script>

<template>
    <div class="CategoryRemoveModal">
        <div class="categories-modal">
            <div class="close-modal">
                <s-button :border="false" @click="$emit('closeModal')">x</s-button>
            </div>
            <div class="title">
                Вы действительно хотите удалить категорию?
            </div>
            <div class="buttons">
                <s-button @click="$emit('remove')">Удалить</s-button>
                <s-button @click="$emit('closeModal')">Отмена</s-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.CategoryRemoveModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: 100;
    .categories-modal {
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
