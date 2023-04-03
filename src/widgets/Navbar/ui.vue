<script lang="ts">
import Vue from 'vue'
import { FArticlesSearch, FCreateCategory } from '@/features'
import { SButton, SSeparator } from '@/shared/index'

export default Vue.extend({
    name: 'WNavbar',
    components: { SButton, FArticlesSearch, FCreateCategory, SSeparator },
    methods: {
        reset (): void {
            this.$store.dispatch('getArticles')
            this.$store.dispatch('removeCategories')
            this.$store.dispatch('setActiveCategory', null)
            this.$store.dispatch('setActiveCategoryArticles', null)
        }
    }
})
</script>

<template>
    <div class="WNavbar">
        <f-articles-search class="grid-1" />
        <s-separator class="separator" />
        <f-create-category class="grid-2" />
        <s-separator class="separator" />
        <div class="grid-3">
            <s-button @click="reset">Сброс</s-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.WNavbar {
    height: 80px;
    padding: 0 20px;
    display: grid;
    gap: 16px;
    align-items: center;
    grid-template-columns: 1fr auto auto auto auto;
    @media (max-width: 764px) {
        grid-template-columns: repeat(5, 1fr);
        grid-template-areas:
        "a a a a a"
        "b b b d d";
        justify-content: space-between;
        height: 120px;
        .separator {
            display: none;
        }
        .grid-1 {
            grid-area: a;
        }
        .grid-2 {
            grid-area: b;
            display: flex;
        }
        .grid-3 {
            grid-area: d;
            display: flex;
        }
    }
}
</style>
