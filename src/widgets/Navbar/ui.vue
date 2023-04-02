<script lang="ts">
import Vue from 'vue'
import { FArticlesSearch } from '@/features'
import { SButton, SInput } from '@/shared/index'

export default Vue.extend({
    name: 'WNavbar',
    components: { SButton, SInput, FArticlesSearch },
    methods: {
        onClick (): void {
            console.log(123)
        },
        onInput (): void {
            console.log(123)
        }
    }
})
</script>

<template>
    <div class="WNavbar">
        <f-articles-search />
        <s-button @click="onClick">Кнопка</s-button>
        <s-input @input="onInput" />
        <div>Добавить категорию</div>
        <div>Сброс до начальных настроек</div>
    </div>
</template>

<style scoped>

</style>
