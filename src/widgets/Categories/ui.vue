<script lang="ts">
import Vue from 'vue'
import { ECategory } from '@/entities'
import { TCategory } from '@/entities/Category/models'

export default Vue.extend({
    name: 'WCategories',
    components: { ECategory },
    props: {
        parent: {
            type: Number,
            default: null
        }
    },
    computed: {
        categories () {
            return this.$store.getters.getCategories.filter((item: TCategory) => item.parent === this.parent)
        }
    }
})
</script>

<template>
    <div class="WCategories">
        <transition-group name="slide">
            <e-category
                v-for="category in categories"
                :key="category.id"
                :id="category.id"
                :title="category.title"
                :parent="category.parent"
                :articles="category.articles"
            />
        </transition-group>
    </div>
</template>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
    transition: all 0.5s;
}
.slide-enter, .slide-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
}
</style>
