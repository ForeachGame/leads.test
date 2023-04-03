<script lang="ts">
import Vue from 'vue'
import { SInput } from '@/shared'

export default Vue.extend({
    name: 'FArticlesSearch',
    components: { SInput },
    methods: {
        search (text: string): void {
            this.$store.dispatch('searchItems', text)
        }
    }
})
</script>

<template>
    <div class="FArticlesSearch">
        <s-input
            placeholder="Поиск..."
            @input="search($event)"
            :clear="true"
        />
    </div>
</template>

<style scoped>

</style>
