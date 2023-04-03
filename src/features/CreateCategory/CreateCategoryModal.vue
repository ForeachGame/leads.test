<script lang="ts">
import Vue from 'vue'
import { SInput, SButton } from '@/shared'
export default Vue.extend({
    name: 'CreateCategoryModal',
    components: { SInput, SButton }
})
</script>

<template>
    <div class="CreateCategoryModal" @click.self="$emit('closeModal')">
        <form class="create-category__form">
            <s-input
                placeholder="Заголовок категории"
            />
            <s-button>Добавить категорию</s-button>
        </form>
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
    }
}
</style>
