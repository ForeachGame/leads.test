<script lang="ts">
import Vue from 'vue'
import { ECategory } from '@/entities'

export default Vue.extend({
    name: 'WCategories',
    components: { ECategory },
    computed: {
        categories () {
            return this.$store.getters.getCategories
        }
    }
})
</script>

<template>
    <div class="WCategories">
        <e-category
            v-for="category in categories"
            :key="category.id"
            :id="category.id"
            :title="category.title"
        />
        <div>Дочерние категории</div>

    </div>
</template>

<style lang="scss" scoped>

</style>
