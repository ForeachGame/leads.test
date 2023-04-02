<script lang="ts">
import Vue from 'vue'
import { EArticle, ECategory } from '@/entities/index'

export default Vue.extend({
    name: 'WCategories',
    components: { EArticle, ECategory }
})
</script>

<template>
    <div class="WCategories">
        <e-category />
        <div>Дочерние категории</div>
        <div class="articles">
            <e-article />
            <e-article />
            <e-article />
            <e-article />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.articles {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
</style>
