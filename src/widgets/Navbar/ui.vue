<script lang="ts">
import Vue from 'vue'
import { FArticlesSearch, FCreateCategory } from '@/features'
import { SButton } from '@/shared/index'

export default Vue.extend({
    name: 'WNavbar',
    components: { SButton, FArticlesSearch, FCreateCategory },
    methods: {
        reset (): void {
            this.$store.dispatch('getArticles')
            this.$store.dispatch('removeCategories')
        }
    }
})
</script>

<template>
    <div class="WNavbar">
        <f-articles-search />
        <f-create-category />
        <div>
            <s-button @click="reset">Сброс</s-button>
        </div>
    </div>
</template>

<style scoped>

</style>
